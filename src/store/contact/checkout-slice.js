import { createSlice } from "@reduxjs/toolkit";

// const timeSlotsData = {
//     '2024-01-10': ['10:00 AM', '11:00 AM', '1:00 PM'],
//     '2024-01-11': ['9:00 AM', '10:00 AM', '11:00 AM'],
//     // Add more dates as needed
//   };
const deliverySchedule = {
  // Days are represented by numeric values (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  0: ["10:00 AM", "2:00 PM", "4:00 PM"],
  1: ["9:30 AM", "1:30 PM", "3:30 PM"],
  2: ["11:00 AM", "3:00 PM", "5:00 PM"],
  3: ["10:30 AM", "2:30 PM", "4:30 PM"],
  4: ["9:00 AM", "1:00 PM", "3:00 PM"],
  5: ["11:30 AM", "3:30 PM", "5:30 PM"],
  6: ["12:00 PM", "4:00 PM", "6:00 PM"],
};

const initialState = {
    personalData: {
      email: "",
      phone: "",
      fullname: "",
    },
    deliveryData: {
      "date": "",
      "decortime": "",
      "starttime": "",
      "endtime": "",
      "locationEvent": "",
      "messagenote": "",
      "address": "",
      "isDelivery": false
    },
    selectedDate: null,
    availableTimeSlots: [],
    agreeToTerms: false,
}

const checkOrderSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updatePersonalData(state, action) {
            const { field, value } = action.payload;
            state.personalData[field] = value;
          },
        updateDeliveryData(state, action) {
            const { field, value } = action.payload;
            state.deliveryData[field] = value;
          },
          toggleAgreement: (state) => {
            state.agreeToTerms = !state.agreeToTerms;
          },
          updateSelectedDate: (state, action) => {
          state.selectedDate = action.payload;
          },
          updateAvailableTimeSlots: (state, action) => {
            // Use the selected date to filter and update available time slots
            const selectedDate = action.payload;
            const selectedDay = selectedDate.getDay();//
            console.log('selectedDate in func state.payload', selectedDate)
            console.log('selectedDay.getday', selectedDay)
            if (deliverySchedule.hasOwnProperty(selectedDay)) {
              state.availableTimeSlots = deliverySchedule[selectedDay];
            } else {
              state.availableTimeSlots = [];
            }
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