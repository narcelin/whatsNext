import React from "react";
import { View, Text, StyleSheet } from "react-native";

import moment from "moment";

const events = [
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
  {
    title: "Team meeting",
    dateTime: "2023-04-17T11:00:00.000Z",
    user: "Eve",
  },
];

const groupEventsByDate = (events) => {
  const eventGroups = {};
  events.forEach((event) => {
    const date = new Date(event.dateTime).toLocaleDateString();
    if (eventGroups[date]) {
      eventGroups[date].push(event);
    } else {
      eventGroups[date] = [event];
    }
  });
  return eventGroups;
};

const renderEvent = (event) => {
  return (
    <View style={styles.eventContainer} key={event.title}>
      <Text style={[styles.eventText, styles.eventTitle]}>{event.title}</Text>
      <Text style={[styles.eventText, styles.eventUser]}>{event.user}</Text>
    </View>
  );
};

const renderEventGroup = ([date, events]) => {
  return (
    <View style={styles.dateContainer} key={date}>
      {console.log(date)}
      <Text style={styles.dateHeader}>{date}</Text>
      {events.map(renderEvent)}
    </View>
  );
};

const CalendarScreen = () => {
  const eventGroups = Object.entries(groupEventsByDate(events));
  return (
    <View style={styles.container}>{eventGroups.map(renderEventGroup)}</View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  dateContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dateHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventText: {
    marginLeft: 0,
  },
  eventTitle: {
    marginBottom: 5,
  },
  eventUser: {
    fontSize: 16,
  },
  eventContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
