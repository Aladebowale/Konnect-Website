// import React from "react";
// import logo from "../Images/Konn3ct Images/Konn3ct_lo-removed.png";

// const Konn3ctFooter = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans overflow-hidden">
//       {/* Grid line background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//         }}
//       />

//       {/* ===== Top Info Bar ===== */}
//       <header className="relative z-10 flex flex-wrap justify-center md:justify-between items-center gap-6 bg-white/10 border-y border-white/20 px-8 py-3 text-xs">
//         <div className="group relative cursor-pointer">24/7 Support</div>
//         <div className="group relative cursor-pointer">Changelog</div>
//         <div className="group relative cursor-pointer">Secure and compliant</div>
//         <div className="group relative cursor-pointer">99.9% Uptime</div>
//       </header>

//       {/* ===== Main Footer Content ===== */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
//           {/* Company Logo and Address */}
//           <div className="space-y-4 md:col-span-1">
//             <img src={logo} alt="Konnect Logo" className="h-10 w-auto" />
//             <address className="not-italic text-xs leading-relaxed text-gray-200">
//               220B Eti-Osa Way, Dolphin
//               <br /> Estate, Lagos 106104, Lagos
//             </address>
//           </div>

//           {/* Footer Navigation Sections */}
//           <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-5 gap-10 text-xs">
//             <div>
//               <h4 className="text-sm font-semibold mb-3">Features</h4>
//               <ul className="space-y-2 text-gray-200">
//                 <li>Konn3ct AI</li>
//                 <li>Donations</li>
//                 <li>Breakout Rooms</li>
//                 <li>Live Captions</li>
//                 <li>Translations</li>
//                 <li>eCinema</li>
//                 <li>Audio Booster</li>
//                 <li>Whiteboard</li>
//                 <li>Playback</li>
//                 <li>Notetaker</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-3">How To</h4>
//               <ul className="space-y-2 text-gray-200">
//                 <li>Use konn3ct</li>
//                 <li>Join Breakout Room</li>
//                 <li>Create Breakout Room</li>
//                 <li>Use konn3ct AI</li>
//                 <li>Use Live Caption</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-3">Explore</h4>
//               <ul className="space-y-2 text-gray-200">
//                 <li>Customer</li>
//                 <li>Pricing</li>
//                 <li>Blog</li>
//                 <li>Developer</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-3">Company</h4>
//               <ul className="space-y-2 text-gray-200">
//                 <li>Terms of Use</li>
//                 <li>Privacy Policy</li>
//                 <li>NDPR</li>
//                 <li>GDPR</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold mb-3">Contact</h4>
//               <ul className="space-y-2 text-gray-200">
//                 <li>info@konn3ct.com</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ===== Bottom Section ===== */}
//         <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Left: App Download Buttons + icon space */}
//           <div className="flex flex-col sm:flex-row items-center gap-5">
//             <div className="flex items-center gap-3">
//               {/* Apple Store */}
//               <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-md hover:opacity-95">
//                 <div className="w-6 h-6 bg-gray-300 rounded-md"></div> {/* icon space */}
//                 <div className="text-left text-xs font-semibold">
//                   Get on iPhone
//                 </div>
//               </button>

//               {/* Space for icon beside Apple */}
//               <div className="w-10 h-10 bg-gray-300/30 rounded-full"></div>
//             </div>

//             <div className="flex items-center gap-3">
//               {/* Play Store */}
//               <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-md hover:opacity-95">
//                 <div className="w-6 h-6 bg-gray-300 rounded-md"></div> {/* icon space */}
//                 <div className="text-left text-xs font-semibold">
//                   Get on Android
//                 </div>
//               </button>

//               {/* Space for icon beside Play Store */}
//               <div className="w-10 h-10 bg-gray-300/30 rounded-full"></div>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="text-center text-xs text-white/70">
//             © 2025 konn3ct · All Rights Reserved
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Konn3ctFooter;


















