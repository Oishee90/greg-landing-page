import Navbar from "./Navbar";
import Banner from "./Banner";
import ActivitySection from "./ActivitySection";
import Challenges from "./Challenges";
import AchievementsRewards from "./AchievementsReward";
import HydrationDashboard from "./HydrationDashboard";
import WhyChoose from "./WhyChoose";
import AppPreview from "./AppPreview";
import ReviewSlider from "./ReviewSlider";
import Faq from "./Faq";
import About from "./About";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  // Handle cross-page scroll
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="h-full bg-black">
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section id="features">
        <ActivitySection />
      </section>

      <section id="challenges">
        <Challenges />
      </section>

      <section id="leadership">
        <AchievementsRewards />
      </section>

      <section id="hydration">
        <HydrationDashboard />
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <AppPreview />
      </section>

      <section>
        <ReviewSlider />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="about">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
