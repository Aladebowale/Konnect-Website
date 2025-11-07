// utils/dateUtils.js
const formatEventDates = (dateString) => {
    
  const datePart = dateString.split("|")[0].trim(); // e.g., "Nov 11, 2025"
  const timePart = dateString.split("|")[1]?.trim().split(" ")[0]; // e.g., "09:00"
  const fullDate = new Date(`${datePart} ${timePart}`);

  const dateOptions = { weekday: "long", month: "long", day: "numeric" };
  const dateStringFormatted = fullDate.toLocaleDateString("en-US", dateOptions);

  const fullDateOptions = { month: "long", day: "numeric", year: "numeric" };
  const dateFullFormatted = fullDate.toLocaleDateString("en-US", fullDateOptions);
  const timeFormatted = fullDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    dateString: dateStringFormatted,
    fullDate: `${dateFullFormatted} | ${timeFormatted} - 16:00 (Africa/Lagos)`,
  };
}


export default formatEventDates;