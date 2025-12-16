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
      text: "Our website is finally getting the traction it deserves. Thanks to Marketing Reforms, our sales are booming, would 100% recommend it to my peers.",
      name: "Mike Tyson",
      img: "/images/u1.png"
    },
    {
      text: "We had been running ads for a year, but nothing worked. It was only when we partnered with Marketing Reforms that we realized we were doing it all wrong. They fixed ads and made them even better. Definitely worth the money.",
      name: "Alex Philips",
      img: "/images/u2.png"
    },
    {
      text: "Soon after we chose to try Facebook ads with Marketing Reforms, our business has been booming. Definitely worth a try.",
      name: "Melinda Gates",
      img: "/images/u3.png"
    },
    {
      text: "As an old-time brick-and-mortar company owner, I wasn't able to understand how SEO worked. They not only optimized my website very well, but did it without overcomplicating the process. Will definitely come back to try their other services.",
      name: "Charles Darwin",
      img: "/images/u4.png"
    },
    {
      text: "I wanted a get more leads before the holiday season, but my budget was tight. Luckily Marketing Reforms staff was extremely understanding and took care of it. The campaign got me new traction and customers who still use my service. 100% recommended.",
      name: "Abby Johnson",
      img: "/images/u5.png"
    },
    {
      text: "We hired Marketing Reforms to revamp our old crusty website, and they did a phenomenal job. The site looks so great, we went along with their suggestion and booked their SEO services to boost visibility, and it worked extremely well.",
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
                    <div className="flex flex-col h-full justify-between">
                      <div className="text-white text-[18px] font-satoshi">
                        {`"`}{testimonial.text}{`"`}
                      </div>
                      <div className="flex items-center justify-start gap-3 pt-4">
                        <Image src={testimonial.img} width={50} height={50} alt="user" />
                        <div>
                          <div className="text-primary text-[20px] font-satoshi pt-2">{testimonial.name}</div>
                          <Image src="/images/stars.png" width={60} height={50} alt="user" />
                        </div>
                        <div>
                        </div>
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
