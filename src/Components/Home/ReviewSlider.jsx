import React from "react";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { BsTrophy, BsLightningCharge } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
const testimonials = [
  {
    name: "Jessica Parker",
    role: "Fitness Enthusiast",
    message:
      "This app has completely transformed my fitness routine! I love the challenges and the way it motivates me to stay active every day.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Michael Ross",
    role: "Marathon Runner",
    message:
      "The best fitness tracking app I've used. The stats are accurate, the interface is beautiful, and the leaderboard keeps me competitive!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Chen",
    role: "Yoga Instructor",
    message:
      "Love how it tracks everything automatically. The water tracker feature is a game-changer for staying hydrated throughout the day.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "David Williams",
    role: "Office Worker",
    message:
      "As someone who sits a lot, this app helps me stay aware of my activity levels. The reminders and challenges are super helpful!",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white urbanist">
      <div className="px-6 mx-auto text-center lg:px-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF9C2] text-[#D08700] text-sm font-medium mb-4">
          <FaRegStar size={16} />
          Achievements
        </div>

        {/* Heading */}
        <h2 className="text-5xl text-[#0A0A0A] ">
          Loved by{" "}
          <span className=" bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            500K+ Users
          </span>
        </h2>
        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-lg text-[#4A5565]">
          Compete with friends, complete goals, and earn amazing rewards
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 transition bg-gradient-to-r from-[#F9FAFB] to-[#FFFFFF] border border-[#E5E7EB] shadow-sm rounded-xl hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Quote */}
              <BiSolidQuoteAltLeft className="mb-2 text-3xl text-[#E9D4FF] " />

              {/* Message */}
              <p className="mb-5 text-base leading-relaxed text-left text-[#364153]">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 ">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="object-cover rounded-full w-9 h-9"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#6A7282]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating Bar */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 mt-12  bg-gradient-to-r from-[#FAF5FF] to-[#EFF6FF] border border-[#F3E8FF] rounded-xl md:flex-row">
          <div className="pr-6 text-center border-r black border-[#D1D5DC] md:text-left">
            <h3 className="text-3xl  text-[#0A0A0A]">4.8 / 5.0</h3>
            <div className="flex justify-center gap-1 mt-1 text-yellow-400 md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <p className="mt-1 text-base text-[#4A5565]">
              Based on 50,000+ reviews
            </p>
          </div>
          <div className="flex flex-col justify-start gap-3 items-strat">
            <h1 className="text-[#4A5565] text-left">Featured on:</h1>
            <div className="flex items-center gap-6 text-xl text-gray-700">
              <FiAward />
              <BsTrophy />
              <FaStar />
              <BsLightningCharge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
