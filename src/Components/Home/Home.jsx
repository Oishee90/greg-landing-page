import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

import Video from "./Challenges";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";
import ReviewSlider from "./ReviewSlider";
import ActivitySection from "./ActivitySection";
import Challenges from "./Challenges";
import AchievementsRewards from "./AchievementsReward";
import WhyChoose from "./WhyChoose";
import HydrationDashboard from "./HydrationDashboard";
import AppPreview from "./AppPreview";

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
      <AppPreview></AppPreview>
      {/* <Pricing></Pricing> */}
      <ReviewSlider></ReviewSlider>

      <Faq></Faq>

      <Footer></Footer>
    </div>
  );
};

export default Home;
