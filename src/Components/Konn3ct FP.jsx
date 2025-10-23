import React, { useState, useEffect, useRef } from "react";
import Konn3ctHeader from "../Components/Konn3ctHeader";
import AI from "../Images/Konn3ct Images/sparkles.png";
import NT from "../Images/Konn3ct Images/note-02.png";
import LB from "../Images/Konn3ct Images/internet-antenna-01.png";
import SD from "../Images/Konn3ct Images/check-list.png";
import smile from "../Images/Konn3ct Images/smile.png";
import polls from "../Images/Konn3ct Images/quiz-03.png";
import support from "../Images/Konn3ct Images/customer-support (1).png";
import dashboard from "../Images/Konn3ct Images/dashboard-speed-02.png";
import FeatP1 from "./Konn3ctF 1";
import FeatP2 from "./Konn3ctF 2";
import Footer from "../Components/kfooter";

const FeaturesPage = () => {
  const features = [
    { id: 1, title: "AI", icon: AI },
    { id: 2, title: "Low Bandwidth", icon: LB },
    { id: 3, title: "Note Taker", icon: NT },
    { id: 4, title: "Scheduling", icon: SD },
    { id: 5, title: "Reactions", icon: smile },
    { id: 6, title: "Polls", icon: polls },
    { id: 7, title: "Dashboard", icon: dashboard },
    { id: 8, title: "24/7 Support", icon: support },
  ];

  const [selected, setSelected] = useState(features[0]);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!scrollContainer || isHovered) return;
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const interval = setInterval(autoScroll, 50);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative z-10 min-h-screen w-full bg-white text-gray-900 font-sans">
      {/* ====== Navbar ====== */}
      <Konn3ctHeader />

      {/* ====== Hero Section (with grid) ====== */}
      <section className="relative text-center mt-24 px-6 md:px-12 overflow-hidden">
        {/* Grid background for hero only */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(128, 128, 128, 0.06) 0, rgba(128, 128, 128, 0.06) 1px, transparent 1px, transparent 100px),
              repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.06) 0, rgba(128, 128, 128, 0.06) 1px, transparent 1px, transparent 100px)
            `,
          }}
        />

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Every feature your team
          <br />
          needs to work faster
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700">
          Konn3ct brings together everything your team needs to work smarter and
          faster. From seamless communication and task management to AI-powered
          insights, it keeps projects moving without friction.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
          Sign up, It's Free
        </button>

        {/* Auto-scroll Feature Row */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full overflow-x-auto hide-scrollbar mt-12"
        >
          <div className="flex gap-4 justify-start px-4 py-4 min-w-max">
            {features.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className={`flex flex-col items-center justify-center cursor-pointer rounded-xl w-32 h-32 md:w-36 md:h-36 transition-all duration-300 ${
                  selected.id === item.id
                    ? "bg-blue-50 border-2 border-blue-100 scale-110 shadow-lg"
                    : "bg-white border border-gray-200 hover:shadow-md hover:scale-105"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mb-2 object-contain"
                />
                <p
                  className={`font-medium text-sm md:text-base ${
                    selected.id === item.id ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Features Details Sections (no grid) ====== */}
      <div className="relative z-20 mt-20 space-y-16">
        <FeatP1 />
        <FeatP2 />
        <Footer />
      </div>
    </div>
  );
};

export default FeaturesPage;

// import React, { useState, useEffect, useRef } from "react";
// import Konn3ctHeader from "../Componenets/Konn3ctHeader";
// import AI from "../Images/Konn3ct Images/sparkles.png";
// import NT from "../Images/Konn3ct Images/note-02.png";
// import LB from "../Images/Konn3ct Images/internet-antenna-01.png";
// import SD from "../Images/Konn3ct Images/check-list.png";
// import smile from "../Images/Konn3ct Images/smile.png";
// import polls from "../Images/Konn3ct Images/quiz-03.png";
// import support from "../Images/Konn3ct Images/customer-support (1).png";
// import dashboard from "../Images/Konn3ct Images/dashboard-speed-02.png";
// import FeatP1 from "./Konn3ctF 1";
// import FeatP2 from "./Konn3ctF 2";
// import Footer from "../Componenets/kfooter";

// const FeaturesPage = () => {
//   const features = [
//     { id: 1, title: "AI", icon: AI },
//     { id: 2, title: "Low Bandwidth", icon: LB },
//     { id: 3, title: "Note Taker", icon: NT },
//     { id: 4, title: "Scheduling", icon: SD },
//     { id: 5, title: "Reactions", icon: smile },
//     { id: 6, title: "Polls", icon: polls },
//     { id: 7, title: "Dashboard", icon: dashboard },
//     { id: 8, title: "24/7 Support", icon: support },
//   ];

//   const [selected, setSelected] = useState(features[0]);
//   const scrollRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const autoScroll = () => {
//       if (!scrollContainer || isHovered) return;
//       scrollAmount += 1;
//       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollAmount = 0;
//       }
//       scrollContainer.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     };

//     const interval = setInterval(autoScroll, 50);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <div className="relative z-10 min-h-screen w-full bg-white text-gray-900 font-sans">
//       {/* Subtle Grid Background */}

//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(128, 128, 128, 0.06) 0, rgba(128, 128, 128, 0.06) 1px, transparent 1px, transparent 100px),
//             repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.06) 0, rgba(128, 128, 128, 0.06) 1px, transparent 1px, transparent 100px)
//           `,
//         }}
//       />

//       {/* Navbar */}
//       <Konn3ctHeader />

//       {/* Hero Section */}
//       <section className="relative text-center mt-24 px-6 md:px-12">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Every feature your team
//           <br />
//           needs to work faster
//         </h1>
//         <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700">
//           Konn3ct brings together everything your team needs to work smarter and
//           faster. From seamless communication and task management to AI-powered
//           insights, it keeps projects moving without friction.
//         </p>

//         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-6">
//           Sign up, It's Free
//         </button>

//         {/* Auto-scroll Feature Row */}
//         <div
//           ref={scrollRef}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="w-full overflow-x-auto hide-scrollbar mt-12"
//         >
//           <div className="flex gap-4 justify-start px-4 py-4 min-w-max">
//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelected(item)}
//                 className={`flex flex-col items-center justify-center cursor-pointer rounded-xl w-32 h-32 md:w-36 md:h-36 transition-all duration-300 ${
//                   selected.id === item.id
//                     ? "bg-blue-50 border-2 border-blue-100 scale-110 shadow-lg"
//                     : "bg-white border border-gray-200 hover:shadow-md hover:scale-105"
//                 }`}
//               >
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-10 h-10 mb-2 object-contain"
//                 />
//                 <p
//                   className={`font-medium text-sm md:text-base ${
//                     selected.id === item.id ? "text-blue-600" : "text-gray-800"
//                   }`}
//                 >
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ====== Features Details Sections ====== */}
//       <div className="relative z-20 mt-20 space-y-16">
//         <FeatP1 />
//         <FeatP2 />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default FeaturesPage;

// import React, { useState, useEffect, useRef } from "react";
// import Konn3ctHeader from "../Componenets/Konn3ctHeader";
// import AI from "../Images/Konn3ct Images/sparkles.png";
// import NT from "../Images/Konn3ct Images/note-02.png";
// import LB from "../Images/Konn3ct Images/internet-antenna-01.png";
// import SD from "../Images/Konn3ct Images/check-list.png";
// import smile from "../Images/Konn3ct Images/smile.png";
// // import frame from "../Images/Konn3ct Images/Frame 1444.png";
// import polls from "../Images/Konn3ct Images/quiz-03.png"
// import support from "../Images/Konn3ct Images/customer-support (1).png";
// import dashboard from "../Images/Konn3ct Images/dashboard-speed-02.png"
// import FeatP1 from "./Konn3ctF 1"
// import FeatP2 from "./Konn3ctF 2"

// const FeaturesPage = () => {
//   const features = [
//     { id: 1, title: "AI", icon: AI },
//     { id: 2, title: "Low Bandwidth", icon: LB },
//     { id: 3, title: "Note Taker", icon: NT },
//     { id: 4, title: "Scheduling", icon: SD },
//     { id: 5, title: "Reactions", icon: smile },
//     { id: 6, title: "Polls", icon: polls },
//     { id: 7, title: "Dashboard", icon: dashboard },
//     { id: 8, title: "24/7 Support", icon: support },
//     { id: 9, title: "Reactions", icon: "feature-reactions.jpg" },
//     { id: 10, title: "Live Caption", icon: "feature-caption.jpg" },
//     { id: 11, title: "Audio Boost", icon: "feature-audio.jpg" },
//     { id: 12, title: "Highlights", icon: "feature-low.jpg" },
//     { id: 13, title: "Play back", icon: "feature-low.jpg" },
//     { id: 14, title: "Rooms", icon: "feature-low.jpg" },
//     { id: 15, title: "Donate", icon: "feature-low.jpg" },
//     { id: 16, title: "Polls", icon: "feature-low.jpg" },
//     { id: 17, title: "Calendar", icon: "feature-low.jpg" },
//     { id: 18, title: "Doc", icon: "feature-low.jpg" },
//   ];

//   const [selected, setSelected] = useState(features[0]);
//   const scrollRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const autoScroll = () => {
//       if (!scrollContainer || isHovered) return;
//       scrollAmount += 1;
//       if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollAmount = 0;
//       }
//       scrollContainer.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     };

//     const interval = setInterval(autoScroll, 50);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <div className="relative z-10 min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-white to-white text-white font-sans py-20 px-6">
//       {/* Navbar */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
//             repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
//           `,
//         }}
//       />

//       <Konn3ctHeader />

//       <section className="relative text-center mt-20 px-6 w-full">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Every feature your team
//           <br />
//           needs to work faster
//         </h1>
//         <p className="mt-4 text-base  max-w-xl mx-auto text-black">
//           Konn3ct brings together everything your team needs to work smarter and
//           faster. From seamless communication and task management to AI-powered
//           insights, it keeps projects moving without friction.
//         </p>

//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition mt-4">
//           Sign up, It's Free
//         </button>

//         <div
//           ref={scrollRef}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="w-full overflow-x-auto hide-scrollbar mt-10"
//         >
//           <div className="flex gap-4 justify-start px-6 py-6 min-w-max">
//             {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10"> */}

//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelected(item)}
//                 className={`flex flex-col items-center justify-center cursor-pointer rounded-xl w-32 h-32 md:w-36 md:h-36 transition-all duration-300 ${
//                   selected.id === item.id
//                     ? "bg-blue-50 border-2 border-gray-100 scale-110 shadow-lg"
//                     : "bg-white border border-gray-200 hover:shadow-md hover:scale-105"
//                 }`}
//               >
//                 {/* Icon */}
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-8 h-8 md:w-10 md:h-10 mb-2 object-contain"
//                 />
//                 {/* Title */}
//                 <p
//                   className={`font-medium text-sm md:text-base ${
//                     selected.id === item.id ? "text-blue-600" : "text-gray-800"
//                   }`}
//                 >
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//               <FeatP1/>

//  <FeatP2/>

//       </section>
//     </div>
//   );
// };
// export default FeaturesPage;

// import React, { useState } from "react";

// const FeaturesPage = () => {
//   // Feature list
//   const features = [
//     { id: 1, title: "Konn3ct AI", image: "feature-ai.jpg" },
//     { id: 2, title: "eCinema", image: "feature-ecinema.jpg" },
//     { id: 3, title: "Store", image: "feature-store.jpg" },
//     { id: 4, title: "Scheduling", image: "feature-scheduling.jpg" },
//     { id: 5, title: "Chat", image: "feature-chat.jpg" },
//     { id: 6, title: "Plans", image: "feature-plans.jpg" },
//     { id: 7, title: "Dashboard", image: "feature-dashboard.jpg" },
//     { id: 8, title: "Whiteboard", image: "feature-whiteboard.jpg" },
//     { id: 9, title: "Reactions", image: "feature-reactions.jpg" },
//     { id: 10, title: "Live Caption", image: "feature-caption.jpg" },
//     { id: 11, title: "Audio Boost", image: "feature-audio.jpg" },
//     { id: 12, title: "Low Bandwidth", image: "feature-low.jpg" },
//   ];

//   // Default active feature
//   const [selected, setSelected] = useState(features[0]);

//   return (
//      <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-white to-white text-white font-sans">
//       {/* Navbar */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
//             repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
//           `,
//         }}
//       />
//       <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-white/20">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           <a href="#" className="text-black hover:text-blue-400">
//             Meet
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Features
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Customers
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Pricing
//           </a>
//           <div className="group relative">
//             <button className="flex items-center gap-1 text-black hover:text-blue-400">
//               Company
//               <span className="text-xs">▼</span>
//             </button>
//             <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 About Us
//               </a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Careers
//               </a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </nav>

//         <div className="flex space-x-3">
//           <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white  hover:text-blue-400 transition shadow-lg">
//             Login
//           </button>
//           <button className="px-4 py-2 text-sm bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//             Sign up, It’s Free
//           </button>
//         </div>
//       </header>

//       {/* <div className="text-center max-w-3xl mb-10"> */}
//     <section className="relative text-center mt-20 px-6 w-full">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           Every feature your team<br />needs to work faster
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg mb-6">
//           Konn3ct brings together everything your team needs to work smarter and faster.
//           From seamless communication and task management to AI-powered insights,
//           it keeps projects moving without friction.
//         </p>

//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
//           Sign up, It's Free
//         </button>
//       </div>

//       {/* ===== FEATURE CARDS ROW ===== */}
//     <div className="w-full overflow-x-auto hide-scrollbar">

//     <div className="flex gap-4 justify-start px-6 py-6 min-w-max">
//       {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10"> */}
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl w-32 h-32 md:w-36 md:h-36 hover:shadow-md transition"
//           >
//             {/* Space for icon/image */}
//             <div className="w-8 h-8 bg-gray-100 rounded-md mb-2"></div>

//             {/* Feature name */}
//             <p className="text-gray-800 font-medium text-sm md:text-base">
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//      </div>
//      <h2 className="text-2xl font-bold text-gray-900 mb-8">
//           What You Can Do with Konn3ct
//         </h2>
//       {/* ===== Section 1: What You Can Do ===== */}
//       <section className="max-w-6xl mx-auto py-16 px-4">

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side – Feature List */}
//           <div className="w-full md:w-1/3 border-r border-gray-200">
//             <ul className="space-y-3">
//               {features.map((feature) => (
//                 <li key={feature.id}>
//                   <button
//                     onClick={() => setSelected(feature)}
//                     className={`w-full text-left px-4 py-2 rounded-md transition ${
//                       selected.id === feature.id
//                         ? "bg-blue-50 text-blue-600 font-semibold"
//                         : "text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {/* icon placeholder */}
//                     <span className="inline-block w-5 h-5 bg-gray-200 mr-2 rounded"></span>
//                     {feature.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side – Feature Display */}
//           <div className="w-full md:w-2/3 flex flex-col items-center justify-center text-center">
//             {/* image placeholder */}
//             <div className="w-full max-w-lg h-72 bg-gray-100 rounded-xl mb-4 flex items-center justify-center border">
//               <span className="text-gray-400">[ Image for {selected.title} ]</span>
//             </div>

