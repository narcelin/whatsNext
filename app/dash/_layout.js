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
      }}
    >
      <Stack.Screen
        name="home"
        options={{
          title: "TEST SCREEN",
          headerRight: () => (
            <Text
              onPress={() => router.push("./newEvent")}
              style={{ color: "white" }}
            >
              Add New Event
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="eventScreen"
        options={{ title: "EVENT", presentation: "modal" }}
      />
      <Stack.Screen name="newEvent" options={{ title: "New Event" }} />
    </Stack>
  );
}
