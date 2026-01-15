import dashboard from "../../assets/greg-dashboard-landing.png";
import challenges from "../../assets/challanges.png";
import tracker from "../../assets/tracker.png";
import leaderboard from "../../assets/leadership.png";
import water from "../../assets/water-tracker.png";
import { CiMobile1 } from "react-icons/ci";

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
    <section    id="leadership" className="relative py-24 bg-[#0B0B12] overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="relative z-10 w-full px-6 mx-auto text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/10 text-[#C27AFF] text-sm font-medium mb-4">
          <CiMobile1 size={16} />
          App Preview
        </div>

        {/* Heading */}
        <h2 className="text-5xl text-center text-[#FFFFFF]">
          Experience the{" "}
          <span className="bg-gradient-to-r from-[#C27AFF] to-[#51A2FF] bg-clip-text text-transparent">
            App Interface
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-base text-[#99A1AF]">
          Beautifully designed screens that make fitness tracking enjoyable
        </p>

        {/* Cards */}
        <div className="container w-full mx-auto">
          <div className="flex items-center gap-6 mt-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-6 py-6 transition border group bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mb-4 shadow-xl rounded-xl h-[400px]"
                />
                <div className="flex flex-col justify-start px-6">
                  <h4 className="text-xl text-left">{item.title}</h4>
                  <p className="mt-1 text-lg text-left text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-col justify-center max-w-3xl gap-6 mx-auto mt-20 border md:flex-row rounded-2xl border-[#FFFFFF]/20 bg-white/5">
          <div className="px-8  my-8 border-r border-[#FFFFFF]/20">
            <h4 className="text-2xl ">iOS & Android</h4>
            <p className="text-sm text-[border-[#FFFFFF]/20]">
              Available on both platforms
            </p>
          </div>

          <div className="px-8  my-8 border-r border-[#FFFFFF]/20">
            <h4 className="text-2xl ">Regular Updates</h4>
            <p className="text-sm text-gray-400">New features every month</p>
          </div>

          <div className="px-8 my-8 ">
            <h4 className="text-2xl ">100% Secure</h4>
            <p className="text-sm text-[border-[#FFFFFF]/20]">
              Your data is protected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
