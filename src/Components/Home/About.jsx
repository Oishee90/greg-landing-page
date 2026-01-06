import { Apple, Download, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden urbanist">
      {/* Background with radial gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-500"
        // style={{
        //   background: "radial-gradient(85.25% 140.16% at 70% 80%, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 50%)",
        // }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="animate-pulse">
            <Download size={16} />
          </span>
          Ready to Start?
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Start Moving.
          <br />
          Stay Healthy.
          <br />
          <span className="text-yellow-300">Win Rewards.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join thousands of users who are already transforming their fitness
          journey. Download now and get started for free!
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition shadow-2xl"
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
            className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-900 transition shadow-2xl"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">4.8 ★</div>
            <div className="text-white/80 text-sm">
              Average Rating
              <br />
              <span className="text-white/60">from 50K+ reviews</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">500K+</div>
            <div className="text-white/80 text-sm">
              Active Users
              <br />
              <span className="text-white/60">and growing daily</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-white/80 text-sm">
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
