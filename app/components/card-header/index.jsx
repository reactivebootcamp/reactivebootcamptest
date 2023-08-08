import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

const CardHeader = ({ headerTitle, headerIcon, headerIconColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <View style={styles.headerAction}>
          <Ionicons name={headerIcon} size={18} color={headerIconColor} />
        </View>
      </View>
    </View>
  );
};

export default CardHeader;
