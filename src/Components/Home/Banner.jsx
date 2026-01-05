import banner from "../../assets/banner.png";
import { NavLink } from "react-router-dom";
import google from "../../assets/google.png";
import { LiaApple } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";

import { FiSmartphone } from "react-icons/fi";
const Banner = () => {
  return (
    <section id="home" className="relative overflow-hidden text-white urbanist">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#000000] via-[#101828] to-[#1E2939]" />

      <div className="relative px-6 pt-32 pb-32 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          {/* LEFT CONTENT */}
          <div className="w-full space-y-6 lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm text-[#FFFFFF] border border-[#FFFFFF33]">
              <SlEnergy className="text-[#FDC700]" /> Your Personal Fitness
              Companion
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-medium leading-tight dm-sans sm:text-5xl lg:text-6xl">
              Track Your Steps.
              <br />
              <span className="bg-gradient-to-r from-[#C27AFF] to-[#51A2FF] bg-clip-text text-transparent">
                Beat Challenges.
              </span>
              <br />
              Stay Fit Every Day.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-[#D1D5DC]">
              Monitor steps, distance, calories, water intake & win fitness
              challenges. Start your journey to a healthier lifestyle today.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* App Store */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-xl p-[1px] bg-gradient-to-r from-[#C07AFF]/50 to-[#54A0FE]/50"
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0B0E1A] backdrop-blur-md transition group-hover:bg-[#11142A]">
                  <LiaApple className="text-2xl text-white" />
                  <div className="leading-tight">
                    <p className="text-[11px] text-gray-300">Download on the</p>
                    <p className="text-sm font-semibold text-white">
                      App Store
                    </p>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-xl p-[1px] bg-gradient-to-r from-[#C07AFF]/50 to-[#54A0FE]/50"
              >
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0B0E1A] backdrop-blur-md transition group-hover:bg-[#11142A]">
                  <FiSmartphone className="text-xl text-white" />
                  <div className="leading-tight">
                    <p className="text-[11px] text-gray-300">Get it on</p>
                    <p className="text-sm font-semibold text-white">
                      Google Play
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* CTA */}
            <NavLink
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium transition rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-[#FFFFFF33]"
            >
              Start Your Fitness Journey
            </NavLink>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-10 text-sm text-[#FFFFFF]">
              <div>
                <p className="text-xl font-medium text-white">500K+</p>
                <p>Active Users</p>
              </div>
              <div>
                <p className="text-xl font-medium text-white">4.8★</p>
                <p>App Rating</p>
              </div>
              <div>
                <p className="text-xl font-medium text-white">10M+</p>
                <p>Steps Tracked</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#9810FA] to-[#155DFC] opacity-40 rounded-3xl"></div>

            <img
              src={banner}
              alt="Fitness App Preview"
              className="relative rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
