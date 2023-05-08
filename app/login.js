import React from "react";
import { useState } from "react";
import { useRouter, Redirect } from "expo-router";

import { useDispatch } from "react-redux";
import { saveUserData } from "../redux/features/userSlice";
import { useLoginUserMutation } from "../redux/features/apiSlice";

import * as Crypto from "expo-crypto";

import { StyleSheet, View, Text, Alert, Button, TextInput } from "react-native";

export default login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("1234567");

  const loginHandler = async () => {
    const loggedinUser = await loginUser({ username, password });
  };

  const [loginUser, { data, error, isLoading }] = useLoginUserMutation();

  if (isLoading) {
    console.log("LOADINGGGGG");
  } else if (data?.data) {
    console.log(data.data);
    dispatch(saveUserData(data.data));
    router.push("./dash/home");
  }

  return (
    <View style={styles.container}>
      {false ? (
        <Redirect href="/dash/home" />
      ) : (
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
              onPress={loginHandler}
            />
            <Button
              style={styles.button}
              title="Forgot Password"
              onPress={() => Alert.alert("Well you're fucked")}
            />
            <Button
              style={styles.button}
              title="Create New User"
              onPress={() => router.push("./newUser")}
            />
            <Button
              style={styles.button}
              title="TEST BUTTON"
              onPress={async () => {
                const digest = await Crypto.digestStringAsync(
                  Crypto.CryptoDigestAlgorithm.SHA256,
                  "GitHub stars are neat 🌟"
                );
                console.log("Digest: ", digest);
              }}
            />
          </View>
        </View>
      )}
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
