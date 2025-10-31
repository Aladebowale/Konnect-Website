// import React from "react";
// import { useParams } from "react-router-dom";
// import  events from "./Konn3ctEvents";

// const EventDetails = () => {
//   const { id } = useParams();
//   const event = events.find((e) => e.id === parseInt(id));

//   if (!event) return <div className="p-10 text-center">Event not found.</div>;

//   return (
//     <div className="min-h-screen bg-white px-6 lg:px-20 py-10">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         {/* Left: Event Info */}
//         <div className="md:col-span-2">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="rounded-lg mb-4 w-full object-cover"
//           />
//           <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
//           <p className="text-gray-500 text-sm mb-1">
//             {event.date} • {event.location}
//           </p>
//           <p className="text-gray-700 text-sm mb-6">
//             By {event.organizer}
//           </p>
//           <h3 className="font-semibold text-lg mb-2">About this event</h3>
//           <p className="text-gray-600 leading-relaxed">{event.description}</p>
//         </div>

//         {/* Right: Register Form */}
//         <div className="border rounded-lg p-6 shadow-sm h-fit">
//           <h3 className="text-lg font-semibold mb-4">Register Now</h3>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             />
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { events } from "../Data/KEvents";

// const EventDetails = () => {
//   const { id } = useParams();
//   const event = events.find((e) => e.id === parseInt(id));

//   if (!event) {
//     return <div className="p-8 text-center text-gray-500">Event not found</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 lg:p-12 font-sans">
//       {/* Header Image */}
//       <div className="rounded-lg overflow-hidden shadow-sm">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-[280px] object-cover"
//         />
//       </div>

//       {/* Date */}
//       <p className="text-sm text-gray-500 mt-6">
//         {event.dateString || event.date}
//       </p>

//       {/* Title */}
//       <h1 className="text-2xl font-semibold text-gray-800 mt-2">
//         {event.title}
//       </h1>

//       {/* Organizer */}
//       <p className="text-sm text-gray-600 mt-1">
//         By <span className="font-medium">{event.organizer}</span>
//       </p>

//       {/* Date and Time */}
//       <div className="mt-6">
//         <h3 className="text-gray-800 font-semibold">Date and time</h3>
//         <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
//       </div>

//       {/* Location */}
//       <div className="mt-4">
//         <h3 className="text-gray-800 font-semibold">Location</h3>
//         <p className="text-gray-600 text-sm mt-1">{event.location}</p>
//       </div>

//       {/* Two-column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//         {/* Left column - About */}
//         <div className="md:col-span-2">
//           <h3 className="text-gray-800 font-semibold mb-3">About this event</h3>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             {event.description}
//           </p>
//         </div>

//         {/* Right column - Register */}
//         <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
//           <h3 className="text-gray-800 font-semibold mb-4">Register Now</h3>
//           <form className="space-y-3">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <button
//               type="button"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { events } from "../Data/KEvents";

// const EventDetails = () => {
//   const { id } = useParams();
//   const event = events.find((e) => e.id === parseInt(id));

//   if (!event) {
//     return <div className="p-8 text-center text-gray-500">Event not found</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 lg:p-12 font-sans">
//       {/* Header Image */}
//       <div className="rounded-lg overflow-hidden shadow-sm">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-[280px] object-cover"
//         />
//       </div>

//       {/* Date */}
//       <p className="text-sm text-gray-500 mt-6">
//         {event.dateString || event.date}
//       </p>
//       {/* Two-column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//         <div>
//           {/* Title */}
//           <h1 className="text-2xl font-semibold text-gray-800 mt-2">
//             {event.title}
//           </h1>

//           {/* Organizer */}
//           <p className="text-sm text-gray-600 mt-1">
//             By <span className="font-medium">{event.organizer}</span>
//           </p>

//           {/* Date and Time */}
//           <div className="mt-6">
//             <h3 className="text-gray-800 font-semibold">Date and time</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
//           </div>

//           {/* Location */}
//           <div className="mt-4">
//             <h3 className="text-gray-800 font-semibold">Location</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.location}</p>
//           </div>

//           {/* Left column - About */}
//           <div className="md:col-span-2">
//             <h3 className="text-gray-800 font-semibold mb-3">
//               About this event
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {event.description}
//             </p>
//           </div>
//         </div>
//         {/* Right column - Register */}
//         <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
//           <h3 className="text-gray-800 font-semibold mb-4">Register Now</h3>
//           <form className="space-y-3">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <button
//               type="button"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;

import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../Data/KEvents";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="p-8 text-center text-gray-500">Event not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 font-sans">
      {/* Header Image */}
      <div className="rounded-lg overflow-hidden shadow-sm">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[280px] object-cover"
        />
      </div>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-6">
        {event.dateString || event.date}
      </p>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* LEFT: Event Information */}
        <div className="md:col-span-2">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mt-2">
            {event.title}
          </h1>

          {/* Organizer */}
          <p className="text-sm text-gray-600 mt-1">
            By <span className="font-medium">{event.organizer}</span>
          </p>

          {/* Date & Time */}
          <div className="mt-6">
            <h3 className="text-gray-800 font-semibold">Date and time</h3>
            <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
          </div>

          {/* Location */}
          <div className="mt-4">
            <h3 className="text-gray-800 font-semibold">Location</h3>
            <p className="text-gray-600 text-sm mt-1">{event.location}</p>
          </div>

          {/* About */}
          <div className="mt-8">
            <h3 className="text-gray-800 font-semibold mb-2">
              About this event
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Report Button */}
          <button className="mt-6 text-sm text-red-500 hover:underline">
            Report this event
          </button>
        </div>

        {/* RIGHT: Register Form */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
          <h3 className="text-gray-800 font-semibold mb-4">Register Now</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
