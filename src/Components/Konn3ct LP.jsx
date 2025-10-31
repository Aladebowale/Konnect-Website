import React from "react";
// import Logo from "../Images/konn3ct_logo.png";
import Konn3ctHeader from "../Components/Konn3ctHeader";
import App1 from "../Components/Konn3ct 1";
import App2 from "../Components/Konn3ct 2";
import App3 from "../Components/Konn3ct 3";
import Footer from "../Components/kfooter";

const LandingPage = () => {
  return (
    <div>
      <div>
        <div className="w-full flex flex-col bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white font-sans">
          {/* <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#113b89] text-white font-sans"> */}
          {/* Navbar */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
          `,
            }}
          />
          <Konn3ctHeader />

          {/* Hero Section */}
          <section className="relative text-center mt-20 px-6 w-full">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smarter Meetings. <br /> Powered by AI.
            </h1>
            <p className="mt-4 text-base  max-w-2xl mx-auto">
              One intelligent platform for meetings, <br /> teamwork, and
              seamless communication.
            </p>

            <div className="mt-6 flex justify-center">
              <div className="relative w-72">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 pr-28 w-full rounded-xl border-none text-black outline-none text-xs"
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#34A853] font-medium text-white px-3 py-2 rounded-md text-xs hover:bg-green-800">
                  Get started
                </button>
              </div>
            </div>

            <p className="text-sm mt-2">Free Forever. No Credit Card.</p>
          </section>

          {/* Feature Grid */}
          {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-20 px-6"> */}

          <section className="relative top-[-100px] flex justify-center items-end gap-7  ">
            <aside className="flex items-center gap-5">
              <div className="flex flex-col gap-5">
                <div className="h-24 w-[150px] bg-white"></div>
                <div className="h-24 w-24 bg-white"></div>
                <div className="h-24 w-24 bg-white"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="h-24 w-24 bg-white"></div>               
                <div className="h-24 w-24 bg-white"></div>               
                <div className="h-24 w-24 bg-white"></div>               
                <div className="h-24 w-24 bg-white"></div>                               
              </div>
            </aside>

            <div className="w-1/2 grid grid-cols-2 gap-5">
              <div className="h-[150px]  bg-white rounded-md"></div>
              <div className="h-[150px] bg-white rounded-md"></div>
              <div className="h-[150px] bg-white rounded-md"></div>
              <div className="h-[150px] bg-white rounded-md"></div>
            </div>

              <aside className="flex items-center gap-5">
              <div className="flex flex-col gap-5">
                <div className="h-24 w-24 bg-white"></div>
                <div className="h-24 w-24 bg-white"></div>
                <div className="h-24 w-24 bg-white"></div>
                <div className="h-24 w-24 bg-white"></div>               
              </div>
              <div className="flex flex-col gap-5">
                <div className="h-24 w-24 bg-white"></div>               
                <div className="h-24 w-24 bg-white"></div>               
                <div className="h-24 w-24 bg-white"></div>                               
              </div>
            </aside>
          </section>

          {/* <div className="min-h-screen flex items-center justify-center ">
            <div className="flex flex-row gap-4 h-36">
              <div className="flex flex-col gap-4">
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Note Taker
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Highlight
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Scheduling
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white w-24 h-full flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Audio Boost
                </div>
                <div className="bg-white w-24 h-full flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Reactions
                </div>
                <div className="bg-white w-24 h-full flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Playback
                </div>
                <div className="bg-white w-24 h-full flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Calendar
                </div>
              </div>
            </div>

            <div className="col-span-2 flex flex-cols-4 grid-rows gap-4">
              <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">
                Live Caption
              </div>
              <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">
                Whiteboard
              </div>
              <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]">
                Donate
              </div>
              <div className="bg-white rounded-lg shadow flex items-center justify-center col-span-2 row-span-2 text-lg font-semibold text-[#1A4699]0">
                AI
              </div>
            </div>

            <div className="flex flex-row gap-4 h-36">
              <div className="flex flex-col gap-4">
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Transcriptions
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Spreadsheets
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  eCinema
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow text-[#1A4699]">
                  Calendar
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">
                  Dashboard
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">
                  Calendar
                </div>
                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-lg shadow">
                  Calendar
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* </div> */}
        <div className="relative z-20 mt-20 space-y-16">
          <App1 />
          <App2 />
          <App3 />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
