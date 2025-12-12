import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

const OurClients = () => {
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="What They Say About Us"
        firstIcon={false}
        secondIcon={false}
        paragraph="We are looking for passionate individuals to join on our mission. We Value flat hierarchies, open communication, and a collaborative work environment."
        paraClassName="pt-4"
      />
      <Footer />
    </>
  );
};

export default OurClients;
