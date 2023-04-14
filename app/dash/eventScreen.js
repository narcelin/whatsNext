import { View, Text } from "react-native";
import React from "react";

import { useSelector } from "react-redux";
import { eventsData } from "./../../redux/features/eventsSlice";
import { useSearchParams } from "expo-router";

import moment from "moment";

const eventScreen = () => {
  const { eventID } = useSearchParams();
  const events = useSelector(eventsData);
  const event = events.byId[eventID];

  return (
    <View>
      {event ? (
        <>
          <Text>{moment(event?.dateTime).format("ddd MMM D h:mm")}</Text>
          <Text>{event.user}</Text>
          <Text>{event.title}</Text>
          <Text>{event.description}</Text>
        </>
      ) : null}
    </View>
  );
};
export default eventScreen;
