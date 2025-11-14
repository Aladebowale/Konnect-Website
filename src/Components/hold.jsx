import React from "react";
import Konn3ctHeader from "../Components/Konn3ctHeader";
import App1 from "../Components/Konn3ct 1";
import App2 from "../Components/Konn3ct 2";
import App3 from "../Components/Konn3ct 3";
import Footer from "../Components/kfooter";
import Calendar from "../Images/Konn3ct Images/calendar-04.png";
import NoteTaker from "../Images/Konn3ct Images/note-02.png";
import Scheduling from "../Images/Konn3ct Images/check-list.png";
import Reactions from "../Images/Konn3ct Images/smile.png";
import Bandwidth from "../Images/Konn3ct Images/internet-antenna-01.png";
import Audio from "../Images/Konn3ct Images/audio-wave-01.png";
import PlayBack from "../Images/Konn3ct Images/previous.png";
import Doc from "../Images/Konn3ct Images/google-doc.png";
import eCinema from "../Images/Konn3ct Images/tv-smart.png";
import Polls from "../Images/Konn3ct Images/quiz-03.png";
import Highlights from "../Images/Konn3ct Images/ai-idea.png";
import Support from "../Images/Konn3ct Images/customer-support (1).png";
import Dashboard from "../Images/Konn3ct Images/dashboard-speed-02.png";
import Caption from "../Images/Konn3ct Images/closed-caption.png";
import Translate from "../Images/Konn3ct Images/translation.png";
import Donate from "../Images/Konn3ct Images/gift.png";
import AI from "../Images/Konn3ct Images/sparkles.png";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
          `,
        }}
      />

      <Konn3ctHeader />

      {/* Hero Section */}
      <section className="relative text-center mt-20 px-4 sm:px-6 w-full z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Smarter Meetings. <br /> Powered by AI.
        </h1>
        <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          One intelligent platform for meetings, teamwork, and seamless
          communication.
        </p>

        {/* Input + Button (unified design) */}
        <div className="mt-6 flex justify-center">
          <div className="flex w-64 sm:w-80 bg-white rounded-xl overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-green-600 transition-all duration-300">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-black outline-none text-xs sm:text-sm"
            />
            <button className="bg-[#34A853] hover:bg-green-800 transition-colors duration-300 text-white font-medium px-4 py-3 text-xs sm:text-sm">
              Get started
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm mt-2">
          Free Forever. No Credit Card.
        </p>
      </section>

      {/* Feature Grid Section */}
      <section className="relative top-[-80px] md:top-[-100px] flex flex-col items-center justify-center px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl justify-items-center">
          {[
            { img: NoteTaker, label: "Note Taker" },
            { img: Scheduling, label: "Scheduling" },
            { img: Reactions, label: "Reactions" },
            { img: Bandwidth, label: "Low Bandwidth" },
            { img: Audio, label: "Audio Boost" },
            { img: PlayBack, label: "Playback" },
            { img: Caption, label: "Live Caption" },
            { img: Translate, label: "Translation" },
            { img: Donate, label: "Donate" },
            { img: AI, label: "AI Assistant" },
            { img: Doc, label: "Doc Sharing" },
            { img: eCinema, label: "eCinema" },
            { img: Calendar, label: "Calendar" },
            { img: Polls, label: "Polls" },
            { img: Highlights, label: "Highlights" },
            { img: Support, label: "24/7 Support" },
            { img: Dashboard, label: "Dashboard" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] 
              transition-transform hover:scale-105 hover:shadow-lg duration-300"
            >
              <img
                src={feature.img}
                alt={feature.label}
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-medium text-xs sm:text-sm text-center px-1">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* App Sections */}
      <div className="relative z-20 mt-10 md:mt-20 space-y-12 md:space-y-16">
        <App1 />
        <App2 />
        <App3 />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;


@layer components {
  .feature-box {
    @apply bg-white w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300;
  }
  .feature-large {
    @apply bg-white h-[120px] sm:h-[150px] rounded-md shadow flex items-center justify-center text-sm sm:text-lg font-semibold text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300;
  }
}





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










































