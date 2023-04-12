import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: "#FFE030",
        headerRight: () => (
          <Text
            onPress={() => router.push("/modal")}
            style={{ color: "white" }}
          >
            HELP
          </Text>
        ),
      }}
    >
      <Stack.Screen name="main" options={{ title: "Welcome Home Babyyy" }} />
    </Stack>
  );
}
