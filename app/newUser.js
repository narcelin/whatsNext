import React, { useEffect } from "react";
import { useState } from "react";
import { Platform } from "react-native";

import * as Crypto from "expo-crypto";

import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "./../redux/features/userSlice";
import { usePostUserMutation } from "./../redux/features/apiSlice";

import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";

import AppleLogin from "../components/signInOptions/AppleLogin";
import GithubLogin from "../components/signInOptions/GithubLogin";
import { useRouter } from "expo-router";

const newUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const newUserData = {
    username: username,
    thirdPartyCredentials: {
      apple_uid: null,
      github_uid: null,
    },
    nickname: nickname,
    password: password,
    accessToken: null,
    eventsIds: [],
  };

  const [postUser, { data, error, isLoading }] = usePostUserMutation();

  const isPasswordValid = () => password.length >= 8;

  const onPressCreateUser = async () => {
    if (true || (isPasswordValid() && password == confirmPassword)) {
      const loggedInUser = postUser(newUserData);
    } else {
      Alert.alert("Password");
      setPassword("");
      setConfirmPassword("");
    }
  };

  if (data?.data) {
    console.log("ATLAS ---- User Created ----");
    dispatch(saveUserData(data.data));
    router.push("/dash/home");
  }

  const doesUsernameExist = () => {
    // Check if username exists, style text box if true, avoid .length = 0
    username.length > 0 ? null : null;
    console.log("TEST");
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
        onChangeText={setNickname}
        value={nickname}
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
      {Platform.OS === "ios" ? <AppleLogin /> : <Text>NOT AN IOS DEVICE</Text>}
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
