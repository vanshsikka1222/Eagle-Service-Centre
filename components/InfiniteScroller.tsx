"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import agents from "@/public/data/agents";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InfiniteScroller = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mobileWrapperRef = useRef<HTMLDivElement>(null);
  const desktopWrapperRef = useRef<HTMLDivElement>(null);

  const [isMediumUp, setIsMediumUp] = useState(true);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleResize = () => {
    setIsMediumUp(window.innerWidth >= 768);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      if (mobileWrapperRef.current) {
        gsap.fromTo(
          mobileWrapperRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desktopWrapperRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (desktopWrapperRef.current) {
        gsap.fromTo(
          desktopWrapperRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desktopWrapperRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMediumUp) return;

    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Kill old timeline
    timelineRef.current?.kill();

    // Clear container and append original content
    container.innerHTML = "";
    container.appendChild(content);

    // Clone content twice for seamless loop
    const clone1 = content.cloneNode(true) as HTMLDivElement;
    const clone2 = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone1);
    container.appendChild(clone2);

    const totalWidth = content.offsetWidth;

    // Set container position to 0
    gsap.set(container, { x: 0 });

    // Create timeline
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    tl.to(container, {
      x: -totalWidth,
      duration: 30,
      onComplete: () => {
        gsap.set(container, { x: 0 });
      },
    });

    timelineRef.current = tl;

    // Resize observer to update on size change
    const resizeObserver = new ResizeObserver(() => {
      tl.kill();
      gsap.set(container, { x: 0 });
      const newTL = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
      newTL.to(container, {
        x: -content.offsetWidth,
        duration: 30,
        onComplete: () => {
          gsap.set(container, { x: 0 });
        },
      });
      timelineRef.current = newTL;
    });

    resizeObserver.observe(content);

    return () => {
      timelineRef.current?.kill();
      resizeObserver.disconnect();
    };
  }, [isMediumUp]);

  
  return (
    <div
      ref={desktopWrapperRef}
      className=" md:mt-1 overflow-hidden lg:py-4 "
    >
      <div
        className="flex w-max gap-5 items-center"
        ref={containerRef}
        style={{ display: "flex" }}
      >
        <div
          className="flex gap-10 justify-center items-center w-full"
          ref={contentRef}
        >
          {agents.map((agent, index) => (
            <div key={index} className="w-full h-full flex flex-col gap-4">
              <img
                src={agent.imageUrl}
                // alt={agent.agentName}
                className="md:w-[250px] lg:w-[300px] md:h-[150px] lg:h-[200px] h-[150px] rounded-[32px] object-cover img"
                style={{ border: '1px solid #8C8C8C', padding: '' }}
              />
              <p className="text-[18px] font-geist font-semibold text-[#2C2C2C]">
                {/* {agent.agentName} <br /> */}
                <span className="text-[#888888] font-light text-[16px]">
                  {/* {agent.agentTitle} */}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroller;
