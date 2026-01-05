/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Zap, TrendingUp, Target, HeartPulse } from "lucide-react";
import { SlEnergy } from "react-icons/sl";
import { IoTrendingUp } from "react-icons/io5";
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
      <div className="min-h-screen px-4 py-12 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-900">
            Why Choose Our App
          </h1>
          <p className="mb-16 text-lg text-gray-600">
            The smartest way to track your fitness journey and achieve your
            health goals
          </p>

          {/* Your Fake Live Stats Section
          <div className="max-w-4xl p-8 mx-auto mb-20 bg-white shadow-lg rounded-3xl">
            <h2 className="mb-8 text-2xl font-bold text-purple-800">
              Your Today's Stats
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {fakeUserData.stepsToday.toLocaleString()}
                </div>
                <div className="text-gray-600">Steps</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {fakeUserData.caloriesBurned}
                </div>
                <div className="text-gray-600">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {fakeUserData.distanceKm} km
                </div>
                <div className="text-gray-600">Distance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">
                  {fakeUserData.waterIntakeMl} ml
                </div>
                <div className="text-gray-600">Water Intake</div>
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1: Simple & Easy Tracking - Lightning/Zap */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-orange-500 to-orange-700">
                <SlEnergy className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Simple & Easy Tracking
              </h3>
              <p className="text-sm text-gray-600">
                Automatically track your steps, distance, and calories without
                any manual input.
              </p>
            </div>

            {/* Feature 2: Real-Time Stats - Upward Trend */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600">
                <IoTrendingUp
                  className="w-12 h-12 text-white"
                  strokeWidth={3}
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Real-Time Stats</h3>
              <p className="text-sm text-gray-600">
                View your activity data in real-time with beautiful charts and
                insights.
              </p>
            </div>

            {/* Feature 3: Fun Challenges - Target/Bullseye */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-purple-600 to-purple-800">
                <Target className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Fun Challenges</h3>
              <p className="text-sm text-gray-600">
                Join exciting fitness challenges and compete with friends to
                stay motivated.
              </p>
            </div>

            {/* Feature 4: Health-Focused Design - Heart Pulse */}
            <div className="flex flex-col items-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-2xl bg-gradient-to-b from-red-500 to-red-700">
                <HeartPulse className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Health-Focused Design
              </h3>
              <p className="text-sm text-gray-600">
                Track water intake, monitor calories, and build healthy daily
                habits.
              </p>
            </div>
          </div>

          {/* Highlight Section */}
          <div className="max-w-5xl px-8 py-12 mx-auto text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl">
            <h2 className="mb-6 text-3xl font-bold">
              All Your Fitness Data in One Place
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-base">
              Stop juggling multiple apps. Get everything you need to stay
              healthy and active in one beautiful, easy-to-use application.
            </p>

            <ul className="max-w-md mx-auto mb-12 space-y-4 text-left">
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">✔</span>
                Automatic activity tracking
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">✔</span>
                Smart goal recommendations
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">✔</span>
                Social features & challenges
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-yellow-400">✔</span>
                Beautiful insights & analytics
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="px-8 py-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="px-8 py-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Tracking</div>
              </div>
              <div className="px-8 py-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl font-bold">0%</div>
                <div className="text-sm opacity-90">Battery Drain</div>
              </div>
              <div className="px-8 py-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm opacity-90">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
