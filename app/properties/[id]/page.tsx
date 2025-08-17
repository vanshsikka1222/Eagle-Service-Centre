"use client";

import AmenitiesBadge from "@/components/AmenitiesBadge";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";
import PropertyData, { PropertyType } from "@/public/data/properties";
import { SquareCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usePopUpAnimation } from "@/hooks/usePopUpAnimation";
import gsap from "gsap";

const getEmbedUrl = (url = "") => {
  if (!url) return "www.youtube.com";

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("shorts/")) {
    return url.replace("shorts/", "embed/");
  }

  return url; // fallback
};

export default function PropertyPage() {
  const { id } = useParams();

  const [propertyData, setPropertyData] = useState<PropertyType | null>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ headingRef });

  // Refs for each image
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const image2CardRef = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3CardRef = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);

  // Apply zoom effect
  useImageZoom(mainCardRef, mainImageRef);
  useImageZoom(image2CardRef, image2Ref);
  useImageZoom(image3CardRef, image3Ref);

  useEffect(() => {
    const data = PropertyData.find((data) => data.id === Number(id));
    setPropertyData(data || null);
  }, [id]);
  const galleryCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const galleryImageRefs = useRef<(HTMLImageElement | null)[]>([]);
useEffect(() => {
  galleryCardRefs.current.forEach((card, idx) => {
    const image = galleryImageRefs.current[idx];
    if (card && image) {
      // Reuse the same zoom logic
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        gsap.set(image, { transformOrigin: `${x}% ${y}%` });
      };
      
      // products img
      const handleMouseEnter = () => {
        gsap.to(image, { scale: 2.2, duration: 0.4, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  });
}, [propertyData?.galleryImages]);
  return (
    <div className="font-geist text-[#2C2C2C] pt-[16px] px-[16px] md:px-[32px] lg:px-[80px] min-h-screen flex flex-col gap-12">
      <div className="relative gap-4 min-h-[400px] md:h-[500px] lg:h-[600px] flex flex-col md:flex-row w-full">
        <div className="absolute top-[20px] left-[20px] bg-white rounded-[32px] py-2 px-4 text-[16px] md:-text-[18px] font-light">
          {propertyData?.badgeText}
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse gap-4">
          {/* IMAGE SECTION */}
          <div
            ref={mainCardRef}
            className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
          >
            <img
              ref={mainImageRef}
              src={propertyData?.image1}
              alt="main-property"
              className="rounded-[32px] object-cover object-center w-full h-full transform origin-center will-change-transform img"
            />
          </div>

          {/* YOUTUBE SHORT SECTION */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]">
            <iframe
              className="rounded-[32px] w-full h-full"
              src= {getEmbedUrl(propertyData?.youtubeLink)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-[35%] flex flex-col gap-4">
          <div ref={image2CardRef} className="overflow-hidden">
            <img
              ref={image2Ref}
              src={`${propertyData?.image2}`}
              alt="property-1-1"
              className="rounded-[32px] object-cover object-center h-[250px] md:h-[242px] lg:h-[292px] img"
            />
          </div>
          <div ref={image3CardRef} className="overflow-hidden">
            <img
              ref={image3Ref}
              src={`${propertyData?.image3}`}
              alt="property-1-2"
              className="rounded-[32px] object-cover object-center h-[250px] md:h-[242px] lg:h-[292px] img"
            />
          </div>
        </div>
      </div>

      {/* content section */}

      <div className="flex flex-col md:flex-row gap-10 md:gap-12">
        <div className="flex flex-col gap-10 md:gap-12 md:w-[65%]">
          <div className="flex flex-col gap-4">
            <h2
              ref={headingRef}
              className="text-[22px] md:text-[32px] lg:text-[36px] font-semibold uppercase"
            >
              {propertyData?.title}
            </h2>
          </div>
          {/* specification */}
          <div className="flex flex-col gap-4 text-[#2c2c2c]">
            <p className="text-[18px] md:text-[24px] lg:text-[26px] font-semibold">
              Specifications
            </p>
            {propertyData?.specification.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-1 items-center text-[#2C2C2C] font-light text-base md:text-[18px]"
              >
                <SquareCheck className="w-[24px]" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* key features */}
          <div className="flex flex-col gap-4 text-[#2c2c2c]">
            <p className="text-[18px] md:text-[24px] lg:text-[26px] font-semibold">
              Suitable For
            </p>
            <div className="flex flex-wrap items-start gap-4">
              {propertyData?.keyFeatures?.map((item, idx) => (
                <AmenitiesBadge key={idx} text={item} disable={false} />
              ))}
            </div>
          </div>
          {/* overview */}
          <div className="flex flex-col gap-4 text-[#2c2c2c]">
            <p className="text-[18px] md:text-[24px] lg:text-[26px] font-semibold">
              Maintenance & Safety Considerations
            </p>
            
            <div className="flex flex-col gap-2 text-base md:text-[18px] font-light">
              {propertyData?.overviewContent?.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[#2c2c2c]">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Product Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {propertyData?.galleryImages?.map((img, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    galleryCardRefs.current[idx] = el;
                  }}
                  className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    ref={(el) => {
                      galleryImageRefs.current[idx] = el;
                    }}
                    src={img}
                    alt={`gallery-${idx}`}
                    width={500}
                    height={350}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-xl transform transition-transform duration-300 transform origin-center will-change-transform img"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* google maps */}
          <div className="flex flex-col gap-4 text-[#2c2c2c]">
            <p className="text-[18px] md:text-[24px] lg:text-[26px] font-semibold">
              Location
            </p>
            <iframe
              src={`${propertyData?.mapLocationMark}`}
              width="full"
              height="450"
              style={{ border: 0, borderRadius: "32px", height: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="w-full md:flex-1 md:sticky top-[90px] h-fit border border-[#C7C7C7] rounded-[32px] text-[#2C2C2C] bg-white flex flex-col items-center gap-4 px-4 py-6 lg:py-8 lg:px-8">
          <div className="flex gap-2 text-[18px] md:text-[26px] lg:text-[30px] font-semibold flex-wrap text-center justify-center">
            <p className="w-fit">{propertyData?.title}</p>
          </div>
          {/* <p className="font-semibold text-[22px] md:text-[32px] lg:text-[36px]">
            {propertyData?.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p> */}

          <p className="text-center font-light text-base md:text-[18px]">
            Whether you’re planning to purchase, have a question about our machines, or need expert guidance. <br />
            <br />
            We’re just one call away from bringing high performance technology to your workspace.
          </p>
          <div className="bg-white border-none flex flex-col justify-center gap-[8px] items-center ">
            {/* <div className="flex -space-x-1">
              <img
                className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-white border"
                src="/avatar1.jpg"
                alt="Agent 1"
              />
              <img
                className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-white border"
                src="/avatar2.jpg"
                alt="Agent 2"
              />
              <img
                className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-white border"
                src="/avatar3.jpg"
                alt="Agent 3"
              />
              <img
                className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-full border-white border"
                src="/avatar4.jpg"
                alt="Agent 4"
              />
            </div> */}

            {/* Text & Rating (hidden on small screens)
            <div className=" mt-2 font-bold border-none flex flex-col gap-2">
              <p className="text-[14px] md:text-base text-black">
                10+ Featured Agents
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm md:text-base">
                  ⭐⭐⭐⭐⭐
                </span>
                <span className="text-gray-600 text-sm md:text-base">
                  5 / 5
                </span>
              </div>
            </div> */}

          </div>
          <Link href={"#contact"} scroll={true}>
            <button className="bg-black text-white py-3 min-w-[240px] min-h-[51px] transition ease-in-out rounded-[32px] font-light text-[18px] hover:bg-[#2C2C2C] focus:bg-[#32C2C2C] cursor-pointer">
              Request Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
const useImageZoom = (
  cardRef: React.RefObject<HTMLDivElement | null>,
  imageRef: React.RefObject<HTMLImageElement | null>
) => {
  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      gsap.set(image, { transformOrigin: `${x}% ${y}%` });
    };

    // gallery
    const handleMouseEnter = () => {
      gsap.to(image, { scale: 2.5, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
};
