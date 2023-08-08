import { Stack } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Card } from "./components";
import { CARD_HEIGHT } from "./components/card";
import { PRODUCTS } from "./constants/data";
import { CARD_HEADERS } from "./constants/data/card-header";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const { headerIcon, headerIconColor, headerTitle } = CARD_HEADERS.Home.Slider;

const snapToOffsets = [0, CARD_HEIGHT];

export default function Home() {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const style = useAnimatedStyle(() => ({
    ...styles.container,
    backgroundColor: interpolateColor(
      translateX.value,
      PRODUCTS.map((_, i) => width * i),
      PRODUCTS.map((product) => product.primaryColor)
    ),
  }));
  return (
    <Animated.View style={style}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast">
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={onScroll}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}>
            {PRODUCTS?.map((product, index) => (
              <Card
                {...product}
                key={product.id}
                headerTitle={headerTitle}
                headerIcon={headerIcon}
                headerIconColor={headerIconColor}
                x={translateX}
                index={index}
              />
            ))}
          </Animated.ScrollView>
        </View>
        {/* {PRODUCTS_VARIANTS.map((product) => (
          <Card {...product} key={product.id} />
        ))} */}
      </ScrollView>
    </Animated.View>
  );
}