//             <p className="text-gray-600 max-w-md">
//                 Your intelligent partner for seamless collaboration. Designed to power productivity, it integrates directly into your team’s workflow, helping you plan, communicate, and execute with ease. From automating routine tasks to generating insights in real time,
//               <span className="font-medium">{selected.title}</span>

//                is useful, and how it helps users collaborate better.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===== Section 2: Blue Footer CTA ===== */}
//       <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-16 mt-10 rounded-lg">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Text */}
//           <div className="md:w-1/2">
//             <h3 className="text-3xl font-semibold mb-4">
//               One AI for all your collaboration
//             </h3>
//             <p className="text-blue-100 mb-6">
//               Unify meetings, teamwork, and workflows with company-wide
//               intelligence in one simple platform.
//             </p>
//             <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-blue-100 transition">
//               Sign up, it’s free
//             </button>
//           </div>

//           {/* Right Image Placeholder */}
//           <div className="md:w-1/2 flex justify-center">
//             <div className="w-72 h-72 bg-blue-400/30 rounded-xl flex items-center justify-center border border-white/20">
//               <span className="text-white/80">[ Footer Image ]</span>
//             </div>
//           </div>
//         </div>
//       </section>
// </section>
//     </div>

//   );
// }
// export default FeaturesPage;

// import { Wifi, MessageCircle, Calendar, Mic, Video, Headphones } from "lucide-react";
// import feature1 from "../assets/feature1.jpg";
// import feature2 from "../assets/feature2.jpg";
// import feature3 from "../assets/feature3.jpg";
// import feature4 from "../assets/feature4.jpg";
// import feature5 from "../assets/feature5.jpg";
// import feature6 from "../assets/feature6.jpg";

