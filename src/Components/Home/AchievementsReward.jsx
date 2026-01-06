import { Trophy, Check, Lock, Award } from "lucide-react";
import trophy from "../../assets/trophy.png";
export default function AchievementsRewards() {
  return (
    <section className="bg-gradient-to-b from-[#F9FBFC] to-[#FFFFFF] py-16 urbanist">
      <div className="px-6 mx-auto text-center lg:px-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF9C2] text-[#D08700] text-sm font-medium mb-4">
          <Trophy size={16} />
          Achievements
        </div>

        {/* Heading */}
        <h2 className="text-5xl bg-gradient-to-r from-[#F0B100] to-[#FF6900] bg-clip-text text-transparent ">
          Achievements <span className="text-[#0A0A0A]">& Rewards</span>
        </h2>
        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-lg text-[#4A5565]">
          Compete with friends, complete goals, and earn amazing rewards
        </p>

        {/* Level Card */}
        <div className="p-6 mt-12 bg-[#FFFFFF] border shadow-sm rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h4 className="text-[#0A0A0A]  text-2xl">
                Your Level: Active Walker
              </h4>
              <p className="mt-1 text-base text-[#4A5565]">
                Level 3 · 12,450 / 15,000 XP
              </p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full">
              <img src={trophy} alt="" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="h-3 w-[83%] rounded-full bg-gradient-to-r from-[#AD46FF] to-[#2B7FFF]" />
            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Level 3</span>
              <span>Level 4</span>
            </div>
          </div>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-5">
          {/* Level 1 */}
          <div className="p-4 border border-[#E9D4FF] rounded-xl bg-purple-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-full">
              <Check
                className="text-[#0A0A0A]
              "
                size={20}
              />
            </div>
            <h5 className=" text-[#0A0A0A]">Level 1</h5>
            <p className="text-xs text-[#9810FA]">Beginner</p>
          </div>

          {/* Level 2 */}
          <div className="p-4 border border-purple-200 rounded-xl bg-purple-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-purple-100 rounded-full">
              <Check className="text-[#0A0A0A]" size={20} />
            </div>
            <h5 className=" text-[#0A0A0A]">Level 2</h5>
            <p className="text-xs text-[#9810FA]">Walker</p>
          </div>

          {/* Level 3 (Active) */}
          <div className="p-4 border-2 border-indigo-500 rounded-xl bg-indigo-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-indigo-100 rounded-full">
              <Award className="text-indigo-600" size={20} />
            </div>
            <h5 className=" text-[#0A0A0A]">Level 1</h5>
            <p className="text-xs text-[#9810FA]">Active</p>
          </div>

          {/* Level 4 (Locked) */}
          <div className="p-4 bg-white border rounded-xl opacity-60">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gray-100 rounded-full">
              <Lock className="text-gray-400" size={18} />
            </div>
            <h5 className="text-gray-700 f">Level 4</h5>
            <p className="text-xs text-gray-400">Athlete</p>
          </div>

          {/* Level 5 (Locked) */}
          <div className="p-4 bg-white border rounded-xl opacity-60">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gray-100 rounded-full">
              <Lock className="text-gray-400" size={18} />
            </div>
            <h5 className="text-gray-700 ">Level 5</h5>
            <p className="text-xs text-gray-400">Champion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
