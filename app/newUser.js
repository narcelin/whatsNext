import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { createUser } from "./../redux/features/eventsSlice";

import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";

// import * as Crypto from "expo-crypto";

const newUser = () => {
  const [alias, setAlias] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Create User</Text>
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
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        title="Press me"
        color="#007aff"
        onPress={() => Alert.alert("Pressed")}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
