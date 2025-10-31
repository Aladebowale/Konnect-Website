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

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mt-2">
        {event.title}
      </h1>

      {/* Organizer */}
      <p className="text-sm text-gray-600 mt-1">
        By <span className="font-medium">{event.organizer}</span>
      </p>

      {/* Date and Time */}
      <div className="mt-6">
        <h3 className="text-gray-800 font-semibold">Date and time</h3>
        <p className="text-gray-600 text-sm mt-1">{event.fullDate}</p>
      </div>

      {/* Location */}
      <div className="mt-4">
        <h3 className="text-gray-800 font-semibold">Location</h3>
        <p className="text-gray-600 text-sm mt-1">{event.location}</p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Left column - About */}
        <div className="md:col-span-2">
          <h3 className="text-gray-800 font-semibold mb-3">About this event</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Right column - Register */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
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





//       <div className="grid grid-cols-6 gap-4 p-6 bg-gray-200 rounded-lg">
        
//         {/* Column 1 */}
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           <span>📝</span>
//           <p className="text-sm mt-2">Note Taker</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Highlighter className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Highlight</p>
//         </div>
//         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Captions className="w-10 h-10 text-green-500" /> */}
//           <p className="text-base mt-2">Live Caption</p>
//         </div>
//         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Presentation className="w-10 h-10 text-green-500" /> */}
//           <p className="text-base mt-2">Whiteboard</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <span>🌍</span> */}
//           <p className="text-sm mt-2">Translate</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <span>📊</span> */}
//           <p className="text-sm mt-2">Spreadsheets</p>
//         </div>

//         {/* Column 2 */}
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <span>📅</span> */}
//           <p className="text-sm mt-2">Scheduling</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <AudioWaveform className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Audio Boost</p>
//         </div>
//         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Gift className="w-10 h-10 text-green-500" /> */}
//           <p className="text-base mt-2">Donate</p>
//         </div>
//         <div className="col-span-2 row-span-2 border-2 border-green-400 rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Sparkles className="w-10 h-10 text-green-500" /> */}
//           <p className="text-base mt-2">AI</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <MonitorPlay className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">eCinema</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Headphones className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">24/7 Support</p>
//         </div>

//         {/* Column 3 */}
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Smile className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Reactions</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <MonitorPlay className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Play Back</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <Calendar className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Calendar</p>
//         </div>
//         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
//           {/* <LayoutDashboard className="w-6 h-6 text-green-500" /> */}
//           <p className="text-sm mt-2">Dashboard</p>
//         </div>
//     </div>

// //  import { Gift, Captions, Sparkles, Calendar, Headphones, FileText, Highlighter, MonitorPlay, Smile, AudioWaveform, LayoutDashboard, Presentation } from "lucide-react";

// // export default function FeatureGrid() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="grid grid-cols-6 gap-4 p-6 bg-gray-200 rounded-lg">
        
// //         {/* Column 1 */}
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <span>📝</span>
// //           <p className="text-sm mt-2">Note Taker</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Highlighter className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Highlight</p>
// //         </div>
// //         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Captions className="w-10 h-10 text-green-500" />
// //           <p className="text-base mt-2">Live Caption</p>
// //         </div>
// //         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Presentation className="w-10 h-10 text-green-500" />
// //           <p className="text-base mt-2">Whiteboard</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <span>🌍</span>
// //           <p className="text-sm mt-2">Translate</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <span>📊</span>
// //           <p className="text-sm mt-2">Spreadsheets</p>
// //         </div>

// //         {/* Column 2 */}
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <span>📅</span>
// //           <p className="text-sm mt-2">Scheduling</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <AudioWaveform className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Audio Boost</p>
// //         </div>
// //         <div className="col-span-2 row-span-2 bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Gift className="w-10 h-10 text-green-500" />
// //           <p className="text-base mt-2">Donate</p>
// //         </div>
// //         <div className="col-span-2 row-span-2 border-2 border-green-400 rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Sparkles className="w-10 h-10 text-green-500" />
// //           <p className="text-base mt-2">AI</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <MonitorPlay className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">eCinema</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Headphones className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">24/7 Support</p>
// //         </div>

// //         {/* Column 3 */}
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Smile className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Reactions</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <MonitorPlay className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Play Back</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <Calendar className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Calendar</p>
// //         </div>
// //         <div className="bg-white rounded-xl shadow flex items-center justify-center flex-col p-4">
// //           <LayoutDashboard className="w-6 h-6 text-green-500" />
// //           <p className="text-sm mt-2">Dashboard</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


import React from "react";

const BoxGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      {/* Outer grid */}
      <div className="grid grid-cols-6 gap-4">
        {/* Left small boxes */}
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Note Taker</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Highlight</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Scheduling</div>
        </div>
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Audio Boost</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Reactions</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Playback</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
        </div>
        {/* Middle big boxes */}
        <div className="col-span-2 grid grid-cols-4 grid-rows gap-4">
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-green-600">Live Caption</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-green-600">Whiteboard</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-green-600">Donate</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-green-600">AI</div>
        </div>

        {/* Right small boxes */}
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Transcriptions</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Spreadsheets</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">eCinema</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
        </div>
        
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Dashboard</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
        </div>

      </div>
    </div>
  );
}
export default BoxGrid



 import Logo from "../Images/konn3ct_logo.png"
 
 
 const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans">
      {/* Navbar */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
          `,
        }}
      />
       <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-white/20">
        <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {/* <div className="group relative">
          <button className="flex items-center gap-1 text-black  hover:text-blue-400">
            Meet
            <span className="text-xs">▼</span> 
          </button>
          <div className="absolute left-0 mt-2 w-40 text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
            <a href="#" className="block px-4 py-2  hover:text-blue-400">Overview</a>
            <a href="#" className="block px-4 py-2 hover:text-blue-400">Features</a>
            <a href="#" className="block px-4 py-2 hover:text-blue-400">Pricing</a>
          </div>
        </div> */}
          <a href="#" className="text-black hover:text-blue-400">Meet</a>
          <a href="#" className="text-black hover:text-blue-400">Features</a>
          <a href="#" className="text-black hover:text-blue-400">Customers</a>
          <a href="#" className="text-black hover:text-blue-400">Pricing</a>
        <div className="group relative">
          <button className="flex items-center gap-1 text-black hover:text-blue-400">
            Company
            <span className="text-xs">▼</span>
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
          </div>
        </div>        
        </nav>

        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white  hover:text-blue-400 transition shadow-lg">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
            Sign up, It’s Free
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center mt-20 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Smarter Meetings. <br /> Powered by AI.
        </h1>
        <p className="mt-4 text-base  max-w-2xl mx-auto">
          One intelligent platform for meetings, <br /> teamwork, and seamless communication.
        </p>

        <div className="mt-6 flex justify-center">
           <div className="relative w-72">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
          />
          {/* <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
            Get started
          </button> */}
          <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
              Get started
          </button>
          </div>
        </div>

        <p className="text-sm mt-2">Free Forever. No Credit Card.</p>
      </section>

      {/* Feature Grid */}
      {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-20 px-6"> */}
            <div className="min-h-screen flex items-center justify-center p-10">

        {/* {[
          "Note Taker",
          "Audio Boost",
          "Live Caption",
          "Translator",
          "Scheduling",
          "Playback",
          "AI",
          "Reactions",
          "Rooms",
          "Doc",
          "eCinema",
          "Calendar",
          "Polls",
          "Dashboard",
          "24/7 Support",
        ].map((feature, i) => (
           <div
            key={i}
            className={`flex items-center justify-center h-32 rounded-lg bg-white/10 text-lg font-medium hover:bg-white/20 transition ${
              feature === "AI" || feature === "Live Caption" || feature === "Translator" || feature === "Donate"
                ? "col-span-2"
                : ""
            }`}
          >
            {feature}
          </div>
        ))} */}

        <div className="grid grid-cols-6 gap-4">
        {/* Left small boxes */}
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Note Taker</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Highlight</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Scheduling</div>
        </div>
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Audio Boost</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Reactions</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Playback</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Calendar</div>
        </div>
        {/* Middle big boxes */}
        <div className="col-span-2 grid grid-cols-4 grid-rows gap-4">
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">Live Caption</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">Whiteboard</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">Donate</div>
          <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]0">AI</div>
        </div>

        {/* Right small boxes */}
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Transcriptions</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Spreadsheets</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">eCinema</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">Calendar</div>
        </div>
        
        <div className="grid grid-cols gap-4">
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Dashboard</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
          <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">Calendar</div>
        </div>

      </div>

      </div>
    </div>
  );
}
export default LandingPage;


// import React from 'react';
// import BG from "../Images/Konn3ct Images/Konnect Background colour.png"

// const LandingPage = () => {
//   return (
//     //  <div
//     //   className="h-screen w-full bg-cover bg-center"
//     //   style={{ backgroundImage: `url(${BG})` }}
//     // >
//      <div className="min-h-screen bg-blue-900 text-white">
//       <nav className="flex justify-between items-center p-4 border-b border-gray-700">
//         <div className="text-xl font-bold">konn3ct</div>
//         <div className="space-x-4">
//           <a href="#" className="hover:underline">Meet</a>
//           <a href="#" className="hover:underline">Features</a>
//           <a href="#" className="hover:underline">Customers</a>
//           <a href="#" className="hover:underline">Pricing</a>
//           <a href="#" className="hover:underline">Company</a>
//         </div>
//         <div className="space-x-4">
//           <button className="hover:underline">Login</button>
//           <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Sign up - It's Free</button>
//         </div>
//       </nav>

//       <main className="flex flex-col items-center justify-center text-center p-10">
//         <h1 className="text-5xl font-bold mb-4">Smarter Meetings. Powered by AI.</h1>
//         <p className="text-lg mb-6">One intelligent platform for meetings, teamwork, and seamless communication.</p>
//         <div className="flex space-x-4 mb-6">
//           <input type="email" placeholder="Enter your email address" className="p-2 rounded-l" />
//           <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r">Get started</button>
//         </div>
//         <p className="text-sm">Free Forever. No Credit Card required.</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <div className="flex-col"> 
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Low bandwidth</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Live Caption</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">AI</div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Low bandwidth</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Live Caption</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">AI</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Audio boost</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Transcription</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Donate</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Scheduling</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Doc</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">eCinema</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Playback</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Calendar</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">24/7 Support</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Reactions</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Rooms</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Dashboard</div>
//           <div className="bg-white text-blue-900 p-6 rounded shadow">Polls</div>
//         </div>
//         </div>
       
//       </main>

      
//     </div>
//   );
// };

// export default LandingPage;



return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 pt-24 text-center">
      {/* Navbar placeholder */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white border-b border-gray-200"></div>

      {/* === HERO SECTION === */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        The next generation <br className="hidden md:block" /> runs on{" "}
        <span className="text-blue-600">Konn3ct</span>
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Join thousands of companies already fostering resolution times,
        higher team efficiency, and better satisfaction.
      </p>

      {/* Email Input + Button */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex bg-white border border-gray-300 rounded-full shadow-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 text-sm md:text-base outline-none rounded-l-full"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition">
            Get started
          </button>
        </div>
      </div>

      {/* Placeholder for circular icon/image */}
      <div className="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 mb-16"></div>

      {/* === CUSTOMER STORIES GRID === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl w-full mb-16">
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            Why Nafiac partnered with Konn3ct over Zoom for Google meet
          </h3>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
            Learn More
          </a>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            How Chams Plc Transformed Team Management with Konn3ct AI-Powered capabilities
          </h3>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            How Intravate Transformed Team Management with Konn3ct AI-Powered capabilities
          </h3>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            How Moyer Plc Transformed Team Management with Konn3ct AI-Powered capabilities
          </h3>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            How NCS Transformed Team Management with Konn3ct AI-Powered capabilities
          </h3>
        </div>
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h3 className="text-gray-700 font-medium mb-2">
            How Adekunle Club Transformed Team Management with Konn3ct AI-Powered capabilities
          </h3>
        </div>
      </div>

      {/* === TRUST SECTION === */}
      <div className="text-gray-600 font-medium mb-12">
        Trusted by <span className="text-black font-semibold">15,000+</span> Individuals and companies.
      </div>

      {/* === FOOTER SECTION WITH WAVY BACKGROUND === */}
      <div className="relative w-full overflow-hidden">
        {/* Blue wavy background shape */}
        <img
          src="/bg-shape.png"  // replace with your wavy background file path
          alt="Background Shape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content npm*/}
        <div className="relative bg-blue-900/90 w-full py-16 px-6 text-white flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            One AI for all your collaboration
          </h2>
          <p className="max-w-2xl text-center text-gray-200">
            Unify meetings, teamwork, and workflows with company-wide intelligence all in one platform.
          </p>
          <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Sign up. It’s Free
          </button>
        </div>
      </div>
    </section>


































import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsShieldCheck, BsClockHistory } from "react-icons/bs";
import { RiSignalWifiFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B2A7E] to-[#05194B] text-white pt-6 pb-4">
      {/* Top Info Bar */}
      <div className="flex flex-wrap justify-center md:justify-between items-center border-b border-white/20 px-6 py-3 text-sm">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <MdSupportAgent className="text-white" />
          <span>24/7 Support</span>
        </div>
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <BsClockHistory className="text-white" />
          <span>Changelog</span>
        </div>
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <BsShieldCheck className="text-white" />
          <span>Secure and compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <RiSignalWifiFill className="text-white" />
          <span>99.9% uptime</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-sm px-6 py-10">
        {/* Logo & Address */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-3">konn3ct</h2>
          <div className="flex gap-3 text-lg mb-4">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
            <FaFacebook />
          </div>
          <p className="text-gray-200 leading-relaxed">
            220B Eti-Osa Way, Dolphin Estate, Lagos 106104, Lagos
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Konn3ct AI</li>
            <li>Donations</li>
            <li>Breakout rooms</li>
            <li>Live captions</li>
            <li>Translations</li>
            <li>eCinema</li>
            <li>Audio booster</li>
            <li>Whiteboard</li>
            <li>Playback</li>
            <li>Notetaker</li>
          </ul>
        </div>

        {/* How To */}
        <div>
          <h3 className="font-semibold mb-3">How To</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Use konn3ct</li>
            <li>Join Breakout Room</li>
            <li>Create Breakout Room</li>
            <li>Use Konn3ct AI</li>
            <li>Use Live Caption</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Customer</li>
            <li>Pricing</li>
            <li>Developer</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>NDPR</li>
            <li>GDPR</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-1 text-gray-300">
            <li>info@konn3ct.com</li>
          </ul>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="flex justify-center gap-4 mt-2 mb-4">
        <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold shadow-md hover:opacity-90">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
            alt="Apple"
            className="h-4 w-4 bg-black p-1 rounded"
          />
          Get on iPhone
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold shadow-md hover:opacity-90">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
            alt="Google Play"
            className="h-4 w-4"
          />
          Get on Android
        </button>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-300 border-t border-white/10 pt-3">
        © 2025 konn3ct · All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;