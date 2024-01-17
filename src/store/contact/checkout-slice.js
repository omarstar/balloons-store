import { createSlice } from "@reduxjs/toolkit";

const timeSlotsData = {
    '2024-01-10': ['10:00 AM', '11:00 AM', '1:00 PM'],
    '2024-01-11': ['9:00 AM', '10:00 AM', '11:00 AM'],
    // Add more dates as needed
  };

const initialState = {
    personalinfo: {
    },
    deliveryData: {
    },
    selectedDate: null,
    availableTimeSlots: [],
}

const checkOrderSlice = createSlice({
    name: 'checkoutorder',
    initialState,
    reducers: {
        updatePersonalData(state, action) {
            const { field, value } = action.payload;
            state.personalinfo[field] = value;
          },
        updateDeliveryData(state, action) {
            const { field, value } = action.payload;
            state.deliveryData[field] = value;
          },
        updateSelectedDate: (state, action) => {
        state.selectedDate = action.payload;
        },
        updateAvailableTimeSlots: (state, action) => {
        // Use the selected date to filter and update available time slots
        const selectedDate = action.payload;
        console.log('selectedDate to show times', selectedDate)
        console.log('time slots?', timeSlotsData[selectedDate])
        state.availableTimeSlots = timeSlotsData[selectedDate] || [];
        },
    }
})

export const checkOrderActions = checkOrderSlice.actions;
export default checkOrderSlice;

/* 
firstName, lastName, Phone, Email, 
state, location, address, isDeliveryOrPickUp, date, time, greeting card note,
payment
 

from data: 
- api to get available dates (delivery charge)
- api read the date to get the time slots
- list of locations avialable for delivery

*/