import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Settings() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Settings",
          headerRight: null,
        }}
      />
      <Text>Settings</Text>
    </View>
  );
}
