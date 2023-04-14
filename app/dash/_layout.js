import React from "react";
import { View, Text, Alert } from "react-native";
import { Tabs, useRouter, Stack } from "expo-router";

import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: "#FFE030",
        headerRight: () => (
          <Text
            onPress={() => Alert.alert("Look behing you")}
            style={{ color: "white" }}
          >
            Info
          </Text>
        ),
      }}
    >
      <Stack.Screen name="home" options={{ title: "TEST SCREEN" }} />
      <Stack.Screen
        name="eventScreen"
        options={{ title: "EVENT", presentation: "modal" }}
      />
    </Stack>
  );
}
