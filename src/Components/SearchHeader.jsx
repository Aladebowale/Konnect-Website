import React, { useState } from "react";
import { MapPin, Search, ChevronDown } from "lucide-react";

const cities = ["All Locations", "Lagos, Nigeria", "Abuja, Nigeria", "Port Harcourt, Nigeria", "Ibadan, Nigeria"];

const SearchHeader = ({ onSearchChange, onLocationChange }) => {
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (city) => {
    setLocation(city);
    setDropdownOpen(false);
    onLocationChange(city);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-4 lg:px-16 py-4 bg-white">
      {/* Search Input */}
      <div className="flex items-center w-full sm:w-[70%] bg-white rounded-full shadow-sm border border-gray-200 px-4 py-2">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by Name, Date, location..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Location Dropdown */}
      <div className="relative ">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-50"
        >
          <MapPin className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium">{location}</span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-52 z-20">
            {cities.map((city) => (
              <div
                key={city}
                onClick={() => handleSelect(city)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  city === location ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
