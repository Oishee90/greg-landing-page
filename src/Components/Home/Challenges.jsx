import { Footprints, Activity, Timer } from "lucide-react";
import { LuTarget } from "react-icons/lu";
export default function Challenges() {
  return (
    <section className="py-16 bg-white urbanist">
      <div className="px-6 mx-auto text-center lg:px-16 ">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#7C3AED] text-sm font-medium mb-4">
          <LuTarget size={16} />
          Gamification
        </div>

        {/* Heading */}
        <h2 className="text-5xl  text-[#0A0A0A]">
          Join{" "}
          <span className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] bg-clip-text text-transparent">
            Fitness Challenges
          </span>
        </h2>
        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-lg text-[#4A5565]">
          Compete with friends, complete goals, and earn amazing rewards
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 text-left rounded-2xl bg-[#FAF5FF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-purple-600 rounded-lg">
                <Footprints size={20} />
              </div>
              <span className="text-xs text-[#0A0A0A] bg-[#FFFFFF] px-3 py-2 rounded-full">
                3 days left
              </span>
            </div>

            <h3 className="mt-4 text-xl text-[#0A0A0A]">10K Steps Challenge</h3>
            <p className="mt-1 text-sm text-[#4A5565]">
              Walk 10,000 steps every day for 7 days
            </p>

            <div className="mt-4">
              <p className="mb-1 text-base text-[#4A5565] flex items-center justify-between">
                Progress <span className="text-[#AD46FF]">65%</span>
              </p>
              <div className="w-full h-2 bg-purple-200 rounded-full">
                <div className="h-2 w-[65%] rounded-full bg-purple-600" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[#4A5565]">
                12,345 participants
              </span>
              <button className="px-4 py-2 text-base text-[#FFFFFF] rounded-2xl bg-gradient-to-r from-[#AD46FF] to-[#9810FA] hover:bg-purple-700">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 2 */}

          <div className="p-6 text-left rounded-2xl bg-[#EFF6FF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-gradient-to-r from-[#2B7FFF] to-[#155DFC] rounded-lg">
                <Activity size={20} />
              </div>
              <span className="text-xs text-[#0A0A0A] bg-[#FFFFFF] px-3 py-2 rounded-full">
                5 days left
              </span>
            </div>

            <h3 className="mt-4 text-xl text-[#0A0A0A]">
              {" "}
              Morning Walk Challenge
            </h3>
            <p className="mt-1 text-sm text-[#4A5565]">
              Complete a 2km walk before 9 A.M
            </p>

            <div className="mt-4">
              <p className="mb-1 text-base text-[#4A5565] flex items-center justify-between">
                Progress <span className="text-[#2B7FFF]">65%</span>
              </p>
              <div className="w-full h-2 bg-gradient-to-r from-[#2B7FFF] to-[#155DFC]rounded-full">
                <div className="h-2 w-[65%] rounded-full bg-gradient-to-r from-[#2B7FFF] to-[#155DFC]" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[#4A5565]">8,921 participants</span>
              <button className="px-4 py-2 text-base text-[#FFFFFF] rounded-2xl bg-gradient-to-r from-[#2B7FFF] to-[#155DFC] hover:bg-blue-700">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 text-left rounded-2xl bg-[#F0FDF4]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-gradient-to-r from-[#00C950] to-[#009966] rounded-lg">
                <Timer size={20} />
              </div>
              <span className="text-xs text-[#0A0A0A] bg-[#FFFFFF] px-3 py-2 rounded-full">
                7 days left
              </span>
            </div>

            <h3 className="mt-4 text-xl text-[#0A0A0A]">
              {" "}
              30-Day Fitness Streak
            </h3>
            <p className="mt-1 text-sm text-[#4A5565]">
              Stay active for 30 minutes every day
            </p>

            <div className="mt-4">
              <p className="mb-1 text-base text-[#4A5565] flex items-center justify-between">
                Progress <span className="text-[#00C950]">65%</span>
              </p>
              <div className="w-full h-2 bg-gradient-to-r from-[#00C950] to-[#009966]rounded-full">
                <div className="h-2 w-[65%] rounded-full bg-gradient-to-r from-[#00C950] to-[#009966]" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-[#4A5565]">
                15,678 participants
              </span>
              <button className="px-4 py-2 text-base text-[#FFFFFF] rounded-2xl bg-gradient-to-r from-[#00C950] to-[#009966] hover:bg-green-700">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 mt-16 text-[#FFFFFF] rounded-3xl bg-gradient-to-r from-[#59168BE6] to-[#1C398EE6]">
          <h3 className="text-2xl ">Create Your Own Challenge</h3>

          <p className="mt-2 text-[#E5E7EB]">
            Invite friends and compete together
          </p>

          <button className="px-6 py-3 mt-6 text-sm font-medium text-[#9810FA] bg-white rounded-full hover:bg-gray-100">
            Start Challenge
          </button>
        </div>
      </div>
    </section>
  );
}
