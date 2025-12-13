import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";

const Careers = () => {
  const items = ["Careers"];

  const benefits = [
    {
      title: "Growth Opportunities",
      description: "Grow your skills with continuous learning, hands-on projects, training, and exposure to the technical market and resources."
    },
    {
      title: "Performance Recognition",
      description: "As an agency that believes in growth, results matter here. We applaud you for all your wins and contributions within the firm."
    },
    {
      title: "Career Advancement",
      description: "We offer opportunities that connect you to the needed resources and help you grow your skillset and move into leadership roles."
    },
    {
      title: "Work-Life Balance",
      description: "We understand and respect your personal time; that's why we curate health-driven schedules that decrease the chance of burnout."
    },
    {
      title: "Adaptive Culture",
      description: "Our agency believes in the power of modern technology and promotes forward-thinking tactics and creative problem-solving."
    },
    {
      title: "Global Exposure",
      description: "Work with the best businesses and learn the trade from the masters across the globe. We connect you to a diverse workforce globally."
    }
  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Be Part Of"
        firstSubHeading="Our Team"
        firstIcon={true}
        secondIcon={false}
        paragraph="Calling out to all the visionaries with a dream to grow and excel! "
        paraClassName="pt-4"
      />
      <MarketingStrip items={items} repeat={40} />
      <div className="relative py-12">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative container">
          <div className="flex items-center justify-between mb-16 max-md:mb-8 max-lg:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              The Benefits
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We Offer a Full Range of Digital Marketing Services!
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 py-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                <div className="border border-primary rounded-2xl px-3 py-8">
                  <div className="text-[22px] font-clashDisplay text-center text-primary py-2">{benefit.title}</div>
                  <div className="text-[18px] font-satoshi text-white text-center">
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-14">
            <div className="inline px-6 py-3 text-[14px] font-satoshi font-bold text-center text-black rounded-3xl bg-primary py-2">
              We're hiring
            </div>
            <div className="grid grid-cols-12 py-6">
              <div className="col-span-10 text-[20px] text-justify font-satoshi text-white">
                We are always looking for talented individuals to join our team. If you're passionate about digital marketing and want to be part of a dynamic and innovative company, we'd love to hear from you. Check out our current job openings and apply today!
              </div>
            </div>
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold pb-6">
              Open Positions
            </div>
            <div className=" border-t border-b border-t-white border-b-white py-6">
              <div className="text-white text-[28px] font-satoshi">
                Sales Closer
              </div>
              <div className="text-primary text-[18px] font-satoshi">
                We're looking for a motivated Sales Closer to join our team.
              </div>
              <div className="flex items-center gap-2 pt-4">
                <div className="inline px-6 py-3 text-[14px] font-satoshi font-bold text-center text-black rounded-3xl bg-primary py-2">
                  Full-time
                </div>
                <div className="inline px-6 py-3 text-[14px] font-satoshi font-bold text-center text-black rounded-3xl bg-primary py-2">
                  On-site
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
