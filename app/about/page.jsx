"use client";
import Header from "@/components/header";
import Image from "next/image";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import GoolgeLogo from "@/components/about-svg/google";
import Hubspot from "@/components/about-svg/hubspot";
import BingLogo from "@/components/about-svg/bing";
import YoutubeLogo from "@/components/about-svg/youtube";
import { useEffect, useRef } from "react";
import PointerGlowText from "@/components/pointer-glow-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {

  const containerRef = useRef(null);
  const container2Ref = useRef(null);

  useEffect(() => {
    const animateContainer = (containerElement) => {
      const lines = containerElement.querySelectorAll(".animate > div");

      lines.forEach((line) => {
        const text = line.textContent; // keep original spacing and capitalization

        // Split text into spans - force no text transformation
        line.innerHTML = text
          .split("")
          .map((char) => {
            if (char === " ") {
              return `<span style="text-transform: none !important;">&nbsp;</span>`;
            }
            return `<span style="text-transform: none !important;">${char}</span>`;
          })
          .join("");

        const chars = line.querySelectorAll("span");

        // Animate - using fromTo to ensure proper start state
        gsap.fromTo(chars,
          {
            color: "#A5A5A5",
            opacity: 0.3,
          },
          {
            color: "inherit",
            opacity: 1,
            stagger: 0.035,
            duration: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: containerElement,
              start: "top 85%",
              end: "bottom 65%",
              scrub: true,
            },
          }
        );
      });
    };

    if (containerRef.current) {
      animateContainer(containerRef.current);
    }
    if (container2Ref.current) {
      animateContainer(container2Ref.current);
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const items = ["About Us"];

  const endGoals = [
    {
      title: "Your Goals Come First",
      description:
        "A lot of agencies focus on vanity metrics and call it a day. Not us. We dig deeper into how marketing truly impacts your entire business.",
    },
    {
      title: "Strategy That Brings Sales",
      description:
        "If you want to stand out in ever-changing markets, you need think outside the box. We rethink the standard performance marketing playbook and design strategies made specifically for your industry’s real ROI issues.",
    },
    {
      title: "Campaigns That Adapt as You Grow",
      description:
        "The market shifts, customers change, and goals evolve. Your campaigns should keep up. We help you adjust tactics, reallocate budget, and evolve your messaging for maximum returns and minimum wasted spending.",
    },
    {
      title: "Top-Tier Performance",
      description:
        "We judge success by performance, period. Expect transparent communication, insightful reporting, and clean data that your sales team can actually use to close more deals.",
    },
    {
      title: "Strategy First, Always",
      description:
        "Every successful collab starts with a clear understanding of business, its goals, and customers. We go through all of your competitors, evaluate market opportunities, and work on your strengths and weaknesses.",
    },
    {
      title: "Top-Tier",
      description:
        "Fast, dependable, and easy to work with, Marketing Reform plugs right into your existing marketing efforts to make everything run smoother.",
    },
    {
      title: "ROI as a Mindset",
      description:
        "We make every move in accordance with return on investment in mind. We set clear goals, take critical measures, refine, and repeat. It’s a performance-based cycle that is made to keep your results climbing on long-term basis.",
    },
    {
      title: "Integrated Solutions",
      description:
        "One-off tactics always work, but integrated, cross-channel campaigns work incredibly better. Prospects mostly interact with your brand via different touchpoints.",
    },
  ]

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="About"
        firstSubHeading="Marketing Reforms"
        firstIcon={true}
        secondIcon={false}
        paragraph="With our innovative approach we make sure you get the most out of the ad spend. We currently manage over $1M in monthly advertising budgets."
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
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[18px] font-clashDisplay font-bold">
              Certified Experts
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 max-2xl:gap-3 max-md:grid-cols-2 max-md:gap-4 mb-16 max-md:mb-8">
            {/* Google */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-xl:w-[220px] max-xl:h-[220px] max-lg:w-[160px] max-lg:h-[160px] max-md:w-[160px] max-md:h-[160px] max-sm:h-[120px] max-sm:w-[120px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-xl:text-[42px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-[18px] font-clashDisplay">
                  Google
                </div>
                <div className="absolute top-[12%] max-lg:-top-[16%] right-[12%] w-[70px] flex items-center justify-center">
                  <GoolgeLogo />
                </div>
              </div>
            </div>

            {/* HubSpot */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[160px] max-xl:w-[220px] max-xl:h-[220px] max-lg:h-[160px] max-md:w-[160px] max-md:h-[160px] max-sm:h-[120px] max-sm:w-[120px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[30px] max-xl:text-[42px] max-md:text-[28px] max-sm:text-[18px] font-clashDisplay">
                  HubSpot
                </div>
                <div className="absolute bottom-[12%] max-lg:-bottom-[16%] left-[12%] w-[70px] flex items-center justify-center">
                  <Hubspot />
                </div>
              </div>
            </div>

            {/* Bing */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[160px] max-xl:w-[220px] max-xl:h-[220px] max-lg:h-[160px] max-md:w-[160px] max-md:h-[160px] max-sm:h-[120px] max-sm:w-[120px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[30px] max-xl:text-[42px] max-md:text-[28px] max-sm:text-[18px] font-clashDisplay">
                  Bing
                </div>
                <div className="absolute top-[12%] max-lg:-top-[16%] right-[12%] w-[70px] flex items-center justify-center">
                  <BingLogo />
                </div>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] max-lg:w-[160px] max-xl:w-[220px] max-lg:h-[160px] max-xl:h-[220px] max-md:w-[160px] max-md:h-[160px] max-sm:h-[120px] max-sm:w-[120px] rounded-full bg-gradient-to-br from-[#8B7FD9] to-[#6B5FC7] flex items-center justify-center shadow-xl">
                <div className="text-white text-[56px] max-lg:text-[30px] max-xl:text-[42px] max-md:text-[28px] max-sm:text-[18px] font-clashDisplay">
                  YouTube
                </div>
                <div className="absolute bottom-[12%] max-lg:-bottom-[16%] right-[12%] w-[70px]  flex items-center justify-center">
                  <YoutubeLogo />
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
      {/* <AboutUs
        backgroundText="Our Vision"
        leftHeading="Our Vision"
        rightHeading="Why Are We Your Best Bet?"
        showButton={false}
      /> */}

      <div className="py-15 max-sm:py-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full z-20">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="absolute whitespace-nowrap opacity-30 cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30 text-white text-[350px] font-clashDisplay font-bold">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PointerGlowText text="Our Vision" className="2xl:!text-[90%] max-2xl:!text-[80%] max-xl:!text-[70%] max-lg:!text-[60%] max-md:!text-[42%] max-sm:!text-[35%]" />
          </div>
        </div>
        <div className="container relative z-20">
          <div className={`flex items-center justify-between max-md:flex-col max-md:gap-4`}>
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Our Vision
            </div>
            <div className="text-white font-normal text-[22px] max-lg:text-[18px] max-md:text-[14px] font-satoshi italic">
              Why Are We Your Best Bet?
            </div>
          </div>
          <div className="relative pt-8 mt-10">
            <Image className="absolute top-0 left-0 w-full h-[100%] z-10 backdrop-blur-sm pointer-events-none" src="/images/aboutbk.png" alt="About Us" width={1000} height={1000} />
            <div className="grid grid-cols-12 relative z-20">
              <div ref={containerRef} className="font-clashDisplay text-[30px] max-2xl:text-[30px] text-[#fff] col-span-10 text-left pl-12 max-lg:pl-6 max-[380px]:!pl-2 pb-[40px] max-md:pb-[0px]  mt-6 max-md:!mt-0 max-xl:text-[24px] max-lg:text-[18px] max-md:text-[12px] max-[520px]:!text-[12px] max-[435px]:!text-[10px] max-[376px]:!text-[9px]">
                <div className="animate">
                  <div>At Marketing Reform, we help brands grow organically, move</div>
                  <div>faster, and make smarter decisions that match your brand</div>
                  <div>vision. We’ve built long-term partnerships with </div>
                  <div>leading companies worldwide via reliable, strategic</div>
                  <div>and objective-focused ad campaigns.</div>
                </div>
              </div>
              <div ref={container2Ref} className="font-clashDisplay translate-y-[30px] max-lg:translate-y-[18px] max-md:translate-y-[24px] text-[30px] max-2xl:text-[30px] text-white col-span-9 col-start-4 max-2xl:col-start-3 max-xl:col-start-3 text-left pb-10 pt-10 max-xl:text-[24px] max-lg:text-[18px] max-md:text-[12px] max-[520px]:!text-[12px] max-[435px]:!text-[10px] max-[355px]:!text-[8px]">
                <div className="animate">
                  <div>We streamline your entire growth journey and build up</div>
                  <div>your brand and reach until the launch. Our approach</div>
                  <div>resolves around scaling via improved team and</div>
                  <div>workflow by utilizing our cross-functional expertise.</div>
                  <div className="text-primary">Bringing the right resources to scale business efficiently.</div>
                  <div className="text-primary">We aim to development branding that is memorable,</div>
                  <div className="text-primary">solid and future-friendly.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-18">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative z-20 container">
          <div className="flex items-start justify-center pb-6">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Our End Goal
            </div>
          </div>
          <div className="font-satoshi text-[20px] text-center text-white">
            Our research is built on real data, not assumptions. As an independent third party, we always focus on conducting all of our operation with honesty, and unbiased insights that both suppliers and customers’ trust.
          </div>
          <div className="grid grid-cols-12 gap-3 pt-16">
            {endGoals.map((goal, index) => (
              <div key={index} className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
                <div className="gradient-border h-full">
                  <div className="gradient-box h-full">
                    <div className="text-[24px] font-clashDisplay pb-4">
                      {goal.title}
                    </div>

                    <div className="text-[14px] font-satoshi">
                      {goal.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Digital Marketing Strip */}
      <MarketingStrip />

      <Footer />
    </>
  );
}
