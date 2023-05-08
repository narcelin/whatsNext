import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter, Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { eventsData } from "../../redux/features/eventsSlice";

import moment from "moment";
import { userData } from "../../redux/features/userSlice";

const CalendarScreen = () => {
  const router = useRouter();
  console.log(useSelector(userData), "USERRRR DATAAAA");
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
  // console.log(eventGroups);

  const renderEvent = (event) => {
    // console.log(event);

    return (
      <Pressable
        style={styles.eventContainer}
        key={event.id}
        onPress={() => {
          onEventPress(event.id);
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
    // console.log(date);
    // console.log(events);
    return (
      <View style={styles.dateContainer} key={date}>
        <Text style={styles.dateHeader}>{date}</Text>
        {events.map(renderEvent)}
      </View>
    );
  };

  const onEventPress = (eventID) => {
    router.push({
      pathname: "./eventScreen",
      params: { eventID },
    });
  };

  return (
    <>
      {false ? (
        <Redirect href="./newEvent" />
      ) : (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {eventGroups.map(renderEventGroup)}
          </ScrollView>
        </View>
      )}
    </>
  );
}; //If added date does not already exist, the new added event from newEvent will not show on screen -----------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 800,
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
  bottomBar: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 5,
    height: 50,
  },
});

export default CalendarScreen;
