// import React, { useState } from "react";
// import image1 from "../Images/Rectangle 3 (1).png";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/Chams.png";
// import NCS from "../Images/Konn3ct Images/Ncs.png";
// import Meyer from "../Images/Konn3ct Images/Meyer.png";
// import IntraHub from "../Images/Konn3ct Images/Intrahub.png";
// import ABK from "../Images/Konn3ct Images/ABK Club.png";
// import Bgshape from "../Images/Konn3ct Images/Background shape.png";

// const App1 = () => {
//   const [active, setActive] = useState(0);

//   const features = [
//     {
//       title: "Workflows That Work for You",
//       description:
//         "Automate follow-ups, track progress, and keep your team aligned.",
//       image: Bgshape,
//     },
//     {
//       title: "Decisions Made Smarter",
//       description:
//         "Gain insights powered by AI to make faster, data-driven decisions.",
//       image: Bgshape,
//     },
//     {
//       title: "Collaborate Without Limits",
//       description:
//         "Bring your team together in one seamless platform for teamwork.",
//       image: Bgshape,
//     },
//     {
//       title: "Meet with Intelligence",
//       description:
//         "AI-driven summaries and real-time transcription for efficient meetings.",
//       image: image1,
//     },
//   ];

//   return (
//     <section className="relative z-10 bg-white text-gray-800 py-20 px-6 w-full overflow-hidden">
//       {/* ===== Trusted Companies ===== */}
//       <div className="max-w-6xl mx-auto text-center mb-28">
//         <p className="text-lg font-medium mb-10 text-gray-700">
//           Trusted by 15,000+ individuals and companies
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
//           {[Nafdac, Chams, NCS, Meyer, IntraHub, ABK].map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               alt={`Company-${i}`}
//               className="h-20 w-auto hover:scale-105 transition-transform duration-300"
//             />
//           ))}
//         </div>
//       </div>

//       {/* ===== Content Section ===== */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
//         {/* ==== Left Side: Text List ==== */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
//             The all-in-one workspace
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//             Do your most important work, faster
//           </h2>

//           <div className="mt-8 flex flex-col gap-4">
//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className={`cursor-pointer border-l-4 pl-4 transition-all duration-300 ${
//                   active === index
//                     ? "border-blue-600 text-blue-700 bg-blue-50 rounded-md py-2"
//                     : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800"
//                 }`}
//               >
//                 <h3
//                   className={`text-lg font-semibold transition-colors duration-300 ${
//                     active === index ? "text-blue-700" : "text-gray-800"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//                 {active === index && (
//                   <p className="text-sm mt-2 text-gray-600 leading-relaxed">
//                     {item.description}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==== Right Side: Image with Shape BG ==== */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-center">
//           <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

//           <div className="relative w-[90%] md:w-[500px] h-[320px] border border-gray-200 rounded-2xl shadow-md bg-white overflow-hidden flex justify-center items-center transition-all duration-500">
//             <img
//               src={features[active].image}
//               alt={features[active].title}
//               className="rounded-xl shadow-lg transition-all duration-700 w-full h-full object-cover hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App1;

import React, { useState } from "react";
import image1 from "../Images/Konn3ct Images/Rectangle 3 (1).png";
import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
import Chams from "../Images/Konn3ct Images/Chams.png";
import NCS from "../Images/Konn3ct Images/Ncs.png";
import Meyer from "../Images/Konn3ct Images/Meyer.png";
import IntraHub from "../Images/Konn3ct Images/Intrahub.png";
import ABK from "../Images/Konn3ct Images/ABK Club.png";
import Bgshape from "../Images/Konn3ct Images/Background shape.png";

const App1 = () => {
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "Workflows That Work for You",
      description:
        "Automate follow-ups, track progress, and keep your team aligned.",
      image: Bgshape,
    },
    {
      title: "Decisions Made Smarter",
      description:
        "Gain insights powered by AI to make faster, data-driven decisions.",
      image: Bgshape,
    },
    {
      title: "Collaborate Without Limits",
      description:
        "Bring your team together in one seamless platform for teamwork.",
      image: Bgshape,
    },
    {
      title: "Meet with Intelligence",
      description:
        "AI-driven summaries and real-time transcription for efficient meetings.",
      image: image1,
    },
  ];

  return (
    <div className="relative z-10 bg-white text-gray-800 py-20 px-6 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-28">
        <p className="text-lg font-medium mb-10 text-gray-700">
          Trusted by 15,000+ Individuals and companies.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
          {[Nafdac, Chams, NCS, Meyer, IntraHub, ABK].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Company-${i}`}
              className="h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ===== Heading Section ===== */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2 font-Shantell">
            The all-in-one workspace{" "}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Do your most important work, faster
          </h2>
        </div>

        {/* <div className="relative py-20 bg-white overflow-hidden"> */}

        {/* ===== Content Grid ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
          {/* Left Side Feature List */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`cursor-pointer transition-all border-l-4 pl-4 duration-300 ${
                  active === index
                    ? "border-blue-600 text-blue-700 scale-105 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:scale-105"
                }`}
              >
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    active === index ? "text-blue-700" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                {active === index && (
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Image */}

          {/* <div className="w-full md:w-1/2 flex justify-center" */}
          <div
            className="w-[500px] h-[280px] md:h-[360px] border border-gray-300 rounded-xl flex items-center justify-center"
            // style={{ backgroundImage: `url(${Bgshape})` }}
          >
            <img
              src={features[active].image}
              alt={features[active].title}
              className="rounded-xl shadow-lg transition-all duration-700 w-full h-full object-cover hover:scale-105"
              // className="rounded-xl shadow-lg transition-all duration-500 w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App1;
