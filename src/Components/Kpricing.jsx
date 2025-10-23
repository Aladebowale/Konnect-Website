import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import Kpricing from "./PriceP1";

const PricingPage = () => {
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
      <section className="relative text-center mt-20 px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Fair pricing <br /> that grows with you
        </h1>
        <p className="mt-4 text-base  max-w-2xl mx-auto text-black">
          Join thousands of companies achieving faster resolution times, <br />{" "}
          higher team efficiency, and better satisfaction.
        </p>
      </section>

             <Kpricing/>

    </div>
  );
};

export default PricingPage;
