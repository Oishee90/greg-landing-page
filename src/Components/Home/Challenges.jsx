import { Footprints, Activity, Timer } from "lucide-react";
export default function Challenges() {
  return (
    <section className="py-16 bg-white">
      <div className="px-6 mx-auto text-center lg:px-16 ">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
          🎮 Gamification
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Join <span className="text-indigo-600">Fitness Challenges</span>
        </h2>

        <p className="max-w-xl mx-auto mt-3 text-gray-500">
          Compete with friends, complete goals, and earn amazing rewards
        </p>

        {/* Cards */}
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 text-left rounded-2xl bg-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-purple-600 rounded-lg">
                <Footprints size={20} />
              </div>
              <span className="text-xs text-gray-400">3 days left</span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              10K Steps Challenge
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Walk 10,000 steps every day for 7 days
            </p>

            <div className="mt-4">
              <p className="mb-1 text-sm text-gray-500">Progress</p>
              <div className="w-full h-2 bg-purple-200 rounded-full">
                <div className="h-2 w-[65%] rounded-full bg-purple-600" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-400">12,345 participants</span>
              <button className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 text-left rounded-2xl bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-lg">
                <Activity size={20} />
              </div>
              <span className="text-xs text-gray-400">5 days left</span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              Morning Walk Challenge
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Complete a 2km walk before 9 A.M
            </p>

            <div className="mt-4">
              <p className="mb-1 text-sm text-gray-500">Progress</p>
              <div className="w-full h-2 bg-blue-200 rounded-full">
                <div className="h-2 w-[42%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-400">8,921 participants</span>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Join Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 text-left rounded-2xl bg-green-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-green-600 rounded-lg">
                <Timer size={20} />
              </div>
              <span className="text-xs text-gray-400">7 days left</span>
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              30-Day Fitness Streak
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Stay active for 30 minutes every day
            </p>

            <div className="mt-4">
              <p className="mb-1 text-sm text-gray-500">Progress</p>
              <div className="w-full h-2 bg-green-200 rounded-full">
                <div className="h-2 w-[78%] rounded-full bg-green-600" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-400">15,678 participants</span>
              <button className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 mt-16 text-white rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600">
          <h3 className="text-2xl font-semibold">Create Your Own Challenge</h3>
          <p className="mt-2 text-white/80">
            Invite friends and compete together
          </p>
          <button className="px-6 py-3 mt-6 text-sm font-medium text-purple-600 bg-white rounded-full hover:bg-gray-100">
            Start Challenge
          </button>
        </div>
      </div>
    </section>
  );
}
