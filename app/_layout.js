import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <>
      {/* <SafeAreaView style={{ flex: 1 }}> */}

      <StatusBar style="light" />
      <Slot />
      {/* </SafeAreaView> */}
    </>
  );
}
