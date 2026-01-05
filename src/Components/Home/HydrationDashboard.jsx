import { Droplet, Check } from "lucide-react";
import glass from "../../assets/glass-water.png";

export default function HydrationDashboard() {
  return (
    <div className="min-h-screen px-10 py-12 bg-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold">
          Stay<span className="text-blue-500">Hydrated</span>
        </h1>
        <p className="mt-2 text-gray-500">
          Track your daily water intake and maintain healthy hydration habits
        </p>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row ">
        {/* Left Card */}
        <div className="bg-[#F2F9FF] rounded-2xl p-6 shadow-sm w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 text-white bg-blue-500 rounded-lg">
              <Droplet size={18} />
            </div>
            <p className="font-medium text-gray-700">Today’s Water Intake</p>
          </div>

          <h2 className="mb-1 text-3xl font-semibold">
            6{" "}
            <span className="text-base font-normal text-gray-500">
              / 8 glasses
            </span>
          </h2>

          {/* Progress */}
          <div className="w-full h-3 my-4 overflow-hidden bg-white rounded-full">
            <div className="h-full w-[65%] bg-gradient-to-r from-blue-400 to-blue-500" />
          </div>

          {/* Glass Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-20 text-white bg-blue-500 rounded-xl"
              >
                <Check />
              </div>
            ))}

            {[7, 8].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-20 bg-white border rounded-xl"
              >
                <Droplet className="text-blue-400" />
              </div>
            ))}
          </div>

          <button className="w-full py-3 font-medium text-white transition bg-blue-500 rounded-xl hover:bg-blue-600">
            Log a Glass
          </button>

          {/* Reminders */}
          <div className="p-4 mt-6 bg-white rounded-xl">
            <p className="mb-2 font-medium">Hydration Reminders</p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>🟢 Morning: 9:00 AM</li>
              <li>🟢 Midday: 12:00 PM</li>
              <li>🔵 Afternoon: 3:00 PM (Next)</li>
              <li>⚪ Evening: 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="flex flex-col w-full lg:w-1/2 ">
          <div className="relative ">
            <img src={glass} alt="Water" className="w-full h-full " />

            <div className="absolute text-white bottom-6 left-6">
              <h3 className="mb-2 font-semibold">
                Benefits of Staying Hydrated
              </h3>
              <ul className="space-y-1 text-sm">
                <li>✔ Boosts energy levels</li>
                <li>✔ Improves physical performance</li>
                <li>✔ Enhances brain function</li>
                <li>✔ Promotes healthy skin</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end gap-6 mt-10">
            <StatBox value="42L" label="This Week" bg="bg-blue-100" />
            <StatBox value="168L" label="This Month" bg="bg-teal-100" />
            <StatBox value="7d" label="Streak" bg="bg-purple-100" />
          </div>

          {/* Stats */}
        </div>
      </div>
    </div>
  );
}

function StatBox({ value, label, bg }) {
  return (
    <div className={`${bg} px-8 py-4 rounded-xl text-center`}>
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
