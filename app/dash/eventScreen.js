import { View, Text } from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { returnAllEvents } from "./../../redux/features/eventsSlice";

const test = {
  value: {
    //rename it as events
    byId: {
      1: {
        eventID: 1,
        title: "First Sample Event",
        description: "Sample description",
        dateTime: "",
      },
      2: {
        eventID: 2,
        title: "First Sample Event",
        description: "Sample description",
        dateTime: "",
      },
      allEventIds: [1, 2],
    },
  },
};

const getEventById = (eventID) => {
  return test.value.byId[eventID];
};

export default function eventScreen(event) {
  // const res = useSelector(re)
  console.log(useSelector(returnAllEvents).events);
  return (
    <View>
      <Text>eventScreen</Text>
    </View>
  );
}
