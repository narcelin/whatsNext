import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter, Redirect } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { importedEvents } from "./../../redux/features/eventsSlice";
import { eventsData } from "../../redux/features/eventsSlice";
import { usersEventsIds } from "../../redux/features/userSlice";
import { userData } from "../../redux/features/userSlice";
import { useGetAllEventsQuery } from "../../redux/features/apiSlice";
import { useGetEventsMutation } from "../../redux/features/apiSlice";

import moment from "moment";

const CalendarScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const eventsIds = useSelector(usersEventsIds);
  console.log(eventsIds);

  const [getEvents, { data, error, isLoading }] = useGetEventsMutation();
  useEffect(() => {
    getEvents(eventsIds);
  }, []);

  if (data?.data) {
    console.log("HOME.JS --- Events from API Request: \n", data?.data);
    const eventObject = {};
    data?.data.forEach((event) => {
      const eventObject = { [event._id]: event };
      // console.log( "HOME.JS /n", eventObject);
    });
  }

  // console.log(useSelector(eventsData));

  const dataEVENTEXAMPLE = [
    {
      _id: "64407954e3deef7b1d1a137e",
      dateTime: "2023-04-13T10:00:00.000Z",
      description:
        "Test your strength against one of nature's most fearsome predators! Disclaimer: we are not responsible for any injuries sustained during this event.",
      id: 1,
      title: "Wrestle a Bear",
      uid: 1445,
      user: "StateFarm Jake",
    },
    {
      _id: "64407954e3deef7b1d1a137f",
      dateTime: "2023-05-01T08:00:00.000Z",
      description:
        "Join me for a once-in-a-lifetime adventure as we hike the Grand Canyon from rim to rim!",
      id: 2,
      title: "Hiking the Grand Canyon",
      uid: 2568,
      user: "Jenny Smith",
    },
    {
      _id: "64407954e3deef7b1d1a1380",
      dateTime: "2023-06-15T18:30:00.000Z",
      description:
        "Learn the basics of yoga and improve your flexibility, strength, and overall well-being!",
      id: 3,
      title: "Intro to Yoga",
      uid: 4823,
      user: "John Doe",
    },
  ];

  const groupEventsByDate2 = () => {};
  const eventsByDate = { "01": [], "02": [] };

  const events = useSelector(eventsData);

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
