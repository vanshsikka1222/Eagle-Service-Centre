"use client";
import Link from "next/link";
import Badge from "./Badge";
import PropertyCard from "./PropertyCard";
import data from "@/public/data/properties";
import { useRef } from "react";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const ProductsSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });
  return (
    <div
      id="products"
      className="scroll-mt-24 mt-[80px] lg:mt-[160px] w-full h-full flex flex-col items-start gap-4"
    >
      <div ref={badgeRef}>
        <Badge text={"Our Machines & Products"} />
      </div>

      <h2
        ref={headingRef}
        className="w-full text-left uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px] lg:w-[800px]"
      >
        Quality products that meet global welding standards
      </h2>
      <div
  className="
    w-full mt-[40px] md:mt-[48px] 
    flex gap-[20px] overflow-x-auto md:overflow-x-visible
    md:grid md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)]
    scroll-smooth
  "
>
  {data?.map((item) => (
    <Link
      key={item.id}
      href={`/properties/${item.id}`}
      className="min-w-[280px] md:min-w-0" // ensures cards have width on mobile scroll
    >
      <PropertyCard
        imageUrl={item.image1}
        badgeText={item.badgeText}
        location={item.location}
        propertyName={item.title}
      />
    </Link>
  ))}
</div>

    </div>
  );
};

export default ProductsSection;
