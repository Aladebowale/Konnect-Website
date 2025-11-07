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
    <div>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans relative">
        {/* <div className="w-full flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans"> */}
        {/* <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#113b89] text-white font-sans"> */}
        {/* Navbar */}
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
        <section className="relative text-center mt-20 px-4 sm:px-6 w-full">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {/* <section className="relative text-center mt-20 px-6 w-full"> */}
            {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight"> */}
            Smarter Meetings. <br /> Powered by AI.
          </h1>
          <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            {/* <p className="mt-4 text-base  max-w-2xl mx-auto"> */}
            One intelligent platform for meetings, <br /> teamwork, and seamless
            communication.
          </p>

          <div className="mt-6 flex justify-center">
            {/* <div className="relative w-64 sm:w-80"> */}
            <div className="relative w-72">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"

                // className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
              />
              {/* <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800"> */}
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-400 font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
              Get started
            </button>
            </div>
          </div>
          <p className="text-xs sm:text-sm mt-2">
            Free Forever. No Credit Card.
          </p>

          {/* <p className="text-sm mt-2">Free Forever. No Credit Card.</p> */}
        </section>

        {/* Feature Grid */}
        <section className="relative top-[-100px] flex justify-center items-end gap-7">
          <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
            {/* <aside className="flex items-center gap-5 "> */}
            <div className="flex flex-col gap-4">
              {/* <div className="bg-white w-28 h-28 flex items-center justify-center rounded-lg shadow text-[#1A4699]"> */}
              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={NoteTaker}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Note Taker</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Scheduling}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Scheduling</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Reactions}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Reactions</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Bandwidth}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">
                  Low Bandwidth
                </p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Audio}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Audio boost</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={PlayBack}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Play back</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Reactions}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Reactions</p>
              </div>
            </div>
          </aside>

          {/* <div className="w-1/3 grid grid-cols-2 gap-4"> */}
          <div className="grid grid-cols-2 gap-4 w-[100%] sm:w-[60%] md:w-1/3">
            {/* <div className="flex flex-col gap-4"> */}

            <div className="bg-white h-[150px] sm:h-[180px] rounded-md shadow flex flex-col items-center justify-center text-sm sm:text-lg font-semibold text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <img
                src={Caption}
                alt="sheet"
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-medium text-xs md:text-base"> Live Caption</p>
            </div>

            <div className="bg-white h-[150px] sm:h-[180px] rounded-md shadow flex flex-col items-center justify-center text-sm sm:text-lg font-semibold text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <img
                src={Translate}
                alt="sheet"
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-medium text-xs md:text-base">Translate</p>
            </div>

            <div className="bg-white h-[150px] sm:h-[180px] rounded-md shadow flex flex-col items-center justify-center text-sm sm:text-lg font-semibold text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <img
                src={Donate}
                alt="sheet"
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-medium text-xs md:text-base">Donate</p>
            </div>

            <div className="bg-white h-[150px] sm:h-[180px] rounded-md shadow flex flex-col items-center justify-center text-sm sm:text-lg font-semibold text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
              <img
                src={AI}
                alt="sheet"
                className="w-10 h-10 mb-2 object-contain"
              />
              <p className="font-medium text-xs md:text-base">AI</p>
            </div>

            {/* </div> */}
          </div>

          <aside className="flex gap-4 md:gap-5 flex-wrap items-center md:justify-end">
            <div className="flex flex-col gap-4">
              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Doc}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Doc</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={eCinema}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">eCinema</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Calendar}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Calendars</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Polls}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Polls</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Highlights}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">
                  Transcriptions
                </p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Support}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">24/7 Support</p>
              </div>

              <div className="bg-white w-28 h-28 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-lg shadow text-[#1A4699] transition-transform hover:scale-105 hover:shadow-lg duration-300">
                <img
                  src={Dashboard}
                  alt="sheet"
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p className="font-normal text-xs md:text-base">Dashboard</p>
              </div>
            </div>
          </aside>
        </section>
      </div>

      {/* <div className="relative z-20 mt-20 space-y-16"> */}
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
