// import React from "react";
// import Konn3ctHeader from "../Components/Konn3ctHeader";
// import App1 from "../Components/Konn3ct 1";
// import App2 from "../Components/Konn3ct 2";
// import App3 from "../Components/Konn3ct 3";
// import Footer from "../Components/kfooter";
// import AI from "../Images/Konn3ct Images/gift.png"

// // Reusable box style
// const featureBox =
//   "bg-white flex flex-col items-center justify-center rounded-2xl shadow text-[#1A4699] text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(52,168,83,0.6)] hover:scale-105 cursor-pointer";

// const LandingPage = () => {
//   return (
//     <div className="w-full flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans relative overflow-hidden">
//       {/* Background grid lines */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//         }}
//       />

//       {/* Header */}
//       <Konn3ctHeader />

//       {/* Hero Section */}
//       <section className="relative text-center mt-20 px-6 w-full z-10">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Smarter Meetings. <br /> Powered by AI.
//         </h1>
//         <p className="mt-4 text-base max-w-2xl mx-auto">
//           One intelligent platform for meetings, <br /> teamwork, and seamless
//           communication.
//         </p>

//         {/* Email input */}
//         <div className="mt-6 flex justify-center">
//           <div className="relative w-72">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
//             />
//             <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//             </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2">Free Forever. No Credit Card.</p>
//       </section>

//       {/* Feature Grid */}
//       <section className="relative top-[-100px] flex justify-center items-end gap-8 z-10 px-4">
//         {/* Left side small boxes */}
//         <aside className="flex items-center gap-5">
//           <div className="flex flex-col gap-5">
//             <div className={`${featureBox} w-28 h-28`}>
//               <div className="mb-2">{AI}</div>
//               Note Taker
//             </div>
//             <div className={`${featureBox} w-28 h-28`}>Low Bandwidth</div>
//             <div className={`${featureBox} w-28 h-28`}>Scheduling</div>
//           </div>

//           <div className="flex flex-col gap-5">
//             <div className={`${featureBox} w-28 h-28`}>Audio Boost</div>
//             <div className={`${featureBox} w-28 h-28`}>Reactions</div>
//             <div className={`${featureBox} w-28 h-28`}>Playback</div>
//             <div className={`${featureBox} w-28 h-28`}>Calendar</div>
//           </div>
//         </aside>

//         {/* Center large boxes */}
//         <div className="w-[40%] grid grid-cols-2 gap-5">
//           <div className={`${featureBox} h-[180px]`}>
//             <div className="mb-2">{/* Icon */}</div>
//             Live Caption
//           </div>
//           <div className={`${featureBox} h-[180px]`}>Translate</div>
//           <div className={`${featureBox} h-[180px]`}>Donate</div>
//           <div
//             className={`${featureBox} h-[180px] border border-[#2657B0] shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(52,168,83,0.6)]`}
//           >
//             <div className="mb-2">{/* Icon */}</div>
//             AI
//           </div>
//         </div>

//         {/* Right side small boxes */}
//         <aside className="flex items-center gap-5">
//           <div className="flex flex-col gap-5">
//             <div className={`${featureBox} w-28 h-28`}>Doc</div>
//             <div className={`${featureBox} w-28 h-28`}>Highlights</div>
//             <div className={`${featureBox} w-28 h-28`}>eCinema</div>
//             <div className={`${featureBox} w-28 h-28`}>24/7 Support</div>
//           </div>

//           <div className="flex flex-col gap-5">
//             <div className={`${featureBox} w-28 h-28`}>Dashboard</div>
//             <div className={`${featureBox} w-28 h-28`}>Polls</div>
//             <div className={`${featureBox} w-28 h-28`}>Calendar</div>
//           </div>
//         </aside>
//       </section>

//       {/* Lower Sections */}
//       <div className="relative z-20 mt-20 space-y-16">
//         <App1 />
//         <App2 />
//         <App3 />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import Konn3ctHeader from "../Components/Konn3ctHeader";
// import App1 from "../Components/Konn3ct 1";
// import App2 from "../Components/Konn3ct 2";
// import App3 from "../Components/Konn3ct 3";
// import Footer from "../Components/kfooter";
// import Calendar from "../Images/Konn3ct Images/calendar-04.png"

// const LandingPage = () => {
//   return (
//     <div>
//       <div>
//         <div className="w-full flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans">
//           {/* <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#113b89] text-white font-sans"> */}
//           {/* Navbar */}
//           <div
//             className="absolute inset-0 z-0"
//             style={{
//               backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//             }}
//           />
//           <Konn3ctHeader />

