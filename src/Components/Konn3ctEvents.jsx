// pages/EventsPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Konn3ctHeader from "../Components/Konn3ctHeader";
import Footer from "../Components/kfooter";
import EventCarousel from "../Components/EventCarousel";
import SearchHeader from "../Components/SearchHeader";
import { fetchAllEvents } from "../Data/EventsApi";

const tabs = ["ALL", "TODAY", "WEEK", "MONTH", "PAST"];

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  useEffect(() => {
    fetchAllEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  const parseEventDate = (dateStr) => {
    const cleanDate = dateStr.split("|")[0].trim();
    return new Date(cleanDate);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneWeekFromNow = new Date(today);
  oneWeekFromNow.setDate(today.getDate() + 7);
  const oneMonthFromNow = new Date(today);
  oneMonthFromNow.setDate(today.getDate() + 30);

  const filteredEvents = events.filter((event) => {
    const eventDate = parseEventDate(event.date);

    let matchesTab = false;
    if (activeTab === "ALL") matchesTab = true;
    else if (activeTab === "TODAY") {
      matchesTab =
        eventDate.getDate() === today.getDate() &&
        eventDate.getMonth() === today.getMonth() &&
        eventDate.getFullYear() === today.getFullYear();
    } else if (activeTab === "WEEK") {
      matchesTab = eventDate >= today && eventDate <= oneWeekFromNow;
    } else if (activeTab === "MONTH") {
      matchesTab = eventDate >= today && eventDate <= oneMonthFromNow;
    } else if (activeTab === "PAST") {
      matchesTab = eventDate < today;
    }

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocation === "All Locations" ||
      event.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesTab && matchesSearch && matchesLocation;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading events...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Konn3ctHeader />

      <div className="min-h-screen px-6 lg:px-16 py-10 font-sans bg-white">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <SearchHeader
              onSearchChange={setSearchTerm}
              onLocationChange={setSelectedLocation}
            />
          </div>
        </div>

        <EventCarousel events={events} />

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2 overflow-x-auto mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#007bff] border-b-2 border-[#007bff]"
                  : "hover:text-[#007bff]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
          Events in {selectedLocation}
        </h2>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link
                to={`/event/${event.ref}`}
                key={event.ref}
                className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.tag && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
                      {event.tag}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">{event.dateString}</p>
                  <p className="text-xs text-gray-400 mt-1">{event.location}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No events found for this filter.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;

// import React, { useState } from "react";
// import { events } from "../Data/KEvents";
// import { Link } from "react-router-dom";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import EventCarousel from "./EventCarousel";
// import SearchHeader from "./SearchHeader";

// const tabs = ["ALL", "TODAY", "WEEK", "MONTH", "PAST"];

// const EventsPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("All Locations");

//   //  Helper to parse event date
//   const parseEventDate = (dateStr) => {
//     const cleanDate = dateStr.split("|")[0].trim();
//     return new Date(cleanDate);
//   };

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const oneWeekFromNow = new Date(today);
//   oneWeekFromNow.setDate(today.getDate() + 7);

//   const oneMonthFromNow = new Date(today);
//   oneMonthFromNow.setDate(today.getDate() + 30);

//   //  Combined Filtering Logic
//   const filteredEvents = events.filter((event) => {
//     const eventDate = parseEventDate(event.date);

//     // --- TAB FILTER ---
//     let matchesTab = false;
//     if (activeTab === "ALL") matchesTab = true;
//     else if (activeTab === "TODAY") {
//       matchesTab =
//         eventDate.getDate() === today.getDate() &&
//         eventDate.getMonth() === today.getMonth() &&
//         eventDate.getFullYear() === today.getFullYear();
//     } else if (activeTab === "WEEK") {
//       matchesTab = eventDate >= today && eventDate <= oneWeekFromNow;
//     } else if (activeTab === "MONTH") {
//       matchesTab = eventDate >= today && eventDate <= oneMonthFromNow;
//     } else if (activeTab === "PAST"){
//       matchesTab = eventDate < today;
//     }


//     // --- SEARCH + LOCATION FILTER ---
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.location.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesLocation =
//       selectedLocation === "All Locations" ||
//       event.location.toLowerCase().includes(selectedLocation.toLowerCase());

//     //  Final combined condition
//     return matchesTab && matchesSearch && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen flex flex-col text-gray-800">
//       <Konn3ctHeader />

//       <div className="min-h-screen px-6 lg:px-16 py-10 font-sans bg-white">
//         {/*  SearchHeader Above Carousel */}
//         <div className="flex justify-center mb-8">
//           <div className="w-full max-w-4xl">
//             <SearchHeader
//               onSearchChange={setSearchTerm}
//               onLocationChange={setSelectedLocation}
//             />
//           </div>
//         </div>

//         {/*  Event Carousel */}
//         <EventCarousel />

//         {/* Filter Tabs */}
//         <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2 overflow-x-auto mt-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-1 transition-colors whitespace-nowrap ${
//                 activeTab === tab
//                   ? "text-[#007bff] border-b-2 border-[#007bff]"
//                   : "hover:text-[#007bff]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Location Title */}
//         <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
//           Events in {selectedLocation}
//         </h2>

//         {/*  Event Cards */}
//         {filteredEvents.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredEvents.map((event) => (
//               <Link
//                 to={`/event/${event.id}`}
//                 key={event.id}
//                 className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-fit object-cover"
//                   />
//                   {event.tag && (
//                     <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
//                       {event.tag}
//                     </span>
//                   )}
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
//                     {event.title}
//                   </h3>
//                   <p className="text-xs text-gray-500 mt-2">{event.date}</p>
//                   <p className="text-xs text-gray-400 mt-1">{event.location}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-500 mt-10">
//             No events found for this filter.
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default EventsPage;



// import React, { useState } from "react";
// import { events } from "../Data/KEvents";
// import { Link } from "react-router-dom";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import EventCarousel from "./EventCarousel";
// import SearchHeader from "./SearchHeader"; //  Added this import

// const tabs = ["ALL", "TODAY", "WEEK", "MONTH"];

// const EventsPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//    const [searchTerm, setSearchTerm] = useState("");
//     const [selectedLocation, setSelectedLocation] = useState("All Locations");

//   // Helper to parse event date
//   const parseEventDate = (dateStr) => {
//     // Example: "Mar 11, 2025 | 09:00 (UTC+01:00)"
//     const cleanDate = dateStr.split("|")[0].trim(); // "Mar 11, 2025"
//     return new Date(cleanDate);
//   };

//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // normalize for comparison

//   const oneWeekFromNow = new Date(today);
//   oneWeekFromNow.setDate(today.getDate() + 7);

//   const oneMonthFromNow = new Date(today);
//   oneMonthFromNow.setDate(today.getDate() + 30);

//   // Filtering logic
//   const filteredEvents = events.filter((event) => {
//     const eventDate = parseEventDate(event.date);

//     if (activeTab === "ALL") return true;

//     if (activeTab === "TODAY") {
//       return (
//         eventDate.getDate() === today.getDate() &&
//         eventDate.getMonth() === today.getMonth() &&
//         eventDate.getFullYear() === today.getFullYear()
//       );
//     }

//     if (activeTab === "WEEK") {
//       return eventDate >= today && eventDate <= oneWeekFromNow;
//     }

//     if (activeTab === "MONTH") {
//       return eventDate >= today && eventDate <= oneMonthFromNow;
//     }

//     return true;
//      });

//   const searchedEvents = events.filter((event) => {

//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.location.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesLocation =
//       selectedLocation === "All Locations" ||
//       event.location.toLowerCase().includes(selectedLocation.toLowerCase());

//     return matchesSearch && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen flex flex-col text-gray-800">
//       <Konn3ctHeader />

//       <div className="min-h-screen px-6 lg:px-16 py-10 font-sans bg-white">

//         {/* ✅ SearchHeader Added Above Carousel */}
//         <div className="flex justify-center mb-8">
//           <div className="w-full max-w-4xl">
//             <SearchHeader 
//             onSearchChange={setSearchTerm}
//             onLocationChange={setSelectedLocation}/>
//           </div>
//         </div>

//         {/* ✅ Event Carousel */}
//         <EventCarousel />

//         {/* Filter Tabs */}
//         <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2 overflow-x-auto mt-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-1 transition-colors whitespace-nowrap ${
//                 activeTab === tab
//                   ? "text-[#007bff] border-b-2 border-[#007bff]"
//                   : "hover:text-[#007bff]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Location Title */}
//         <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
//           Events in {selectedLocation}
//         </h2>

//         {/* Event Cards */}
//         {filteredEvents.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredEvents.map((event) => (
//               <Link
//                 to={`/event/${event.id}`}
//                 key={event.id}
//                 className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-fit object-cover"
//                   />
//                   {event.tag && (
//                     <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
//                       {event.tag}
//                     </span>
//                   )}
//                 </div>

//                 <div className="p-4">
//                   <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
//                     {event.title}
//                   </h3>
//                   <p className="text-xs text-gray-500 mt-2">{event.date}</p>
//                   <p className="text-xs text-gray-400 mt-1">{event.location}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-500 mt-10">
//             No events found for {activeTab.toLowerCase()}.
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default EventsPage;









// import React, { useState } from "react";
// import { events } from "../Data/KEvents";
// import { Link } from "react-router-dom";

// // Layout Components
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import SearchHeader from "./SearchHeader";
// import EventCarousel from "./EventCarousel";

// const tabs = ["ALL", "TODAY", "WEEK", "MONTH", "PAST"];

// const EventsPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("All Locations");

//   // 🔹 Filter logic
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.location.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesLocation =
//       selectedLocation === "All Locations" ||
//       event.location.toLowerCase().includes(selectedLocation.toLowerCase());

//     return matchesSearch && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen flex flex-col text-gray-800 bg-gray-50">
//       {/* 🔹 Page Header */}
//       <Konn3ctHeader />

//       {/* 🔹 Search and Location Bar (Now ABOVE carousel) */}
//       <div className="mt-8">
//         <SearchHeader
//           onSearchChange={setSearchTerm}
//           onLocationChange={setSelectedLocation}
//         />
//       </div>

//       {/* 🔹 Featured Carousel */}
//       <div className="mt-4 mb-8">
//         <EventCarousel />
//       </div>

//       {/* 🔹 Filter Tabs */}
//       <div className="px-6 lg:px-16 py-6">
//         <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-1 transition-colors ${
//                 activeTab === tab
//                   ? "text-[#007bff] border-b-2 border-[#007bff]"
//                   : "hover:text-[#007bff]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 Section Title */}
//       <h2 className="text-lg font-semibold text-gray-800 px-6 lg:px-16 mb-4">
//         Events in {selectedLocation}
//       </h2>

//       {/* 🔹 Event Cards */}
//       <div className="px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <Link
//               to={`/event/${event.id}`}
//               key={event.id}
//               className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-fit object-cover"
//                 />
//                 {event.tag && (
//                   <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
//                     {event.tag}
//                   </span>
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
//                   {event.title}
//                 </h3>

//                 <p className="text-xs text-gray-500 mt-2">{event.date}</p>
//                 <p className="text-xs text-gray-400 mt-1">{event.location}</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No events found for this filter.
//           </p>
//         )}
//       </div>

//       {/* 🔹 Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default EventsPage;



// import React, { useState } from "react";
// import { events } from "../Data/KEvents";
// import { Link } from "react-router-dom";

// // Layout Components
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import SearchHeader from "./SearchHeader";

// import EventCarousel from "./EventCarousel";

// const tabs = ["ALL", "TODAY", "WEEK", "MONTH", "PAST"];

// const EventsPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("All Locations");

//   // Filter logic
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       event.location.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesLocation =
//       selectedLocation === "All Locations" ||
//       event.location.toLowerCase().includes(selectedLocation.toLowerCase());

//     return matchesSearch && matchesLocation;
//   });

//   return (
//     // <div className="min-h-screen font-sans bg-gray-50">
     
//     <div className="min-h-screen flex flex-col text-gray-800">
//     {/* 🔹 Page Header */}
//       <Konn3ctHeader />

//       {/* 🔹 Featured Carousel */}
//       <EventCarousel />

//       {/* 🔹 Search and Location Header */}
//       <SearchHeader
//         onSearchChange={setSearchTerm}
//         onLocationChange={setSelectedLocation}
//       />

//       {/* 🔹 Filter Tabs */}
//       <div className="px-6 lg:px-16 py-6">
//         <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-1 transition-colors ${
//                 activeTab === tab
//                   ? "text-[#007bff] border-b-2 border-[#007bff]"
//                   : "hover:text-[#007bff]"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 Section Title */}
//       <h2 className="text-lg font-semibold text-gray-800 px-6 lg:px-16 mb-4">
//         Events in {selectedLocation}
//       </h2>

//       {/* 🔹 Event Cards */}
//       <div className="px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <Link
//               to={`/event/${event.id}`}
//               key={event.id}
//               className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-fit object-cover"
//                 />
//                 {event.tag && (
//                   <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
//                     {event.tag}
//                   </span>
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
//                   {event.title}
//                 </h3>

//                 <p className="text-xs text-gray-500 mt-2">{event.date}</p>
//                 <p className="text-xs text-gray-400 mt-1">{event.location}</p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No events found for this filter.
//           </p>
//         )}
//       </div>

//       {/* 🔹 Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default EventsPage;


// import React, { useState } from "react";
// import { events } from "../Data/KEvents";
// import { Link } from "react-router-dom";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import EventCarousel from "./EventCarousel";



// const tabs = ["ALL", "TODAY", "WEEK", "MONTH"];

// const EventsPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");

//   // Helper to parse event date
//   const parseEventDate = (dateStr) => {
//     // Example: "Mar 11, 2025 | 09:00 (UTC+01:00)"
//     const cleanDate = dateStr.split("|")[0].trim(); // "Mar 11, 2025"
//     return new Date(cleanDate);
//   };

//   const today = new Date();
//   today.setHours(0, 0, 0, 0); // normalize for comparison

//   const oneWeekFromNow = new Date(today);
//   oneWeekFromNow.setDate(today.getDate() + 7);

//   const oneMonthFromNow = new Date(today);
//   oneMonthFromNow.setDate(today.getDate() + 30);

//   // Filtering logic
//   const filteredEvents = events.filter((event) => {
//     const eventDate = parseEventDate(event.date);

//     if (activeTab === "ALL") return true;

//     if (activeTab === "TODAY") {
//       return (
//         eventDate.getDate() === today.getDate() &&
//         eventDate.getMonth() === today.getMonth() &&
//         eventDate.getFullYear() === today.getFullYear()
//       );
//     }

//     if (activeTab === "WEEK") {
//       return eventDate >= today && eventDate <= oneWeekFromNow;
//     }

//     if (activeTab === "MONTH") {
//       return eventDate >= today && eventDate <= oneMonthFromNow;
//     }

//     // if (activeTab === "PAST") {
//     //   return eventDate < today;
//     // }

//     return true;
//   });

//   return (
//     <div className="min-h-screen flex flex-col text-gray-800">
//       <Konn3ctHeader />

      

//     <div className="min-h-screen px-6 lg:px-16 py-10 font-sans bg-white">

//           <EventCarousel />

        
//       {/* Filter Tabs */}
//       <div className="flex items-center gap-6 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2 overflow-x-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-1 transition-colors whitespace-nowrap ${
//               activeTab === tab
//                 ? "text-[#007bff] border-b-2 border-[#007bff]"
//                 : "hover:text-[#007bff]"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Location Title */}
//       <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
//         Events in Lagos, Nigeria
//       </h2>

//       {/* Event Cards */}
//       {filteredEvents.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredEvents.map((event) => (
//             <Link
//               to={`/event/${event.id}`}
//               key={event.id}
//               className="rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
//             >
//               <div className="relative">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-fit object-cover"
//                 />
//                 {event.tag && (
//                   <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded">
//                     {event.tag}
//                   </span>
//                 )}
//               </div>

//               <div className="p-4">
//                 <h3 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
//                   {event.title}
//                 </h3>
//                 <p className="text-xs text-gray-500 mt-2">{event.date}</p>
//                 <p className="text-xs text-gray-400 mt-1">{event.location}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500 mt-10">
//           No events found for {activeTab.toLowerCase()}.
//         </div>
//       )}
//     </div>
//           <Footer />

//         </div>

//   );
// };

// export default EventsPage;



