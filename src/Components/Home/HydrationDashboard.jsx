import { Droplet, Check } from "lucide-react";
import glass from "../../assets/glass-water.png";

export default function HydrationDashboard() {
  return (
    <div className="min-h-screen px-4 py-12 bg-white lg:px-16 urbanist">
      {/* Header */}
      <div className="mb-12 text-center">
        {/* Heading */}
        <h2 className="text-5xl  text-[#0A0A0A]">
          Stay {""}
          <span className="bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] bg-clip-text text-transparent">
            Hydrated
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-base text-[#4A5565]">
          Monitor every move you make with comprehensive fitness tracking that
          works automatically in the background
        </p>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row ">
        {/* Left Card */}
        <div className="w-full p-6 shadow-sm bg-gradient-to-t from-[#EFF6FF] to-[#ECFEFF] rounded-2xl lg:w-1/2 border border-[#DBEAFE]">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 text-white bg-[#2B7FFF] rounded-lg">
              <Droplet size={18} />
            </div>
            <p className="font-medium text-[#0A0A0A]">Today’s Water Intake</p>
          </div>

          <h2 className="mb-1 text-3xl text-[#0A0A0A] text-center">
            6{" "}
            <span className="text-base font-normal text-gray-500">
              / 8 glasses
            </span>
          </h2>

          {/* Progress */}
          <div className="w-full h-3 my-4 overflow-hidden bg-white rounded-full">
            <div className="h-full w-[65%] bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]" />
          </div>

          {/* Glass Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-24 text-white bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] rounded-xl "
              >
                <Check />
              </div>
            ))}

            {[7, 8].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white border h-70 rounded-xl"
              >
                <Droplet className="text-blue-400" />
              </div>
            ))}
          </div>

          <button className="w-full py-3 font-medium text-white transition bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB] rounded-xl hover:bg-blue-600">
            Log a Glass
          </button>

          {/* Reminders */}
          <div className="p-4 mt-6 bg-white border border-[#E5E7EB] rounded-xl">
            <p className="mb-2 text-[#0A0A0A]">Hydration Reminders</p>
            <ul className="space-y-1 text-base text-[#4A5565]">
              <li>🟢 Morning: 9:00 AM</li>
              <li>🟢 Midday: 12:00 PM</li>
              <li className="text-[#0A0A0A]">🔵 Afternoon: 3:00 PM (Next)</li>
              <li>⚪ Evening: 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="flex flex-col w-full lg:w-1/2 ">
          <div className="relative ">
            <img src={glass} alt="Water" className="w-full h-[873px]" />

            <div className="absolute text-[#ffffffe3] bottom-6 left-6">
              <h3 className="mb-2  text-=">Benefits of Staying Hydrated</h3>
              <ul className="space-y-1 text-sm text-[#d1cece86]">
                <li>✔ Boosts energy levels</li>
                <li>✔ Improves physical performance</li>
                <li>✔ Enhances brain function</li>
                <li>✔ Promotes healthy skin</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full gap-6 mt-10">
            <StatBox
              value="42L"
              label="This Week"
              bg="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE]"
            />
            <StatBox
              value="168L"
              label="This Month"
              bg="bg-gradient-to-r from-[#ECFEFF] to-[#CEFAFE]"
            />
            <StatBox
              value="7d"
              label="Streak"
              bg="bg-gradient-to-r from-[#FAF5FF] to-[#F3E8FF]"
            />
          </div>

          {/* Stats */}
        </div>
      </div>
    </div>
  );
}

function StatBox({ value, label, bg }) {
  return (
    <div className={`${bg} px-8 py-4 rounded-xl text-center w-full`}>
      <p className="text-xl ">{value}</p>
      <p className="text-sm text-[#4A5565]">{label}</p>
    </div>
  );
}
