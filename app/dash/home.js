import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { eventsData } from "../../redux/features/eventsSlice";

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
  const events2 = useSelector(eventsData);
  // console.log(useSelector(eventsData));

  const groupEventsByDate = (events) => {
    const eventGroups = {};
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
  const groupEventsByDate2 = (events2) => {
    //checks out
    const eventGroups = {};
    events2.allIds.forEach((id) => {
      const date = moment(events2.byId[id].dateTime).format("L");
      if (eventGroups[date]) {
        eventGroups[date].push(events2.byId[id]);
      } else {
        eventGroups[date] = [events2.byId[id]];
      }
    });
    return eventGroups;
  };

  const eventGroups = Object.entries(groupEventsByDate(events));
  const eventGroups2 = Object.entries(groupEventsByDate2(events2)); //checks out

  const renderEventGroup = ([date, events]) => {
    // console.log(date);
    // console.log(events);
    return (
      <View style={styles.dateContainer} key={date}>
        <Text style={styles.dateHeader}>{date}</Text>
        {events.map(renderEvent)}
      </View>
    );
  };

  const renderEvent = (event) => {
    // console.log(event);
    return (
      <Pressable
        style={styles.eventContainer}
        key={event.ID}
        onPress={() => {
          onEventPress(event.ID);
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

  const onEventPress = (eventID) => {
    router.push({
      pathname: "./eventScreen",
      params: { eventID },
    });
  };

  return (
    <View style={styles.container}>{eventGroups2.map(renderEventGroup)}</View>
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
