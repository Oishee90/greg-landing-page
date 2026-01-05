/* eslint-disable react/no-unescaped-entities */
import { Footprints, MapPin, Flame, Clock, Activity } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "8,245",
    label: "Steps",
    icon: Footprints,
    bg: "bg-[#a47be622]",
    iconColor: "text-[#7F27FF]",
  },
  {
    id: 2,
    value: "4.2 km",
    label: "Distance",
    icon: MapPin,
    bg: "bg-[#E8F7EE]",
    iconColor: "text-[#22C55E]",
  },
  {
    id: 3,
    value: "310 kcal",
    label: "Calories",
    icon: Flame,
    bg: "bg-[#FEECE8]",
    iconColor: "text-[#F97316]",
  },
  {
    id: 4,
    value: "52 min",
    label: "Active Time",
    icon: Clock,
    bg: "bg-[#FFF3E6]",
    iconColor: "text-[#F59E0B]",
  },
];

const ActivitySection = () => {
  return (
    <section className="py-24 bg-white urbanist">
      <div className="px-6 mx-auto text-center lg:px-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] text-sm font-medium mb-4">
          <Activity size={16} />
          Activity Monitoring
        </div>

        {/* Heading */}
        <h2 className="text-4xl  text-[#0A0A0A]">
          Track Your{" "}
          <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            Daily Activity
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-500">
          Monitor every move you make with comprehensive fitness tracking that
          works automatically in the background
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="p-6 text-left bg-white border border-gray-200 rounded-2xl"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
              >
                <item.icon className={`${item.iconColor}`} size={22} />
              </div>

              <h3 className="mt-6 text-2xl text-[#0A0A0A]">{item.value}</h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Progress Card */}
        <div className="mt-14 bg-gradient-to-r from-[#F6F4FF] to-[#F9FAFF] rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-900">
              Today’s Progress
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              You're doing great! Keep moving to reach your daily goals.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-900">82%</p>
              <p className="text-sm text-gray-500">Goal Reached</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-900">1,755</p>
              <p className="text-sm text-gray-500">Steps to Goal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
