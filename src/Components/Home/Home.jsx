import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

import Video from "./Challenges";
import Pricing from "./Pricing";
import Faq from "./Faq";

import Module from "./Module";
import Footer from "./Footer";
import ReviewSlider from "./ReviewSlider";
import ActivitySection from "./ActivitySection";
import Challenges from "./Challenges";
import AchievementsRewards from "./AchievementsReward";
import WhyChoose from "./WhyChoose";
import HydrationDashboard from "./HydrationDashboard";
import About from "./About";

const Home = () => {
  return (
    <div className="h-full bg-black">
      <div className="border-b-[#FF6A00] border-b ">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <ActivitySection></ActivitySection>
      <Challenges></Challenges>
      <AchievementsRewards></AchievementsRewards>
      <HydrationDashboard></HydrationDashboard>
      <WhyChoose></WhyChoose>
      {/* <Pricing></Pricing> */}
      <ReviewSlider></ReviewSlider>

      <Faq></Faq>
      {/* <Module></Module> */}
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
