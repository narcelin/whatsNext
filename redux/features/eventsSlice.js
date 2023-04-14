import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 101,
  data: {
    //rename it as events
    allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    byId: {
      1: {
        ID: 1,
        UID: 1445,
        user: "StateFarm Jake",
        title: "Wrestle a Bear",
        description:
          "Test your strength against one of nature's most fearsome predators! Disclaimer: we are not responsible for any injuries sustained during this event.",
        dateTime: "2023-04-13T10:00:00.000Z",
      },
      2: {
        ID: 2,
        UID: 1234,
        user: "John Smith",
        title: "Intro to Underwater Basket Weaving",
        description:
          "Always wanted to weave a basket underwater? This is the event for you! We'll provide the baskets and the scuba gear. You bring the creativity.",
        dateTime: "2023-04-14T14:30:00.000Z",
      },
      3: {
        ID: 3,
        UID: 5678,
        user: "Jane Doe",
        title: "Moon Bouncing with Miley",
        description:
          "Join pop sensation Miley Cyrus for an afternoon of bouncing on the moon's surface! Zero gravity fun for all ages.",
        dateTime: "2023-04-15T09:15:00.000Z",
      },
      4: {
        ID: 4,
        UID: 7890,
        user: "Bob Johnson",
        title: "Tarot Card Reading",
        description:
          "Get your fortune told by our resident tarot card reader. Learn about your past, present, and future in this mystical experience.",
        dateTime: "2023-04-16T18:00:00.000Z",
      },
      5: {
        ID: 5,
        UID: 2468,
        user: "Sarah Lee",
        title: "Painting with Pigs",
        description:
          "Join our team of artistic pigs for a fun and messy painting session. All materials provided.",
        dateTime: "2023-04-17T12:45:00.000Z",
      },
      6: {
        ID: 6,
        UID: 1357,
        user: "Tom Jones",
        title: "World's Longest Line Dance",
        description:
          "Join us in attempting to break the world record for the longest line dance ever. No experience necessary!",
        dateTime: "2023-04-18T16:30:00.000Z",
      },
      7: {
        ID: 7,
        UID: 9876,
        user: "Karen Brown",
        title: "Human Knot Challenge",
        description:
          "Test your teamwork skills with our human knot challenge. Can you and your fellow participants untangle yourselves?",
        dateTime: "2023-04-19T11:00:00.000Z",
      },
      8: {
        ID: 8,
        UID: 5432,
        user: "Mike Williams",
        title: "Juggling for Beginners",
        description:
          "Learn the basics of juggling in this fun and informative workshop. No experience necessary!",
        dateTime: "2023-04-20T15:15:00.000Z",
      },
      9: {
        ID: 9,
        UID: 2222,
        user: "Susan Garcia",
        title: "Bubble Wrap Pop-A-Thon",
        description:
          "Join us for a relaxing afternoon of popping bubble wrap. Bring your own or use our provided materials",
        dateTime: "2023-04-20T15:15:00.000Z",
      },
      10: {
        ID: 10,
        UID: 5467,
        user: "Captain Crunch",
        title: "Cereal Party",
        description:
          "Come join me and my crunchy friends for a morning bowl of cereal!",
        dateTime: "2023-04-20T09:00:00.000Z",
      },
      11: {
        ID: 11,
        UID: 2301,
        user: "Professor Oak",
        title: "Pokemon Battle",
        description:
          "Let's battle with our favorite Pokemon! Winner gets bragging rights.",
        dateTime: "2023-04-20T14:00:00.000Z",
      },
      12: {
        ID: 12,
        UID: 1111,
        user: "Willy Wonka",
        title: "Chocolate Tasting",
        description:
          "Sample the finest chocolates from around the world! Golden ticket not required.",
        dateTime: "2023-04-22T13:00:00.000Z",
      },
      13: {
        ID: 13,
        UID: 8765,
        user: "Barney Stinson",
        title: "Suit Up Party",
        description: "It's time to suit up! Dress code: suit and tie only.",
        dateTime: "2023-04-22T21:00:00.000Z",
      },
      14: {
        ID: 14,
        UID: 4321,
        user: "Homer Simpson",
        title: "Donut Eating Contest",
        description:
          "Who can eat the most donuts in 10 minutes? Winner gets a year's supply of donuts!",
        dateTime: "2023-04-23T11:00:00.000Z",
      },
      15: {
        ID: 15,
        UID: 9999,
        user: "Dwight Schrute",
        title: "Beet Farm Tour",
        description:
          "Take a tour of my beet farm and learn about the fascinating world of beets.",
        dateTime: "2023-04-25T10:00:00.000Z",
      },
      16: {
        ID: 16,
        UID: 7777,
        user: "Tony Stark",
        title: "Iron Man Suit Demo",
        description:
          "Watch me demo the latest version of the Iron Man suit. Warning: may contain explosions.",
        dateTime: "2023-04-26T15:00:00.000Z",
      },
      17: {
        ID: 17,
        UID: 2222,
        user: "Buddy the Elf",
        title: "Christmas in April",
        description:
          "Why wait until December? Let's celebrate Christmas in April!",
        dateTime: "2023-04-27T18:00:00.000Z",
      },
      18: {
        ID: 18,
        UID: 3333,
        user: "Jack Sparrow",
        title: "Pirate Party",
        description:
          "Avast, ye mateys! Come aboard and join me for a night of swashbuckling fun.",
        dateTime: "2023-04-28T19:00:00.000Z",
      },
      19: {
        ID: 19,
        UID: 5555,
        user: "Spongebob Squarepants",
        title: "Jellyfishing Expedition",
        description:
          "Join me on a jellyfishing expedition in Jellyfish Fields!",
        dateTime: "2023-04-29T12:00:00.000Z",
      },
    },
    //if I would like to change the order
  },
  status: "idle",
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      console.log("addEvent Ran");

      const addedEventId = action.payload.ID;
      const addedEventData = action.payload;

      state.data.allIds.push(addedEventId);
      state.data.byId = {
        ...state.data.byId,
        ...{ [addedEventId]: addedEventData },
      };
    },
    removeEvent: (state, action) => {},
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;

export const eventsData = (state) => {
  return state.events.data;
};

export default eventsSlice.reducer;
