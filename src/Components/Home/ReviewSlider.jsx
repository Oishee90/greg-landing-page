import React from "react";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { BsTrophy, BsLightningCharge } from "react-icons/bs";

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
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-yellow-600 bg-yellow-100 rounded-full">
            ⭐ Testimonials
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Loved by <span className="text-blue-600">500K+ Users</span>
          </h2>
          <p className="mt-2 text-gray-500">
            See what our community has to say about their fitness journey with
            Step Quest
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 transition bg-white border shadow-sm rounded-xl hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Quote */}
              <BiSolidQuoteAltLeft className="mb-2 text-3xl text-purple-200" />

              {/* Message */}
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="object-cover rounded-full w-9 h-9"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating Bar */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl md:flex-row">
          <div className="pr-6 text-center border-r black border- md:text-left">
            <h3 className="text-xl font-bold text-gray-900">4.8 / 5.0</h3>
            <div className="flex justify-center gap-1 mt-1 text-yellow-400 md:justify-start">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Based on 50,000+ reviews
            </p>
          </div>

          <div className="flex items-center gap-6 text-xl text-gray-700">
            <FiAward />
            <BsTrophy />
            <FaStar />
            <BsLightningCharge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
