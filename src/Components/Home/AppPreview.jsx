import dashboard from "../../assets/greg-dashboard-landing.png";
import challenges from "../../assets/challanges.png";
import tracker from "../../assets/tracker.png";
import leaderboard from "../../assets/leadership.png";
import water from "../../assets/water-tracker.png";

const features = [
  {
    title: "Dashboard",
    desc: "View all your stats at a glance",
    img: dashboard,
  },
  {
    title: "Challenges",
    desc: "Join and track your challenges",
    img: challenges,
  },
  {
    title: "Activity Tracker",
    desc: "Real-time activity monitoring",
    img: tracker,
  },
  {
    title: "Leaderboard",
    desc: "Compete with friends",
    img: leaderboard,
  },
  {
    title: "Water Tracker",
    desc: "Benefits of Staying Hydrated",
    img: water,
  },
];

export default function AppPreview() {
  return (
    <section className="relative py-24 bg-[#0B0B12] overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="relative z-10 px-6 mx-auto text-center text-white max-w-7xl">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm rounded-full bg-white/10">
          📱 App Preview
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold md:text-5xl">
          Experience the <span className="text-purple-400">App Interface</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Beautifully designed screens that make fitness tracking enjoyable
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-5 transition border group bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-4 shadow-xl rounded-xl"
              />

              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-col justify-center gap-6 mt-20 md:flex-row">
          <div className="px-8 py-4 border bg-white/5 border-white/10 rounded-xl">
            <h4 className="font-semibold">iOS & Android</h4>
            <p className="text-sm text-gray-400">Available on both platforms</p>
          </div>

          <div className="px-8 py-4 border bg-white/5 border-white/10 rounded-xl">
            <h4 className="font-semibold">Regular Updates</h4>
            <p className="text-sm text-gray-400">New features every month</p>
          </div>

          <div className="px-8 py-4 border bg-white/5 border-white/10 rounded-xl">
            <h4 className="font-semibold">100% Secure</h4>
            <p className="text-sm text-gray-400">Your data is protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}
