import React from "react";
import { useState } from "react";
import { useRouter, Redirect } from "expo-router";

import { StyleSheet, View, Text, Alert, Button, TextInput } from "react-native";

export default login = () => {
  const router = useRouter();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Redirect href="/dash/main" />
      <View style={styles.main}>
        <Text style={styles.title}>Hello What's Next!</Text>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={"black"}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={setPassword}
          />
          <Button
            style={styles.button}
            title="Login"
            onPress={() => router.push("/dash/main")}
          />
          <Button
            style={styles.button}
            title="Forgot Password?"
            onPress={() => Alert.alert("PRESSED BUTTON")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2CB05",
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  inputsContainer: {},
  textInput: {
    fontSize: 30,
  },
  button: {
    paddingVertical: 10,
  },
});
