import { Apple, Download, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden text-center urbanist"
    >
      {/* Background with radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9810FA] via-[#155DFC] to-[#0092B8]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm text-white rounded-full bg-white/20 backdrop-blur-md">
          <span className="animate-pulse">
            <Download size={16} />
          </span>
          Ready to Start?
        </div>

        {/* Main Headline */}
        <h1 className="flex flex-col gap-2 mb-6 text-5xl text-white md:text-6xl lg:text-6xl">
          Start Moving.
          <span> Stay Healthy.</span>
          <span className="bg-gradient-to-r from-[#FFDF20] to-[#FFB86A] bg-clip-text text-transparent">
            {" "}
            Win Rewards
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-white/90">
          Join thousands of users who are already transforming their fitness
          journey. Download now and get started for free!
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16 sm:flex-row">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 text-white transition bg-black shadow-2xl rounded-2xl hover:bg-gray-900"
          >
            <Apple size={32} />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 text-white transition bg-black shadow-2xl rounded-2xl hover:bg-gray-900"
          >
            <Smartphone size={32} />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            100% Free Forever
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            No Credit Card Required
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Works Offline
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          <div className="px-8 py-6 border bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
            <div className="mb-2 text-4xl text-white">4.8 ★</div>
            <div className="text-sm text-white/80">
              Average Rating
              <br />
              <span className="text-white/60">from 50K+ reviews</span>
            </div>
          </div>

          <div className="px-8 py-6 border bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
            <div className="mb-2 text-4xl text-white">500K+</div>
            <div className="text-sm text-white/80">
              Active Users
              <br />
              <span className="text-white/60">and growing daily</span>
            </div>
          </div>

          <div className="px-8 py-6 border bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
            <div className="mb-2 text-4xl text-white">10M+</div>
            <div className="text-sm text-white/80">
              Steps Tracked
              <br />
              <span className="text-white/60">every single day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
