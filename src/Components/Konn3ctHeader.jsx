import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // ✅ Added ChevronDown
import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

const Konn3ctHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <header className="relative z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* ✅ Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Konn3ct Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link to="/Meet" className="text-black hover:text-blue-500">
            Meet
          </Link>
          <Link to="/Features" className="text-black hover:text-blue-500">
            Features
          </Link>
          <Link to="/Customers" className="text-black hover:text-blue-500">
            Customers
          </Link>
          <Link to="/Pricing" className="text-black hover:text-blue-500">
            Pricing
          </Link>

          {/* ✅ Dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className="flex items-center gap-1 text-black hover:text-blue-500 focus:outline-none"
            >
              Company <ChevronDown size={16} className="mt-[1px]" /> {/* ✅ Replaced ▼ */}
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg border border-gray-100 py-2"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to="/AboutUs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  to="/ChangeLog"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Changelog
                </Link>
                <Link
                  to="/Konn3ctTC"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Terms & Conditions
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* ✅ Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white hover:text-blue-500 transition shadow-sm">
            Login
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition shadow-sm">
            Sign up, It’s Free
          </button>
        </div>

        {/* ✅ Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none text-black"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-3">
          <Link
            to="/Meet"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Meet
          </Link>
          <Link
            to="/Features"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Features
          </Link>
          <Link
            to="/Customers"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Customers
          </Link>
          <Link
            to="/Pricing"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Pricing
          </Link>

          <hr className="border-gray-200" />

          <Link
            to="/AboutUs"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            to="/ChangeLog"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Changelog
          </Link>
          <Link
            to="/Konn3ctTC"
            onClick={closeMenu}
            className="block text-black hover:text-blue-500"
          >
            Terms & Conditions
          </Link>

          <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
            <button className="flex-1 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:text-blue-500 transition shadow-sm">
              Login
            </button>
            <button className="flex-1 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition shadow-sm">
              Sign up, It’s Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Konn3ctHeader;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   const openDropdown = () => setDropdownOpen(true);
//   const closeDropdown = () => setDropdownOpen(false);

//   return (
//     <header className="relative z-50 bg-white border-b border-gray-200">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/" onClick={closeMenu}>
//           <img src={Logo} alt="Konnect Logo" className="h-8 w-auto cursor-pointer" />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-sm font-medium relative">
//           <Link to="/Meet" className="text-black hover:text-blue-500">
//             Meet

//           </Link>
//           <Link to="/Features" className="text-black hover:text-blue-500">
//             Features
//           </Link>
//           <Link to="/Customers" className="text-black hover:text-blue-500">
//             Customers
//           </Link>
//           <Link to="/Pricing" className="text-black hover:text-blue-500">
//             Pricing
//           </Link>

//           {/* Dropdown with hover fix */}
//           <div
//             className="relative"
//             onMouseEnter={openDropdown}
//             onMouseLeave={closeDropdown}
//           >
//             <Link
//               className="flex items-center gap-1 text-black hover:text-blue-500 focus:outline-none"
//             >
//               Company 
//               <span className="text-xs">▼</span>
//             </Link>

//             {dropdownOpen && (
//               <div
//                 className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg border border-gray-100 py-2"
//                 onMouseEnter={openDropdown}
//                 onMouseLeave={closeDropdown}
//               >
//                 <Link
//                   to="/AboutUs"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   to="/ChangeLog"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Changelog
//                 </Link>
//                 <Link
//                   to="/Konn3ctTC"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Terms & Conditions
//                 </Link>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Auth Buttons (Desktop) */}
//         <div className="hidden md:flex space-x-3">
//           <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white hover:text-blue-400 transition shadow-md">
//             Login
//           </button>
//           <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//             Sign up, It’s Free
//           </button>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="md:hidden focus:outline-none text-black"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-3">
//           <Link to="/Meet" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Meet
//           </Link>
//           <Link to="/Features" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Features
//           </Link>
//           <Link to="/Customers" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Customers
//           </Link>
//           <Link to="/Pricing" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Pricing
//           </Link>
//           <hr className="border-gray-200" />
//           <Link to="/AboutUs" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             About Us
//           </Link>
//           <Link to="/ChangeLog" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Changelog
//           </Link>
//           <Link to="/Konn3ctTC" onClick={closeMenu} className="block text-black hover:text-blue-500">
//             Terms & Conditions
//           </Link>
//           <div className="pt-3 border-t border-gray-200 space-y-2 space-x-2">
//             <button className="w-1/3 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:text-blue-400 transition shadow-sm">
//               Login
//             </button>
//             <button className="w-1/3 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//               Sign up, It’s Free
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Konn3ctHeader;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // For hamburger and close icons
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="relative z-50 bg-white border-b border-gray-200">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/" onClick={closeMenu}>
//           <img
//             src={Logo}
//             alt="Konnect Logo"
//             className="h-8 w-auto cursor-pointer"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           <Link to="/Meet" className="text-black hover:text-blue-500">
//             Meet
//           </Link>
//           <Link to="/Features" className="text-black hover:text-blue-500">
//             Features
//           </Link>
//           <Link to="/Customers" className="text-black hover:text-blue-500">
//             Customers
//           </Link>
//           <Link to="/Pricing" className="text-black hover:text-blue-500">
//             Pricing
//           </Link>

