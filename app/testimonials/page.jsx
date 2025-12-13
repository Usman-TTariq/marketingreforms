import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import { ShootingStarsBackground } from "@/components/common/shooting-star-bk";
import Image from "next/image";

const Testimonials = () => {
  const items = ["Testimonials"];
  const end = ["Digital Marketing"];

  const testimonials = [
    {
      text: "Marketing Reforms completely transformed our digital presence. From day one, their team understood our vision better than we did and delivered strategies that brought real, measurable growth. Their communication, creativity, and professionalism are unmatched.",
      name: "Mike Tyson",
      img: "/images/u1.png"
    },
    {
      text: "The transition to their platform was the smoothest we've ever experienced. Their software is incredibly intuitive, cutting our team's training time in half. It’s powerful yet remarkably easy to use.",
      name: "Alex Philips",
      img: "/images/u2.png"
    },
    {
      text: "Our ambitious project was delivered two weeks ahead of schedule and under budget. The quality of the final deliverable was pristine. They set a new benchmark for what we expect from external consultants.",
      name: "Melinda Gates",
      img: "/images/u3.png"
    },
    {
      text: "Before working with them, our internal processes were a mess. Their solution not only organized everything but optimized it. Our efficiency has soared, and staff morale is noticeably higher.",
      name: "Charles Darwin",
      img: "/images/u4.png"
    },
    {
      text: "From the initial consultation to the final review, their commitment to the highest quality standards was evident. They are meticulous, professional, and truly care about the long-term success of their clients.",
      name: "Abby Johnson",
      img: "/images/u5.png"
    },
    {
      text: "They never treated us like just another number. The service was highly personalized, taking into account the unique nuances of our industry. It felt tailored specifically for our success.",
      name: "Alexandra Brown",
      img: "/images/u6.png"
    },


  ];

  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Hear From"
        firstSubHeading="Our Clients"
        firstIcon={true}
        secondIcon={false}
        paragraph="Explore our old ventures and hear directly from the clients who trusted us."
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
              What Our Clients Say
            </div>
            <div className="text-white text-[24px] max-lg:text-[24px] max-md:text-[18px] font-satoshi italic">
              Range of Digital Marketing Services!
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3">
            {
              testimonials.map((testimonial, index) => (
                <div key={index} className="col-span-4 max-lg:col-span-6 max-md:col-span-12">
                  <div className="p-8 rounded-2xl bg-[#B19AFD4D] h-full">
                    <div>

                    </div>
                    <div className="text-white text-[18px] font-satoshi">
                      {`"`}{testimonial.text}{`"`}
                    </div>
                    <div className="flex items-center justify-start gap-3 pt-4">
                      <Image src={testimonial.img} width={50} height={50} alt="user" />
                      <div className="text-primary text-[20px] font-satoshi py-2">{testimonial.name}</div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

          </div>
        </div>

      </div>
      <MarketingStrip items={end} repeat={40} />
      <Footer />
    </>
  );
};

export default Testimonials;
