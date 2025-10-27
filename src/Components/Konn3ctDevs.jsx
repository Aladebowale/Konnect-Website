import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
// import FeatP2 from "./Konn3ctF 2";
import Footer from "../Components/kfooter";
import devImage from "../Images/Konn3ct Images/devImage.png";
import codeImage from "../Images/Konn3ct Images/codeImage.png";
import govImage from "../Images/Konn3ct Images/1GovImage.png";

const Konn3ctDevs = () => {
  return (
    // <div className="bg-white text-gray-900">
    <div className="min-h-screen font-sans text-gray-900">
       <div
        className="absolute top-0 left-0 w-full h-[41vh] -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 90px),
            repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      <Konn3ctHeader />

      <section className="text-center max-w-4xl mx-auto mb-16 mt-11">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          One platform to build
        </h1>
        {/* <p className="mt-4 text-xs max-w-sm mx-auto md:text-lg text-gray-900"> */}
        <p className="mt-2 font-normal text-xs  max-w-xs mx-auto text-gray-700">
          Develop custom video experiences on top of <br /> Konn3ct's core technology.
        </p>

        <button className="bg-blue-600 text-white px-2 py-1 rounded-lg font-semibold hover:bg-blue-700 transition mt-1">
          Start building
        </button>
      </section>

      {/* Section 1: Where innovation meets collaboration */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Where innovation meets collaboration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-[#34A853] bg-[#F7FFF9] rounded-xl shadow-sm p-6 hover:shadow-md transition text-center md:text-left space-y-4 w-fit">
            <h3 className="text-2xl font-bold mb-2">Flexibility</h3>
            <p className="text-xs font-bold text-gray-600">
              Build on a robust suite of APIs and SDKs to customize and extend
              the power of konn3ct to suit your specific needs.
            </p>
          </div>
          <div className="border border-[#34A853] bg-[#F7FFF9] rounded-xl shadow-sm p-6 hover:shadow-md transition text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold mb-2">Scalability</h3>
            <p className="text-xs font-bold text-gray-600">
              Amplify your reach and access to thousands of konn3ct users
              worldwide by integrating your app with konn3ct.
            </p>
          </div>
          <div className="border border-[#34A853] bg-[#F7FFF9] rounded-xl shadow-sm p-6 hover:shadow-md transition text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold mb-2">Reliability</h3>
            <p className="text-xs font-bold text-gray-600">
              Konn3ct’s platform powers some of the largest brands in the
              nigeria, delivering unwavering reliability and uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Build with Konn3ct’s core technology */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={devImage}
            alt="Developers building with Konn3ct"
            // className="w-52 md:w-72 object-contain shadow-md rounded-xl"

            className="rounded-xl shadow-md w-[85%] md:w-[90%] object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Build with Konn3ct’s core technology
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            The Konn3ct Vision API lets you create a better custom B2B
            experiences across web, mobile, and desktop channels.
          </p>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-[#1A4699] text-white text-sm rounded-lg transition shadow-sm">
            Start building
          </button>
        </div>
      </section>

      {/* Section 3: More ways to flex with Konn3ct */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            More ways to flex with Konn3ct
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <p>
                Leverage a wide range of APIs to access core Konn3ct
                functionalities such as meeting management, user settings, and
                reporting.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <p>
                Set up webhooks to receive real-time notifications on meeting
                events, user activities, and system alerts.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-lg">✓</span>
              <p>
                Use APIs and webhooks to customize how Konn3ct interacts with
                your existing systems.
              </p>
            </li>
          </ul>

          <button className="mt-8 px-5 py-2.5 bg-blue-600 hover:bg-[#1A4699] text-white text-sm rounded-lg transition shadow-sm">
            Start building
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-black rounded-xl p-10 flex justify-center items-center shadow-md">
            <img
              src={codeImage}
              alt="Konn3ct code illustration"
              className="w-52 md:w-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ====================== SECTION 4 (New Blue Testimonial Box) ====================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-b from-[#03173f] to-[#1a4696] text-white rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-md">
          {/* Text */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <p className="text-md md:text-base leading-relaxed mb-6 ">
              1Government Cloud has become the trusted standard for Nigeria
              government secure digital collaboration, and Konn3ct leverages
              that same robust infrastructure. Since implementing Konn3ct, our
              users have enjoyed a much smoother experience, which in turn
              strengthens the 1Government Cloud brand and builds greater trust.
            </p>
            <button className="px-6 py-3 bg-white text-gray-800 hover:bg-gray-100 rounded-lg text-sm font-medium transition">
              Learn more
            </button>
          </div>

          {/* Logo */}
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white rounded-xl flex justify-center items-center p-6 w-full h-auto shadow-sm">
              <img
                src={govImage}
                alt="1Government Cloud Logo"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 mt-20 space-y-16">
        {/* <FeatP2 /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Konn3ctDevs;

// import React from "react";
// import devImage from "../Images/Konn3ct Images/dev_build.png"; // First image
// import codeImage from "../Images/Konn3ct Images/dev_code.png"; // Second image
// import govImage from "../Images/Konn3ct Images/gov_logo.png"; // 1Government Cloud logo

// const Konn3ctDevelopers = () => {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* ====================== SECTION 1 ====================== */}
//       <section className="max-w-6xl mx-auto text-center py-16 px-6">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">
//           Where innovation meets collaboration
//         </h2>

//         <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
//           <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-2">Flexibility</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Build a custom suite of APIs and SDKs to create a powerful
//               communication system that fits your needs.
//             </p>
//           </div>

//           <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-2">Scalability</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Simplify team growth and enhance performance by scaling your
//               workspace and integrations effortlessly with Konn3ct.
//             </p>
//           </div>

//           <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-2">Reliability</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Konn3ct’s cloud-powered system ensures uptime, security, and
//               performance you can depend on at any scale.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ====================== SECTION 2 ====================== */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div className="flex justify-center md:justify-start">
//           <img
//             src={devImage}
//             alt="Developers building with Konn3ct"
//             className="rounded-xl shadow-md w-[90%] md:w-[95%] object-cover"
//           />
//         </div>

//         <div>
//           <h3 className="text-2xl md:text-3xl font-semibold mb-3">
//             Build with Konn3ct’s core technology
//           </h3>
//           <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
//             The Konn3ct Vision API lets you create a better custom B2B experience
//             across web, mobile, and desktop channels. Harness tools that empower
//             your development and improve scalability.
//           </p>
//           <button className="px-5 py-2.5 bg-blue-600 hover:bg-[#1A4699] text-white text-sm rounded-lg transition shadow-sm">
//             Read Documentation
//           </button>
//         </div>
//       </section>

//       {/* ====================== SECTION 3 ====================== */}
//       <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h3 className="text-2xl md:text-3xl font-semibold mb-6">
//             More ways to flex with Konn3ct
//           </h3>

//           <ul className="space-y-5 text-sm md:text-base text-gray-700">
//             <li className="flex items-start gap-2">
//               <span className="text-green-500 text-lg">✓</span>
//               <p>
//                 Leverage a wide range of APIs to access core Konn3ct
//                 functionalities such as meeting management, user settings, and
//                 reporting.
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-500 text-lg">✓</span>
//               <p>
//                 Set up webhooks to receive real-time notifications on meeting
//                 events, user activities, and system alerts.
//               </p>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-green-500 text-lg">✓</span>
//               <p>
//                 Use APIs and webhooks to customize how Konn3ct interacts with your
//                 existing systems.
//               </p>
//             </li>
//           </ul>

//           <button className="mt-8 px-5 py-2.5 bg-blue-600 hover:bg-[#1A4699] text-white text-sm rounded-lg transition shadow-sm">
//             Start building
//           </button>
//         </div>

//         <div className="flex justify-center md:justify-end">
//           <div className="bg-black rounded-xl p-10 flex justify-center items-center shadow-md">
//             <img
//               src={codeImage}
//               alt="Konn3ct code illustration"
//               className="w-52 md:w-72 object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ====================== SECTION 4 (New Blue Testimonial Box) ====================== */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-md">
//           {/* Text */}
//           <div className="md:w-2/3 mb-8 md:mb-0">
//             <p className="text-sm md:text-base leading-relaxed mb-6">
//               1Government Cloud has become the trusted standard for Nigeria
//               government secure digital collaboration, and Konn3ct leverages that
//               same robust infrastructure. Since implementing Konn3ct, our users
//               have enjoyed a much smoother experience, which in turn strengthens
//               the 1Government Cloud brand and builds greater trust.
//             </p>
//             <button className="px-5 py-2 bg-white text-blue-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition">
//               Learn more
//             </button>
//           </div>

//           {/* Logo */}
//           <div className="bg-white rounded-xl flex justify-center items-center p-6 w-56 h-40 shadow-sm">
//             <img
//               src={govImage}
//               alt="1Government Cloud Logo"
//               className="w-40 object-contain"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Konn3ctDevelopers;
