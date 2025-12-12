"use client";
import StarIcon from "./svg/star-icon";
import Marquee from "../marquee-animation";

const MarketingStrip = ({ items = ["Digital Marketing"], repeat = 40 }) => {
  const combinedItems = Array(repeat).fill(items).flat();
  return (
    <div className="bg-primary py-3 overflow-hidden max-sm:py-1">
      <Marquee duration={20}>
        <div className="flex items-center justify-between gap-12">
          {combinedItems.map((text, index) => (
            <div key={index} className="flex items-center gap-6">
              <StarIcon />
              <div
                className="text-black text-[50px] font-clashDisplay whitespace-nowrap 
                max-2xl:text-[45px] 
                max-xl:text-[40px] 
                max-lg:text-[32px] 
                max-md:text-[26px] 
                max-sm:text-[16px]"
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarketingStrip;
