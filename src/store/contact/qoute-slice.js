import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactinfo: {
    },
    eventData: {
    }
}

const qouteRequestsSlice = createSlice({
    name: 'quoterequest',
    initialState,
    reducers: {
        updateContactData(state, action) {
            const { field, value } = action.payload;
            state.contactinfo[field] = value;
          },
        updateEventData(state, action) {
            const { field, value } = action.payload;
            state.eventData[field] = value;
          }
    }
})

export const quoteRequestActions = qouteRequestsSlice.actions;
export default qouteRequestsSlice;

/* 
firstName, lastName, PhoneNumber, Email, 
state, location, address, isDeliveryOrPickUp, date, time,
payment
greeting card note, 

from data: 
- api to get available dates
- api read the date to get the time slots
- list of locations avialable for delivery

*/