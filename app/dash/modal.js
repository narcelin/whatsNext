import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import moment from "moment";

const events = [
  //REDUX NEEDED
  {
    EID: 1,
    title: "Meeting with John",
    dateTime: "2023-04-13T10:00:00.000Z",
    user: "Alice",
  },
  {
    EID: 2,
    title: "Lunch with Jane",
    dateTime: "2023-04-14T12:30:00.000Z",
    user: "Bob",
  },
  {
    EID: 3,
    title: "Conference call",
    dateTime: "2023-04-15T15:00:00.000Z",
    user: "Charlie",
  },
  {
    EID: 4,
    title: "Project review",
    dateTime: "2023-04-17T09:00:00.000Z",
    user: "Dave",
  },
  {
    EID: 5,
    title: "Team meeting",
    dateTime: "2023-04-17T11:00:00.000Z",
    user: "Eve",
  },
];

const CalendarScreen = () => {
  const router = useRouter();

  const groupEventsByDate = (events) => {
    const eventGroups = {};

    events.allIds.forEach((id) => {
      const date = moment(events.data.byId[id].dateTime).format("L");
    });

    events.forEach((event) => {
      const date = moment(event.dateTime).format("L");
      if (eventGroups[date]) {
        eventGroups[date].push(event);
      } else {
        eventGroups[date] = [event];
      }
    });
    return eventGroups;
  };

  const onEventPress = (event) => {
    //Eventuall will use redux instead of prop drilling
    console.log(`Pressed ${event}`);
    router.push({
      pathname: "./eventScreen",
      params: { event },
    });
  };

  const renderEvent = (event) => {
    return (
      <Pressable
        style={styles.eventContainer}
        key={event.title}
        onPress={() => {
          onEventPress(event);
        }}
      >
        <Text style={[styles.eventText, styles.eventTitle]}>
          {moment(event.dateTime).format("h:mm A")}
        </Text>
        <Text style={[styles.eventText, styles.eventTitle]}>{event.title}</Text>
        <Text style={[styles.eventText, styles.eventUser]}>{event.user}</Text>
      </Pressable>
    );
  };

  const renderEventGroup = ([date, events]) => {
    return (
      <View style={styles.dateContainer} key={date}>
        <Text style={styles.dateHeader}>{date}</Text>
        {events.map(renderEvent)}
      </View>
    );
  };

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
    marginVertical: 10,
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
    marginVertical: 5,
  },
});
