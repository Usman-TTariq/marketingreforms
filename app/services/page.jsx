import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import Image from "next/image";
import GridBackground from "@/components/grid-background";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MarketingStrip from "@/components/marketing-strip";

const Services = () => {
  const items = ["Our Services"];
  const itemss = ["Digital marketing"];
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Our"
        firstSubHeading="Services"
        firstIcon={true}
        secondIcon={false}
        paragraph="Let's generate high-quality, conversion-ready leads together!"
        paraClassName="pt-4"
        headingClassName="justify-center"
      />
      <MarketingStrip items={items} repeat={40} />
      <div className="relative py-12">
        <div className="absolute top-0 left-0 w-full h-full">
          <ShootingStarsBackground starCount={3} />
        </div>
        <div className="relative container">
          <div className="flex items-center justify-between mb-16 max-md:mb-8 max-lg:flex-col max-md:gap-4">
            <div className="text-primary text-[48px] max-lg:text-[36px] max-md:text-[28px] font-clashDisplay font-bold">
              Our Services
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              We Offer a Full Range of Digital Marketing Services!
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Social Media Marketing (SMM)
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[40%]">
                      <Image
                        className="w-full h-full"
                        src="/images/marketrocket.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[45%]">
                      <Image
                        className="w-full h-full"
                        src="/images/marketingmic.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7 max-lg:col-span-12">
                <div className="text-[42px] font-clashDisplay text-primary">Social Media Marketing</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[18px] font-satoshi text-white">Our social media management covers everything.</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Detailed Analysis</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Scheduling and Engagement</div>
                  <div className="text-[18px] font-satoshi text-white">We offer plan-based strategies across multiple platforms.</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Facebook</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Instagram</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Twitter</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• LinkedIn</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• YouTube</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-7 max-lg:col-span-12">
                <div className="grid grid-cols-12">
                  <div className="col-span-10 max-lg:col-span-12">
                    <div className="text-[42px] font-clashDisplay text-primary">Pay-Per-Click Advertising
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[18px] font-satoshi text-white">Is organic marketing too slow for you? Try PPC!
                      </div>
                      <div className="text-[18px] font-satoshi text-white">It is one of the fastest ways to get you more visibility, clicks, and conversions. All in all, we put you ahead of competitors effectively with highly targeted ads and quick results.
                      </div>
                      <div className="text-[18px] font-satoshi text-white">At Marketing Reforms, we build fully personalized PPC campaigns. These campaigns are made to boost both conversions and revenue. We go through with it to give you measurable results and real return on every dollar spent.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Pay-Per-Click Advertising
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[35%]">
                      <Image
                        className="w-full h-full"
                        src="/images/payimg1.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[40%]">
                      <Image
                        className="w-full h-full"
                        src="/images/payimg2.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Search Engine Marketing
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                      <Image
                        className="w-full h-full"
                        src="/images/seo1.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                      <Image
                        className="w-full h-full"
                        src="/images/seo2.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7 max-lg:col-span-12">
                <div className="text-[42px] font-clashDisplay text-primary">Search Engine Marketing</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[18px] font-satoshi text-white">With the help of a carefully structured SEM campaign, your brand gains immediate visibility at the top of search results. We help you to:
                  </div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Increase Traffic
                  </div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Drive Sales</div>
                  <div className="pl-4 text-[18px] font-satoshi text-white">• Create Sustainable Growth </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-7 max-lg:col-span-12">
                <div className="grid grid-cols-12">
                  <div className="col-span-10">
                    <div className="text-[42px] font-clashDisplay text-primary">Performance Marketing
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[18px] font-satoshi text-white">At Marketing Reform, we measure, track, and analyze every action against your KPIs. We make sure your campaigns move in the right direction. This data-driven approach helps us to improve performance and deliver the results you deserve.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Performance Marketing
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                      <Image
                        className="w-full h-full"
                        src="/images/performance1.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                      <Image
                        className="w-full h-full scale-x-[-1]"
                        src="/images/marketingmic.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      SEO: Search Engine Optimization
                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                      <Image
                        className="w-full h-full"
                        src="/images/ads1.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                      <Image
                        className="w-full h-full"
                        src="/images/ads2.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7 max-lg:col-span-12">
                <div className="text-[42px] font-clashDisplay text-primary">SEO: Search Engine Optimization</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[18px] font-satoshi text-white">Even with so many websites competing for attention, you need a strategy that gets search engines to prioritize your brand. Our SEO team helps you lead the market as a mastermind who is always ten steps ahead of everyone.
                  </div>
                  <div className="text-[18px] font-satoshi text-white">We use smart optimization, targeted keywords, and high-quality content to drives traffic and conversions. Regardless of your workforce, whether you're local or global, we help you stand out from page one.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5 p-4 bg-[#171423] rounded-3xl mb-6">
              <div className="col-span-7 max-lg:col-span-12">
                <div className="text-[42px] font-clashDisplay text-primary">Web Design and Development</div>
                <div className="flex flex-col gap-2">
                  <div className="text-[18px] font-satoshi text-white">Your website is often your first impression. This is why it needs to be fast, intuitive, aesthetic, and user-friendly. Not getting clicks anymore? We can help! Our design experts design, redesign, and support web applications that look great and deliver high conversion rates along with top-tier user experiences.
                  </div>
                </div>
              </div>
              <div className="col-span-5 max-lg:col-span-12">
                <div className="service-box cursor-pointer relative bg-[#B19AFD4D] rounded-3xl p-3 group">
                  <div className="bg-[#8865FA] flex items-center gap-3 p-4 rounded-full">
                    <div className="text-white text-[24px] max-2xl:text-[18px] max-xl:text-[14px] font-light font-clashDisplay">
                      Web Design and Development

                    </div>
                  </div>
                  <div className="relative my-3 rounded-3xl h-[300px] overflow-hidden" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}>
                    <div className="absolute bottom-0 left-0 w-full h-full z-20">
                      <GridBackground
                        className="!h-full bg-[#292639]"
                        verticalClassName="!gap-10"
                        horizontalClassName="!gap-10"
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 left-[10%] w-[55%]">
                      <Image
                        className="w-full h-full"
                        src="/images/design1.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div className="absolute z-30 bottom-0 right-[10%] w-[50%]">
                      <Image
                        className="w-full h-full"
                        src="/images/design2.png"
                        alt="Social Media Marketing"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
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

export default Services;
