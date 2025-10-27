import React from "react";
import Konn3ctHeader from "./Konn3ctHeader";
import Footer from "./kfooter";

const Konn3ctPP = () => {
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
          Privacy Policy
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
          <h2 className="mb-2 font-bold text-base">Introduction</h2>
          <p className="mb-2">
            This Privacy Policy describes how Konn3ct Ltd. (“Company” or “our”
            or “we”) collects, uses, and discloses information associated with
            an identified or identifiable individual (referred to in this
            Privacy Policy as “Personal Information”) and what choices you have
            around this activity.  If you have any questions, please don’t
            hesitate to contact us.
          </p>
          <p className="mb-2">
            We may change this Privacy Policy from time to time, including as
            required to keep current with applicable laws and regulations, new
            technologies and security standards. When we do, we will post the
            updated policy on our Website located at https://www.konn3ct.com/.
             If we change the policy in a material and retroactive manner, we
            will provide appropriate notice to you.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">
            1. Applicability of this Privacy Policy
          </h3>
          <p className="mb-4">
            The Website is controlled by Pylon Labs, Inc.. This Privacy Policy
            applies only to this Website (https://www.usepylon.com/), our mobile
            sites, and our use of social media sites (collectively, the
            “Sites”), and any other Personal Information obtained when you call,
            email, or otherwise communicate or interact with our Company.  By
            accessing the Sites on any computer, mobile phone, tablet, or other
            device (collectively, “Device”) or otherwise interacting with our
            Company, you agree to the terms of this Privacy Policy. If you do
            not agree to the policy, please do not use the Sites. We encourage
            you to periodically review our Privacy Policy to stay informed about
            how we are using the information we collect.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">
            2. Information We Collect and Receive
          </h3>
          <p className="mb-2">
            Category of Personal Information CollectedSourcePurpose for
            CollectionCategories of RecipientsContact information: such as name,
            email address, personal or business address, and phone number, and
            other information you provide.From visitors to the Sites who call
            us, sign-up for emails or other services, or otherwise interact with
            us.To communicate with and respond to visitors and our customers
            about our business operations, including verification of identity or
            to meet legal obligations.We may share this information with select
            marketing, information technology, or other service providers and
            partners.Browsing information: such as your IP address, MAC address
            or other device identifier, HTTP Referrer information, the kind of
            browser or computer you use, pages and content that you visit on the
            Sites, what you click on, the state and country from which you
            access the Sites, date and time of your visit, and web pages you
            linked to our Sites from.Our Sites and your interactions with the
            Sites, including through the use of cookies and other tracking
            technologies explained further below.To evaluate usage of the Sites
            and improve performance and our services; to protect the security
            and integrity of the Sites and our business, such as preventing
            fraud, hacking, and other criminal activity or to meet legal
            obligations.Our third party service providers who help us with fraud
            protection and website analytics. In some jurisdictions, such as the
            European Union and United Kingdom, individuals may have the right to
            opt-in or withdraw consent for certain uses. If you reside in such
            jurisdictions, you may have additional rights which are detailed in
            “Access, Correction, & Deletion" below.
          </p>
          <p className="mb-2">
            When you visit the Sites, we may collect certain non-personal
            information from you, including your Internet Protocol (IP) address,
            MAC address, browser type, operating system, device-identifying
            information, the specific web pages visited immediately preceding
            your connection, and the domain name from which you accessed the
            Sites. In addition, we may collect information about your browsing
            behavior, such as the date and time you visit the Sites, the areas
            or pages of the Sites that you visit, the amount of time you spend
            viewing the Sites, the number of times you return to the Sites and
            other clickstream data. We may also use such non-personal or
            deidentified, aggregated information for statistical analysis,
            research, and other purposes.
          </p>
          <p className="mb-4">
            We do not use Google Workspace APIs to develop, improve, or train
            generalized AI or machine learning models.
          </p>

          <h3 className="font-bold mt-6 mb-2 text-base">3. Cookie Policy</h3>
          <p className="mb-4">
            A cookie is a small data text file, which is stored on the hard
            drive of your computer or mobile device.  Each cookie is unique to
            your web browser.  It will contain some anonymous information such
            as a unique identifier, website’s domain name, and some digits and
            numbers.  Cookies cannot be used to run programs or deliver viruses
            to your computer. At no time will our cookies collect your
            personally identifiable information.When you visit our Website, we
            will store certain types of persistent cookies on your computer in
            order to authorize access to our private content and to facilitate
            and customize your use of our Website.  A persistent cookie
            remembers information, settings, preferences, or sign-on credentials
            that the user has previously saved.
          </p>
          <p className="mb-2">Essential cookies</p>
          <p className="mb-2">
            Essential cookies allow us to offer you the best possible experience
            when accessing and navigating through our Sites and using its
            features. For example, these cookies let us recognize that you have
            created an account and have logged into that account.
          </p>
          <p className="mb-2">Functionality cookies</p>
          <p className="mb-2">
            Functionality cookies let us operate the Sites in accordance with
            the choices you make. For example, we will recognize your username
            and remember the choices that you made to your account during future
            visits.
          </p>
          <p className="mb-2">Analytical cookies</p>
          <p className="mb-2">
            These cookies enable us and third-party services to collect
            aggregated data for statistical purposes on how our visitors use our
            Website.  These cookies do not contain or collect Personal
            Information and are merely used to help us improve your user
            experience of the Sites.
          </p>
          <p className="mb-2">
            Once you leave our Sites, our persistent cookies remain on your hard
            drive.  This helps create a convenient and faster website
            experience.
          </p>
          <p className="mb-2">
            You are always free to decline or restrict our cookies through your
            browser setting.  But, due to the nature of our essential cookies,
            some parts of our Sites may not work properly. <br /> You can find
            general information on the Internet about cookies and details on how
            to delete them from your computer and mobile devices.
          </p>
          <p className="mb-2">
            At the moment we only use essential cookies, but we reserve the
            right to add functionality and analytical cookies in the future.
          </p>
          <h3 className="font-bold mt-6 mb-2 text-base">
            4. Interest-based advertising
          </h3>
          <p className="mb-4">
            You can opt out of interest-based advertising from third-party
            providers who follow the Digital Advertising Alliance's
            Self-Regulatory Principles for Online Behavioral Advertising at
            www.aboutads.info/choices.
          </p>
          <h3 className="font-bold mt-6 mb-2 text-base">5. Your Choices</h3>

          <p className="mb-0">You may at any time:</p>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li>
              Stop receiving marketing or promotional emails, direct mail,
              phone, and mobile marketing communications;
            </li>
            <li>Update and correct your Personal Information; and</li>
            <li>
              Request removal of information you post on our digital properties;
              in some cases, we may not be able to remove your content or
              Personal Information, in which case we will let you know if we are
              unable to do so and why.
            </li>
          </ul>
          <p className="mb-0">
            To do any of these, let us know by one of these methods: 
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Follow the directions in a marketing email, direct mail, or mobile
              communication that you receive from us; and{" "}
            </li>
            <li>
              Provide your request and current contact information through one
              of the contact methods listed under “Contact Us” below{" "}
            </li>
          </ul>
        </div>

        <div className="mt-0" />
      </main>

      <Footer />
    </div>
  );
};

export default Konn3ctPP;
