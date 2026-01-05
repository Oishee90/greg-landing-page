import { Trophy, Check, Lock, Award } from "lucide-react";

export default function AchievementsRewards() {
  return (
    <section className="bg-[#FBFDFF] py-16">
      <div className="px-6 mx-auto text-center lg:px-16">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full">
          🏅 Achievements
        </span>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          <span className="text-orange-500">Achievements</span> & Rewards
        </h2>

        <p className="mt-3 text-gray-500">
          Unlock badges, level up, and celebrate your fitness milestones
        </p>

        {/* Level Card */}
        <div className="p-6 mt-12 bg-white border shadow-sm rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">
                Your Level: Active Walker
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Level 3 · 12,450 / 15,000 XP
              </p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full">
              <Trophy className="text-yellow-600" size={22} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="h-3 w-[83%] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
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
          <div className="p-4 border border-purple-200 rounded-xl bg-purple-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-purple-100 rounded-full">
              <Check className="text-purple-600" size={20} />
            </div>
            <h5 className="font-medium text-gray-900">Level 1</h5>
            <p className="text-xs text-purple-600">Beginner</p>
          </div>

          {/* Level 2 */}
          <div className="p-4 border border-purple-200 rounded-xl bg-purple-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-purple-100 rounded-full">
              <Check className="text-purple-600" size={20} />
            </div>
            <h5 className="font-medium text-gray-900">Level 2</h5>
            <p className="text-xs text-purple-600">Walker</p>
          </div>

          {/* Level 3 (Active) */}
          <div className="p-4 border-2 border-indigo-500 rounded-xl bg-indigo-50">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-indigo-100 rounded-full">
              <Award className="text-indigo-600" size={20} />
            </div>
            <h5 className="font-medium text-gray-900">Level 3</h5>
            <p className="text-xs text-indigo-600">Active</p>
          </div>

          {/* Level 4 (Locked) */}
          <div className="p-4 bg-white border rounded-xl opacity-60">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gray-100 rounded-full">
              <Lock className="text-gray-400" size={18} />
            </div>
            <h5 className="font-medium text-gray-700">Level 4</h5>
            <p className="text-xs text-gray-400">Athlete</p>
          </div>

          {/* Level 5 (Locked) */}
          <div className="p-4 bg-white border rounded-xl opacity-60">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gray-100 rounded-full">
              <Lock className="text-gray-400" size={18} />
            </div>
            <h5 className="font-medium text-gray-700">Level 5</h5>
            <p className="text-xs text-gray-400">Champion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
