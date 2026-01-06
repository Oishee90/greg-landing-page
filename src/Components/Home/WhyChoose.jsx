/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Zap, TrendingUp, Target, HeartPulse } from "lucide-react";
import { SlEnergy } from "react-icons/sl";
import { IoTrendingUp } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
export default function WhyChoose() {
  const fakeUserData = {
    stepsToday: 12456,
    caloriesBurned: 548,
    distanceKm: 9.2,
    waterIntakeMl: 2200,
    activeMinutes: 45,
    challengesCompleted: 12,
    friendsCount: 28,
  };

  return (
    <>
      <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] urbanist">
        <div className="mx-auto text-center ">
          <h2 className="text-5xl  text-[#0A0A0A]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
              Our App
            </span>
          </h2>
          {/* Description */}
          <p className="max-w-2xl mx-auto mt-4 text-lg text-[#4A5565]">
            The smartest way to track your fitness journey and achieve your
            health goals
          </p>

          <div className="grid grid-cols-1 gap-12 mt-20 mb-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1: Simple & Easy Tracking - Lightning/Zap */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-[#F0B100] to-[#FF6900] border border-[#FFFBD0] shadow-[#FFFBD0]">
                <SlEnergy className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl ">Simple & Easy Tracking</h3>
              <p className="text-base text-[#4A5565]">
                Automatically track your steps, distance, and calories without
                any manual input.
              </p>
            </div>

            {/* Feature 2: Real-Time Stats - Upward Trend */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-[#2B7FFF] to-[#00B8DB] border border-[#DEECFF] shadow-[#DEECFF]">
                <IoTrendingUp
                  className="w-12 h-12 text-white"
                  strokeWidth={3}
                />
              </div>
              <h3 className="mb-3 text-xl ">Real-Time Stats</h3>
              <p className="text-base text-[#4A5565]">
                View your activity data in real-time with beautiful charts and
                insights.
              </p>
            </div>

            {/* Feature 3: Fun Challenges - Target/Bullseye */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div
                className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-[#AD46FF] to-[#F6339A]
              border border-[#F0E0FF] shadow-[#F0E0FF]"
              >
                <FiTarget className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl ">Fun Challenges</h3>
              <p className="text-base text-[#4A5565]">
                Join exciting fitness challenges and compete with friends to
                stay motivated.
              </p>
            </div>

            {/* Feature 4: Health-Focused Design - Heart Pulse */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div
                className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-[#FB2C36] to-[#F6339A]
              border border-[#FEE7E7] shadow-[#FEE7E7]"
              >
                <BsSuitHeart className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl ">Health-Focused Design</h3>
              <p className="text-base text-[#4A5565]">
                Track water intake, monitor calories, and build healthy daily
                habits.
              </p>
            </div>
          </div>

          {/* Highlight Section */}
          <div className="flex flex-col justify-between px-8 py-12 text-white lg:flex-row bg-gradient-to-r from-[#9810FA] to-[#155DFC] rounded-3xl ">
            <div className="text-start">
              <h2 className="mb-6 text-3xl ">
                All Your Fitness Data in One Place
              </h2>
              <p className="max-w-md  mb-10 text-base text-[#ffffffe7] text-left ">
                Stop juggling multiple apps. Get everything you need to stay
                healthy and active in one beautiful, easy-to-use application.
              </p>

              <ul className="mx-auto mb-12 space-y-4 text-left ">
                <li className="flex items-center gap-2">
                  <span className=" text-white px-2 py-1 rounded-full bg-[#3815fc65]">
                    ✔
                  </span>
                  Automatic activity tracking
                </li>
                <li className="flex items-center gap-2 ">
                  <span className=" text-white px-2 py-1 rounded-full bg-[#3815fc65]">
                    ✔
                  </span>
                  Smart goal recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className=" text-white px-2 py-1 rounded-full bg-[#3815fc65]">
                    ✔
                  </span>
                  Social features & challenges
                </li>
                <li className="flex items-center gap-2">
                  <span className=" text-white px-2 py-1 rounded-full bg-[#3815fc65]">
                    ✔
                  </span>
                  Beautiful insights & analytics
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 ">
              <div className="flex flex-col items-center justify-center px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-[#FFFFFF]/20">
                <div className="text-4xl">99.9%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="flex flex-col items-center justify-center px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-[#FFFFFF]/20">
                <div className="text-4xl">24/7</div>
                <div className="text-sm opacity-90">Tracking</div>
              </div>
              <div className="flex flex-col items-center justify-center px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-[#FFFFFF]/20">
                <div className="text-4xl">0%</div>
                <div className="text-sm opacity-90">Battery Drain</div>
              </div>
              <div className="flex flex-col items-center justify-center px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-[#FFFFFF]/20">
                <div className="text-4xl">100%</div>
                <div className="text-sm opacity-90">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
