"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { usePopUpAnimation } from "@/hooks/usePopUpAnimation";

const PropertyCard = ({
  imageUrl,
  badgeText,
  propertyName,
  location,
}: {
  imageUrl: String;
  badgeText: String;
  propertyName: String;
  location: String;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  usePopUpAnimation(cardRef);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="hover:cursor-pointer w-full flex flex-col gap-4 rounded-[32px] shadow-none bg-white text-[#2C2C2C] font-geist"
    >
      {/* Image + Badge */}
      <div className="relative rounded-[32px] overflow-hidden max-w-[400px]">
        <img
          ref={imageRef}
          src={`${imageUrl}`}
          alt="Property"
          className="w-full  object-cover flex-1 transform origin-center will-change-transform img"
        />
        <span className="absolute top-[20px] right-[20px] bg-white text-base font-medium text-[#2C2C2C] px-4 py-2 rounded-full shadow">
          {badgeText}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        {/* <div className="flex items-center gap-1 text-gray-600 text-sm">
          <img src={"/map-icon.png"} alt="map-icon" className="w-[20px]" />
          <span className="text-base">{location}</span>
        </div> */}
        <h2 className="text-[26px] font-semibold">{propertyName}</h2>

        {/* Features */}
        {/* <div className="flex items-center gap-4 text-[16px] font-light text-[#2C2C2C]">
          {bedCount > 0 && (
            <div className="flex items-center gap-2">
              <>
                <BedDouble size={20} className="text-[#888888]" />
                <span>{bedCount}</span>
              </>
            </div>
          )}

          {washrooms > 0 && (
            <div className="flex items-center gap-2">
              <>
                <Bath size={20} className="text-[#888888]" />
                <span>{washrooms}</span>
              </>
            </div>
          )}
          {propertyArea > 0 && (
            <div className="flex items-center gap-2">
              <>
                <Waves size={20} className="text-[#888888]" />
                <span>{propertyArea.toLocaleString()} sq.ft</span>
              </>
            </div>
          )}
        </div> */}

        {/* Price */}
        {/* <div className="text-lg font-semibold">$ {price.toLocaleString()}</div> */}
      </div>
    </div>
  );
};

export default PropertyCard;
