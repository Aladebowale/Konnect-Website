// src/api.js
const API_BASE = "https://dev.konn3ct.ng/api";

let cachedEvents = [];

// FETCH ALL EVENTS
export const fetchAllEvents = async () => {
  try {
    const res = await fetch(`${API_BASE}/pre-reg-list`);
    if (!res.ok) throw new Error("Failed to load events");
    const json = await res.json();

    const apiEvents = json.data?.preg || [];
    cachedEvents = apiEvents.map(formatEventFromAPI);
    return cachedEvents;
  } catch (err) {
    console.error("fetchAllEvents error:", err);
    return cachedEvents;
  }
};

// FETCH ONE EVENT BY REF
export const fetchEventByRef = async (ref) => {
  try {
    const res = await fetch(`${API_BASE}/pre-registration/${ref}`);
    if (!res.ok) throw new Error("Event not found");
    const json = await res.json();
console.log("working")
    const apiEvent = json.data?.preg?.[0];
    if (!apiEvent) return null;

    return formatEventFromAPI(apiEvent);
  } catch (err) {
    console.error("fetchEventByRef error:", err);
    return null;
  }
};

// CONVERT API → APP FORMAT
const formatEventFromAPI = (apiEvent) => {
  const dateStr = `${apiEvent.date} | ${apiEvent.time} (UTC+01:00)`;
  const { default: formatEventDates } = require("../Data/KEventDate");
  const { dateString, fullDate } = formatEventDates(dateStr);

  const ref = apiEvent.ref || `ref-${apiEvent.id}`;

  return {
    id: apiEvent.id,
    ref,
    title: apiEvent.title,
    organizer: `${apiEvent.owner.firstname} ${apiEvent.owner.lastname}`.trim(),
    location: "Konn3ct Room",
    //  `${
    //   apiEvent.room_id ? `Room ${apiEvent.room_id}` : "Virtual"
    // } | ${apiEvent.timezone.split(" ")[0]}`,
    date: dateStr,
    dateString,
    fullDate,
    description: apiEvent.about || "No description available.",
    image: "https://dev.konn3ct.ng/prereg/" + apiEvent.logo,
    banner: apiEvent.logo || null,
    tag: apiEvent.public === 1 ? "Hybrid" : "Private",
  };
};