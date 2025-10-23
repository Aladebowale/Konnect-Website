import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import TeamImage from "../Images/Konn3ct Images/Group 1171275696.png";
import TeamMembers from "../Images/Konn3ct Images/Frame 1410102945 (1).png";
import Footer from "./kfooter";
import NCSlogo from "../Images/Konn3ct Images/G2UistvT_400x400 1.png";
import GDPR from "../Images/Konn3ct Images/G2UistvT_400x400 2.png";
import LeafL from "../Images/Konn3ct Images/leaf left.png";
import LeafR from "../Images/Konn3ct Images/right leaf.png";
import Star from "../Images/Konn3ct Images/Vector (9).png";

const AboutUs = () => {
  return (
    <div className="relative  w-full bg-cover bg-center  text-white font-sans">
      {/* Navbar */}
      <div
        className="absolute top-0 left-0 w-full h-[61vh] -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 100px)
          `,
        }}
      />
      <Konn3ctHeader />

      {/* Hero Section */}
      {/* <section className="relative text-center mt-20 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Fair pricing <br /> that grows with you
        </h1>
        <p className="mt-4 text-base  max-w-2xl mx-auto text-black">
          Join thousands of companies achieving faster resolution times, <br />{" "}
          higher team efficiency, and better satisfaction.
        </p>
      </section> */}
      <div></div>
      <section className="text-center max-w-4xl mx-auto mb-16 mt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Building the future <br /> of{" "}
          <span className="text-black">Virtual Collaboration</span>
        </h1>
        <p className="mt-4 text-base max-w-2xl mx-auto sm:text-lg text-gray-600">
          Meet the team behind the platform <br /> trusted by the next
          generation
        </p>
      </section>
      {/* Image Section */}
      <section className="w-full max-w-5xl mx-auto mb-20">
        <div className="bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow">
          {/* Replace this with your actual image */}
          <img
            src={TeamImage}
            alt="Team"
            className="w-full h-[71vh] object-cover"
          />
        </div>
      </section>

      <h2 className="text-2xl font-semibold mb-4 text-black text-center">
        Our mission.
      </h2>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 mb-24 px-6">
        {/* Left Text */}
        <div className="md:w-1/3 text-gray-800">
          <p className="text-gray-700 text-xs leading-relaxed">
            Subject to these Terms, Company will use commercially reasonable
            efforts to provide Customer the Services. During the Term, and
            subject to Customer’s compliance with these Terms, Company grants a
            non-exclusive, non-transferable, limited license to access and use
            the Services.
            <br />
            <br />
            Company retains all intellectual property rights in and to the
            website, the Services and Software (as defined below), including but
            not limited to all patents, intellectual property rights in and to
            the website, the Services and Software (as defined below), including
            but not limited to all patents.
          </p>
        </div>

        {/* Right Highlighted Card */}
        <div className="md:w-1/3 bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex items-center justify-center">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
            <span className="text-green-600">Save time</span> by <br /> making
            people more <span className="text-green-600">productive</span>
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-black">Core Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "Deliver the best customer experience",
            "Grow 1% every day",
            "Embrace hard work, do hard things",
            "Be in the details",
            "Drive urgency",
            "Be fun to work with",
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white flex flex-col justify-center items-start hover:shadow-md transition-shadow"
            >
              <span className="mb-2 h-8">
                <img
                  src={Star}
                  alt="Leaf Left"
                  className="h-full object-contain"
                />
              </span>
              {/* <span className="text-gray-400 text-lg mb-2">⭐</span> */}
              <p className="font-semibold text-gray-900 w-2/3">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification Section */}
      <section className="text-center mb-24">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-2 text-gray-800">
            <span className="inline-block h-10 w-6">
              <img
                src={LeafL}
                alt="Leaf Left"
                className="h-full object-contain"
              />
            </span>
            <p className="text-lg font-medium">We are certified</p>
            <span className="inline-block h-10 w-6">
              <img
                src={LeafR}
                alt="Leaf Right"
                className="h-full object-contain"
              />
            </span>{" "}
          </div>

          <div className="flex items-center justify-center gap-10 mt-4">
            <img
              src={NCSlogo}
              alt="NCC Certification"
              className="w-20 h-20 object-contain"
            />
            <img src={GDPR} alt="GDPR" className="w-20 h-20 object-contain" />
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="max-w-full bg-gradient-to-b from-[#03173f] to-[#1a4696] rounded-3xl py-10 md:py-14 px-4 lg:px-8 shadow-lg overflow-hidden">
        <div className="flex flex-col mx-auto md:flex-row items-center justify-between px-6 md:px-12 ">
          {/* Left Text Section */}
          <div className="text-white md:w-1/3 space-y-5 py-12 md:py-16">
            <h2 className="text-3xl font-semibold">Let’s build together</h2>
            <p className="text-gray-200 leading-relaxed">
              Join unique people that align in the mission of saving people time
              and making the world more productive.
            </p>
            <button className="mt-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-all">
              Join our team
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/3 flex justify-center md:justify-end h-full">
            <div className="overflow-hidden rounded-xl shadow-lg space-y-5 w-[320px] md:w-[400px]">
              <img
                src={TeamMembers}
                alt="Team member working"
                className="w-full h-[250px] md:h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 mt-20 space-y-16">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;

// import React from "react";
// import Konn3ctHeader from "../Componenets/Konn3ctHeader";
// import Footer from "../Componenets/kfooter";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-white text-gray-900">
//       {/* Header */}
//       <header className="w-full z-50 bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Konn3ctHeader />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 mt-28 px-6 lg:px-20">
//         {/* Intro Section */}
//         <section className="text-center max-w-4xl mx-auto mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Building the future <br /> of{" "}
//             <span className="text-black">Virtual Collaboration</span>
//           </h1>
//           <p className="mt-4 text-base sm:text-lg text-gray-600">
//             Meet the team behind the platform trusted by the next generation
//           </p>
//         </section>

//         {/* Image Section (placeholder for your image) */}
//         <section className="w-full max-w-5xl mx-auto mb-20">
//           <div className="bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow-md">
//             {/* Replace this with your actual image */}
//             <div className="h-72 sm:h-96 flex items-center justify-center text-gray-400 text-lg font-medium">
//               Image goes here
//             </div>
//           </div>
//         </section>

//         {/* Mission Section */}
//         <section className="max-w-6xl mx-auto mb-20">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center sm:text-left">
//             Our mission.
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//             {/* Left Text */}
//             <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
//               <p className="mb-4">
//                 Subject to these Terms, Company will use commercially reasonable
//                 efforts to provide Customer the Services. During the term, and
//                 subject to Customer’s compliance with these Terms, Company
//                 grants to Customer a non-exclusive, non-transferable, limited
//                 license to access and use the Services.
//               </p>
//               <p>
//                 Company owns all intellectual property rights in and to the
//                 website, the Services and Software (as defined below), including
//                 but not limited to all patents, intellectual property rights and
//                 the website, the Services and Software (as defined below),
//                 including but not limited to all patents.
//               </p>
//             </div>

//             {/* Right Highlight Box */}
//             <div className="border border-gray-200 rounded-lg bg-white shadow-sm p-6">
//               <div className="border border-green-400 rounded-md p-6 bg-green-50">
//                 <p className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-snug">
//                   <span className="text-green-600 font-bold">Save time</span>{" "}
//                   by <br />
//                   making people <br />
//                   more{" "}
//                   <span className="text-green-600 font-bold">productive</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="mt-auto">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;
