import AboutSection from "@/components/AboutSection";
import Badge from "@/components/Badge";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";
import FAQSection from "@/components/FAQSection";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import InfiniteScroller from "@/components/InfiniteScroller";
import ProductsSection from "@/components/ProductsSection";
import ReviewSection from "@/components/ReviewSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonial from "@/components/Testimonial";
import TestimonialSection from "@/components/TestimonialSection";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="pt-[16px] max-w-[150rem] mx-auto">
      <div
        id="home"
        className="px-[16px] md:px-[32px] lg:px-[80px] scroll-mt-24"
      >
        {/* hero section */}
        <Hero />

        {/* what we offer section */}
        <ServiceSection />

        <ProductsSection />
        <AboutSection />

        <TestimonialSection />
      </div>
      <div className="overflow-x-hidden mt-10 md:mt-12 md:px-2 lg:px-2 w-full h-[150px] lg:h-full flex flex-col lg:justify-center items-start lg:items-center">
        <InfiniteScroller />
      </div>

      {/* reviews section */}
      <div className="">
        <ReviewSection />
      </div>

      {/* frequently asked question  */}

      <div>
        <FAQSection />
      </div>

      {/* contact section */}

      <div id="contact" className="scroll-mt-24 mt-10 lg:mt-20">
        <ContactSection />
      </div>
    </div>
  );
}
