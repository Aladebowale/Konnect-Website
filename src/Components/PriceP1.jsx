import React, { useState } from "react";
import Payment from  "../Images/Konn3ct Images/payment.png";
import FeatP2 from "./Konn3ctF 2";
import Footer from "../Components/kfooter";
import LeafL from "../Images/Konn3ct Images/leaf left.png";
import LeafR from "../Images/Konn3ct Images/right leaf.png";
// import Konn3ctHeader from "../Components/Konn3ctHeader";


const Kpricing = () => {
  const [billing, setBilling] = useState("yearly");
  const [activePlan, setActivePlan] = useState("pro");

  const prices = {
    lite: billing === "yearly" ? "$120" : "$15",
    pro: billing === "yearly" ? "$175" : "$22",
  };

  const handlePlanClick = (plan) => setActivePlan(plan);

  const planClasses = (plan) =>
    `rounded-2xl p-6 flex flex-col transition transform 
     ${
       activePlan === plan
         ? "border-2 border-blue-600 bg-blue-50 shadow-xl scale-[1.02]"
         : "border border-gray-300 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1"
     }`;

  return (   
    // <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-12">
    <div className="relative min-h-screen w-full bg-cover bg-center  text-white font-sans px-4 py-12">
      {/* Navbar */}
      {/* <div
        className="absolute top-0 left-0 w-full h-[61vh] -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
          `,
        }}
      />
      <Konn3ctHeader /> */}

       {/* Hero Section */}
      {/* <section className="relative text-center mt-20 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Fair pricing <br /> that grows with you
        </h1>
        <p className="mt-4 text-base  max-w-2xl mx-auto text-black">
          Join thousands of companies achieving faster resolution times, <br />{" "}
          higher team efficiency, and better satisfaction.
        </p>      
      </section>   */}

      {/* Billing Toggle */}
      <div className="flex justify-center mb-10 mt-10">
        <div className="bg-gray-100 p-1 rounded-full flex items-center space-x-2">
          <button
            onClick={() => setBilling("yearly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              billing === "yearly"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Yearly
          </button>
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              billing === "monthly"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Container */}
      <div className="max-w-7xl mx-auto border rounded-2xl shadow-sm overflow-hidden bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-200">
          {/* Free Plan */}
          <div
            onClick={() => handlePlanClick("free")}
            className={`${planClasses(
              "free"
            )} cursor-pointer border-l-0 sm:border-l`}
          >
            <h2 className="text-lg font-bold text-gray-800">Free forever</h2>
            <p className="text-sm text-gray-500 mb-4">
              Best for individual users
            </p>
            <h3 className="text-3xl font-bold text-green-600 mb-2">Free</h3>
            <span className="text-sm text-green-700 font-medium mb-6">
              Free forever
            </span>

            <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
              {[
                "Unlimited Free Plan Members",
                "60MB Storage",
                "Unlimited Tasks",
                "Two-Factor Authentication",
                "Collaborative Docs",
                "Calendar View",
                "In-App Video Recording",
                "Breakout Rooms",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lite Plan */}
          <div
            onClick={() => handlePlanClick("lite")}
            className={`${planClasses("lite")} cursor-pointer`}
          >
            <h2 className="text-lg font-bold text-gray-800">Lite</h2>
            <p className="text-sm text-gray-500 mb-4">Best for small teams</p>
            <h3 className="text-3xl font-bold mb-2">{prices.lite}</h3>
            <p className="text-gray-600 mb-6">
              {billing === "yearly" ? "₦66,000" : "₦8,500"}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
              Get Started
            </button>

            <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
              {[
                "Unlimited Members",
                "60MB Storage",
                "Unlimited Tasks",
                "Two-Factor Authentication",
                "Collaborative Docs",
                "Calendar View",
                "In-App Video Recording",
                "Breakout Rooms",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div
            onClick={() => handlePlanClick("pro")}
            className={`${planClasses("pro")} cursor-pointer relative`}
          >
            {/* <span className="absolute -top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
              Most Popular
            </span> */}
            <h2 className="text-lg font-bold text-gray-800">Pro</h2>
            <p className="text-sm text-gray-500 mb-4">Best for mid-sized teams</p>
            <h3 className="text-3xl font-bold mb-2">{prices.pro}</h3>
            <p className="text-gray-600 mb-6">
              {billing === "yearly" ? "₦88,000" : "₦11,000"}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
              Start Free Trial
            </button>

            <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
              {[
                "Unlimited Members",
                "60MB Storage",
                "Unlimited Tasks",
                "Two-Factor Authentication",
                "Collaborative Docs",
                "Calendar View",
                "In-App Video Recording",
                "Breakout Rooms",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div
            onClick={() => handlePlanClick("enterprise")}
            className={`${planClasses("enterprise")} cursor-pointer`}
          >
            <h2 className="text-lg font-bold text-gray-800">Enterprise</h2>
            <p className="text-sm text-gray-500 mb-4">
              Best for many large teams
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Get a custom demo and see how Konn3ct aligns with your goals.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold mb-6 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Addons Section */}
      <div className="max-w-7xl mx-auto mt-14 border rounded-2xl p-8 shadow-sm bg-white">
        <h3 className="text-lg font-bold mb-3 text-black">Add-ons</h3>
        <p className="text-sm text-gray-600 mb-4">
          Extra to boost your productivity
        </p>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>Streaming Service – $25 / ₦21,000</li>
          <li>Room Bundles (10) – $17 / ₦15,000</li>
          <li>WhatsApp Invite – $5 / ₦3,000</li>
        </ul>
      </div>

      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <h3 className="text-lg font-bold mb-6 text-black">
          Most payment methods supported
        </h3>
        <div className="flex flex-wrap justify-center gap-6 opacity-80">                    
        <img src={Payment} alt="Support" className="w-1/3 h-16 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"/>
        </div>
      </div>
      

      <div className="flex items-center justify-center gap-3 text-gray-800 text-lg font-semibold relative z-10 space-x-1 mt-14">
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

              <div className="relative z-20 mt-20 space-y-16">
                     
                      <FeatP2 />
                      <Footer />
                    </div>

    </div>
  );
};

export default Kpricing;







// import React, { useState } from "react";

// const PricingPage = () => {
//   const [billing, setBilling] = useState("yearly");
//   const [activePlan, setActivePlan] = useState(null);

//   const prices = {
//     lite: billing === "yearly" ? "$120 / ₦66,000" : "$15 / ₦8,500",
//     pro: billing === "yearly" ? "$175 / ₦88,000" : "$22 / ₦11,000",
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-4 py-12 flex flex-col items-center">
//       {/* ===== LOGO PLACEHOLDER ===== */}
//       <div className="mb-10">
//         {/* Replace with your logo import */}
//         <div className="h-10 w-32 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
//           Logo
//         </div>
//       </div>

//       {/* ===== BILLING TOGGLE ===== */}
//       <div className="flex justify-center mb-10">
//         <div className="bg-gray-200 p-1 rounded-full flex items-center w-56">
//           <button
//             onClick={() => setBilling("yearly")}
//             className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
//               billing === "yearly"
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             Yearly
//           </button>
//           <button
//             onClick={() => setBilling("monthly")}
//             className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
//               billing === "monthly"
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             Monthly
//           </button>
//         </div>
//       </div>

//       {/* ===== PRICING PLANS ===== */}
//       <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* FREE PLAN */}
//         <div
//           className="border border-blue-400 rounded-2xl p-6 flex flex-col bg-white hover:shadow-lg transition-all"
//           onMouseEnter={() => setActivePlan("free")}
//           onMouseLeave={() => setActivePlan(null)}
//         >
//           <h2 className="text-lg font-bold text-gray-800">Free forever</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Best for individual users
//           </p>
//           <h3 className="text-3xl font-bold text-green-600 mb-2">Free</h3>
//           <span className="text-sm text-green-700 font-medium mb-6">
//             Free forever
//           </span>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Free Plan Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* LITE PLAN */}
//         <div
//           className={`border rounded-2xl p-6 flex flex-col bg-white transition-all cursor-pointer ${
//             activePlan === "lite"
//               ? "border-blue-600 shadow-lg scale-[1.02]"
//               : "hover:shadow-md"
//           }`}
//           onMouseEnter={() => setActivePlan("lite")}
//           onMouseLeave={() => setActivePlan(null)}
//           onClick={() => setActivePlan("lite")}
//         >
//           <h2 className="text-lg font-bold text-gray-800">Lite</h2>
//           <p className="text-sm text-gray-500 mb-4">Best for small teams</p>
//           <h3 className="text-3xl font-bold mb-2">
//             {billing === "yearly" ? "$120" : "$15"}
//           </h3>
//           <p className="text-gray-600 mb-6">
//             {billing === "yearly" ? "₦66,000" : "₦8,500"}
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Get Started
//           </button>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* PRO PLAN */}
//         <div
//           className={`rounded-2xl p-6 flex flex-col relative bg-white transition-all cursor-pointer ${
//             activePlan === "pro"
//               ? "border-2 border-blue-600 shadow-lg scale-[1.03] bg-blue-50"
//               : "border hover:shadow-md"
//           }`}
//           onMouseEnter={() => setActivePlan("pro")}
//           onMouseLeave={() => setActivePlan(null)}
//           onClick={() => setActivePlan("pro")}
//         >
//           <span className="absolute -top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
//             Most Popular
//           </span>
//           <h2 className="text-lg font-bold text-gray-800">Pro</h2>
//           <p className="text-sm text-gray-500 mb-4">Best for mid-sized teams</p>
//           <h3 className="text-3xl font-bold mb-2">
//             {billing === "yearly" ? "$175" : "$22"}
//           </h3>
//           <p className="text-gray-600 mb-6">
//             {billing === "yearly" ? "₦88,000" : "₦11,000"}
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Start Free Trial
//           </button>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ENTERPRISE PLAN */}
//         <div
//           className={`border rounded-2xl p-6 flex flex-col bg-white transition-all cursor-pointer ${
//             activePlan === "enterprise"
//               ? "border-blue-600 shadow-lg scale-[1.02]"
//               : "hover:shadow-md"
//           }`}
//           onMouseEnter={() => setActivePlan("enterprise")}
//           onMouseLeave={() => setActivePlan(null)}
//           onClick={() => setActivePlan("enterprise")}
//         >
//           <h2 className="text-lg font-bold text-gray-800">Enterprise</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Best for many large teams
//           </p>
//           <p className="text-sm text-gray-600 mb-8">
//             Get a custom demo and see how Konn3ct aligns with your goals.
//           </p>
//           <button className="bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Contact Sales
//           </button>
//         </div>
//       </div>

//       {/* ===== ADDONS ===== */}
//       <div className="max-w-6xl w-full mx-auto mt-14 border rounded-2xl p-8 shadow-sm bg-white">
//         <h3 className="text-lg font-bold mb-3">Add-ons</h3>
//         <p className="text-sm text-gray-600 mb-4">
//           Extra to boost your productivity
//         </p>
//         <ul className="text-sm text-gray-700 space-y-2">
//           <li>Streaming Service – $25 / ₦21,000</li>
//           <li>Room Bundles (10) – $17 / ₦15,000</li>
//           <li>WhatsApp Invite – $5 / ₦3,000</li>
//         </ul>
//       </div>

//       {/* ===== PAYMENT METHODS ===== */}
//       <div className="max-w-6xl mx-auto mt-12 text-center">
//         <h3 className="text-sm font-semibold mb-6 text-gray-600">
//           Most payment methods supported
//         </h3>
//         <div className="flex flex-wrap justify-center gap-6 opacity-80">
//           {[
//             "VISA",
//             "MasterCard",
//             "PayPal",
//             "AmEx",
//             "Discover",
//             "Alipay",
//             "GPay",
//             "ApplePay",
//             "Stripe",
//           ].map((name, i) => (
//             <div
//               key={i}
//               className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;



// import React, { useState } from "react";

// const PricingPage = () => {
//   const [billing, setBilling] = useState("yearly");

//   const prices = {
//     lite: billing === "yearly" ? "$120" : "$15",
//     pro: billing === "yearly" ? "$175" : "$22",
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-sans px-4 py-12">
//       {/* Billing Toggle */}
//       <div className="flex justify-center mb-10">
//         <div className="bg-gray-100 p-1 rounded-full flex items-center space-x-2">
//           <button
//             onClick={() => setBilling("yearly")}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition ${
//               billing === "yearly"
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             Yearly
//           </button>
//           <button
//             onClick={() => setBilling("monthly")}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition ${
//               billing === "monthly"
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             Monthly
//           </button>
//         </div>
//       </div>

//       {/* Pricing Plans */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {/* Free Plan */}
//         <div className="border border-blue-400 rounded-2xl p-6 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl">
//           <h2 className="text-lg font-bold text-gray-800">Free forever</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Best for individual users
//           </p>
//           <h3 className="text-3xl font-bold text-green-600 mb-2">Free</h3>
//           <span className="text-sm text-green-700 font-medium mb-6">
//             Free forever
//           </span>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Free Plan Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Lite Plan */}
//         <div className="border rounded-2xl p-6 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl">
//           <h2 className="text-lg font-bold text-gray-800">Lite</h2>
//           <p className="text-sm text-gray-500 mb-4">Best for small teams</p>
//           <h3 className="text-3xl font-bold mb-2">{prices.lite}</h3>
//           <p className="text-gray-600 mb-6">
//             {billing === "yearly" ? "₦66,000" : "₦8,500"}
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Get Started
//           </button>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Pro Plan */}
//         <div className="border-2 border-blue-600 rounded-2xl p-6 flex flex-col shadow-md relative bg-blue-50 transition transform hover:-translate-y-2 hover:shadow-2xl">
//           <span className="absolute -top-3 right-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
//             Most Popular
//           </span>
//           <h2 className="text-lg font-bold text-gray-800">Pro</h2>
//           <p className="text-sm text-gray-500 mb-4">Best for mid-sized teams</p>
//           <h3 className="text-3xl font-bold mb-2">{prices.pro}</h3>
//           <p className="text-gray-600 mb-6">
//             {billing === "yearly" ? "₦88,000" : "₦11,000"}
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Start Free Trial
//           </button>

//           <ul className="space-y-2 text-sm text-gray-700 border-t border-dashed pt-4">
//             {[
//               "Unlimited Members",
//               "60MB Storage",
//               "Unlimited Tasks",
//               "Two-Factor Authentication",
//               "Collaborative Docs",
//               "Calendar View",
//               "In-App Video Recording",
//               "Breakout Rooms",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="text-blue-600 mr-2">✔</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Enterprise */}
//         <div className="border rounded-2xl p-6 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl">
//           <h2 className="text-lg font-bold text-gray-800">Enterprise</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Best for many large teams
//           </p>
//           <p className="text-sm text-gray-600 mb-8">
//             Get a custom demo and see how Konn3ct aligns with your goals.
//           </p>
//           <button className="bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold mb-6 transition">
//             Contact Sales
//           </button>
//         </div>
//       </div>

//       {/* Addons */}
//       <div className="max-w-6xl mx-auto mt-14 border rounded-2xl p-8 shadow-sm bg-white">
//         <h3 className="text-lg font-bold mb-3">Add-ons</h3>
//         <p className="text-sm text-gray-600 mb-4">
//           Extra to boost your productivity
//         </p>
//         <ul className="text-sm text-gray-700 space-y-2">
//           <li>Streaming Service – $25 / ₦21,000</li>
//           <li>Room Bundles (10) – $17 / ₦15,000</li>
//           <li>WhatsApp Invite – $5 / ₦3,000</li>
//         </ul>
//       </div>

//       {/* Payment Methods */}
//       <div className="max-w-6xl mx-auto mt-12 text-center">
//         <h3 className="text-sm font-semibold mb-6 text-gray-600">
//           Most payment methods supported
//         </h3>
//         <div className="flex flex-wrap justify-center gap-6 opacity-80">
//           {/* Logo placeholders (replace later) */}
//           {[
//             "VISA",
//             "MasterCard",
//             "PayPal",
//             "AmEx",
//             "Discover",
//             "Alipay",
//             "GPay",
//             "ApplePay",
//             "Stripe",
//           ].map((name, i) => (
//             <div
//               key={i}
//               className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;
