import React from "react";
import { View, Text } from "react-native";
import { Tabs, useRouter } from "expo-router";

import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: "#FFE030",
        headerRight: () => (
          <Text
            onPress={() => router.push("dash/modal")}
            style={{ color: "white" }}
          >
            Modal
          </Text>
        ),
      }}
    >
      <Tabs.Screen name="modal" options={{ title: "TEST SCREEN" }} />
      <Tabs.Screen
        name="main"
        options={{
          title: "Welcome Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
