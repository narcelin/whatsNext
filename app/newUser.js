import React from "react";
import { useState } from "react";

import * as Crypto from "expo-crypto";

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/features/userSlice";

import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";

import AppleLogin from "../components/signInOptions/AppleLogin";
import GithubLogin from "../components/signInOptions/GithubLogin";
import { useRouter } from "expo-router";

// import * as Crypto from "expo-crypto";

const newUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [uid, setUid] = useState(Crypto.randomUUID);
  const [alias, setAlias] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const newUserObject = {
    uid: uid,
    username: username,
    alias: alias,
    password: password,
    accessToken: "",
  };

  const actionPayload = newUserObject;

  const onPressCreateUser = () => {
    if (isPasswordValid() && password == confirmPassword) {
      dispatch(createUser(newUserObject));
      //This is where I send it to the database, also need to double check username
      router.push("/dash/home");
    } else {
      Alert.alert("Password");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const isPasswordValid = () => password.length >= 8;

  const doesUsernameExist = () => {
    // Check if username exists, style text box if true, avoid .length = 0
    username.length > 0 ? null : null;
    console.log(username);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.title}>Create User</Text>
      <TextInput
        style={styles.input}
        placeholder="Alias. What do your friends know you by?"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setAlias}
        value={alias}
      />
      <TextInput
        style={styles.input}
        placeholder="username to login with"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setUsername}
        onBlur={doesUsernameExist}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        title="Press me"
        color="#007aff"
        onPress={onPressCreateUser}
        style={styles.button}
      />
      <AppleLogin />
      <GithubLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { borderWidth: 5 },
  input: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
    margin: 8,
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default newUser;
