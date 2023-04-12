import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import moment from "moment";

const mockEvents = [
  {
    title: "Meeting with John",
    dateTime: "2023-04-13T10:00:00.000Z",
    user: "Alice",
  },
  {
    title: "Lunch with Jane",
    dateTime: "2023-04-14T12:30:00.000Z",
    user: "Bob",
  },
  {
    title: "Conference call",
    dateTime: "2023-04-15T15:00:00.000Z",
    user: "Charlie",
  },
  {
    title: "Project review",
    dateTime: "2023-04-17T09:00:00.000Z",
    user: "Dave",
  },
];

export default function main() {
  const [startDate, setStartDate] = useState(moment());
  const endDate = moment().add(7, "days");

  console.log(startDate);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.format("ddd, MMM D")}</Text>
    </View>
  );

  const days = [];
  let day = startDate;
  while (day.isSameOrBefore(endDate)) {
    days.push(day);
    day = day.clone().add(1, "day");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        keyExtractor={(item) => item.format("YYYY-MM-DD")}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  date: {
    fontWeight: "bold",
  },
});
