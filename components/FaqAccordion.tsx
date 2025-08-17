"use client";
import React, { useRef, useState } from "react";
import { CirclePlus } from "lucide-react";
import faqData from "@/public/data/faq";
import gsap from "gsap";

const FaqAccordion = () => {
  const [openStates, setOpenStates] = useState(faqData.map(() => false));
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    const updatedStates = [...openStates];
    updatedStates[index] = !updatedStates[index];
    setOpenStates(updatedStates);

    const el = contentRefs.current[index];

    if (el) {
      if (updatedStates[index]) {
        gsap.set(el, { height: "auto" });
        const height = el.scrollHeight;
        gsap.fromTo(el, { height: 0 }, { height, duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(el, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <div className="w-full text-[#2C2C2C] font-geist font-semibold ">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b pb-4 mb-1 border-[#888888]">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left md:text-[26px] flex justify-between items-start md:items-center cursor-pointer"
          >
            {faq.question}
            {openStates[index] ? (
              <CirclePlus className="text-base font-light rotate-135 transform transition-all ease-in justify-end text-[#C7C7C7] min-w-6 md:w-8 min-h-6 md:h-8" />
            ) : (
              <CirclePlus className="text-base font-light  text-[#C7C7C7] min-w-6 md:w-8 min-h-6 md:h-8 justify-end transform transition-all ease-in rotate-90" />
            )}
          </button>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            style={{ overflow: "hidden", height: 0 }}
            className="text-[18px] font-light"
          >
            <p className="py-2 px-1">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
