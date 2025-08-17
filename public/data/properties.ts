export type PropertyType = {
  id: number;
  badgeText: string;
  image1: string;
  image2: string;
  image3: string;
  location: string;
  title: string;
  youtubeLink: string;
  overviewContent: string[];
  specification: string[];
  keyFeatures: string[];
  galleryImages:string[];
  mapLocationMark: string;
};

const data: PropertyType[] = [
  {
    id: 1,
    badgeText: "ESC Registered Model",
    image1: "/6.1.svg",
    image2: "/6.2.svg",
    image3: "/6.3.svg",
    location: "New Delhi",
    youtubeLink:"https://youtube.com/shorts/javIDT9ftI0?si=t-CEGdlltPvG2ACV",
    title: "E-ZIG 2KW",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 2KW",
      "POWER INPUT: 220V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: 0-12s", 
      "PHASE: Single",
      "MACHINE DIMENSION: 1475 x 712 x 1321 mm",
      "WORKING PLATE SIZE: 445 x 610mm",
      "MACHINE WEIGHT: 220kg (approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Advertising & Branding Products",
      "Footwear Industry",
      "Stationery & Accessories",
      "Automobile Interiors (Light Items)",
      "Leather Goods & Wallets",
      "Corporate & Gift Packaging",
      "Event & Wedding Cards",
      "Fashion Accessories",
      "Educational & Office Supplies",
      "Miscellaneous Utility Products"
    ],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },
  {
    id: 2,
    badgeText: "ESC Registered Model",
    image1: "/5.1.svg",
    image2: "/5.2.svg",
    image3: "/5.3.svg",
    location: "New Delhi",
    title: "E-ZIG 4KW",
    youtubeLink: "https://www.youtube.com/embed/GRGmjgGfbAU?si=Fuxn5x5GehZqvq_j",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 4KW",
      "POWER INPUT: 440V or 220V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: 0-12s",
      "PHASE: Available in both 3 Phase & Single Phase.",
      "MACHINE DIMENSION: 1475 x 865 x 1321 mm",
      "WORKING PLATE SIZE: 445 x 610mm",
      "MACHINE WEIGHT: 350kg(approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Automobile Interiors (Heavy Duty Items)",
      "Luggage & Travel Goods",
      "Footwear Midsoles & Outsoles",
      "Sports Goods & Equipment",
      "Industrial Belts & Components",
      "Heavy Leather Accessories",
      "Home Décor & Upholstery",
      "Electrical & Insulating Products",
      "Packaging Industry",
      "Miscellaneous Heavy Utility Products"
    ],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },
  {
    id: 3,
    badgeText: "ESC Registered Model",
    image1: "/3.1.svg",
    image2: "/3.2.svg",
    image3: "/3.3.svg",
    location: "New Delhi",
    title: "EH-9KW",
    youtubeLink: "https://youtube.com/embed/yH3EKpKxgFc?si=Nkh88hjVPYVTmElZ",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 9KW",
      "POWER INPUT: 440V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: Preseal- 0-12s, Welding- 0-12s, Cooling- 0-12s",
      "PHASE: 3 PHASE",
      "MACHINE DIMENSION: 1475 x 915 x 1676 mm",
      "WORKING PLATE SIZE: 445 x 610mm",
      "OIL - Hydraulic 68no.",
      "Oil Tank Capacity- 50Ltr.",
      "MACHINE WEIGHT: 550kg(approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Automobile & Heavy Vehicle Components",
      "Furniture & Upholstery Industry",
      "Thick Leather Goods (Belts, Saddlery, Harness)",
      "Industrial Rubber & Conveyor Belts",
      "Defence & Safety Equipment",
      "Heavy Luggage & Travel Gear",
      "Sports Equipment (Professional Grade)",
      "Marine & Aviation Interiors",
      "Large-Scale Packaging Solutions",
      "Miscellaneous Heavy-Duty Utility Products"
    ],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },
  {
    id: 4,
    badgeText: "ESC Registered Model",
    image1: "/4.1.svg",
    image2: "/4.2.svg",
    image3: "/4.3.svg",
    location: "New Delhi",
    title: "E-PN 4KW",
    youtubeLink: "https://youtube.com/shorts/pJ_qDlotJ30?si=KZAKpJ36fPcXHCto",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 4KW",
      "POWER INPUT: 440V or 220V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: Preseal- 0-12s, Welding- 0-12s, Cooling- 0-12s",
      "PHASE: Available in Both 3 PHASE & Single Phase",
      "MACHINE DIMENSION: 1475 x 915 x 865 mm",
      "WORKING PLATE SIZE: 445 x 610mm",
      "MACHINE WEIGHT: 380kg (approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Premium Footwear Manufacturing",
      "Handbags & Fashion Accessories",
      "Leather Garments & Apparel",
      "Automobile Seat Covers & Interiors",
      "Medical Equipment Covers & Wearables",
      "Sports Goods & Protective Gear",
      "High-End Upholstery & Furnishing",
      "Travel Goods (Backpacks, Trolleys, Cases)",
      "Industrial Safety Gear (Gloves, Aprons, Jackets)",
      "Medium-Duty Packaging & Utility Products"
    ],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },
  {
    id: 5,
    badgeText: "ESC Registered Model",
    image1: "/2.1.svg",
    image2: "/2.2.svg",
    image3: "/2.3.svg",
    location: "New Delhi",
    title: "E-S",
    youtubeLink: "https://www.youtube.com/embed/yH3EKpKxgFc?si=ebH4w8tCiJQlxJ8T",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 1KW",
      "POWER INPUT: 220V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: 0-12s & Can be made without timer as per the requirements.",
      "PHASE: Single",
      "MACHINE DIMENSION: 1220 x 610 x 1270 mm",
      "WORKING PLATE SIZE: 345 x 508mm",
      "MACHINE WEIGHT: 100kg (approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Garment Labels & Patches",
      "Artificial Leather Products",
      "Photo Frames & Albums",
      "Stationery & Office Accessories",
      "PVC/PU Sheets & Materials",
      "Handicrafts & Decorative Items",
      "Custom Branding & Promotional Products",
      "Shoes & Small Leather Goods",
      "Wallets, Belts & Fashion Accessories",
      "Packaging Materials & Utility Products"
    ],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },

  {
    id: 6,
    badgeText: "ESC Registered Model",
    image1: "/7.1.svg",
    image2: "/7.2.svg",
    image3: "/7.3.svg",
    location: "New Delhi",
    title: "E-MS",
    youtubeLink: "https://www.youtube.com/embed/yH3EKpKxgFc?si=ebH4w8tCiJQlxJ8T",
    overviewContent: [ 
      "1)  Regular Cleaning & Lubrication.", 
      "2)  Periodic Check of all the electrical connections.",
      "3)  Machine Should be placed in well ventilated space & on a properly levelled ground surface.",
      "4) Always keep machine on for 10-15mins. Before starting working on it  to ensure proper heating of bulb’s. This must be done for bulb’s safety.",
      "5) Ensure the machine operator must be properly trained & knows everything about the safety considerations to be followed while operating the machine.",
    ],
    specification: [
      "HF OUTPUT: 1.2KW",
      "POWER INPUT: 220V",
      "OUTPUT FREQUENCY: 27.12 MHz",
      "WELDING TIMER: 0-12s & Can be made without timer as per the requirements.",
      "PHASE: Single",
      "MACHINE DIMENSION: 1220 x 610 x 1270 mm",
      "WORKING PLATE SIZE: 445 x 610mm",
      "MACHINE WEIGHT: 140kg (approx.)",
      "COUNTRY OF ORIGIN: MADE IN INDIA",
    ],
    keyFeatures: [
      "Garment & Apparel Manufacturing",
      "Footwear & Sneaker Production",
      "Leather Accessories (Wallets, Handbags)",
      "Home Textiles & Furnishings",
      "Car Seat Covers & Automotive Upholstery",
      "Medical Textiles & Equipment Covers",
      "Sportswear & Performance Gear",
      "School Bags & Office Bags",
      "Decorative Stitching & Embroidery Work",
      "General Medium-Duty Industrial Applications"
],
    galleryImages: [
      "/1.svg",
      "/2.svg",
      "/3.svg",
      "/4.svg",
      "/5.svg",
      "/6.svg",

    ],
    mapLocationMark:
    "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112029.79804016971!2d77.07428659409634!3d28.661778962026407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d03a60b193caf%3A0xc6ff0860d41cae79!2s53B%2F7%2C%20Rama%20Rd%2C%20near%20Moti%20Nagar%2C%20opposite%20555%20soap%20factory%2C%20Block%20B%2C%20Industrial%20Area%2C%20New%20Delhi%2C%20Delhi%2C%20110015!3m2!1d28.6618039!2d77.156688!5e0!3m2!1sen!2sin!4v1755177586756!5m2!1sen!2sin",
  },

];

export default data;
