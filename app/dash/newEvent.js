import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

const newEvent = () => {
  const [date, setDate] = useState(new Date());
  const onDateTimePickerChange = (event, selected) => {
    setDate(selected);
  };

  const [title, setTitle] = useState();
  const onTitleChange = (input) => {
    setTitle(input);
  };

  const [description, setDescription] = useState();
  const onDescriptionChange = (input) => {
    setDescription(input);
  };

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="datetime"
        onChange={onDateTimePickerChange}
      />
      <Text>selected: {date.toLocaleString()}</Text>
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
        onTitleChange={onDescriptionChange}
        value={description}
      />
      <Button
        title="Press me"
        color="#007aff"
        onPress={() => {
          console.log("Button pressed");
        }}
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

export default newEvent;
