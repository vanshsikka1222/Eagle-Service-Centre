// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// type UseScrollRevealAnimationProps = {
//   badgeRef?: React.RefObject<HTMLDivElement | null>;
//   headingRef?: React.RefObject<HTMLHeadingElement | null>;
// };

// export const useScrollRevealAnimation = ({
//   badgeRef,
//   headingRef,
// }: UseScrollRevealAnimationProps) => {
//   useEffect(() => {
//     ScrollTrigger.refresh(); // Forces ScrollTrigger to recalculate positions

//     const deviceMemory = (navigator as Navigator & { deviceMemory?: number })
//       .deviceMemory;
//     if (deviceMemory && deviceMemory < 3) return;

//     const animations: gsap.core.Tween[] = [];

//     if (badgeRef?.current) {
//       animations.push(
//         gsap.fromTo(
//           badgeRef.current,
//           { y: 30, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             ease: "power1.out",
//             scrollTrigger: {
//               trigger: badgeRef.current,
//               start: "top 100%",
//               end: "bottom top",
//               toggleActions: "play none none none",
//               // markers: true,
//             },
//           }
//         )
//       );
//     }

//     if (headingRef?.current) {
//       const text = headingRef.current.textContent?.trim() || "";
//       if (!text) return;

//       headingRef.current.innerHTML = text
//         .split(" ")
//         .map(
//           (word) =>
//             `<span style="display:inline-block;opacity:0;transform:translateY(10px)">${word}</span>`
//         )
//         .join(" ");

//       const spans = headingRef.current.querySelectorAll("span");

//       animations.push(
//         gsap.to(spans, {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           stagger: 0.05,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 100%",
//             end: "bottom top",
//             toggleActions: "play none none none",
//             // markers: true,
//           },
//         })
//       );
//     }

//     return () => {
//       animations.forEach((anim) => anim.kill());
//     };
//   }, [badgeRef, headingRef]);
// };

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseScrollRevealAnimationProps = {
  badgeRef?: React.RefObject<HTMLDivElement | null>;
  headingRef?: React.RefObject<HTMLHeadingElement | null>;
};

export const useScrollRevealAnimation = ({
  badgeRef,
  headingRef,
}: UseScrollRevealAnimationProps) => {
  useEffect(() => {
    let animations: gsap.core.Tween[] = [];
    let ctx = gsap.context(() => {}); // Create a context for cleanup

    const initAnimations = () => {
      // Clear any existing animations
      animations.forEach((anim) => anim.kill());
      animations = [];

      // Badge animation
      if (badgeRef?.current) {
        animations.push(
          gsap.fromTo(
            badgeRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power1.out",
              scrollTrigger: {
                trigger: badgeRef.current,
                start: "top 85%", // Changed from 100%
                end: "top 50%",
                toggleActions: "play none none none",
                markers: false, // Enable for debugging
              },
            }
          )
        );
      }

      // Heading animation
      if (headingRef?.current) {
        const text = headingRef.current.textContent?.trim() || "";
        if (text) {
          headingRef.current.innerHTML = text
            .split(" ")
            .map(
              (word) =>
                `<span style="display:inline-block;opacity:0;transform:translateY(10px)">${word}</span>`
            )
            .join(" ");

          const spans = headingRef.current.querySelectorAll("span");

          animations.push(
            gsap.to(spans, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power1.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%", // Changed from 100%
                end: "top 50%",
                toggleActions: "play none none none",
                markers: false, // Enable for debugging
              },
            })
          );
        }
      }

      // Refresh ScrollTrigger after a short delay
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    };

    // Initialize animations immediately
    initAnimations();

    // Re-init on resize (important for responsive sites)
    window.addEventListener("resize", initAnimations);

    return () => {
      // Cleanup
      window.removeEventListener("resize", initAnimations);
      animations.forEach((anim) => anim.kill());
      ctx.revert(); // Revert all GSAP context animations
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [badgeRef, headingRef]);
};