//           {/* Hero Section */}
//           <section className="relative text-center mt-20 px-6 w-full">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Smarter Meetings. <br /> Powered by AI.
//             </h1>
//             <p className="mt-4 text-base  max-w-2xl mx-auto">
//               One intelligent platform for meetings, <br /> teamwork, and
//               seamless communication.
//             </p>

//             <div className="mt-6 flex justify-center">
//               <div className="relative w-72">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
//                 />
//                 <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//                   Get started
//                 </button>
//               </div>
//             </div>

//             <p className="text-sm mt-2">Free Forever. No Credit Card.</p>
//           </section>

//           {/* Feature Grid */}
//           <section className="relative top-[-100px] flex justify-center items-end gap-7">
//             <aside className="flex items-center gap-5 ">
//               <div className="flex flex-col gap-5">
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                  Note Taker
//                 </div>

//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Highlight
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Scheduling
//                 </div>
//               </div>

//               <div className="flex flex-col gap-5">
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-sm font-semibold text-[#1A4699]">
//                   Audio Boost
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-lg font-semibold text-[#1A4699]">
//                   Reactions
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-lg font-semibold text-[#1A4699]">
//                   Playback
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-lg font-semibold text-[#1A4699]">
//                   Calendar
//                 </div>
//               </div>
//             </aside>

//             <div className="w-1/3 grid grid-cols-2 gap-4">
//               <div className="bg-white h-[150px] rounded-md shadow flex items-center justify-center text-lg font-semibold text-[#1A4699]">
//                 Live Caption
//               </div>
//               <div className="bg-white h-[150px] rounded-md shadow flex items-center justify-center text-lg font-semibold text-[#1A4699]">
//                 Whiteboard
//               </div>
//               <div className="bg-white h-[150px] rounded-md shadow flex items-center justify-center text-lg font-semibold text-[#1A4699]">
//                 Donate
//               </div>
//               <div className="bg-white h-[150px] rounded-md shadow flex items-center justify-center text-lg font-semibold text-[#1A4699]">
//                 AI
//               </div>
//             </div>

//             <aside className="flex items-center gap-5">
//               <div className="flex flex-col gap-5">
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Transcriptions
//                 </div>

//                 <div className="bg-white w-28 h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699]">

//                  <img src={Calendar} alt="sheet" className="w-10 h-10 mb-2 object-contain" />
//                  <p className="font-medium text-sm md:text-base">Calendars</p>
//                 </div>

//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   eCinema
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Calendar
//                 </div>
//               </div>

//               <div className="flex flex-col gap-5">
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Dashboard
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Calendar
//                 </div>
//                 <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
//                   Calendar
//                 </div>
//               </div>
//             </aside>
//           </section>
//         </div>

//         <div className="relative z-20 mt-20 space-y-16">
//           <App1 />
//           <App2 />
//           <App3 />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React from "react";
// import Konn3ctHeader from "../Components/Konn3ctHeader";
// import App1 from "../Components/Konn3ct 1";
// import App2 from "../Components/Konn3ct 2";
// import App3 from "../Components/Konn3ct 3";
// import Footer from "../Components/kfooter";
// import Calendar from "../Images/Konn3ct Images/calendar-04.png";
// import NoteTaker from "../Images/Konn3ct Images/note-02.png";
// import Scheduling from "../Images/Konn3ct Images/check-list.png";
// import Reactions from "../Images/Konn3ct Images/smile.png";
// import Bandwidth from "../Images/Konn3ct Images/internet-antenna-01.png";
// import Audio from "../Images/Konn3ct Images/audio-wave-01.png";
// import PlayBack from "../Images/Konn3ct Images/previous.png";
// import Rooms from "../Images/Konn3ct Images/meeting-room.png";
// import Doc from "../Images/Konn3ct Images/google-doc.png";
// import eCinema from "../Images/Konn3ct Images/tv-smart.png";
// import Polls from "../Images/Konn3ct Images/quiz-03.png";
// import Highlights from "../Images/Konn3ct Images/ai-idea.png";
// import Support from "../Images/Konn3ct Images/customer-support (1).png";
// import Dashboard from "../Images/Konn3ct Images/dashboard-speed-02.png";
// import Caption from "../Images/Konn3ct Images/closed-caption.png";
// import Translate from "../Images/Konn3ct Images/translation.png";
// import Donate from "../Images/Konn3ct Images/gift.png";
// import AI from "../Images/Konn3ct Images/sparkles.png";

// const features = [
//   { name: "Note Taker", img: NoteTaker },
//   { name: "Scheduling", img: Scheduling },
//   { name: "Reactions", img: Reactions },
//   { name: "Low Bandwidth", img: Bandwidth },
//   { name: "Audio Boost", img: Audio },
//   { name: "Playback", img: PlayBack },
//   { name: "Rooms", img: Rooms },
//   { name: "Live Caption", img: Caption },
//   { name: "Translate", img: Translate },
//   { name: "Donate", img: Donate },
//   { name: "AI", img: AI },
//   { name: "Doc", img: Doc },
//   { name: "eCinema", img: eCinema },
//   { name: "Calendar", img: Calendar },
//   { name: "Polls", img: Polls },
//   { name: "Transcriptions", img: Highlights },
//   { name: "24/7 Support", img: Support },
//   { name: "Dashboard", img: Dashboard },
// ];

// const LandingPage = () => {
//   return (
//     <div>
//       <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans relative">
//         {/* Background Grid */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `
//               repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//               repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//             `,
//           }}
//         />

//         <Konn3ctHeader />

//         {/* Hero Section */}
//         <section className="relative text-center mt-20 px-4 sm:px-6 w-full">
//           <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Smarter Meetings. <br /> Powered by AI.
//           </h1>
//           <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto">
//             One intelligent platform for meetings, <br /> teamwork, and seamless
//             communication.
//           </p>

//           <div className="mt-6 flex justify-center">
//             <div className="relative w-72">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"
//               />
//               <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-400 font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//                 Get started
//               </button>
//             </div>
//           </div>
//           <p className="text-xs sm:text-sm mt-2">
//             Free Forever. No Credit Card.
//           </p>
//         </section>

//         {/* Desktop Features Layout */}
//         <section className="hidden md:flex relative top-[-100px] justify-center items-end gap-7">
//           {/* Left Side */}
//           <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
//             <div className="flex flex-col gap-4">
//               {features.slice(0, 3).map((item) => (
//                 <FeatureBox key={item.name} {...item} />
//               ))}
//             </div>
//             <div className="flex flex-col gap-4">
//               {features.slice(3, 7).map((item) => (
//                 <FeatureBox key={item.name} {...item} />
//               ))}
//             </div>
//           </aside>

//           {/* Center Larger Boxes */}
//           <div className="grid grid-cols-2 gap-4 w-[100%] sm:w-[60%] md:w-1/3">
//             {features.slice(7, 11).map((item) => (
//               <FeatureBox key={item.name} {...item} large />
//             ))}
//           </div>

//           {/* Right Side */}
//           <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
//             <div className="flex flex-col gap-4">
//               {features.slice(11, 15).map((item) => (
//                 <FeatureBox key={item.name} {...item} />
//               ))}
//             </div>
//             <div className="flex flex-col gap-4">
//               {features.slice(15).map((item) => (
//                 <FeatureBox key={item.name} {...item} />
//               ))}
//             </div>
//           </aside>
//         </section>

//         {/* Mobile View (3 columns grid) */}
//         <section className="grid md:hidden grid-cols-3 gap-3 justify-items-center mt-10 px-4">
//           {features.map((item) => (
//             <FeatureBox key={item.name} {...item} small />
//           ))}
//         </section>
//       </div>

//       {/* Subsections */}
//       <div className="relative z-20 mt-10 md:mt-20 space-y-12 md:space-y-16">
//         <App1 />
//         <App2 />
//         <App3 />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// // Reusable Feature Box
// const FeatureBox = ({ name, img, small, large }) => (
//   <div
//     className={`bg-white text-[#1A4699] flex flex-col items-center justify-center rounded-lg shadow transition-transform hover:scale-105 hover:shadow-lg duration-300 ${
//       small
//         ? "w-24 h-24 text-[10px]"
//         : large
//         ? "h-[150px] sm:h-[180px] text-sm sm:text-lg font-semibold"
//         : "w-28 h-28 sm:w-28 sm:h-28"
//     }`}
//   >
//     <img src={img} alt={name} className="w-8 h-8 mb-1 object-contain" />
//     <p className="font-medium text-[10px] md:text-base text-center">{name}</p>
//   </div>
// );

// export default LandingPage;


import React, { useRef, useEffect, useState } from "react";
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
import Rooms from "../Images/Konn3ct Images/meeting-room.png";
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

const features = [
  { name: "Note Taker", img: NoteTaker },
  { name: "Scheduling", img: Scheduling },
  { name: "Reactions", img: Reactions },
  { name: "Low Bandwidth", img: Bandwidth },
  { name: "Audio Boost", img: Audio },
  { name: "Playback", img: PlayBack },
  { name: "Rooms", img: Rooms },
  { name: "Live Caption", img: Caption },
  { name: "Translate", img: Translate },
  { name: "Donate", img: Donate },
  { name: "AI", img: AI },
  { name: "Doc", img: Doc },
  { name: "eCinema", img: eCinema },
  { name: "Calendar", img: Calendar },
  { name: "Polls", img: Polls },
  { name: "Transcriptions", img: Highlights },
  { name: "24/7 Support", img: Support },
  { name: "Dashboard", img: Dashboard },
];

const LandingPage = () => {
  // auto-scroll refs / state for mobile feature row
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    // speed (px per tick) and tick interval
    const speed = 1; // px per tick — tweak for faster/slower
    const tick = 20; // ms

    const step = () => {
      if (!container || isHovered) return;
      // scroll by speed
      scrollAmount += speed;
      // when we've scrolled past full width, wrap around smoothly
      if (scrollAmount >= container.scrollWidth / 2) {
        // snap back to start (makes infinite loop visually continuous)
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }
    };

    const id = setInterval(step, tick);
    return () => clearInterval(id);
  }, [isHovered]);

  // duplicate features array to make continuous scrolling visually smooth
  const duplicated = [...features, ...features];

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans relative">
        {/* Background grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 100px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 100px)
            `,
          }}
        />

        <Konn3ctHeader />

        {/* Hero */}
        <section className="relative text-center mt-20 px-4 sm:px-6 w-full z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Smarter Meetings. <br /> Powered by AI.
          </h1>
          <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            One intelligent platform for meetings, <br /> teamwork, and seamless communication.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="relative w-64 sm:w-72">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs sm:text-sm shadow-md"
              />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-400 font-medium text-white px-3 py-2 rounded-md text-xs sm:text-sm hover:bg-green-800 transition">
                Get started
              </button>
            </div>
          </div>
          <p className="text-xs sm:text-sm mt-2">Free Forever. No Credit Card.</p>
        </section>

        {/* Desktop features (unchanged) */}
        <section className="hidden md:flex relative top-[-100px] justify-center items-end gap-7 z-10">
          {/* Left */}
          <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
            <div className="flex flex-col gap-4">
              {features.slice(0, 3).map((item) => (
                <FeatureBox key={item.name} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {features.slice(3, 7).map((item) => (
                <FeatureBox key={item.name} {...item} />
              ))}
            </div>
          </aside>

          {/* Middle large boxes */}
          <div className="grid grid-cols-2 gap-4 w-[100%] sm:w-[60%] md:w-1/3">
            {features.slice(7, 11).map((item) => (
              <FeatureBox key={item.name} {...item} large />
            ))}
          </div>

          {/* Right */}
          <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
            <div className="flex flex-col gap-4">
              {features.slice(11, 15).map((item) => (
                <FeatureBox key={item.name} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {features.slice(15).map((item) => (
                <FeatureBox key={item.name} {...item} />
              ))}
            </div>
          </aside>
        </section>

        {/* Mobile: auto-scrolling horizontal row (mimics FeaturesPage) */}
        <section className="md:hidden mt-8 px-3 z-10">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="w-full overflow-x-auto hide-scrollbar"
          >
            <div className="flex gap-3 items-center py-4 min-w-max">
              {duplicated.map((item, idx) => (
                <button
                  key={`${item.name}-${idx}`}
                  onClick={() => {
                    /* optional: any action on feature click */
                    /* left intentionally minimal so you can wire navigation */
                  }}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-28 rounded-xl bg-white text-[#1A4699] shadow transition-transform hover:scale-105 active:scale-95"
                  aria-label={item.name}
                >
                  <img src={item.img} alt={item.name} className="w-8 h-8 mb-1 object-contain" />
                  <div className="text-[11px] text-center px-1">{item.name}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Subsections */}
      <div className="relative z-20 mt-10 md:mt-10 space-y-12 md:space-y-10">
        <App1 />
        <App2 />
        <App3 />
        <Footer />
      </div>
    </div>
  );
};

// Feature box used on desktop
const FeatureBox = ({ name, img, small, large }) => (
  <div
    className={`bg-white text-[#1A4699] flex flex-col items-center justify-center rounded-lg shadow transition-transform hover:scale-105 hover:shadow-lg duration-300 ${
      large ? "h-[150px] sm:h-[180px] text-sm sm:text-lg font-semibold" : "w-28 h-28"
    }`}
  >
    {/* icon placeholder (image) */}
    <img src={img} alt={name} className="w-10 h-10 mb-2 object-contain" />
    <p className="font-medium text-xs md:text-base text-center">{name}</p>
  </div>
);

export default LandingPage;
