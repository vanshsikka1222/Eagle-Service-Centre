import React, { useRef } from "react";
import FeatureCard from "./FeatureCard";
import services from "@/public/data/services";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-[40px] md:mt-[48px]">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="md:grid flex flex-row overflow-x-scroll md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-2 md:gap-[24px] "
        style={{scrollbarWidth:"none"}}
      >
        {services?.map((service, idx) => (
          <FeatureCard
            key={idx}
            icon={service.image}
            heading={service.title}
            desc={service.text}
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-2 -bottom-15 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hidden"
      >
        <ChevronLeft size={24} className="text-gray-600 " />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-2 -bottom-15 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hidden"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>
    </div>
  );
};

export default Services;
