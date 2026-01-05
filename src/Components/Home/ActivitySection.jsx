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
          <Footprints size={16} />
          Activity Monitoring
        </div>

        {/* Heading */}
        <h2 className="text-5xl  text-[#0A0A0A]">
          Track Your{" "}
          <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            Daily Activity
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-base text-[#4A5565]">
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
        <div className="mt-14 border border-[#F3E8FF] bg-gradient-to-r from-[#FAF5FF] to-[#EFF6FF] rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="text-left">
            <h4 className="text-2xl  text-[#0A0A0A]">Today’s Progress</h4>
            <p className="mt-1 text-base text-[#4A5565]">
              You're doing great! Keep moving to reach your daily goals.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:flex-col">
            <div className="lg:text-right text-left  lg:border-r lg:border-[#D1D5DC] lg:pr-9">
              <p className="text-2xl  text-[#0A0A0A]">82%</p>
              <p className="text-sm text-[#4A5565]">Goal Reached</p>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-2xl  text-[#0A0A0A]">1,755</p>
              <p className="text-sm text-[#4A5565]">Steps to Goal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
