import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { eventsData } from "../../redux/features/eventsSlice";

import moment from "moment";

const CalendarScreen = () => {
  const router = useRouter();
  const events = useSelector(eventsData);
  // console.log(useSelector(eventsData));

  const groupEventsByDate = (events) => {
    //checks out
    const eventGroups = {};
    events.allIds.forEach((id) => {
      const date = moment(events.byId[id].dateTime).format("L");
      if (eventGroups[date]) {
        eventGroups[date].push(events.byId[id]);
      } else {
        eventGroups[date] = [events.byId[id]];
      }
    });
    return eventGroups;
  };

  const eventGroups = Object.entries(groupEventsByDate(events)); //checks out

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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {eventGroups.map(renderEventGroup)}
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    maxHeight: 750,
    paddingHorizontal: 20,
  },
  scrollView: {
    flexGrow: 1,
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
