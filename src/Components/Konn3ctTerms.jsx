import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import Footer from "../Components/kfooter";

const Konn3ctTC = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* Header */}
       <div
        className="absolute top-0 left-0 w-full h-[41vh] -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 90px),
            repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 0, rgba(128, 128, 128, 0.08) 1px, transparent 1px, transparent 40px)
          `,
        }}
      />
      <Konn3ctHeader />

      <section className="text-center max-w-4xl mx-auto mb-16 mt-11">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
       Terms of Service
        </h1>
        <p className="mt-4 text-base max-w-2xl mx-auto sm:text-lg text-gray-600">
        Last updated March 4, 2024
        </p>
      </section>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center py-10 px-4 md:px-8">
        {/* <h2 className="text-2xl font-semibold mb-6 text-center">
          Terms and Conditions
        </h2> */}

        {/* Scrollable Terms Box */}
        <div className="w-full max-w-full bg-white border-none rounded-lg p-6 h-[100vh] overflow-y-auto text-sm leading-relaxed hide-scrollbar">
          <p className="mb-4">          
            Konn3ct Ltd. (“Konn3ct” or “Company”) provides a SaaS-based customer
            support platform optimized for B2B (hereinafter the “Services”) that
            brings together all the tools a post-sales team needs to implement
            and support new clients seamlessly and reliably fostering fulfilling
            long-term client relationships. These Terms of Service (“Terms”)
            govern how you, the customer (hereinafter, “Customer”), use Pylon’s
            website and Services and by signing up, creating an account,
            entering into an Order Form, or accessing and using our website or
            Services, you signify that you have read, understand, and agree to
            be bound by these Terms. 
 </p>
            <p className="mt-2">If you accept these Terms and are using
            the website or Services on behalf of another organization or legal
            entity, you represent and warrant that you are authorized to do so.
            If you do not have such authority or do not agree to these Terms,
            you may not access the website or Services.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">
            1. SaaS Services and Support
          </h3>
          <p className="mb-4">
            1.1 Customer may access and use the Services as defined herein. <br />
            1.2 Subject to these Terms, Company will make commercially
            reasonable efforts to provide support to customers. <br />
            1.3 Company grants Customer a non-transferable license to use the
            Services during the Term.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">
            2. Restrictions and Responsibilities
          </h3>
          <p className="mb-4">
            2.1 Customer will not resell, sublicense, or distribute the
            Services. <br />
            2.2 Customer shall comply with all applicable laws and regulations
            when using the Services. <br />
            2.3 Customer agrees not to copy, modify, or reverse-engineer any
            part of the Services or Software.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">
            3. Confidentiality; Proprietary Rights
          </h3>
          <p className="mb-4">
            3.1 Each party agrees to protect the confidential information of the
            other and to use it only for the purposes of fulfilling these Terms.
            <br />
            3.2 Company retains all ownership rights to the Services,
            Documentation, and related intellectual property.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">4. Payment of Fees</h3>
          <p className="mb-4">
            4.1 Customer will pay all applicable fees as described in the Order
            Form. <br />
            4.2 Fees are non-refundable except as otherwise stated herein. <br />
            4.3 Customer shall be responsible for all applicable taxes and
            payment processing fees.
          </p>

          <p className="mt-6">
            By accessing or using the Services, you agree to be bound by these
            Terms of Service. If you do not agree, please discontinue use of the
            Services immediately.
          </p>
        </div>

      <div className="mt-0" />
      </main>

      <Footer />
      
    </div>
    
  );
};

export default Konn3ctTC;






