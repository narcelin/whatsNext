import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    allIds: [],
    byId: {},
  },
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    saveEventsIds: (state, action) => {
      state.data.allIds = action.payload;
    },
    saveEventsData: (state, action) => {
      state.data.byId = action.payload;
    },

    importedEvents: (state, action) => {
      console.log("----- REDUX importedEvents RAN ----- \n", action.payload);
    },
    addEvent: (state, action) => {
      console.log("addEvent Ran");

      const newEventId = action.payload.id;
      const newEventData = action.payload;

      state.data.allIds.push(newEventId);
      state.data.byId = {
        ...state.data.byId,
        ...{ [newEventId]: newEventData },
      };
    },
    removeEvent: (state, action) => {
      const _ = require("lodash");
      const eventId = action.payload.id;

      state.data.allIds = _.omit(state.data.allIds, [eventId]);
      state.data.byId = _.omit(state.data.byId, [eventId]);
    },
  },
});

export const { saveEventsIds, saveEventsData, addEvent, removeEvent } =
  eventsSlice.actions;

export const eventsData = (state) => {
  return state.events.data;
};

export default eventsSlice.reducer;