import React from "react";
import logo from "../Images/Konn3ct Images/Konn3ct_lo-removed.png";

const Konn3ctFooter = () => {
  return (
    <div className="relative z-10  bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans py-20 px-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
          `,
        }}
      />

   {/* <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-t border-gray-200">
    
        <div className="group relative">24/7 Support</div>
        <div className="group relative">Changelog</div>
        <div className="group relative">Secure and compliant</div>
        <div className="group relative">99.9% uptime</div>
      </header> */}

      <div className="w-full bg-white border-y border-gray-200">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-sm text-gray-800">
    
    {/* Item 1 */}
    <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* icon space */}
      <span className="font-medium">24/7 Support</span>
    </div>

    {/* Item 2 */}
    <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* icon space */}
      <span className="font-medium">Changelog</span>
    </div>

    {/* Item 3 */}
    <div className="flex items-center justify-center gap-2 py-4 border-b md:border-b-0 md:border-r border-gray-200">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* icon space */}
      <span className="font-medium">Secure and compliant</span>
    </div>

    {/* Item 4 */}
    <div className="flex items-center justify-center gap-2 py-4">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div> {/* icon space */}
      <span className="font-medium">99.9% Uptime</span>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-8">
              {/* <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center font-semibold">k</div>
              <div className="text-lg font-semibold">konn3ct</div> */}
              {/* <img src={logo} alt="Logo" className="w-16 h-12 sm:w-8 sm:h-8 mr-2"/> */}
              <img src={logo} alt="Konnect Logo" className="h-8 w-auto" />
            </div>
            <address className="not-italic text-xs leading-relaxed w-full">
              220B Eti-Osa Way, Dolphin
              <br /> Estate, Lagos 106104, Lagos
            </address>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-5 gap-10">
            <div>
              <h4 className="text-sm font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-xs">
                <li>Konn3ct AI</li>
                <li>Donations</li>
                <li>Breakout rooms</li>
                <li>Live captions</li>
                <li>Translations</li>
                <li>eCinema</li>
                <li>Audio booster</li>
                <li>Whiteboard</li>
                <li>Playback</li>
                <li>Notetaker</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">How To</h4>
              <ul className="space-y-2 text-xs">
                <li>Use konn3ct</li>
                <li>Join Breakout Room</li>
                <li>Create Breakout Room</li>
                <li>Use konn3ct AI</li>
                <li>Use Live Caption</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-xs">
                <li>Customer</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Developer</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-xs">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>NDPR</li>
                <li>GDPR</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-xs">
                <li>info@konn3ct.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: app buttons and contact */}
        <div className="mt-36 border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-sm hover:opacity-95">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M16.79 3.21a4.42 4.42 0 0 0-3.12-1.31c-1.25-.1-2.5.73-3.16.73-.7 0-1.88-.71-3.1-.69C5.5 1.98 3 3.86 2 6.8c-1 2.94.25 7.5 1.91 10.14 1.06 1.66 2.35 3.29 4.02 3.23 1.1-.04 1.52-.7 3.63-.7 2.12 0 2.45.7 3.76.69 1.5 0 2.43-1.66 3.37-3.3 1.06-1.95 1.5-3.88 1.52-3.99-.03-.01-3.35-1.29-3.36-5.06-.01-2.3 1.62-3.33 1.69-3.39-.94-1.37-2.41-1.51-2.92-1.53z"
                  fill="#0b3a76"
                />
              </svg>
              <div className="text-left text-xs">
                <div className="font-semibold">Get on iPhone</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-sm hover:opacity-95">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M20 5H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1zM7 8h10v2H7V8z"
                  fill="#0b3a76"
                />
              </svg>
              <div className="text-left text-xs">
                <div className="font-semibold">Get on Android</div>
              </div>
            </button>
          </div>
          
          {/* <div className="text-sm">Contact: info@konn3ct.com</div> */}
        </div>

        <div className="mt-6 text-center text-xs text-white/70">
          © 2025 konn3ct · All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default Konn3ctFooter;
