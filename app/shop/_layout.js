import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#544B81",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#F3F2F7",
        },
      }}>
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "basket" : "basket-outline"} size={22} color="#544B81" />
          ),
          tabBarLabel: "Products",
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "ios-list" : "ios-list-outline"} size={22} color="#544B81" />
          ),
          tabBarLabel: "Categories",
        }}
      />
    </Tabs>
  );
}
