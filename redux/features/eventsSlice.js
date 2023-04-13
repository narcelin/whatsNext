import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    //rename it as events
    byId: {
      1: {
        //FUTURE DEV - add invited and accepted data
        ID: 1,
        UID: 1445,
        title: "First Sample Event",
        description: "Sample description",
        dateTime: "2023-04-13T10:00:00.000Z",
      },
      2: {
        ID: 2,
        UID: 2568,
        title: "Lunch with Jane",
        dateTime: "2023-04-14T12:30:00.000Z",
        description: "Sample description",
      },
      3: {
        ID: 3,
        UID: 25695,
        title: "Conference call",
        dateTime: "2023-04-15T15:00:00.000Z",
        description: "Sample description",
      },
      4: {
        ID: 4,
        UID: 5498,
        title: "Project review",
        dateTime: "2023-04-17T09:00:00.000Z",
        description: "Sample description",
      },
      5: {
        ID: 5,
        UID: 5846,
        title: "Team meeting",
        dateTime: "2023-04-17T11:00:00.000Z",
        description: "Sample description",
      },
      allIds: [1, 2, 3, 4, 5], //if I would like to change the order
    },
  },
  status: "idle",
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {},
    removeEvent: (state, action) => {},
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;

export const returnAllEvents = (state) => {
  return state;
};

export default eventsSlice.reducer;
