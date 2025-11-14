
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

//       {/* Content Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
//         {/* LEFT: Event Information */}
//         <div className="md:col-span-2">
//           {/* Title */}
//           <h1 className="text-2xl font-semibold text-gray-800 mt-2">
//             {event.title}
//           </h1>

//           {/* Organizer */}
//           <p className="text-sm text-gray-600 mt-1">
//             By <span className="font-medium">{event.organizer}</span>
//           </p>

//           {/* Date & Time */}
//           <div className="mt-6">
//             <h3 className="text-gray-800 font-semibold">Date and time</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
//           </div>

//           {/* Location */}
//           <div className="mt-4">
//             <h3 className="text-gray-800 font-semibold">Location</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.location}</p>
//           </div>

//           {/* About */}
//           <div className="mt-8">
//             <h3 className="text-gray-800 font-semibold mb-2">
//               About this event
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {event.description}
//             </p>
//           </div>

//           {/* Report Button */}
//           <button className="mt-6 text-sm text-red-500 hover:underline">
//             Report this event
//           </button>
//         </div>

//         {/* RIGHT: Register Form */}
//         <div className="border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
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

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Footer from "./kfooter";
// import axios from "axios";
// import { events } from "../Data/KEvents";

// const EventDetails = () => {
//   const { id } = useParams();
//   const event = events.find((e) => e.id === parseInt(id));

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   if (!event) {
//     return <div className="p-8 text-center text-gray-500">Event not found</div>;
//   }

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.phone) {
//       setMessage("Please fill out all fields before submitting.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("https://dev.konn3ct.ng/api/pre-registration", {
//         ref: event.ref,
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//       });

//       if (response.status === 200 || response.status === 201) {
//         setMessage("Registration successful! We'll contact you soon.");
//         setFormData({ name: "", email: "", phone: "" });
//       } else {
//         setMessage("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting registration:", error);
//       setMessage("Network or server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col text-gray-800">
//       <Konn3ctHeader />
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

//       {/* Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
//         {/* LEFT: Event Info */}
//         <div className="md:col-span-2">
//           <h1 className="text-2xl font-semibold text-gray-800 mt-2">
//             {event.title}
//           </h1>
//           <p className="text-sm text-gray-600 mt-1">
//             By <span className="font-medium">{event.organizer}</span>
//           </p>

//           <div className="mt-6">
//             <h3 className="text-gray-800 font-semibold">Date and time</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
//           </div>

//           <div className="mt-4">
//             <h3 className="text-gray-800 font-semibold">Location</h3>
//             <p className="text-gray-600 text-sm mt-1">{event.location}</p>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-gray-800 font-semibold mb-2">
//               About this event
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {event.description}
//             </p>
//           </div>

//           <button className="mt-6 text-sm text-red-500 hover:underline">
//             Report this event
//           </button>
//         </div>

//         {/* RIGHT: Register Form */}
//         <div className="border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
//           <h3 className="text-gray-800 font-semibold mb-4">Register Now</h3>

//           <form className="space-y-3" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full rounded-md py-2 text-sm font-medium text-white ${
//                 loading
//                   ? "bg-blue-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               {loading ? "Submitting..." : "Register"}
//             </button>
//           </form>

//           {message && (
//             <p className="text-sm mt-3 text-center text-gray-600">{message}</p>
//           )}
//         </div>
//       </div>
     
//     </div>
//      <Footer />
//       </div>
//   );
// };

// export default EventDetails;

// pages/EventDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Konn3ctHeader from "../Components/Konn3ctHeader";
import Footer from "../Components/kfooter";
import axios from "axios";
import { fetchEventByRef } from "../Data/EventsApi";

const EventDetails = () => {
  const { ref } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");



  useEffect(() => {
    fetchEventByRef(ref).then(data => {
      setEvent(data);
      setLoading(false);
    });
  }, [ref]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setMessage("");

    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("Please fill all fields.");
      setSubmitLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://dev.konn3ct.ng/api/pre-registration", {
        ref: event.ref,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });


      if (res.status === 200 || res.status === 201) {
        setMessage( "✅ Registration successful!");
        setFormData({ name: "", email: "", phone: "" });
      }
    } catch (err) {
      setMessage("Failed to register. Try again.");
    } finally {
      setSubmitLoading(false);
    }
  };

  

  if (loading) return <div className="p-8 text-center">Loading event...</div>;
  if (!event) return <div className="p-8 text-center text-red-500">Event not found</div>;

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Konn3ctHeader />
      <div className="max-w-6xl mx-auto p-6 lg:p-12 font-sans">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img src={event.image} alt={event.title} className="w-full h-[280px] object-cover" />
        </div>

        <p className="text-sm text-gray-500 mt-6">{event.dateString}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="md:col-span-2">
            <h1 className="text-2xl font-semibold text-gray-800 mt-2">{event.title}</h1>
            <p className="text-sm text-gray-600 mt-1">By <span className="font-medium">{event.organizer}</span></p>

            <div className="mt-6">
              <h3 className="text-gray-800 font-semibold">Date and time</h3>
              <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
            </div>

            <div className="mt-4">
              <h3 className="text-gray-800 font-semibold">Location</h3>
              <p className="text-gray-600 text-sm mt-1">{event.location}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-gray-800 font-semibold mb-2">About this event</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-gray-800 font-semibold mb-4">Register Now</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
              <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
              <button
                type="submit"
                disabled={submitLoading}
                className={`w-full rounded-md py-2 text-sm font-medium text-white ${
                  submitLoading ? "bg-blue-400" : "bg-[#1A4699] hover:bg-blue-700"
                }`}
              >
                {submitLoading ? "Submitting..." : "Register"}
              </button>
            </form>
            {message && <p className="text-sm mt-3 text-center text-gray-600">{message}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;