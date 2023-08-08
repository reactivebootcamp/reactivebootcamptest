import { Dimensions, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import CardHeader from "../card-header";
import { styles } from "./styles";

const { width } = Dimensions.get("window");

export const CARD_HEIGHT = width;

const Card = ({
  title,
  subtitle,
  image,
  primaryColor,
  secondaryColor,
  headerTitle,
  headerIcon,
  headerIconColor,
  x,
  index,
}) => {
  const style = useAnimatedStyle(() => {
    const inputRange = [width * (index - 1), width * index, width * (index + 1)];
    const translateX = interpolate(x.value, inputRange, [width / 2, 0, width / 2]);
    const scale = interpolate(x.value, inputRange, [0.5, 1, 0.5]);
    return {
      transform: [{ translateX }, { scale }],
    };
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <View style={[styles.card, { backgroundColor: primaryColor }]}>
        <View style={styles.cardContent}>
          <CardHeader
            headerTitle={headerTitle}
            headerIcon={headerIcon}
            headerIconColor={headerIconColor}
          />
          <Animated.Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Card;
