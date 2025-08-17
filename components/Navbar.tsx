"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import gsap from "gsap";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    if (isDrawerOpen) {
      gsap.set(drawer, { display: "flex" });
      gsap.to(drawer, {
        y: 0,
        autoAlpha: 2,
        duration: 0.7,
        ease: "power2.out",
      });
    } else {
      gsap.to(drawer, {
        y: "-100%",
        autoAlpha: 0.5,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          if (drawer) drawer.style.display = "none";
        },
      });
    }
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="fixed z-[999] font-geist top-0 w-full bg-white/90 backdrop-blur-sm border border-white">
        <div
          className="
          box-border
          min-h-[56px]
          flex flex-wrap flex-row justify-between items-center
          px-4 py-4 sm:px-8 lg:px-20
          overflow-hidden
        "
        >
          <Link
            href="/"
            className="text-[#2C2C2C] font-semibold flex max-w-[280px] md:max-w-none flex-shrink-0 justify-start items-center gap-2"
          >
            <img src={"/logo.jpg"} alt="logo" width={56} height={56} />
            <h1 className="text-lg md:text-[26px] ">EAGLE SERVICE CENTRE</h1>
          </Link>

          <div className="flex-row items-center justify-center gap-8 overflow-hidden hidden force-tablet-pro lg:flex">
            {[
              { label: "Home", href: "/#home" },
              { label: "About", href: "/#about" },
              { label: "Industries", href: "/#services" },
              { label: "Products", href: "/#products" },
              { label: "Testimonials", href: "/#testimonials" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group h-[24px] overflow-hidden text-[18px] text-black"
              >
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item.label}
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <section className="flex items-center gap-2">
            <Link href="/#contact">
              <Button text={"Contact Us Now"} className={"hidden md:flex"} />
            </Link>
            {/* Hamburger Button */}
            <button
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              className={`
        hover:cursor-pointer
          flex items-center justify-center
          border border-white
          rounded-full
          aspect-square
          p-2
          overflow-visible 
          lg:hidden
          force-tablet-hamburger
          ${isDrawerOpen ? "bg-[#DBDBDB]" : "bg-white"}
        `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" /> {/* Longest */}
                <line x1="4" y1="12" x2="16" y2="12" /> {/* Medium */}
                <line x1="4" y1="18" x2="12" y2="18" /> {/* Shortest */}
              </svg>
            </button>
          </section>
        </div>
      </nav>

      {/* Drawer for smaller devices  */}
      <div
        ref={drawerRef}
        style={{ transform: "translateY(-100%)", opacity: 0, display: "none" }}
        className="w-full fixed top-[80px] left-0 z-[899] flex flex-col justify-start items-center pt-[96px] backdrop-blur-sm overflow-hidden gap-8  min-h-screen bg-white"
      >
        <section className="flex flex-col justify-start items-center gap-4 md:gap-8 leading-[1.2px]">
          <Link
            href="/#home"
            className="text-lg font-geist text-black hover:cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-lg font-geist text-black hover:cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-lg font-geist text-black hover:cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/#products"
            className="text-lg font-geist text-black hover:cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/#testimonials"
            className="text-lg font-geist text-black hover:cursor-pointer"
            onClick={() => setIsDrawerOpen(false)}
          >
            Testimonials
          </Link>
        </section>
        <Link href="/#contact">
          <Button
            text={"Contact Us Now"}
            className={"flex md:hidden"}
            onClick={() => setIsDrawerOpen(false)}
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
