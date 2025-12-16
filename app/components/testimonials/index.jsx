'use client';
import { useEffect, useState } from "react";
import { ShootingStarsBackground } from "../common/shooting-star-bk";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      text: "Our website is finally getting the traction it deserves. Thanks to Marketing Reforms, our sales are booming, would 100% recommend it to my peers.",
      name: "Mike Tyson"
    },
    {
      text: "We had been running ads for a year, but nothing worked. It was only when we partnered with Marketing Reforms that we realized we were doing it all wrong. They fixed ads and made them even better. Definitely worth the money.",
      name: "Alex Philips"
    },
    {
      text: "Soon after we chose to try Facebook ads with Marketing Reforms, our business has been booming. Definitely worth a try.",
      name: "Melinda Gates"
    },
    {
      text: "As an old-time brick-and-mortar company owner, I wasn't able to understand how SEO worked. They not only optimized my website very well, but did it without overcomplicating the process. Will definitely come back to try their other services.",
      name: "Charles Darwin"
    },
    {
      text: "I wanted a get more leads before the holiday season, but my budget was tight. Luckily Marketing Reforms staff was extremely understanding and took care of it. The campaign got me new traction and customers who still use my service. 100% recommended.  ",
      name: "Abby Johnson"
    },
    {
      text: "We hired Marketing Reforms to revamp our old crusty website, and they did a phenomenal job. The site looks so great, we went along with their suggestion and booked their SEO services to boost visibility, and it worked extremely well. ",
      name: "Alexandra Brown"
    },
    {
      text: "The team possesses deep domain expertise in our vertical. Their recommendations weren't theoretical; they were battle-tested strategies that we could immediately put into practice. Highly recommended.",
      name: "Melisa Smith"
    },
    {
      text: "It was a pleasure working with such a professional and enthusiastic team. Their positive energy and drive made the collaboration enjoyable, even during challenging phases of the project.",
      name: "John Doe"
    },
    {
      text: "We appreciate their transparent and simple pricing structure—no hidden fees, just massive value. The return on investment became clear within weeks.",
      name: "James Anderson"
    },
    {
      text: "They didn't just solve today's problems; they helped us future-proof our entire technology stack. We feel much more confident and prepared for the rapid changes in the market.",
      name: "Sarah Parker"
    },
    {
      text: "We feel confident knowing that they are managing this critical part of our business. Every interaction instills trust, and we know we can rely on them to handle the complexities.",
      name: "David Wilson"
    },
    {
      text: "We appreciate their transparent and simple pricing structure—no hidden fees, just massive value. The return on investment became clear within weeks.",
      name: "Emily Davis"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/u1.png", "/images/u2.png", "/images/u3.png", "/images/u4.png",
    "/images/u5.png", "/images/u6.png", "/images/u7.png", "/images/u8.png",
    "/images/u9.png", "/images/u10.png", "/images/u11.png", "/images/u12.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative py-16 pb-22 overflow-hidden max-sm:py-10">
      <div className="absolute top-0 left-0 w-full h-full">
        <ShootingStarsBackground starCount={2} />
      </div>
      <div className="container relative z-20">
        <div className="absolute z-20 top-0 left-0 w-full h-full flex items-start justify-between px-[120px] pt-[40px] max-md:pt-[16px] max-md:px-[40px]">
          <div className="text-white font-normal text-[22px] max-lg:text-[14px] max-md:text-[10px] font-satoshi italic">“SPOILER: They Love Us”</div>
          <div className="text-primary text-right text-[38px] max-xl:text-[28px] max-lg:text-[18px] max-md:text-[10px] font-clashDisplay">
            Here’s What People Say <br /> About Our Work
          </div>
        </div>
        <div className="testimonial-circle relative w-full h-[650px] rounded-bl-full rounded-br-full">
          <Image className="absolute top-0 left-0 w-full h-full" src="/images/testimonialbk.png" alt="Testimonial" width={1000} height={1000} />
          <div className="absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full flex flex-col items-center justify-center px-[250px] max-lg:px-[120px] max-md:px-[50px] ">
            <div className="font-satoshi text-[20px]  text-white text-center max-xl:text-[14px] max-lg:text-[12px] max-md:text-[8px]">
              {`“${data[activeIndex].text}”`}
            </div>
            <div className="border border-primary rounded-3xl px-12 mt-6 py-2 text-white text-[18px] font-satoshi max-2xl:text-[14px] max-lg:text-[12px] max-md:text-[8px]">
              {data[activeIndex].name}
            </div>
          </div>
          <div className="relative z-20 semi-circle ">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                className={`circle-item cursor-pointer transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_20px_rgba(220,255,95,0.6)]
                  ${activeIndex === index ? "border-2 border-primary" : "border-0"}
                `}
                onClick={() => setActiveIndex(index)}
                alt="users"
                height={1000}
                width={1000}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;