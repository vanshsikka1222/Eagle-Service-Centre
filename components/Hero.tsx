"use client";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !imageRef.current) return;

    // Zoom-out effect
    gsap.fromTo(
      imageRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animate each word
    gsap.to(titleRef.current.querySelectorAll("span"), {
      opacity: 1,
      y: 8,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const lines = [["HIGH", "FREQUENCY"], ["P.V.C", "WELDING"], ["MACHINE"]];

  return (
    <div className="overflow-hidden relative">
      <section className="relative overflow-hidden font-geist rounded-4xl h-[calc(100dvh-100px)] lg:h-[80%]">
  <div
    ref={imageRef}
    className="absolute inset-0 w-full h-full bg-center bg-cover z-0 rounded-4xl"
    style={{
      backgroundImage: `
        radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.26) 100%),
        url('/hero-bg.jpg')
      `,
    }}
  />
  <div className="absolute inset-0 bg-black/50 z-0 rounded-4xl" />

        {/* Content wrapper */}
        <div className="relative z-10  h-full flex flex-col justify-center text-white px-[24px] py-[63px] md:px-[48px] md:py-[231px] lg:px-[80px] lg:py-[63px]">
          <div className="flex flex-col w-fit flex-nowrap gap-6 md:gap-8  min-h-fit content-start">
            <h1
              ref={titleRef}
              className="text-[36px] md:text-[64px] lg:text-[80px] font-semibold leading-tight"
            >
              {lines.map((line, i) => (
                <div key={i} className="flex gap-3">
                  {line.map((word, j) => (
                    <span key={j} className="opacity-0 inline-block">
                      {word}
                    </span>
                  ))}
                </div>
              ))}
            </h1>

            <p className="max-w-xl text-base md:text-lg font-light text-white/100">
              Trusted Since 1977, Eagle Service Centre specializes in
              manufacturing high-quality PVC welding machines, engineered for
              precision, performance, and reliability across diverse industrial
              applications.
            </p>

            <Link href={"/#products"}>
              <button
                className="
                    relative
                    group
                    hover:cursor-pointer
                    flex items-center justify-between
                    w-[210] h-[48px]
                    bg-white text-black
                    px-4
                    rounded-full
                    overflow-hidden
                    hover:w-[225px]
                    transition-all
                    ease-in-out
                "
              >
                {/* Text */}
                <span
                  className="
                    text-sm
                    whitespace-pre
                    leading-[1.2]
                    absolute left-6
                "
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Explore Our Products
                </span>
                {/* Arrow */}

                <span
                  className="
                          w-8 h-8
                          absolute right-2
                          flex items-center justify-center
                         bg-black text-white
                          rounded-full
                          overflow-hidden
                        "
                >
                  {/* Current arrow */}
                  <span
                    className="
                            absolute
                            transition-transform duration-300 ease-in-out
                            group-hover:translate-x-4 group-hover:-translate-y-4
                          "
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  {/* Incoming arrow */}
                  <span
                    className="
                            absolute
                            -translate-x-4 translate-y-4
                            transition-transform duration-300 ease-in-out
                            group-hover:translate-x-0 group-hover:translate-y-0
                          "
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </span>
              </button>
            </Link>
            <div className=" font-geist flex flex-wrap gap-4 md:gap-10 lg:gap-12 text-white text-sm">
              <div>
                <span className="text-4xl md:text-5xl font-medium relative">
                  45
                  <span className="absolute top-0 text-3xl md:text-4xl">+</span>
                </span>{" "}
                <br />
                Years of Experience
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-medium relative">
                  40K
                  <span className="absolute top-0 text-3xl md:text-4xl">
                    +
                  </span>{" "}
                </span>
                <br />
                Satisfied Customers
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-medium relative">
                  1200
                  <span className="absolute top-0 text-3xl md:text-4xl">
                    +
                  </span>{" "}
                </span>
                <br />
                Machines Delivered
              </div>
            </div>
          </div>
        </div>

        {/* Profile avatars (optional) */}

        {/* Curve Svg's */}

        <div className="absolute right-0 bottom-[101px] md:bottom-[82px] z-50 w-[40px] rotate-180 border-none">
          <svg
            viewBox="0 0 20 20"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
          </svg>
        </div>

        <div className="absolute right-[173px] md:right-[432px] z-50 bottom-0 w-[40px] rotate-180">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L0 20C0 8.95431 8.95431 0 20 0L0 0Z" fill="white" />
          </svg>
        </div>
      </section>
      <div className="absolute bottom-0 outline-none shadow-none right-0 z-50 bg-white  border-none ring-0 rounded-tl-4xl h-[101px] md:h-[82px] w-[173px] md:w-[432px] flex flex-col justify-center  md:flex-row gap-[8px] items-center px-4">
        {/* <div className="flex -space-x-3">
          <img
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-none"
            src="/avatar1.jpg"
            alt="Agent 1"
          />
          <img
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-none"
            src="/avatar2.jpg"
            alt="Agent 2"
          />
          <img
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-none"
            src="/avatar3.jpg"
            alt="Agent 3"
          />
          <img
            className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-none"
            src="/avatar4.jpg"
            alt="Agent 4"
          />
        </div>
        <div className=" font-bold border-none">
          <p className="text-[14px]  text-black">10+ Featured Agents</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600 text-sm">5 / 5</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
