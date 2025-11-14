import React from "react";
import image2 from "../Images/Konn3ct Images/frame 1111.png";
import image3 from "../Images/Konn3ct Images/frame 112.png";

const App2 = () => {
  return (
    <div className="relative z-10 w-full py-16 px-4 sm:px-8 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-2 sm:mb-1">
        <p className="text-[#1A4699] font-medium font-shantell">
          10x your work with smarter tools
        </p>
        {/* <h3 className="text-2xl md:text-base font-bold sm:font-normal mt-2 text-black">
          Smart tools for smarter workflows
        </h3> */}

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold sm:font-semibold md:font-bold mt-2 text-black">
          Smart tools for smarter workflows
        </h3>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10 sm:mb-10 ">
        {/* <div className="w-full md:w-fit h-[220px] sm:h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center"> */}
        <div className="mt-8 mx-auto w-full max-w-4xl h-[300px] md:h-[400px] bg-gray-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
          <img src={image2} alt="Workspace" className="w-full h-full" />
        </div>

        <div className="w-full md:w-full text-center md:text-left">
          <h3 className="text-[#1A4699] font-shantell font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
            Konn3ct AI
          </h3>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black leading-snug">
            One AI for all your collaboration
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            Unify meetings, teamwork, and workflows with company-wide
            intelligence all in one platform.
          </p>
          <button className="bg-[#1A4699] text-white px-5 sm:px-6 py-2 rounded-md text-sm sm:text-base hover:bg-blue-500 transition shadow-sm">
            Sign up, It’s Free
          </button>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* <div> */}
        <div className="w-full md:w-full text-center md:text-left">
          <h3 className="text-[#1A4699] font-shantell font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
            Konn3cted AI
          </h3>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-black leading-snug">
            Your AI workspace for teamwork
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            From meetings to decisions, Konn3ct brings every aspect of
            collaboration together under one intelligent hub.
          </p>
          <button className="bg-[#1A4699] text-white px-5 sm:px-6 py-2 rounded-md text-sm sm:text-base hover:bg-blue-500 transition shadow-sm">
            Try Konn3ct AI
          </button>
        </div>

        {/* <div className="w-full md:w-fit h-[220px] sm:h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center"> */}
        <div className="mt-8 mx-auto w-full max-w-4xl h-[300px] md:h-[400px] bg-gray-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
          <img src={image3} alt="Workspace" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default App2;

// import React from 'react';
// import image2 from "../Images/Konn3ct Images/frame 1111.png"
// import image3 from "../Images/Konn3ct Images/frame 112.png"

// const App2 = () => {
//   return (
//     <div className="relative z-10 w-full py-20 px-6 md:px-20 md:py-20 bg-white">
//       <div className="text-center mb-12">
//         <p className="text-sm text-blue-500 font-medium">
//           10x your work with smarter tools
//         </p>
//         <h1 className="text-3xl md:text-4xl font-bold mt-2 text-black">
//           Smart tools for smarter workflows
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
//         {/* <div className="w-[500px] h-[280px] md:h-[360px] bg-gray-100 border-none border-gray-300 rounded-xl flex items-center justify-center"> */}
//                <div className="w-full md:w-fit h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">

//           <img
//             src={image2}
//             alt="Workspace"
//             className="w-full h-full"
//           />
//         </div>

//         <div>
//           <h3 className="text-blue-600 font-semibold mb-2">Konn3ct AI</h3>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//             One AI for all your collaboration
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Unify meetings, teamwork, and workflows with company-wide
//             intelligence all in one platform.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
//             Sign up, It’s Free
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         <div>
//           <h3 className="text-blue-600 font-semibold mb-2">Konn3cted AI</h3>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//             Your AI workspace for teamwork
//           </h2>
//           <p className="text-gray-600 mb-6">
//             From meetings to decisions, Konn3ct brings every aspect of
//             collaboration together under one intelligent hub.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
//             Try Konn3ct AI
//           </button>
//         </div>

//         {/* <div className="w-[500px] h-[280px] md:h-[360px] bg-gray-100 border-none border-gray-300 rounded-xl flex items-center justify-center"> */}
//                  <div className="w-full md:w-fit h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">

//          <img
//             src={image3}
//             alt="Workspace"
//             className="w-full h-full "
//           />
//         </div>

//       </div>
//     </div>

//  );
// }

// export default App2;

// import React from 'react';
// import image2 from "../Images/Konn3ct Images/Frame 1410102945.png"
// import image3 from "../Images/Konn3ct Images/Frame 1410102951.png"

// const App2 = () => {
//   return (
//     <div className="relative z-10 w-full py-20 px-6 md:px-20 md:py-20 bg-white">
//       <div className="text-center mb-12">
//         <p className="text-sm text-blue-500 font-medium">
//           10x your work with smarter tools
//         </p>
//         <h1 className="text-3xl md:text-4xl font-bold mt-2 text-black">
//           Smart tools for smarter workflows
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
//         <div className="w-[500px] h-[280px] md:h-[360px] bg-gray-100 border-none border-gray-300 rounded-xl flex items-center justify-center">
//           <img
//             src={image2}
//             alt="Workspace"
//             className="w-full h-full"
//           />
//         </div>

//         <div>
//           <h3 className="text-blue-600 font-semibold mb-2">Konn3ct AI</h3>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//             One AI for all your collaboration
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Unify meetings, teamwork, and workflows with company-wide
//             intelligence all in one platform.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
//             Sign up, It’s Free
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         <div>
//           <h3 className="text-blue-600 font-semibold mb-2">Konn3cted AI</h3>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//             Your AI workspace for teamwork
//           </h2>
//           <p className="text-gray-600 mb-6">
//             From meetings to decisions, Konn3ct brings every aspect of
//             collaboration together under one intelligent hub.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
//             Try Konn3ct AI
//           </button>
//         </div>

//         <div className="w-[500px] h-[280px] md:h-[360px] bg-gray-100 border-none border-gray-300 rounded-xl flex items-center justify-center">
//          <img
//             src={image3}
//             alt="Workspace"
//             className="w-full h-full "
//           />
//         </div>

//       </div>
//     </div>

//  );
// }

// export default App2;
