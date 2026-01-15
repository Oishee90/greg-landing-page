import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen text-[#0F172A] bg-white pt-14 urbanist">
      <Navbar />

      {/* Content */}
      <div className="container px-6 py-16 mx-auto lg:px-20">
        <h1 className="container mx-auto mb-6 text-3xl font-semibold md:text-4xl ">
          Privacy Policy
        </h1>

        <p className="text-[#060d16] mb-6">Last updated: January 2025</p>

        <p className="text-[#060d16]  mb-6 leading-relaxed">
          At <span className="font-medium text-[#060d16] ">Step Quest App</span>
          , your privacy is very important to us. This Privacy Policy explains
          how we collect, use, and protect your personal information when you
          use our application and services.
        </p>

        {/* Section 1 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">
          1. Information We Collect
        </h2>
        <p className="text-[#060d16] leading-relaxed">
          We may collect personal information such as your name, email address,
          fitness activity data (steps, calories, water intake), and usage
          information to improve your experience.
        </p>

        {/* Section 2 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p className="text-[#060d16]  leading-relaxed">
          Your information is used to provide and improve app features, track
          progress, personalize challenges, and communicate important updates.
          We do not sell your personal data to third parties.
        </p>

        {/* Section 3 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">3. Data Security</h2>
        <p className="text-[#060d16]  leading-relaxed">
          We implement industry-standard security measures to protect your data.
          However, no method of transmission over the internet is 100% secure.
        </p>

        {/* Section 4 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">
          4. Third-Party Services
        </h2>
        <p className="text-[#060d16]  leading-relaxed">
          We may use trusted third-party services for analytics or
          authentication. These services have their own privacy policies
          governing data usage.
        </p>

        {/* Section 5 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">5. Your Rights</h2>
        <p className="text-[#060d16]  leading-relaxed">
          You have the right to access, update, or delete your personal
          information. If you have any concerns, please contact us.
        </p>

        {/* Section 6 */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">6. Contact Us</h2>
        <p className="text-[#060d16]  leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@stepquest.com"
            className="text-blue-400 hover:underline"
          >
            support@stepquest.com
          </a>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
}
