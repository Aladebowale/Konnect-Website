import React from "react";
import Nafdac from "../Images/Konn3ct Images/Nafdac.png";
import Chams from "../Images/Konn3ct Images/Chams.png";
import IntraHub from "../Images/Konn3ct Images/Intrahub.png";

const App3 = () => {
  return (
    <div className="relative z-10 w-full bg-white  md:px-16 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">CEO TALK’S</h2>
        <p className="text-black mt-2">
          The story, the product, and the future we’re building with Konn3ct.
        </p>
        <div className="mt-8 mx-auto w-full max-w-4xl h-[300px] md:h-[400px] bg-gray-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
            {/* <span className="text-white text-xl">▶</span> */}
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Don’t just take it from us
        </h2>
        <p className="text-gray-600 mt-2">
          Loved by teams. Backed by awards. Trusted worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-left">
          <div className="mb-4 w-full">
            <img src={Nafdac} alt="logo1" className="h-10 w-12" />
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Tristique purus orci
            ultricies malesuada donec et amet blandit nullam…
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-sm text-black">Name name</p>
              <p className="text-gray-500 text-xs">CEO, NAFDAC</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-left">
          <div className="mb-4">
            <img src={Chams} alt="logo1" className="h-10 w-12" />
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Tristique purus orci
            ultricies malesuada donec et amet blandit nullam…
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-sm text-black">Name name</p>
              <p className="text-gray-500 text-xs">CEO, CHAMS</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-left">
          <div className="mb-4">
            <img src={IntraHub} alt="logo1" className="h-10 w-12" />
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Tristique purus orci
            ultricies malesuada donec et amet blandit nullam…
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold text-sm text-black">Name name</p>
              <p className="text-gray-500 text-xs">CEO, INTRAHUB</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t pt-6 text-sm text-gray-600">
        <div>24/7 Support</div>
        <div>Changelog</div>
        <div>Secure and compliant</div>
        <div>99.9% uptime</div>
      </div> */}
    </div>
  );
};

export default App3;
