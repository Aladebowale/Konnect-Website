import React, { useState } from "react";

const FeatP1 = () => {
  const features = [
    { id: 1, title: "AI" },
    { id: 2, title: "Low Bandwidth" },
    { id: 3, title: "Note Taker" },
    { id: 4, title: "Scheduling" },
    { id: 5, title: "Reactions" },
    { id: 6, title: "Plans" },
    { id: 7, title: "Dashboard" },
    { id: 8, title: "24/7 Support" },
    { id: 9, title: "Reactions" },
    { id: 10, title: "Live Caption" },
  ];

  const [selected, setSelected] = useState(features[0]);

  return (
    <section className="relative bg-white text-gray-800 py-16 px-6 md:px-12 rounded-lg max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What You Can Do with Konn3ct
        </h2>
        {/* <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover how Konn3ct transforms your team’s workflow — from intelligent automation to seamless communication and real-time productivity.
        </p> */}
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Left: List of features */}
        <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-r border-gray-200">
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature.id}>
                <button
                  onClick={() => setSelected(feature)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all border-l-4 ${
                    selected.id === feature.id
                      ? "border-blue-600 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {feature.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Displayed feature info */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-lg h-72 bg-gray-100 rounded-xl mb-6 flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 text-sm md:text-base">
              [ Image or Preview for <span className="font-medium">{selected.title}</span> ]
            </span>
          </div>

          <p className="text-gray-600 max-w-lg leading-relaxed">
            <span className="font-semibold text-blue-600">{selected.title}</span> helps your team
            collaborate effortlessly by integrating automation, AI-driven insights, and smart task management ensuring focus, speed, and alignment across all projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatP1;



// import React, { useState, useEffect, useRef } from "react";
// // import Logo from "../Images/konn3ct_logo.png";


// const FeatP1 = () => {
//   const features = [
//     { id: 1, title: "AI"},
//     { id: 2, title: "Low Bandwidth"},
//     { id: 3, title: "Note Taker"  },
//     { id: 4, title: "Scheduling" },
//     { id: 5, title: "Reactions"  },
//     { id: 6, title: "Plans" },
//     { id: 7, title: "Dashboard"},
//     { id: 8, title: "24/7 Support"},
//     { id: 9, title: "Reactions"},
//     { id: 10, title: "Live Caption"},
//     // { id: 11, title: "Audio Boost", icon: "feature-audio.jpg" },
//     // { id: 12, title: "Highlights", icon: "feature-low.jpg" },
//     // { id: 13, title: "Play back", icon: "feature-low.jpg" },
//     // { id: 14, title: "Rooms", icon: "feature-low.jpg" },
//     // { id: 15, title: "Donate", icon: "feature-low.jpg" },
//     // { id: 16, title: "Polls", icon: "feature-low.jpg" },
//     // { id: 17, title: "Calendar", icon: "feature-low.jpg" },
//     // { id: 18, title: "Doc", icon: "feature-low.jpg" },
//   ];

//   const [selected, setSelected] = useState(features[0]);

//   return (
//     <div className="bg-white text-gray-800 py-16 min-h-screen">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-8 items-center justify-center">
//           What You Can Do with Konn3ct
//         </h2>
//       </div>
//       {/* ===== Section 1: What You Can Do ===== */}
//       <section className="max-w-6xl mx-auto py-16 px-4">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side – Feature List */}
//           <div className="w-full md:w-1/3 border-r border-gray-200 h-32">
//             <ul className="space-y-1">
//               {features.map((feature) => (
//                 <li key={feature.id}>
//                   <button
//                     onClick={() => setSelected(feature)}
//                     className={`w-full text-left px-4 py-2 rounded-none transition-all border-l-4 cursor-pointer ${
//                       selected.id === feature.id
//                         ? " text-blue-600 font-semibold border-blue-600 scale-105"
//                         : "text-gray-700 hover:bg-gray-50 hover:scale-105"
//                     }`}
//                   >
//                     {/* icon placeholder */}
//                     {/* <span className="inline-block w-5 h-5 bg-gray-200 mr-2 rounded"></span> */}
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
//               <span className="text-gray-400">
//                 [ Image for {selected.title} ]
//               </span>
//             </div>

//             <p className="text-gray-600 max-w-md">
//               Your intelligent partner for seamless collaboration. Designed to
//               power productivity, it integrates directly into your team’s
//               workflow, helping you plan, communicate, and execute with ease.
//               From automating routine tasks to generating insights in real time,{" "}
//               <span className="font-medium">{selected.title}</span>{" "}
//               is useful, and how it helps users collaborate better.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default FeatP1;
