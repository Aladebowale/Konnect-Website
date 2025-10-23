import React from "react";
import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
import LeafL from "../Images/Konn3ct Images/leaf left.png";
import LeafR from "../Images/Konn3ct Images/right leaf.png";

const Cust1 = () => {
  return (
    <section className="relative bg-white py-16 px-6 lg:px-20 mt-[-2px] md:mt-0 z-10">
      {/* WHITE TOP SEPARATOR */}
      <div className="absolute -top-8 left-0 right-0 h-24 bg-white"></div>

      {/* GRID OF 6 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {/* CARD 1 */}
        <div className="border border-gray-200 p-8 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600 min-h-[320px] flex flex-col">
          {/* Logo */}
          <div className="h-12 mb-8 flex items-start">
            <img
              src={Nafdac}
              alt="NAFDAC Logo"
              className="h-full object-contain"
            />
          </div>

          {/* Text */}
          <p className="text-gray-800 font-medium mt-auto leading-snug">
            Why NAFDAC partnered with konn3ct over Zoom and Google Meet
          </p>

          {/* Link */}
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hover:underline "
          >
            Learn More →
          </a>
        </div>

        {/* CARD 2 */}
        <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
          <div className="h-12 mb-4 flex items-center"></div>
          <p className="text-gray-800 font-medium mb-3 leading-snug">
            How Chams Plc Transformed Team Management with konn3ct AI-Powered
            capabilities
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* CARD 3 */}
        <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
          <div className="h-12 mb-4 flex items-center"></div>
          <p className="text-gray-800 font-medium mb-3 leading-snug">
            How IntraHub Transformed Team Management with konn3ct AI-Powered
            capabilities
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* CARD 4 */}
        <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600 min-h-[320px] h-full">
          <div className="h-12 mb-4 flex items-center">
            <img
              src={Nafdac}
              alt="NAFDAC Logo"
              className="h-full object-contain"
            />
          </div>
          <p className="text-gray-800 font-medium mb-3 leading-snug">
            How Meyer Plc Transformed Team Management with konn3ct AI-Powered
            capabilities{" "}
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* CARD 5 */}
        <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
          <div className="h-12 mb-4 flex items-center"></div>
          <p className="text-gray-800 font-medium leading-snug">
            How NCS Transformed Team Management with konn3ct AI-Powered
            capabilities
          </p>
        </div>

        {/* CARD 6 */}
        <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
          <div className="h-12 mb-4 flex items-center"></div>
          <p className="text-gray-800 font-medium leading-snug">
            How Abeokuta Club Transformed Team Management with konn3ct
            AI-Powered capabilities
          </p>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div className="flex items-center justify-center gap-3 text-gray-800 text-lg font-semibold relative z-10">
        <span className="inline-block h-10 w-6">
          <img src={LeafL} alt="Leaf Left" className="h-full object-contain" />
        </span>

        <p className="text-center">
          Trusted by 15,000+ Individuals and companies.
        </p>

        <span className="inline-block h-10 w-6">
          <img src={LeafR} alt="Leaf Right" className="h-full object-contain" />
        </span>
      </div>
    </section>
  );
};

export default Cust1;

// import React from "react";
// //  import Logo from "../Images/konn3ct_logo.png";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// //  import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import LeafL from "../Images/Konn3ct Images/leaf left.png";
// import LeafR from "../Images/Konn3ct Images/right leaf.png";

// const Cust1 = () => {
//   return (
//     <section className="bg-white py-16 px-6 lg:px-20 space-x-10">
//       {/* GRID OF 6 CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//         {/* CARD 1 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             <img
//               src={Nafdac}
//               alt="NAFDAC Logo"
//               className="h-full object-contain"
//             />
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             Why NAFDAC partnered with konn3ct over Zoom and Google Meet
//           </p>
//           <a
//             href="#"
//             className="text-blue-600 font-semibold text-sm hover:underline"
//           >
//             Learn More →
//           </a>
//         </div>

//         {/* CARD 2 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/chams.png" alt="Chams Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             How Chams Plc Transformed Team Management with konn3ct AI-Powered
//             capabilities
//           </p>
//           <a
//             href="#"
//             className="text-blue-600 font-semibold text-sm hover:underline"
//           >
//             Learn More →
//           </a>
//         </div>

//         {/* CARD 3 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/intrahub.png" alt="IntraHub Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             How IntraHub Transformed Team Management with konn3ct AI-Powered
//             capabilities
//           </p>
//           <a
//             href="#"
//             className="text-blue-600 font-semibold text-sm hover:underline"
//           >
//             Learn More →
//           </a>
//         </div>

//         {/* CARD 4 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/meyer.png" alt="Meyer Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How Meyer Plc Transformed Team Management with konn3ct AI-Powered
//             capabilities
//           </p>
//         </div>

//         {/* CARD 5 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/ncs.png" alt="NCS Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How NCS Transformed Team Management with konn3ct AI-Powered
//             capabilities
//           </p>
//         </div>

//         {/* CARD 6 */}
//         <div className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white hover:border-green-600">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/abeokuta.png" alt="Abeokuta Club Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How Abeokuta Club Transformed Team Management with konn3ct
//             AI-Powered capabilities
//           </p>
//         </div>
//       </div>

