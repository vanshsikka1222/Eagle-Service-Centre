import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import React from "react";

// export const generateMetadata = async (props: {
//   params: { id: string };
// }): Promise<Metadata> => {
//   // ⬇ Keep this workaround for Next.js dynamic resolution
//   await new Promise((res) => setTimeout(res, 0));

//   const propertyId = Number(props.params.id);

//   const { default: PropertyData } = await import("@/public/data/properties");
//   const property = PropertyData.find((p) => p.id === propertyId);

//   if (!property) {
//     return {
//       title: "PVC Welding Machine Not Found - Eagle Service Center",
//       description:
//         "Browse high-quality PVC welding machines and industrial welding solutions from Eagle Service Center.",
//       keywords: [
//         "PVC welding machine",
//         "high frequency welding",
//         "industrial welding equipment",
//         "plastic welding machine",
//       ],
//     };
//   }

//   return {
//     title: `${property.title} | ${property.location} | PVC Welding Machine`,
//     description: `Buy ${property.title} — ${property.overviewContent} Located in ${property.location}. Durable, efficient, and built for high-performance welding.`,
//     keywords: [
//       "PVC welding machine",
//       "plastic welding equipment",
//       "high frequency PVC welder",
//       "industrial plastic joining machine",
//       "Eagle Service Center",
//       property.title,
//       property.location,
//       ...property.specification, // only real specs from your data
//     ],
//     openGraph: {
//       type: "website", // avoid 'product' to fix the OpenGraph error
//       title: `${property.title} | PVC Welding Machine`,
//       description: `${property.title} — Premium PVC welding solution from Eagle Service Center. Built for precision and long life.`,
//       images: [
//         {
//           url: property.image1,
//           width: 1200,
//           height: 630,
//           alt: property.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: property.title,
//       description: `${property.title} — Premium PVC welding machine by Eagle Service Center`,
//       images: [property.image1],
//     },
//   };
// };

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div id="contact" className="mt-10 md:mt-20">
        <ContactSection />
      </div>
    </>
  );
}