// export default function FeaturesSection() {
// Features data
//   const features = [
//     { id: 1, title: "Low Bandwidth", icon: <Wifi size={24} />, image: feature1, description: "Optimized for low internet speeds without losing quality." },
//     { id: 2, title: "Team Chat", icon: <MessageCircle size={24} />, image: feature2, description: "Communicate instantly with your team from one place." },
//     { id: 3, title: "Scheduling", icon: <Calendar size={24} />, image: feature3, description: "Plan meetings and set reminders with one click." },
//     { id: 4, title: "Voice Notes", icon: <Mic size={24} />, image: feature4, description: "Send quick voice updates instead of typing." },
//     { id: 5, title: "Live Caption", icon: <Video size={24} />, image: feature5, description: "Get real-time captions for every meeting." },
//     { id: 6, title: "Audio Boost", icon: <Headphones size={24} />, image: feature6, description: "Enhance sound clarity and reduce background noise." },
//   ];

//   const [selectedFeature, setSelectedFeature] = useState(features[2]); // Default active (Scheduling)

//   return (
//     <section className="py-20 bg-white text-center">
//       {/* Headline Section */}
//       <div className="max-w-3xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Every feature your team needs to work faster
//         </h2>
//         <p className="text-gray-600 mb-6">
//           From seamless communication to powerful AI features, Konn3ct gives your team
//           everything needed to collaborate effortlessly and efficiently.
//         </p>
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
//           Sign up, it’s free
//         </button>
//       </div>

{
  /* Clickable Features Row */
}
{
  /* <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
        {features.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFeature(f)}
            className={`flex flex-col items-center justify-center w-28 h-28 rounded-xl border transition-all ${
              selectedFeature.id === f.id
                ? "border-blue-600 bg-blue-50 text-blue-600 shadow-md"
                : "border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700"
            }`}
          >
            <div>{f.icon}</div>
            <p className="mt-2 text-sm font-medium">{f.title}</p>
          </button>
        ))}
      </div> */
}

{
  /* Feature Display Section */
}
{
  /* <div className="mt-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-gray-50">
          <img
            src={selectedFeature.image}
            alt={selectedFeature.title}
            className="w-full object-cover"
          />
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {selectedFeature.title}
            </h3>
            <p className="text-gray-600">{selectedFeature.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
} */
}
