import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";

const Testimonials = () => {
  const items = ["Careers"];
  
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Hear From Our Clients"
        firstIcon={false}
        secondIcon={false}
        paragraph="We are looking for passionate individuals to join on our mission. We Value flat hierarchies, open communication, and a collaborative work environment."
        paraClassName="pt-4"
      />
      <MarketingStrip items={items} repeat={40} />
      <Footer />
    </>
  );
};

export default Testimonials;
