const utcDateString = "2023-12-20T07:30:00.000+0000";

// Create a Date object from the UTC string
const utcDate = new Date(utcDateString);

const options = {
    weekday: 'long', // Convert the day to the full word
    year: 'numeric',
    month: 'short', // Convert the month to short format (e.g., "Dec")
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // Use 12-hour time format
    timeZoneName: 'short'
  };

// Format the UTC date to the local date and time string
const localDateTimeString = new Intl.DateTimeFormat('en-US', options).format(utcDate);

console.log(localDateTimeString); // Output the local date and time string
