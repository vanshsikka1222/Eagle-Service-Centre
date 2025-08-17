type FAQType= {
  question: string;
  answer: string;
};

const faqData: FAQType[] = [
  {
    question: "What is the warranty period for your machines?",
    answer:
      "All our machines come with a one-year warranty. Please note, damages caused by mishandling or neglect are not covered and will be chargeable. Additionally, bulbs and contactors are excluded from the warranty.",
  },
  {
    question: "Do you offer technical support after the warranty period?",
    answer:
      "Yes, we provide technical support even after your warranty has expired. We keep all spare parts in stock. Initially, we guide you over a call to resolve the issue, and if an on-site visit is required, it will be chargeable.",
  },
  {
    question: "Can I see a demo of the machine before purchasing?",
    answer:
      "Yes. Once we confirm the machine is available, you can bring your die and material to our facility and take a trial run on the machine.",
  },
  {
    question: "What precautions can we take to ensure machine durability?",
    answer:
      "Keep all machine gates intact and closed to prevent dust and rodents from entering. Regular cleaning and lubrication are essential for long life. Always switch on the machine 10–15 minutes before use to warm up the tube, which helps prevent bulb damage..",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. We offer online installation support for our machines. You can connect with us via video call for step-by-step guidance and start the machine once we confirm it is ready to operate.",
  },
];

export default faqData;
