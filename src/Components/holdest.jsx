// src/components/HeroSection.jsx
import React from "react";

export default function Landing() {
  return (
    <div className="w-full px-6 py-12 md:px-20 md:py-20 bg-white">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-500 font-medium">
          10x your work with smarter tools
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Smart tools for smarter workflows
        </h1>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        {/* Left Image Placeholder */}
        <div className="w-full h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-gray-400">[Insert Image Here]</p>
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-2">Konn3ct AI</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            One AI for all your collaboration
          </h2>
          <p className="text-gray-600 mb-6">
            Unify meetings, teamwork, and workflows with company-wide
            intelligence all in one platform.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Sign up, It’s Free
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-2">Konn3cted AI</h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your AI workspace for teamwork
          </h2>
          <p className="text-gray-600 mb-6">
            From meetings to decisions, Konn3ct brings every aspect of
            collaboration together under one intelligent hub.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Try Konn3ct AI
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-gray-400">[Insert Image Here]</p>
        </div>
      </div>
    </div>
  );
}




//  import React from 'react'
//  import Logo from "../Images/Konn3ct Images/konn3ct_logo.png"
 
 
//  const Landing = () => {
//   return (
//     <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans">
//       {/* Navbar */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//         }}
//       />
//        <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-white/20">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           {/* <div className="group relative">
//           <button className="flex items-center gap-1 text-black  hover:text-blue-400">
//             Meet
//             <span className="text-xs">▼</span> 
//           </button>
//           <div className="absolute left-0 mt-2 w-40 text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//             <a href="#" className="block px-4 py-2  hover:text-blue-400">Overview</a>
//             <a href="#" className="block px-4 py-2 hover:text-blue-400">Features</a>
//             <a href="#" className="block px-4 py-2 hover:text-blue-400">Pricing</a>
//           </div>
//         </div> */}
//           <a href="#" className="text-black hover:text-blue-400">Meet</a>
//           <a href="#" className="text-black hover:text-blue-400">Features</a>
//           <a href="#" className="text-black hover:text-blue-400">Customers</a>
//           <a href="#" className="text-black hover:text-blue-400">Pricing</a>
//         <div className="group relative">
//           <button className="flex items-center gap-1 text-black hover:text-blue-400">
//             Company
//             <span className="text-xs">▼</span>
//           </button>
//           <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
//             <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
//           </div>
//         </div>        
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

//       {/* Hero Section */}
//       <section className="relative text-center mt-20 px-6 w-full">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Smarter Meetings. <br /> Powered by AI.
//         </h1>
//         <p className="mt-4 text-base  max-w-2xl mx-auto">
//           One intelligent platform for meetings, <br /> teamwork, and seamless communication.
//         </p>

//         <div className="mt-6 flex justify-center">
//            <div className="relative w-72">
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
//           />
//           {/* <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
//             Get started
//           </button> */}
//           <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//           </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2">Free Forever. No Credit Card.</p>
//       </section>

//       {/* Feature Grid */}
//       <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-20 px-6">

//         {[
//           "Note Taker",
//           "Audio Boost",
//           "Live Caption",
//           "Translator",
//           "Scheduling",
//           "Playback",
//           "AI",
//           "Reactions",
//           "Rooms",
//           "Doc",
//           "eCinema",
//           "Calendar",
//           "Polls",
//           "Dashboard",
//           "24/7 Support",
//         ].map((feature, i) => (
//            <div
//             key={i}
//             className={`flex items-center justify-center h-32 rounded-lg bg-white/10 text-lg font-medium hover:bg-white/20 transition ${
//               feature === "AI" || feature === "Live Caption" || feature === "Translator" || feature === "Donate"
//                 ? "col-span-2"
//                 : ""
//             }`}
//           >
//             {feature}
//           </div>
//         ))}
//         </section>
//             <div className="min-h-screen flex items-center justify-center p-10">



//       </div>
//     </div>
//   );
// }
// export default Landing;