//           {/* Dropdown */}
//           <div className="group relative">
//             <button className="flex items-center gap-1 text-black hover:text-blue-500">
//               Company
//               <span className="text-xs">▼</span>
//             </button>
//             <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//               <Link
//                 to="/AboutUs"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/ChangeLog"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Changelog
//               </Link>
//               <Link
//                 to="/Konn3ctTC"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Terms & Conditions
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* Auth Buttons (Desktop) */}
//         <div className="hidden md:flex space-x-3">
//           <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white hover:text-blue-400 transition shadow-md">
//             Login
//           </button>
//           <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//             Sign up, It’s Free
//           </button>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="md:hidden focus:outline-none text-black"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-3">
//           <Link
//             to="/Meet"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Meet
//           </Link>
//           <Link
//             to="/Features"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Features
//           </Link>
//           <Link
//             to="/Customers"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Customers
//           </Link>
//           <Link
//             to="/Pricing"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Pricing
//           </Link>
//           <hr className="border-gray-200" />
//           <Link
//             to="/AboutUs"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/ChangeLog"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Changelog
//           </Link>
//           <Link
//             to="/Konn3ctTC"
//             onClick={closeMenu}
//             className="block text-black hover:text-blue-500"
//           >
//             Terms & Conditions
//           </Link>
//           <div className="pt-3 border-t border-gray-200 space-y-2 space-x-2">
//             <button className="w-1/3 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:text-blue-400 transition shadow-sm">
//               Login
//             </button>
//             <button className="w-1/2 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//               Sign up, It’s Free
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Konn3ctHeader;





// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   return (
//     <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-t border-gray-200">
//       {/* Logo */}
//       <Link to="/">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto cursor-pointer" />
//       </Link>

//       {/* Navigation Links */}
//       <nav className="hidden md:flex space-x-6 text-sm font-medium">
//         <Link to="/Meet" className="text-black hover:text-blue-400">
//           Meet
//         </Link>
//         <Link to="/Features" className="text-black hover:text-blue-400">
//           Features
//         </Link>
//         <Link to="/Customers" className="text-black hover:text-blue-400">
//           Customers
//         </Link>
//         <Link to="/Pricing" className="text-black hover:text-blue-400">
//           Pricing
//         </Link>

//         {/* Company Dropdown */}
//         <div className="group relative">
//           <button className="flex items-center gap-1 text-black hover:text-blue-400">
//             Company
//             <span className="text-xs">▼</span>
//           </button>
//           <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//             <Link
//               to="/AboutUs"
//               className="block px-4 py-2 hover:bg-gray-100"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/ChangeLog"
//               className="block px-4 py-2 hover:bg-gray-100"
//             >
//               Changelog
//             </Link>
//             <Link
//               to="/Konn3ctTC"
//               className="block px-4 py-2 hover:bg-gray-100"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Auth Buttons */}
//       <div className="flex space-x-3">
//         <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white hover:text-blue-400 transition shadow-lg">
//           Login
//         </button>
//         <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//           Sign up, It’s Free
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Konn3ctHeader;





// import React from "react";
// import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

// const Konn3ctHeader = () => {
//   return (
//    <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-t border-gray-200">
//         <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           <a href="#" className="text-black hover:text-blue-400">
//             Meet
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Features
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Customers
//           </a>
//           <a href="#" className="text-black hover:text-blue-400">
//             Pricing
//           </a>
//           <div className="group relative">
//             <button className="flex items-center gap-1 text-black hover:text-blue-400">
//               Company
//               <span className="text-xs">▼</span>
//             </button>
//             <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 About Us
//               </a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Careers
//               </a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </nav>

//         <div className="flex space-x-3">
//           <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white  hover:text-blue-400 transition shadow-lg">
//             Login
//           </button>
//           <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
//             Sign up, It’s Free
//           </button>
//         </div>
//       </header>
//   );
// };

// export default Konn3ctHeader;