//       {/* TRUST SECTION */}
//       <div className="flex items-center justify-center gap-3 text-gray-800 text-lg font-semibold">
//         {/* Leaf icon left placeholder */}
//         <span className="inline-block h-10 w-6">
//           <img src={LeafL} alt="Leaf Left" className="h-full object-contain" />
//         </span>

//         <p className="text-center">
//           Trusted by 15,000+ Individuals and companies.
//         </p>

//         {/* Leaf icon right placeholder */}
//         <span className="inline-block h-10 w-6">
//           <img src={LeafR} alt="Leaf Right" className="h-full object-contain" />
//         </span>
//       </div>
//     </section>
//   );

//  return (
//     <section className="bg-white py-16 px-6 lg:px-20">
//       {/* --- CASE STUDY GRID (ROW 1) --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         {/* Company 1 */}

//         <div className="border border-dashed border-blue-400 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             <img src={Nafdac} alt="NAFDAC Logo" className="h-full object-contain" />
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             Why NAFDAC partnered with konn3ct over Zoom and Google Meet
//           </p>
//           <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
//             Learn More →
//           </a>
//         </div>

//         {/* Company 2 */}
//         <div className="border border-dashed border-blue-400 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/chams.png" alt="Chams Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             How Chams Plc Transformed Team Management with konn3ct AI-Powered capabilities
//           </p>
//           <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
//             Learn More →
//           </a>
//         </div>

//         {/* Company 3 */}
//         <div className="border border-dashed border-blue-400 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/intrahub.png" alt="IntraHub Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium mb-3 leading-snug">
//             How IntraHub Transformed Team Management with konn3ct AI-Powered capabilities
//           </p>
//           <a href="#" className="text-blue-600 font-semibold text-sm ">
//             Learn More →
//           </a>
//         </div>
//       </div>

//       {/* --- CASE STUDY GRID (ROW 2) --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//         <div className="border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/meyer.png" alt="Meyer Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How Meyer Plc Transformed Team Management with konn3ct AI-Powered capabilities
//           </p>
//         </div>

//         <div className="border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/ncs.png" alt="NCS Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How NCS Transformed Team Management with konn3ct AI-Powered capabilities
//           </p>
//         </div>

//         <div className="border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
//           <div className="h-12 mb-4 flex items-center">
//             {/* <img src="/logos/abeokuta.png" alt="Abeokuta Club Logo" className="h-full object-contain" /> */}
//           </div>
//           <p className="text-gray-800 font-medium leading-snug">
//             How Abeokuta Club Transformed Team Management with konn3ct AI-Powered capabilities
//           </p>
//         </div>
//       </div>

//       {/* --- TRUST SECTION --- */}
//       <div className="flex items-center justify-center gap-3 text-gray-800 text-lg font-semibold">
//         {/* Leaf icon left placeholder */}
//         <span className="inline-block h-6 w-6">
//           {/* <img src="/icons/leaf-left.png" alt="Leaf Left" className="h-full object-contain" /> */}
//         </span>

//         <p className="text-center">
//           Trusted by 15,000+ Individuals and companies.
//         </p>

//         {/* Leaf icon right placeholder */}
//         <span className="inline-block h-6 w-6">
//           {/* <img src="/icons/leaf-right.png" alt="Leaf Right" className="h-full object-contain" /> */}
//         </span>
//       </div>
//     </section>
//   );

//    return (

//     <section className="bg-white min-h-screen flex flex-col items-center justify-center px-4">

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl w-full mb-16">
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             Why Nafiac partnered with Konn3ct over Zoom for Google meet
//           </h3>
//           <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
//             Learn More
//           </a>
//         </div>
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             How Chams Plc Transformed Team Management with Konn3ct AI-Powered
//             capabilities
//           </h3>
//         </div>
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             How Intravate Transformed Team Management with Konn3ct AI-Powered
//             capabilities
//           </h3>
//         </div>
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             How Moyer Plc Transformed Team Management with Konn3ct AI-Powered
//             capabilities
//           </h3>
//         </div>
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             How NCS Transformed Team Management with Konn3ct AI-Powered
//             capabilities
//           </h3>
//         </div>
//         <div className="border rounded-lg p-6 hover:shadow-md transition">
//           <h3 className="text-gray-700 font-medium mb-2">
//             How Adekunle Club Transformed Team Management with Konn3ct
//             AI-Powered capabilities
//           </h3>
//         </div>
//       </div>

//       {/* === TRUST SECTION === */}
//       <div className="text-gray-600 font-medium mb-12">
//         Trusted by <span className="text-black font-semibold">15,000+</span>{" "}
//         Individuals and companies.
//       </div>

//       {/* === FOOTER SECTION WITH WAVY BACKGROUND === */}
//       <div className="relative w-full overflow-hidden">
//         {/* Blue wavy background shape */}
//         <img
//           src="/bg-shape.png" // replace with your wavy background file path
//           alt="Background Shape"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay content */}
//         <div className="relative bg-blue-900/90 w-full py-16 px-6 text-white flex flex-col items-center justify-center space-y-4">
//           <h2 className="text-2xl md:text-3xl font-semibold">
//             One AI for all your collaboration
//           </h2>
//           <p className="max-w-2xl text-center text-gray-200">
//             Unify meetings, teamwork, and workflows with company-wide
//             intelligence all in one platform.
//           </p>
//           <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
//             Sign up. It’s Free
//           </button>
//         </div>
//       </div>
//     </section>

//  );
// };

// export default Cust1;
