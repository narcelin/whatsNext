import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { createUser } from "./../redux/features/eventsSlice";

import { View, Text, StyleSheet, Button, TextInput } from "react-native";

// import * as Crypto from "expo-crypto";

const newUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alias, setAlias] = useState("");

  return (
    <View>
      <Text>Create User</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onTitleChange}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#8f8f8f"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onDescriptionChange}
        value={description}
      />
      <Button
        title="Press me"
        color="#007aff"
        onPress={onSubmit}
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
