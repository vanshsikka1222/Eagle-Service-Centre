// WHAT WE OFFER (CARDS CONTENT)

"use client";
import React, { useRef, useState } from "react";
import FeatureServiceImage from "./FeatureServiceImage";
import { ArrowUp } from "lucide-react";

const FeatureService = () => {
  const [featureServiceDisplay, setFeatureServiceDisplay] = useState(1);
  const prevDisplayRef = useRef(1); // for tracking previous index
  const [direction, setDirection] = useState<"left" | "right">("right");

  const serviceDetailsHeading = [
    "Automotive & Transport",
    "Fashion, Footwear & Accessories",
    "Packaging & Retail Display",
    "Medical & Healthcare",
    "Custom Embossing & Specialty Products",
  ];

  const serviceDetailsIcons = [
    "/machine.png",
    "/machine.png",
    "/machine.png",
    "/machine.png",
    "/machine.png",
  ];

  const serviceDetails = [
    "Durable, precision-welded seat covers for cars and scooters, built for comfort, style, and long-lasting performance.",
    "Stylish, versatile fabrics and finishes for shoes, handbags, and apparel that combine comfort with long-lasting elegance.",
    "Secure blister packs, shrink seals, and tool kit cases that protect and showcase products.",
    "Leak-proof sealing for blood bags, urine bags, and valve patches, ensuring safety and compliance.",
    "Tailored solutions for EVA embossing, designed for personal or professional needs, including Diaries, Photo Albums, Purses & Files and other unique PVC creations, crafted with precision and creative detailing.",
  ];

  const handleHover = (index: number) => {
    if (index > prevDisplayRef.current) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    prevDisplayRef.current = index;
    setFeatureServiceDisplay(index);
  };

  return (
    <section className="mt-[40px] lg:h-[500px] md:mt-[48px] flex flex-col lg:flex-row gap-[32px] ">
      <div className=" lg:w-1/4 hidden lg:flex flex-col lg:self-end lg:gap-[24px] lg:text-[26px]">
        <section className="flex flex-col gap-[8px]">
          <img
            src={serviceDetailsIcons[featureServiceDisplay - 1]}
            alt="vacation-home-logo"
            className="text-black h-[48px] w-[48px]"
          />
          <p className="text-[#2C2C2C] font-semibold ">
            {serviceDetailsHeading[featureServiceDisplay - 1]}
          </p>
        </section>
        <p className="lg:text-[18px] font-light text-[#2C2C2C]">
          {serviceDetails[featureServiceDisplay - 1]}
        </p>
      </div>

      {/* for bigger devices */}
      <div className="hidden w-3/4 lg:flex">
        {featureServiceDisplay === 1 ? (
          <FeatureServiceImage
            url={"/feature-s01.jpg"}
            heading={"01"}
            text={"Automotive & Transport"}
            direction={direction}
          />
        ) : (
          <div
            className={`cursor-pointer w-[10%] h-full ${
              featureServiceDisplay == 2 ? "border-none" : "border-r-2"
            } border-[#C7C7C7] hidden lg:flex items-center justify-center `}
            onMouseOver={() => handleHover(1)}
          >
            <div className="rotate-270 flex items-center justify-center gap-4 ">
              <div className=" flex items-center justify-start space-x-2 w-[440px]">
                <p className="text-[#C7C7C7] lg:text-[48px] font-light">01</p>
                <p className="text-[#C7C7C7] lg:text-[26px] font-semibold tracking-widest whitespace-nowrap uppercase">
                  AUTOMOTIVE & TRANSPORT
                </p>
              </div>
              <ArrowUp className="ml-4 w-[32px] h-[35px] text-[#C7C7C7]" />
            </div>
          </div>
        )}
        {featureServiceDisplay === 2 ? (
          <FeatureServiceImage
            url={"/feature-s02.jpg"}
            heading={"02"}
            text={"Fashion & Accessoriess"}
            direction={direction}
          />
        ) : (
          <div
            className={`cursor-pointer w-[10%] h-full ${
              featureServiceDisplay == 3 ? "border-none" : "border-r-2"
            } border-[#C7C7C7] hidden lg:flex items-center justify-center `}
            onMouseOver={() => handleHover(2)}
          >
            <div className="rotate-270 flex items-center justify-center gap-4 ">
              <div className=" flex items-center justify-start space-x-2 w-[440px]">
                <p className="text-[#C7C7C7] lg:text-[48px] font-light">02</p>
                <p className="text-[#C7C7C7] lg:text-[26px] font-semibold tracking-widest whitespace-nowrap">
                FASHION & ACCESORIES
                </p>
              </div>
              <ArrowUp className="ml-4 w-[32px] h-[35px] text-[#C7C7C7]" />
            </div>
          </div>
        )}
        {featureServiceDisplay === 3 ? (
          <FeatureServiceImage
            url={"/feature-s03.jpg"}
            heading={"03"}
            text={"Packaging & Retail"}
            direction={direction}
          />
        ) : (
          <div
            className={`cursor-pointer w-[10%] h-full border-r-2 border-[#C7C7C7] hidden lg:flex items-center justify-center ${
              featureServiceDisplay == 4 ? "border-none" : "border-r-2"
            }`}
            onMouseOver={() => handleHover(3)}
          >
            <div className="rotate-270 flex items-center justify-center gap-4 ">
              <div className=" flex items-center justify-start space-x-2 w-[440px]">
                <p className="text-[#C7C7C7] lg:text-[48px] font-light">03</p>
                <p className="text-[#C7C7C7] lg:text-[26px] font-semibold tracking-widest whitespace-nowrap">
                  PACKAGING & RETAIL
                </p>
              </div>
              <ArrowUp className="ml-4 w-[32px] h-[35px] text-[#C7C7C7]" />
            </div>
          </div>
        )}
        {featureServiceDisplay === 4 ? (
          <FeatureServiceImage
            url={"/feature-s04.jpg"}
            heading={"04"}
            text={"Medical & Healthcare"}
            direction={direction}
          />
        ) : (
          <div
            className={`cursor-pointer w-[10%] h-full border-r-2 border-[#C7C7C7] hidden lg:flex items-center justify-center ${
              featureServiceDisplay == 5 ? "border-none" : "border-r-2"
            }`}
            onMouseOver={() => handleHover(4)}
          >
            <div className="rotate-270 flex items-center justify-center gap-4 ">
              <div className=" flex items-center justify-start space-x-2 w-[440px]">
                <p className="text-[#C7C7C7] lg:text-[48px] font-light">04</p>
                <p className="text-[#C7C7C7] lg:text-[26px] font-semibold tracking-widest whitespace-nowrap">
                  MEDICAL & HEALTHCARE
                </p>
              </div>
              <ArrowUp className="ml-4 w-[32px] h-[35px] text-[#C7C7C7]" />
            </div>
          </div>
        )}
        {featureServiceDisplay === 5 ? (
          <FeatureServiceImage
            url={"/feature-s05.jpg"}
            heading={"05"}
            text={"Custom & Specialty"}
            direction={direction}
          />
        ) : (
          <div
            className={`cursor-pointer w-[10%] h-full ${
              featureServiceDisplay == 3 ? "border-none" : "border-r-2"
            } border-[#C7C7C7] hidden lg:flex items-center justify-center `}
            onMouseOver={() => handleHover(5)}
          >
            <div className="rotate-270 flex items-center justify-center gap-4 ">
              <div className=" flex items-center justify-start space-x-2 w-[440px]">
                <p className="text-[#C7C7C7] lg:text-[48px] font-light">05</p>
                <p className="text-[#C7C7C7] lg:text-[26px] font-semibold tracking-widest whitespace-nowrap">
                  CUSTOM & SPECIALITY
                </p>
              </div>
              <ArrowUp className="ml-4 w-[32px] h-[35px] text-[#C7C7C7]" />
            </div>
          </div>
        )}
      </div>

      {/* for smaller devices */}

      {serviceDetails.map((i, idx) => (
        <div
          className="lg:hidden flex flex-col gap-[24px] min-h-full h-fit mb-[60px]"
          key={i}
        >
          <FeatureServiceImage
            url={`/feature-s0n${idx + 1}.jpg`}
            heading={`0${idx + 1}`}
            text={serviceDetailsHeading[idx]}
          />

          <div className="w-full lg:w-1/4 flex flex-col lg:self-end gap-[24px] lg:text-[26px]">
            <section className="flex justify-start items-center gap-[8px] w-full">
              <img
                src={serviceDetailsIcons[idx]}
                alt="vacation-home-logo"
                className="text-black h-[48px] w-[48px]"
              />
              <p className="text-[#2C2C2C] font-semibold text-[20px]">
                {serviceDetailsHeading[idx]}
              </p>
            </section>
            <p className="lg:text-[18px] font-light text-[#2C2C2C]">
              {serviceDetails[idx]}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureService;
