import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MarketingStrip from "@/components/marketing-strip";
import AboutUs from "@/components/about-us";
import YourGoals from "@/components/your-goals";
import BrandsStrip from "@/components/brands-strip";
import Services from "@/components/services";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        firstHeading="Increase Your Revenue"
        firstSubHeading="With"
        secondHeading="A Powerful"
        secondSubHeading="Marketing Strategy!"
        paragraph="Marketing Reforms helps you define your budget and target
                  audience effectively to generate high-quality,
                  conversion-ready leads."
        firstIcon={true}
        secondIcon={true}
      />
      <MarketingStrip />
      <AboutUs />
      <YourGoals />
      <Services />
      <Testimonials />
      <BrandsStrip />
      <Footer />
    </>
  );
}
