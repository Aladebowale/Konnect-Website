// import React from "react";

// const logs = [
//   {
//     date: "August 25, 2025",
//     title: "Microsoft Teams Chat Integration",
//     image: "", // replace with actual image when available
//     description:
//       "Connect Microsoft Teams to Konn3ct to track issues and respond to messages all in one place.",
//     tags: [
//       { label: "Accounts/Integrations", detail: "Implemented email hash verifier to help validation identity verification." },
//       { label: "Chat", detail: "Implemented email hash verifier to help validation identity verification." },
//     ],
//   },
//   {
//     date: "August 02, 2025",
//     title: "Keyboard Shortcuts",
//     image: "",
//     description:
//       "New palette of keyboard shortcuts accessible across the app, including quick navigation to specific pages or quickly searching for certain objects.",
//     tags: [
//       { label: "Command/Shortcuts", detail: "New quick action for creating a new issue." },
//       { label: "General", detail: "Improved UI for knowledge base, customer portal, and ticket forms." },
//       { label: "Accounts", detail: "Admins can see all calendars connected by team." },
//       { label: "General", detail: "In-app chat enabled by default in KB for logged-in users." },
//       { label: "Issues", detail: "Set date or datetime custom fields to the current time in triggers." },
//     ],
//   },
// ];

// const Changelog = () => {
//   return (
//     <div className="min-h-screen bg-white font-sans px-4 sm:px-6 lg:px-8 py-10">
//       {/* Search Bar */}
//       <div className="max-w-4xl mx-auto mb-12">
//         <input
//           type="text"
//           placeholder="Search by Name, Date..."
//           className="w-full border border-gray-200 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Changelog Entries */}
//       <div className="max-w-4xl mx-auto space-y-16">
//         {logs.map((log, index) => (
//           <div key={index}>
//             <p className="text-sm text-gray-500 mb-2">{log.date}</p>
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">{log.title}</h2>

//             {/* Image placeholder */}
//             <div className="w-full h-64 bg-gray-200 rounded-lg mb-4"></div>

//             <p className="text-gray-700 mb-4">{log.description}</p>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {log.tags.map((tag, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 text-sm bg-gray-50"
//                 >
//                   <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
//                     {tag.label}
//                   </span>
//                   <span className="text-gray-700 text-xs">{tag.detail}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Changelog;

// ChangelogPage.jsx
import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import Footer from "../Components/kfooter";


/**
 * ChangelogPage
 *
 * - Uses Tailwind utility classes
 * - Replace `image` values with real image imports or URLs
 */

const logs = [
  {
    date: "August 25, 2025",
    title: "Microsoft Teams Chat Integration",
    image: "", // replace with actual image URL or import
    description:
      "Connect Microsoft Teams to konn3ct to track issues and respond to messages all in one place.",
    tags: [
      {
        label: "Accounts/Integrations",
        note: "Implemented email hash verifier to help validation identity verification.",
      },
      {
        label: "Chat",
        note: "Implemented email hash verifier to help validation identity verification.",
      },
    ],
  },
  {
    date: "August 02, 2025",
    title: "Keyboard Shortcuts",
    image: "",
    description:
      "New palette of keyboard shortcuts accessible across the app, including quick navigation to specific pages or quickly searching for certain objects.",
    tags: [
      {
        label: "Command/Shortcuts",
        note: "New quick action for creating a new issue.",
      },
      {
        label: "General",
        note: "Improved UI for knowledge base, customer portal, and ticket forms.",
      },
      {
        label: "Accounts",
        note: "Admins can see all calendars connected by team.",
      },
      {
        label: "General",
        note: "In-app chat enabled by default in KB for logged-in users.",
      },
      {
        label: "Issues",
        note: "Set date or datetime custom fields to the current time in triggers.",
      },
    ],
  },

  // add other entries...
];

const ChangelogPage = () => {
  //   return (
  //     <div className="min-h-screen bg-white font-sans text-gray-900">
  //       {/* Top padding + container */}
  //       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  //         {/* Search bar (centered) */}
  //         <div className="flex justify-center mb-8">
  //           <input
  //             aria-label="search"
  //             placeholder="Search by Name, Date..."
  //             className="w-full max-w-md border border-gray-200 rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
  //           />
  //         </div>

  //         {/* Entries list */}
  //         <div className="space-y-16">
  //           {logs.map((item, idx) => (
  //             <article
  //               key={idx}
  //               className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-start"
  //             >
  //               {/* Left (date) */}
  //               <div className="hidden md:block">
  //                 <time className="text-sm text-gray-600">{item.date}</time>
  //               </div>

  //               {/* On small screens show date above title */}
  //               <div className="md:hidden mb-1">
  //                 <time className="text-sm text-gray-600">{item.date}</time>
  //               </div>

  //               {/* Right (content) */}
  //               <div className="md:col-start-2">
  //                 <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
  //                   {item.title}
  //                 </h2>

  //                 {/* Image placeholder */}
  //                 <div className="w-full md:w-[720px] lg:w-[760px] h-56 md:h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
  //                   {/* If you have a real image: replace below div with
  //                       <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
  //                   */}
  //                   {item.image ? (
  //                     <img
  //                       src={item.image}
  //                       alt={item.title}
  //                       className="w-full h-full object-cover"
  //                     />
  //                   ) : (
  //                     <div className="w-full h-full flex items-center justify-center text-gray-400">
  //                       {/* placeholder text */}
  //                     </div>
  //                   )}
  //                 </div>

  //                 <p className="text-gray-700 mb-4">{item.description}</p>

  //                 {/* Tags line (pills) */}
  //                 <div className="flex flex-col gap-3">
  //                   {item.tags.map((tag, i) => (
  //                     <div
  //                       key={i}
  //                       className="inline-flex items-start gap-3 bg-white border border-gray-200 rounded-full px-3 py-2"
  //                     >
  //                       {/* green dot pill */}
  //                       <span className="inline-flex items-center justify-center min-w-[18px] h-5 rounded-full bg-green-50 border border-green-200">
  //                         <span className="w-2 h-2 rounded-full bg-green-600" />
  //                       </span>

  //                       {/* tag label + short note */}
  //                       <div className="text-left">
  //                         <div className="text-xs font-semibold text-gray-800">
  //                           {tag.label}
  //                         </div>
  //                         <div className="text-xs text-gray-600">
  //                           {tag.note}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </article>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  return (
    <div className="min-h-screen font-sans text-gray-900">

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

         <section className="text-center max-w-4xl mx-auto mb-16 mt-28">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
        Changelog
        </h1>
        <p className="mt-4 text-base max-w-2xl mx-auto sm:text-lg text-gray-600">
        Last updated March 4, 2024
        </p>
      </section>
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            aria-label="search"
            placeholder="Search by Name, Date..."
            className="w-full max-w-md border border-gray-300 rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Entries */}
        <div className="space-y-16">
          {logs.map((item, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 items-start"
            >
              {/* Left Date */}
              <div className="hidden md:block">
                <time className="text-sm text-gray-600">{item.date}</time>
              </div>

              {/* Mobile Date */}
              <div className="md:hidden mb-2">
                <time className="text-sm text-gray-600">{item.date}</time>
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>

                {/* Image */}
                <div className="w-full h-56 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-3">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-col gap-2">
                  {item.tags.map((tag, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="inline-flex items-center gap-1 border border-gray-200 bg-gray-50 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        {tag.label}
                      </span>
                      <p className="text-sm text-gray-600 leading-tight">
                        {tag.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="relative z-20 mt-20 space-y-16">
        <Footer />
      </div>
    </div>
  );
};
export default ChangelogPage;
