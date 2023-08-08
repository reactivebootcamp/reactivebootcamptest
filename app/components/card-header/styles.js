import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "medium",
  },
  headerAction: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    borderStartColor: "#000000",
  },
});
