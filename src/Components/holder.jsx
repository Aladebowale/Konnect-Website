// Smooth dropdown animation
// ✅ Fully clickable “Company” submenu
// ✅ Mobile-friendly menu
// ✅ Active link highlighting using useLocation from react-router-dom

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   // Helper to check active link
//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-blue-600 border-b-2 border-blue-600"
//       : "text-black hover:text-blue-500";

//   return (
//     <header className="relative z-50 flex justify-between items-center bg-white px-8 py-4 border-b border-t border-gray-200 shadow-sm">
//       {/* Logo */}
//       <Link to="/" className="flex items-center">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
//       </Link>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//         <Link to="/Meet" className={`${isActive("/Meet")} transition`}>
//           Meet
//         </Link>
//         <Link to="/Features" className={`${isActive("/Features")} transition`}>
//           Features
//         </Link>
//         <Link to="/Customers" className={`${isActive("/Customers")} transition`}>
//           Customers
//         </Link>
//         <Link to="/Pricing" className={`${isActive("/Pricing")} transition`}>
//           Pricing
//         </Link>

//         {/* Company Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setDropdownOpen(true)}
//           onMouseLeave={() => setDropdownOpen(false)}
//         >
//           <button
//             className={`flex items-center gap-1 transition ${
//               dropdownOpen ? "text-blue-600" : "text-black hover:text-blue-500"
//             }`}
//           >
//             Company
//             <span className="text-xs">▼</span>
//           </button>

//           <div
//             className={`absolute left-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 shadow-lg py-2 transform transition-all duration-200 ease-out ${
//               dropdownOpen
//                 ? "opacity-100 translate-y-0 visible"
//                 : "opacity-0 -translate-y-2 invisible"
//             }`}
//           >
//             <Link
//               to="/AboutUs"
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/ChangeLog"
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition"
//             >
//               Changelog
//             </Link>
//             <Link
//               to="/Konn3ctTC"
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Right-side Buttons */}
//       <div className="hidden md:flex space-x-3">
//         <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-blue-50 hover:text-blue-500 transition shadow-sm">
//           Login
//         </button>
//         <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition shadow-sm">
//           Sign up, It’s Free
//         </button>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden">
//         <button
//           className="text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
//           <div className="flex flex-col space-y-2 p-4 text-sm font-medium">
//             <Link to="/Meet" className={`${isActive("/Meet")}`}>
//               Meet
//             </Link>
//             <Link to="/Features" className={`${isActive("/Features")}`}>
//               Features
//             </Link>
//             <Link to="/Customers" className={`${isActive("/Customers")}`}>
//               Customers
//             </Link>
//             <Link to="/Pricing" className={`${isActive("/Pricing")}`}>
//               Pricing
//             </Link>

//             <div className="border-t border-gray-200 pt-2">
//               <p className="text-gray-600 font-semibold">Company</p>
//               <Link
//                 to="/AboutUs"
//                 className="block px-2 py-1 text-gray-800 hover:text-blue-500"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/ChangeLog"
//                 className="block px-2 py-1 text-gray-800 hover:text-blue-500"
//               >
//                 Changelog
//               </Link>
//               <Link
//                 to="/Konn3ctTC"
//                 className="block px-2 py-1 text-gray-800 hover:text-blue-500"
//               >
//                 Terms & Conditions
//               </Link>
//             </div>

//             <div className="flex flex-col space-y-2 pt-3">
//               <button className="px-4 py-2 border border-[#1A4699] rounded-lg text-black hover:bg-blue-50 hover:text-blue-500 transition">
//                 Login
//               </button>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-[#1A4699] transition">
//                 Sign up, It’s Free
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Konn3ctHeader;



// ✅ Stable dropdown
// ✅ Scrollable mobile menu
// ✅ Highlight for the active page
// ✅ Smooth transitions
// ✅ Fully responsive (desktop + mobile)

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   // helper for highlighting active links
//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-blue-600 font-semibold"
//       : "text-black hover:text-blue-500";

//   return (
//     <header className="relative z-50 flex justify-between items-center bg-white px-8 py-4 border-b border-t border-gray-200 shadow-sm">
//       {/* Logo */}
//       <Link to="/" className="flex items-center">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
//       </Link>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//         <Link to="/Meet" className={`${isActive("/Meet")} transition`}>
//           Meet
//         </Link>
//         <Link to="/Features" className={`${isActive("/Features")} transition`}>
//           Features
//         </Link>
//         <Link to="/Customers" className={`${isActive("/Customers")} transition`}>
//           Customers
//         </Link>
//         <Link to="/Pricing" className={`${isActive("/Pricing")} transition`}>
//           Pricing
//         </Link>

//         {/* Company Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setDropdownOpen(true)}
//           onMouseLeave={() => setDropdownOpen(false)}
//         >
//           <button
//             className={`flex items-center gap-1 transition ${
//               dropdownOpen ? "text-blue-600" : "text-black hover:text-blue-500"
//             }`}
//           >
//             Company
//             <span className="text-xs">▼</span>
//           </button>

//           <div
//             className={`absolute left-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 shadow-lg py-2 transform transition-all duration-200 ease-out ${
//               dropdownOpen
//                 ? "opacity-100 translate-y-0 visible"
//                 : "opacity-0 -translate-y-2 invisible"
//             }`}
//           >
//             <Link
//               to="/AboutUs"
//               className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition ${
//                 isActive("/AboutUs")
//               }`}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/ChangeLog"
//               className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition ${
//                 isActive("/ChangeLog")
//               }`}
//             >
//               Changelog
//             </Link>
//             <Link
//               to="/Konn3ctTC"
//               className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition ${
//                 isActive("/Konn3ctTC")
//               }`}
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Right-side Buttons */}
//       <div className="hidden md:flex space-x-3">
//         <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-blue-50 hover:text-blue-500 transition shadow-sm">
//           Login
//         </button>
//         <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition shadow-sm">
//           Sign up, It’s Free
//         </button>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden">
//         <button
//           className="text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden max-h-[80vh] overflow-y-auto">
//           <div className="flex flex-col space-y-2 p-4 text-sm font-medium">
//             <Link
//               to="/Meet"
//               className={`${isActive("/Meet")} px-2 py-1`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Meet
//             </Link>
//             <Link
//               to="/Features"
//               className={`${isActive("/Features")} px-2 py-1`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Features
//             </Link>
//             <Link
//               to="/Customers"
//               className={`${isActive("/Customers")} px-2 py-1`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Customers
//             </Link>
//             <Link
//               to="/Pricing"
//               className={`${isActive("/Pricing")} px-2 py-1`}
//               onClick={() => setMenuOpen(false)}
//             >
//               Pricing
//             </Link>

//             <div className="border-t border-gray-200 pt-2">
//               <p className="text-gray-600 font-semibold">Company</p>
//               <Link
//                 to="/AboutUs"
//                 className={`${isActive("/AboutUs")} block px-2 py-1`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/ChangeLog"
//                 className={`${isActive("/ChangeLog")} block px-2 py-1`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Changelog
//               </Link>
//               <Link
//                 to="/Konn3ctTC"
//                 className={`${isActive("/Konn3ctTC")} block px-2 py-1`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Terms & Conditions
//               </Link>
//             </div>

//             <div className="flex flex-col space-y-2 pt-3">
//               <button className="px-4 py-2 border border-[#1A4699] rounded-lg text-black hover:bg-blue-50 hover:text-blue-500 transition">
//                 Login
//               </button>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-[#1A4699] transition">
//                 Sign up, It’s Free
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Konn3ctHeader;
