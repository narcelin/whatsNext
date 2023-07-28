import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useRouter, Redirect } from "expo-router";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import {
  saveEventsIds,
  saveEventsData,
} from "../../redux/features/eventsSlice";

import { userData } from "../../redux/features/userSlice";

import {
  useGetUserEventsMutation,
  useGetUserOutfitsEventsIdsMutation,
} from "../../redux/features/apiSlice";

const CalendarScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const savedUserData = useSelector(userData);

  const [
    getUserOutfitsEventsIds,
    {
      data: userOutfitsEventsIds_Data,
      error: userOutfitsEvents_error,
      isLoading: userOutfitsEvents_isLoading,
    },
  ] = useGetUserOutfitsEventsIdsMutation();

  useEffect(() => {
    getUserOutfitsEventsIds(savedUserData.outfitsIds);
  }, []);

  const [
    getUserEvents,
    { data: userEvents_Data, error, isLoading: userEvents_isLoading },
  ] = useGetUserEventsMutation();

  useEffect(() => {
    if (userOutfitsEventsIds_Data) {
      const allUserEventsIds = [
        ...new Set([
          ...userOutfitsEventsIds_Data?.data,
          ...savedUserData.eventsIds,
        ]),
      ];
      dispatch(saveEventsIds(allUserEventsIds));
      getUserEvents(allUserEventsIds);
    }
  }, [userOutfitsEventsIds_Data]);

  useEffect(() => {
    if (userEvents_Data) {
      const convertArrayToObject = (array, keyProperty) => {
        return array.reduce((obj, item) => {
          obj[item[keyProperty]] = item;
          return obj;
        }, {});
      };

      dispatch(
        saveEventsData(convertArrayToObject(userEvents_Data.data, "_id"))
      );
    }
  }, [userEvents_Data]);

  const eventsByDate = {}; //Store in redux so that I amy access and edit in different screens. Or just the array? not sure how to do this so that I am not making repeated calls to server. If there is no change i prefer no call to server
  const groupEventsByDate = () => {
    //Maybe change this so it only needs the array of ids for events in order to make it buildable
    userEvents_Data?.data.forEach((event) => {
      const formattedEventDate = moment(event.dateTime).format("YYYYMMDD");
      if (eventsByDate.hasOwnProperty(formattedEventDate)) {
        eventsByDate[formattedEventDate].push(event);
      } else {
        eventsByDate[formattedEventDate] = [event];
      }
    });
  };

  groupEventsByDate();

  const renderEventsDay = (date) => {
    const formattedDate = moment(date, "YYYYMMDD").format("DD-MM-YYYY");

    return (
      <View style={styles.dateContainer} key={date}>
        <Text style={styles.dateHeader}>{formattedDate}</Text>

        {eventsByDate[date].map((event) => {
          return (
            <Pressable
              style={styles.eventContainer}
              key={event._id}
              onPress={() => {
                onEventPress(event._id);
              }}
            >
              <Text style={[styles.eventText, styles.eventTitle]}>
                {moment(event.dateTime).format("h:mm A")}
              </Text>
              <Text style={[styles.eventText, styles.eventTitle]}>
                {event.title}
              </Text>
              <Text style={[styles.eventText, styles.eventUser]}>
                {event.user}
              </Text>
            </Pressable>
          );
        })}
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
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {Object.keys(eventsByDate).map((date) => {
            return renderEventsDay(date);
          })}
        </ScrollView>
      </View>
    </>
  );
};

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
