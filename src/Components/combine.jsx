import React from 'react';

const combineApp = () => {
  return (
    <div className="font-sans">
      {/* LandingPage Section */}
      <div className="relative min-h-screen w-full bg-cover bg-center bg-gradient-to-b from-[#03173f] to-[#113b89] text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
            `,
          }}
        />
        <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-white/20">
          <img src="https://via.placeholder.com/150x50?text=Konn3ct+Logo" alt="Konnect Logo" className="h-8 w-auto" />
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#" className="text-black hover:text-blue-400">Meet</a>
            <a href="#" className="text-black hover:text-blue-400">Features</a>
            <a href="#" className="text-black hover:text-blue-400">Customers</a>
            <a href="#" className="text-black hover:text-blue-400">Pricing</a>
            <div className="group relative">
              <button className="flex items-center gap-1 text-black hover:text-blue-400">
                Company
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
              </div>
            </div>
          </nav>
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white hover:text-blue-400 transition shadow-lg">
              Login
            </button>
            <button className="px-4 py-2 text-sm bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
              Sign up, It’s Free
            </button>
          </div>
        </header>
        <section className="relative text-center mt-20 px-6 w-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Smarter Meetings. <br /> Powered by AI.
          </h1>
          <p className="mt-4 text-base max-w-2xl mx-auto">
            One intelligent platform for meetings, <br /> teamwork, and seamless communication.
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
      </div>

      {/* App1 Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto text-center mb-32">
          <p className="text-lg font-medium mb-8">
            Trusted by 15,000+ Individuals and companies.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img src="https://via.placeholder.com/112x96?text=Nafdac" alt="Nafdac" className="h-24 w-28" />
            <img src="https://via.placeholder.com/112x96?text=Chams" alt="Chams" className="h-24 w-28" />
            <img src="https://via.placeholder.com/112x96?text=NCS" alt="NCS" className="h-24 w-28" />
            <img src="https://via.placeholder.com/112x96?text=Meyer" alt="Meyer" className="h-24 w-28" />
            <img src="https://via.placeholder.com/112x96?text=IntraHub" alt="IntraHub" className="h-24 w-28" />
            <img src="https://via.placeholder.com/112x96?text=ABK" alt="ABK" className="h-24 w-28" />
          </div>
        </div>
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-medium">The all-in-one workspace</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Do your most important work, faster
          </h2>
        </div>
        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center px-6">
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Workflows That Work for You
              </h3>
              <p className="text-gray-600 mt-2">
                Automate follow-ups, track progress, and keep your team aligned.
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>Decisions Made Smarter</li>
              <li>Collaborate Without Limits</li>
              <li>Meet with Intelligence</li>
            </ul>
          </div>
          <div className="relative w-full h-fit flex items-center justify-center bg-gray-100">
            <img
              src="https://via.placeholder.com/600x400?text=Background+Shape"
              alt="Background Shape"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-4xl w-full">
              <img
                src="https://via.placeholder.com/600x400?text=Video+Meeting"
                alt="Video Meeting"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* App2 Section */}
      <div className="w-full px-6 py-12 md:px-20 md:py-20 bg-white">
        <div className="text-center mb-12">
          <p className="text-sm text-blue-500 font-medium">
            10x your work with smarter tools
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Smart tools for smarter workflows
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="w-full h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">
            <img
              src="https://via.placeholder.com/600x360?text=Workspace+1"
              alt="Workspace"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Konn3ct AI</h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              One AI for all your collaboration
            </h2>
            <p className="text-gray-600 mb-6">
              Unify meetings, teamwork, and workflows with company-wide intelligence all in one platform.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Sign up, It’s Free
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">Konn3cted AI</h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Your AI workspace for teamwork
            </h2>
            <p className="text-gray-600 mb-6">
              From meetings to decisions, Konn3ct brings every aspect of collaboration together under one intelligent hub.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Try Konn3ct AI
            </button>
          </div>
          <div className="w-full h-[280px] md:h-[360px] bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center">
            <img
              src="https://via.placeholder.com/600x360?text=Workspace+2"
              alt="Workspace"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* App3 Section */}
      <div className="w-full bg-white px-6 md:px-16 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">CEO TALK’S</h2>
          <p className="text-gray-600 mt-2">
            The story, the product, and the future we’re building with Konn3ct.
          </p>
          <div className="mt-8 mx-auto w-full max-w-4xl h-[300px] md:h-[400px] bg-gray-100 rounded-xl border-2 border-purple-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl">▶</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Don’t just take it from us
          </h2>
          <p className="text-gray-600 mt-2">
            Loved by teams. Backed by awards. Trusted worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="mb-4 w-full">
              <img src="https://via.placeholder.com/48x40?text=Nafdac" alt="Nafdac" className="h-10 w-12" />
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Tristique purus orci ultricies malesuada donec et amet blandit nullam…
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-sm">Name name</p>
                <p className="text-gray-500 text-xs">CEO, NAFDAC</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="mb-4">
              <img src="https://via.placeholder.com/48x40?text=Chams" alt="Chams" className="h-10 w-12" />
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Tristique purus orci ultricies malesuada donec et amet blandit nullam…
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-sm">Name name</p>
                <p className="text-gray-500 text-xs">CEO, CHAMS</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <div className="mb-4">
              <img src="https://via.placeholder.com/48x40?text=IntraHub" alt="IntraHub" className="h-10 w-12" />
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Tristique purus orci ultricies malesuada donec et amet blandit nullam…
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-semibold text-sm">Name name</p>
                <p className="text-gray-500 text-xs">CEO, INTRAHUB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t pt-6 text-sm text-gray-600">
          <div>24/7 Support</div>
          <div>Changelog</div>
          <div>Secure and compliant</div>
          <div>99.9% uptime</div>
        </div>
      </div>

      {/* Konn3ctFooter Section */}
      <div className="relative bg-gradient-to-b from-[#03173f] to-[#2657B0] text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 120px)
            `,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-8">
                <img src="https://via.placeholder.com/150x50?text=Konn3ct+Logo" alt="Konnect Logo" className="h-8 w-auto" />
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
          <div className="mt-36 border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-sm hover:opacity-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M16.79 3.21a4.42 4.42 0 0 0-3.12-1.31c-1.25-.1-2.5.73-3.16.73-.7 0-1.88-.71-3.1-.69C5.5 1.98 3 3.86 2 6.8c-1 2.94.25 7.5 1.91 10.14 1.06 1.66 2.35 3.29 4.02 3.23 1.1-.04 1.52-.7 3.63-.7 2.12 0 2.45.7 3.76.69 1.5 0 2.43-1.66 3.37-3.3 1.06-1.95 1.5-3.88 1.52-3.99-.03-.01-3.35-1.29-3.36-5.06-.01-2.3 1.62-3.33 1.69-3.39-.94-1.37-2.41-1.51-2.92-1.53z" fill="#0b3a76"/>
                </svg>
                <div className="text-left text-xs">
                  <div className="font-semibold">Get on iPhone</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-[#0b3a76] rounded-lg px-4 py-2 shadow-sm hover:opacity-95">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M20 5H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1zM7 8h10v2H7V8z" fill="#0b3a76"/>
                </svg>
                <div className="text-left text-xs">
                  <div className="font-semibold">Get on Android</div>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-white/70">© 2025 konn3ct · All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default combineApp;