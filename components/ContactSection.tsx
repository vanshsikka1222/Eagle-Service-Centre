"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Badge from "./Badge"; // Assuming your Badge component is separate
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";
import { usePopUpAnimation } from "@/hooks/usePopUpAnimation";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });

  usePopUpAnimation(formRef);

  const getButtonContent = () => {
    switch (status) {
      case "submitting":
        return (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        );
      case "error":
        return "Something went wrong";
      case "success":
        return "Thank You";
      default:
        return "Send Message";
    }
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = {
        firstName,
        lastName,
        email,
        phone,
        message: query,
      };

      const response = await fetch("https://formspree.io/f/mvgqnrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // 👈 helpful for debugging

      if (response.ok) {
        setStatus("success");

        // Reset fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setQuery("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  useEffect(() => {
    if (!(!firstName || !lastName || !email || !phone || !query)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [firstName, lastName, email, phone, query]);
  return (
    <div className="relative w-full max-h-[900px] font-geist flex flex-col gap-10 md:gap-12 mt-[80px] lg:mt-[160px]">
      {/* Centered Content */}

      <div className="flex flex-col justify-center items-center px-4 md:px-8 z-10">
        <div ref={badgeRef} style={{ opacity: 1 }}>
          <Badge text="Get in Touch" className=" mt-10 md:mt-20" />
        </div>

        <h2
          ref={headingRef}
          style={{ opacity: 1 }}
          className="text-white text-[22px] md:text-4xl font-semibold text-center mt-4 md:w-[700px]"
        >
          WE’RE HERE TO ASSIST YOU ANYTIME
        </h2>
      </div>

      {/* Form Container */}
      <div className="px-[16px] md:px-8 h-full w-full flex flex-col items-center min-h-[866px] z-10">
        <p className="text-white text-center max-w-[800px] font-light  text-[16px] md:text-[18px] leading-[1.4]">
        Have a question or ready to get started? Whether you’re looking to purchase, upgrade, or expand with high-frequency PVC welding machines, our team is here to guide you every step of the way. Let’s turn your manufacturing goals into reality.
        </p>
        <form
          ref={formRef}
          className="mt-12 w-full max-w-[800px] min-h-[388px] bg-white bg-opacity-90 backdrop-blur-md border border-[#c7c7c7] rounded-[32px] p-6 md:p-8 flex flex-col gap-4 md:gap-8"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="flex-1 placeholder-[#C7C7C7]  border-b-[1px] border-[#c7c7c7] rounded-none p-2 outline-[#c7c7c7c] focus:outline-1 focus:border-none h-fit"
            />
            <input
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="flex-1 placeholder-[#C7C7C7]  border-b-[1px] border-[#c7c7c7] rounded-none p-2 outline-[#c7c7c7c] focus:outline-1 focus:border-none h-fit"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="flex-1 placeholder-[#C7C7C7]  border-b-[1px] border-[#c7c7c7] rounded-none p-2 outline-[#c7c7c7c] focus:outline-1 focus:border-none h-fit"
            />
            <input
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone"
              className="flex-1 placeholder-[#C7C7C7]  border-b-[1px] border-[#c7c7c7] rounded-none p-2 outline-[#c7c7c7c] focus:outline-1 focus:border-none h-fit"
            />
          </div>
          <textarea
            value={query}
            required
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What Can We Help You?"
            className="flex-1 placeholder-[#C7C7C7]  border-b-[1px] border-[#c7c7c7] rounded-none p-2 outline-[#c7c7c7c] focus:outline-1 focus:border-none h-fit"
          />
          <button
            type="submit"
            disabled={isDisabled || status === "submitting"}
            className={`cursor-pointer w-full text-[18px] font-light h-[45px] rounded-full text-center flex items-center justify-center gap-2 disabled:cursor-not-allowed 
    ${status === "error" ? "text-red-500 bg-red-200" : "text-white"} 
    ${
      status === "success" || status === "submitting" || !isDisabled
        ? "bg-black"
        : "bg-[#c7c7c7]"
    }
  `}
          >
            {getButtonContent()}
          </button>
        </form>
      </div>

      <div
        className="absolute bottom-0 w-full h-full md:h-[850px] lg:h-full z-0 bg-no-repeat bg-cover bg-bottom md:bg-top"
        style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.26) 100%),url('/contact-bg.jpg')" }}
      ></div>
    </div>
  );
};

export default ContactSection;
