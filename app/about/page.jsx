"use client";
import Header from "@/components/header";
import Image from "next/image";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function AboutPage() {
  const items = ["About Us"];
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="About Marketing Reforms"
        firstIcon={false}
        secondIcon={false}
        paragraph="Marketing Reforms helps you define your budget and target
                  audience effectively to generate high-quality,
                  conversion-ready leads."
        paraClassName="pt-4"
      />
      {/* About Us Marquee Strip */}
      <MarketingStrip items={items} repeat={40} />

      {/* Certified Experts Section */}
      <div className="relative py-20 max-md:py-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="container relative z-20">
          <div className="flex items-start justify-between mb-16 max-md:mb-8 max-md:flex-col max-md:gap-4">
            <div className="text-white text-[32px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We are...
            </div>
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Certified Experts
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 max-lg:gap-6 max-md:grid-cols-2 max-md:gap-4 mb-16 max-md:mb-8">
            {/* Google */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  Google
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#FFC107]">
                  <span
                    className="text-[32px] max-lg:text-[24px] max-md:text-[18px] font-bold"
                    style={{
                      background:
                        "linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    G
                  </span>
                </div>
              </div>
            </div>

            {/* HubSpot */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  HubSpot
                </div>
                <div className="absolute bottom-[12%] left-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#FF7A59] shadow-lg flex items-center justify-center border-4 border-[#FF5733]">
                  <svg
                    className="w-[35px] h-[35px] max-lg:w-[26px] max-lg:h-[26px] max-md:w-[20px] max-md:h-[20px]"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M18.7 8.7l-1.4-1.4c-.4-.4-1-.4-1.4 0l-7.6 7.6-3.6-3.6c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4l5.7 5.7c.4.4 1 .4 1.4 0l9.7-9.7c.4-.4.4-1 0-1.4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bing */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  Bing
                </div>
                <div className="absolute top-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#00D8FF] shadow-lg flex items-center justify-center border-4 border-[#0099CC]">
                  <span className="text-white text-[32px] max-lg:text-[24px] max-md:text-[18px] font-bold">
                    b
                  </span>
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[220px] max-lg:h-[220px] max-md:w-[160px] max-md:h-[160px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[42px] max-md:text-[28px] font-bold font-clashDisplay">
                  YouTube
                </div>
                <div className="absolute bottom-[12%] right-[12%] w-[70px] h-[70px] max-lg:w-[55px] max-lg:h-[55px] max-md:w-[40px] max-md:h-[40px] rounded-full bg-[#FF0000] shadow-lg flex items-center justify-center border-4 border-[#CC0000]">
                  <svg
                    className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] max-md:w-[22px] max-md:h-[22px]"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Box */}
          <div className="relative rounded-3xl border border-[#524F69] p-12 max-lg:p-8 max-md:p-6">
            <div className="text-white text-[28px] max-lg:text-[22px] max-md:text-[16px] font-clashDisplay text-center leading-relaxed mb-4">
              We Have Conquered All Avenues From Google Ads And Analytics To
              YouTube Growth Strategy, PPC, And Multiple Advanced Digital
              Marketing Programs.
            </div>
            <div className="text-primary text-[28px] max-lg:text-[22px] max-md:text-[16px] font-clashDisplay text-center font-bold">
              So, Join Hands With Marketing Reform & Scale With Confidence!
            </div>
          </div>
        </div>
      </div>

      {/* Main About Us Content */}
      <AboutUs
        backgroundText="Our Vision"
        leftHeading="Our Vision"
        rightHeading="Why Are We Your Best Bet?"
        showButton={false}
      />

      {/* Digital Marketing Strip */}
      <MarketingStrip />

      <Footer />
    </>
  );
}
