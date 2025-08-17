// WHAT WE OFFER (CARDS IMAGES)

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const FeatureServiceImage = ({
  url,
  heading,
  text,
  direction = "left",
}: {
  url: String;
  heading: String;
  text: String;
  direction?: "left" | "right";
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !direction) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          x: direction === "right" ? "100%" : "-100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 10,
          duration: 0,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, [url, direction]);

  return (
    <div className="overflow-hidden h-full w-full">
      <section
        ref={containerRef}
        className="relative  bg-center bg-cover font-geist rounded-4xl w-full h-full min-h-[250px] md:min-h-[300px]"
        style={{
          backgroundImage: `
      radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.26) 100%),
      url(${url})
    `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 right-0 rounded-tl-[32px] rounded-none bg-white z-50 text-[#2C2C2C] pl-[12px] pt-[12px] md:pl-[24px] md:pt-[24px] h-[83px] md:h-[95px] w-[220px] md:w-[250px] leading-10">
          <p className="text-[48px] font-light">{heading}</p>
          <p className="font-semibold text-[18px] w-fit">{text}</p>
        </div>

        {/* Curve Svg's */}

        <div className="absolute right-0 bottom-[83px] md:bottom-[95px] z-50 w-[40px] rotate-180 border-none">
          <svg
            viewBox="0 0 20 20"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
          </svg>
        </div>

        <div className="absolute right-[220px] md:right-[250px] z-50 bottom-0 w-[40px] rotate-180">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default FeatureServiceImage;
