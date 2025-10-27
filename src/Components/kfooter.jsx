import React from "react";
import logo from "../Images/Konn3ct Images/Konn3ct_lo-removed.png";
import FacebookIcon from "../Images/Konn3ct Images/facebook-02.png";
import TwitterIcon from "../Images/Konn3ct Images/new-twitter.png";
import LinkedInIcon from "../Images/Konn3ct Images/linkedin-01.png";
import InstagramIcon from "../Images/Konn3ct Images/instagram.png";
import YouTubeIcon from "../Images/Konn3ct Images/youtube.png";
import AppleIcon from "../Images/Konn3ct Images/apple.png";
import PlayStoreIcon from "../Images/Konn3ct Images/play-store.png";
import Badge1 from "../Images/Konn3ct Images/G2UistvT_400x400 1.png";
import Badge2 from "../Images/Konn3ct Images/G2UistvT_400x400 2.png";
import FooterTop from "./KFooterTop";

const Footer = () => {
  return (
<div>
     <FooterTop />

    
    <footer className="relative bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans pt-6 pb-4">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
          `,
        }}
      />
      {/* Top icons row */}
       

     <div
  className="absolute inset-0 z-10 pointer-events-none"
  style={{
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
  }}
/>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-sm space-x-4">
          {/* Logo & Address */}
          <div className="space-y-4 md:col-span-1 ">
            <div className="flex items-center">
              <img src={logo} alt="Konnect Logo" className="h-8 w-auto" />
            </div>
            {/* Social icons placeholder */}
            <div className="flex gap-3 mb-4">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
              <img src={YouTubeIcon} alt="YouTube" className="w-6 h-6" />
            </div>

            <address className="text-gray-300 leading-6 not-italic text-xs">
              220B Et-Osa Way, Dolphin <br /> Estate, Lagos 106104, Lagos
            </address>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-gray-300">
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

          {/* How To */}
          <div>
            <h3 className="font-semibold mb-3">How To</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Use konn3ct</li>
              <li>Join Breakout Room</li>
              <li>Create Breakout Room</li>
              <li>Use Konne3ct AI</li>
              <li>Use Live Caption</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Customer</li>
              <li>Pricing</li>
              <li>Developer</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>NDPR</li>
              <li>GDPR</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-300">info@konn3ct.com</p>
          </div>
        </div>

        {/* App download buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 ">
          {/* App download buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 absolute bottom left-6">
            {/* <div className="flex flex-wrap justify-start gap-4 mt-8"> */}
            <button className="bg-white text-black font-medium px-4 py-2 rounded-lg flex items-center gap-2 ">
              <img src={AppleIcon} alt="iPhone" className="w-5 h-5" />
              Get on iPhone
            </button>

            <button className="bg-white text-black font-medium px-4 py-2 rounded-lg flex items-center gap-2">
              <img src={PlayStoreIcon} alt="Android" className="w-5 h-5" />
              Get on Android
            </button>
          </div>

          {/* <div className="flex items-center gap-6 mt-4 md:mt-0 ml-0 md:ml-6"> */}
          <div className="absolute bottom right-6 flex flex-row items-center gap-3">
            <img src={Badge1} alt="iPhone" className="w-12 h-12" />
            {/* First image placeholder */}
            <img src={Badge2} alt="playstore" className="w-12 h-12" />
            {/* Second image placeholder */}
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs mt-8 border-t border-gray-500/30 pt-4">
          © 2025 konn3ct • All Rights Reserved
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
// import { MdSupportAgent } from "react-icons/md";
// import { BsShieldCheck, BsClockHistory } from "react-icons/bs";
// import { RiSignalWifiFill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <footer className="relative min-h-screen bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans pt-6 pb-4">
//     {/* // className="bg-gradient-to-b from-[#0B2A7E] to-[#05194B] text-white pt-6 pb-4"> */}
//       {/* Top Info Bar */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
//             repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
//           `,
//         }}
//       />
//       <div className="flex flex-wrap justify-center md:justify-between items-center border-b border-r border-white/20 px-6 py-3 text-sm bg-white">
//         <div className="flex items-center gap-2 mb-2 md:mb-0">
//           <MdSupportAgent className="text-white" />
//           <span>24/7 Support</span>
//         </div>
//         <div className="flex items-center gap-2 mb-2 md:mb-0">
//           <BsClockHistory className="text-white" />
//           <span>Changelog</span>
//         </div>
//         <div className="flex items-center gap-2 mb-2 md:mb-0">
//           <BsShieldCheck className="text-white" />
//           <span>Secure and compliant</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <RiSignalWifiFill className="text-white" />
//           <span>99.9% uptime</span>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-sm px-6 py-10">
//         {/* Logo & Address */}
//         <div className="col-span-2">
//           <h2 className="text-2xl font-semibold mb-3">konn3ct</h2>
//           <div className="flex gap-3 text-lg mb-4">
//             <FaInstagram />
//             <FaTwitter />
//             <FaLinkedin />
//             <FaYoutube />
//             <FaFacebook />
//           </div>
//           <p className="text-gray-200 leading-relaxed">
//             220B Eti-Osa Way, Dolphin Estate, Lagos 106104, Lagos
//           </p>
//         </div>

//         {/* Features */}
//         <div>
//           <h3 className="font-semibold mb-3">Features</h3>
//           <ul className="space-y-1 text-gray-300">
//             <li>Konn3ct AI</li>
//             <li>Donations</li>
//             <li>Breakout rooms</li>
//             <li>Live captions</li>
//             <li>Translations</li>
//             <li>eCinema</li>
//             <li>Audio booster</li>
//             <li>Whiteboard</li>
//             <li>Playback</li>
//             <li>Notetaker</li>
//           </ul>
//         </div>

//         {/* How To */}
//         <div>
//           <h3 className="font-semibold mb-3">How To</h3>
//           <ul className="space-y-1 text-gray-300">
//             <li>Use konn3ct</li>
//             <li>Join Breakout Room</li>
//             <li>Create Breakout Room</li>
//             <li>Use Konn3ct AI</li>
//             <li>Use Live Caption</li>
//           </ul>
//         </div>

//         {/* Explore */}
//         <div>
//           <h3 className="font-semibold mb-3">Explore</h3>
//           <ul className="space-y-1 text-gray-300">
//             <li>Customer</li>
//             <li>Pricing</li>
//             <li>Developer</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="font-semibold mb-3">Company</h3>
//           <ul className="space-y-1 text-gray-300">
//             <li>Terms of Use</li>
//             <li>Privacy Policy</li>
//             <li>NDPR</li>
//             <li>GDPR</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold mb-3">Contact</h3>
//           <ul className="space-y-1 text-gray-300">
//             <li>info@konn3ct.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* App Store Buttons */}
//       <div className="flex justify-center gap-4 mt-2 mb-4">
//         <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold shadow-md hover:opacity-90">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
//             alt="Apple"
//             className="h-4 w-4 bg-black p-1 rounded"
//           />
//           Get on iPhone
//         </button>
//         <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold shadow-md hover:opacity-90">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
//             alt="Google Play"
//             className="h-4 w-4"
//           />
//           Get on Android
//         </button>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="text-center text-xs text-gray-300 border-t border-white/10 pt-3">
//         © 2025 konn3ct · All Rights Reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;
