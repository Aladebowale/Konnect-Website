import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
import Cust1 from "./kcustomer";
import FeatP2 from "./Konn3ctF 2";
import Footer from "../Components/kfooter";

const CustomerPage = () => {
  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-hidden ">
      {/* ===== Background Grid Lines (Top to before Cust1) ===== */}
      <div
        className="absolute top-0 left-0 w-full h-[76vh] -z-10"
        // style={{
        //   backgroundImage: `
        //     repeating-linear-gradient(to right, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0.25) 1px, transparent 1px, transparent 100px),
        //     repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0.25) 1px, transparent 1px, transparent 100px)
        //   `,
        //   backgroundColor: "white",
        // }}
         style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
          `,
        }}
      />

      {/* ===== Navbar ===== */}
      <Konn3ctHeader />

      {/* ===== Hero Section ===== */}
      <section className="relative text-center mt-8 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          The next generation <br /> runs on Konn3ct
        </h1>

        <p className="mt-8 text-base max-w-2xl mx-auto text-black">
          Join thousands of companies achieving faster resolution times, <br />
          higher team efficiency, and better satisfaction.
        </p>

        {/* Input + Button */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-72">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
              Get started
            </button>
          </div>
        </div>

        <p className="text-sm mt-2 text-black">Free Forever. No Credit Card.</p>

        {/* Company Logos */}
        <div className="flex flex-cols-6 gap-1 items-center justify-center mt-8">
          <img
            src={Nafdac}
            alt="Nafdac Logo"
            className="h-20 w-auto hover:scale-105 transition-transform duration-300"
          />
          <img
            src={Chams}
            alt="Chams Logo"
            className="h-20 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ===== Customer Stories Section (no grid background here) ===== */}
      <div className="relative z-20 mt-20 space-y-16">
        <Cust1 />
        <FeatP2 />
        <Footer />
      </div>
    </div>
  );
};

export default CustomerPage;

// import React from "react";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import Cust1 from "./kcustomer";

// const CustomerPage = () => {
//   return (
//     <div className="relative min-h-screen w-full text-white font-sans overflow-hidden">
//       {/* Navbar */}
//       <Konn3ctHeader />

//       {/* ===== Hero Section with Background Lines ===== */}
//       <section className="relative text-center mt-20 px-6 w-full overflow-hidden">
//         {/* Background Grid Lines ONLY for this Section */}
//         <div
//   className="absolute top-0 left-0 w-full h-[90vh] -z-10"
//   style={{
//     backgroundImage: `
//       repeating-linear-gradient(to right, rgba(100, 100, 100, 0.25) 0, rgba(100, 100, 100, 0.25) 1px, transparent 1px, transparent 100px),
//       repeating-linear-gradient(to bottom, rgba(100, 100, 100, 0.25) 0, rgba(100, 100, 100, 0.25) 1px, transparent 1px, transparent 100px)
//     `,
//     backgroundColor: "white",
//   }}
// />
//        {/* <div
//   className="absolute inset-0 z-0"
//   style={{
//     backgroundImage: `
//       repeating-linear-gradient(to right, rgba(100, 100, 100, 0.25) 0, rgba(100, 100, 100, 0.25) 1px, transparent 1px, transparent 100px),
//       repeating-linear-gradient(to bottom, rgba(100, 100, 100, 0.25) 0, rgba(100, 100, 100, 0.25) 1px, transparent 1px, transparent 100px)
//     `,
//   }}
// /> */}
//           {/* <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//           }}
//         /> */}

//         <h1 className="relative text-4xl md:text-5xl font-bold leading-tight text-black z-10">
//           The next generation <br /> runs on Konn3ct
//         </h1>
//         <p className="mt-4 text-base max-w-2xl mx-auto text-black relative z-10">
//           Join thousands of companies achieving faster resolution times, <br />
//           higher team efficiency, and better satisfaction.
//         </p>

//         {/* Input + Button */}
//         <div className="mt-6 flex justify-center relative z-10">
//           <div className="relative w-72">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"
//             />
//             <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//             </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2 text-black relative z-10">
//           Free Forever. No Credit Card.
//         </p>

//         {/* Company Logos */}
//         <div className="flex flex-cols-6 gap-4 items-center justify-center mt-6 relative z-10">
//           <img src={Nafdac} alt="Nafdac Logo" className="h-20 w-28" />
//           <img src={Chams} alt="Chams Logo" className="h-24 w-28" />
//         </div>
//       </section>

//       {/* ===== Customer Stories Section (NO GRADIENT HERE) ===== */}
//       <div className="relative z-10 mt-20 bg-white">
//         <Cust1 />
//       </div>
//     </div>
//   );
// };

// export default CustomerPage;

// import React from "react";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import Cust1 from "./kcustomer";

// const CustomerPage = () => {
//   return (
//     <div className="relative w-full font-sans text-black bg-white overflow-hidden">
//       {/* ===== Black Grid Background (TOP SECTION ONLY) ===== */}
//       <div
//         className="absolute top-0 left-0 w-full h-[90vh] -z-10 pointer-events-none"
//         style={{
//           backgroundColor: "white",
//           backgroundImage: `
//             repeating-linear-gradient(
//               to right,
//               rgba(0, 0, 0, 0.25) 0px,
//               rgba(0, 0, 0, 0.25) 1px,
//               transparent 1px,
//               transparent 100px
//             ),
//             repeating-linear-gradient(
//               to bottom,
//               rgba(0, 0, 0, 0.25) 0px,
//               rgba(0, 0, 0, 0.25) 1px,
//               transparent 1px,
//               transparent 100px
//             )
//           `,
//           backgroundSize: "100px 100px",
//         }}
//       />

//       {/* ===== Header ===== */}
//       <Konn3ctHeader />

//       {/* ===== Hero Section ===== */}
//       <section className="relative text-center mt-20 px-6 md:px-12 py-12">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           The next generation <br /> runs on Konn3ct
//         </h1>

//         <p className="mt-4 text-base max-w-2xl mx-auto">
//           Join thousands of companies achieving faster resolution times, <br />
//           higher team efficiency, and better satisfaction.
//         </p>

//         {/* Email Input + Button */}
//         <div className="mt-6 flex justify-center">
//           <div className="relative w-72">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-3 pr-28 w-full rounded-xl border border-gray-300 outline-none text-xs shadow-sm"
//             />
//             <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//             </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2">Free Forever. No Credit Card.</p>

//         {/* Logos */}
//         <div className="flex gap-6 items-center justify-center mt-6">
//           <img src={Nafdac} alt="Nafdac" className="h-20 w-28" />
//           <img src={Chams} alt="Chams" className="h-24 w-28" />
//         </div>
//       </section>

//       {/* ===== Customer Section (NO GRID BACKGROUND) ===== */}
//       <div className="relative z-10 bg-white">
//         <Cust1 />
//       </div>
//     </div>
//   );
// };

// export default CustomerPage;

// import React from "react";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import Cust1 from "./kcustomer";

// const CustomerPage = () => {
//   const gridStyle = {
//     backgroundImage: `
//       repeating-linear-gradient(
//         to right,
//         rgba(0,0,0,0.22) 0,
//         rgba(0,0,0,0.22) 1px,
//         transparent 1px,
//         transparent 80px
//       ),
//       repeating-linear-gradient(
//         to bottom,
//         rgba(0,0,0,0.22) 0,
//         rgba(0,0,0,0.22) 1px,
//         transparent 1px,
//         transparent 80px
//       )
//     `,
//     // backgroundSize: "80px 80px"
//   };

//   return (
//     <div className="relative w-full font-sans text-black bg-white">
//       {/* WRAPPER that holds header + hero and has the grid background */}
//       <div className="relative w-full" style={gridStyle}>
//         {/* Header sits at the top and the grid starts behind it */}
//         <Konn3ctHeader />

//         {/* HERO */}
//         <section className="relative text-center px-6 md:px-12 py-12">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             The next generation <br /> runs on Konn3ct
//           </h1>

//           <p className="mt-4 text-base max-w-2xl mx-auto">
//             Join thousands of companies achieving faster resolution times, <br />
//             higher team efficiency, and better satisfaction.
//           </p>

//           <div className="mt-6 flex justify-center">
//             <div className="relative w-72">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="px-4 py-3 pr-28 w-full rounded-xl border-none outline-none text-xs shadow-md"
//               />
//               <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] text-white px-3 py-2 rounded-md text-xs">
//                 Get started
//               </button>
//             </div>
//           </div>

//           <p className="text-sm mt-2">Free Forever. No Credit Card.</p>

//           <div className="flex gap-6 items-center justify-center mt-6">
//             <img src={Nafdac} alt="Nafdac" className="h-20 w-28" />
//             <img src={Chams} alt="Chams" className="h-24 w-28" />
//           </div>
//         </section>
//         {/* end wrapper that has grid */}
//       </div>

//       {/* BELOW: Cust1 must be outside the grid-wrapper so it has a plain white background */}
//       <div className="relative z-10 bg-white">
//         <Cust1 />
//       </div>
//     </div>
//   );
// };

// export default CustomerPage;

// import React from "react";
// import Konn3ctHeader from "./Konn3ctHeader";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import Cust1 from "./kcustomer";

// const CustomerPage = () => {
//   return (
//     <div className="relative min-h-screen w-full bg-white text-white font-sans">
//       {/* Navbar */}
//       <Konn3ctHeader />

//       {/* ===== Hero Section with Background Lines ===== */}
//       <section className="relative text-center mt-20 px-6 w-full overflow-hidden">
//         {/* Background Grid Lines ONLY for this Section */}
//         <div
//           className="absolute inset-0 -z-10"
//           style={{
//             backgroundImage: `
//               repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
//               repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
//             `,
//           }}
//         />

//         <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
//           The next generation <br /> runs on Konn3ct
//         </h1>
//         <p className="mt-4 text-base max-w-2xl mx-auto text-black">
//           Join thousands of companies achieving faster resolution times, <br />
//           higher team efficiency, and better satisfaction.
//         </p>

//         {/* Input + Button */}
//         <div className="mt-6 flex justify-center">
//           <div className="relative w-72">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"
//             />
//             <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//             </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2 text-black">Free Forever. No Credit Card.</p>

//         {/* Company Logos */}
//         <div className="flex flex-cols-6 gap-4 items-center justify-center mt-6">
//           <img src={Nafdac} alt="Nafdac Logo" className="h-20 w-28" />
//           <img src={Chams} alt="Chams Logo" className="h-24 w-28" />
//         </div>
//       </section>

//       {/* ===== Customer Stories Section (NO GRADIENT HERE) ===== */}
//       <div className="relative z-10 mt-20">
//         <Cust1 />
//       </div>
//     </div>
//   );
// };

// export default CustomerPage;

// import React from "react";
// import Konn3ctHeader from "../Componenets/Konn3ctHeader";
// import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
// import Chams from "../Images/Konn3ct Images/ChamsPlc.png";
// import Cust1 from "../Componenets/kcustomer"

// const CustomerPage = () => {
//   return (
//     <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-white to-white text-white font-sans">
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

//       {/* Hero Section */}
//       <section className="relative text-center mt-20 px-6 w-full">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
//           The next generation <br /> runs on Konn3ct
//         </h1>
//         <p className="mt-4 text-base  max-w-2xl mx-auto text-black">
//           Join thousands of companies achieving faster resolution times, <br />{" "}
//           higher team efficiency, and better satisfaction.
//         </p>

//         <div className="mt-6 flex justify-center">
//           <div className="relative w-72">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs shadow-md"
//             />
//             {/* <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
//             Get started
//           </button> */}
//             <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#1A4699] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
//               Get started
//             </button>
//           </div>
//         </div>

//         <p className="text-sm mt-2 text-black">Free Forever. No Credit Card.</p>

//         <div className="flex flex-cols-6 gap-4 items-center justify-center mt-6">
//           <img src={Nafdac} alt="" className="h-20 w-28" />
//           <img src={Chams} alt="" className="h-24 w-28" />
//         </div>
//       </section>

//       <Cust1 />

//     </div>
//   );
// };

// export default CustomerPage;
