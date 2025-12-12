import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

const Careers = () => {
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Be Part Of Our Mission"
        firstIcon={false}
        secondIcon={false}
        paragraph="We are looking for passionate individuals to join on our mission. We Value flat hierarchies, open communication, and a collaborative work environment."
        paraClassName="pt-4"
      />
      <Footer />
    </>
  );
};

export default Careers;
