import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-6 md:gap-12 px-4 py-10 md:px-8 md:py-5 lg:px-20 font-geist">
      {/* Top Section */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
        {/* Left side: Logo + Phone numbers */}
        <div className="flex flex-col w-full justify-between gap-10">
          <div className="flex items-center justify-start gap-2">
            <img
              src={"/logo.jpg"}
              alt="footer-logo"
              className="h-[56px] w-[56px]"
            />
            <p className="text-white text-[22px] sm:text-[26px] font-semibold">
              Eagle Service Centre
            </p>
          </div>

          {/* Phone numbers */}
          <div className="z-100 flex-1 w-full gap-2 flex flex-col">
            <Link
              href={"tel:+91-98101-45485"}
              className="font-light text-[16px] sm:text-[18px] text-[#c7c7c7] hover:underline hover:text-[#696764]"
            >
              +91-98101-45485
            </Link>
            <Link
              href={"tel:+91-98103-96601"}
              className="font-light text-[16px] sm:text-[18px] text-[#c7c7c7] hover:underline hover:text-[#696764]"
            >
              +91-98103-96601
            </Link>
            <Link
              href={"tel:+91-98719-20810"}
              className="font-light text-[16px] sm:text-[18px] text-[#c7c7c7] hover:underline hover:text-[#696764]"
            >
              +91-98719-20810
            </Link>
            <Link
              href={"tel:+91-93101-45485"}
              className="font-light text-[16px] sm:text-[18px] text-[#c7c7c7] hover:underline hover:text-[#696764]"
            >
              +91-93101-45485
            </Link>
          </div>
        </div>

        {/* Right side: Email, Address, Socials */}
        <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
          <Link
            href={"mailto: eagleservicecentre77@yahoo.com"}
            className="z-100 font-light text-[16px] sm:text-[18px] text-[#c7c7c7] hover:underline hover:text-[#696764]"
          >
            eagleservicecentre77@yahoo.com
          </Link>

          {/* Address */}
          <a
            href="https://www.google.com/maps/dir//EAGLE+SERVICE+CENTRE,+53B%2F7,+Rama+Rd,+near+Moti+Nagar,+opposite+555+soap+factory,+Block+B,+Industrial+Area,+New+Delhi,+Delhi,+110015/@28.686479,77.034118,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d03a60b193caf:0xc6ff0860d41cae79!2m2!1d77.156688!2d28.6618039!3e0?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="z-100 font-light text-[16px] sm:text-[18px] text-[#c7c7c7] text-left md:text-right hover:underline hover:text-[#696764]"
          >
            53B/7, Rama Rd, near Moti Nagar, opposite 555 soap factory, Block B,
            Industrial Area, New Delhi, Delhi, 110015
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 md:gap-6">
            <div className="flex w-10 h-10 sm:w-12 sm:h-12 p-[10px] sm:p-[14px] bg-[#2c2c2c] rounded-full hover:bg-[#888888]">
              <Link
                href={"https://www.facebook.com/share/16zYuBJ4gs/"}
                className="font-light text-[18px] text-[#c7c7c7]"
              >
                <img
                  src="/facebook-logo.svg"
                  alt="facebook-logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </Link>
            </div>
            <div className="flex w-10 h-10 sm:w-12 sm:h-12 p-[10px] sm:p-[14px] bg-[#2c2c2c] rounded-full hover:bg-[#888888]">
              <Link
                href={"https://www.youtube.com/@eagleservicecentre77"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-[18px] text-[#c7c7c7]"
              >
                <img
                  src="/youtube-logo.svg"
                  alt="youtube-logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </Link>
            </div>
            <div className="flex w-10 h-10 sm:w-12 sm:h-12 p-[10px] sm:p-[14px] bg-[#2c2c2c] rounded-full hover:bg-[#888888]">
              <Link
                href={"https://wa.me/message/2XA3M6OFIC7TK1"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-[18px] text-[#c7c7c7]"
              >
                <img
                  src="/whatsapp.svg"
                  alt="whatsapp-logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </Link>
            </div>

            {/* <div className="flex w-10 h-10 sm:w-12 sm:h-12 p-[10px] sm:p-[14px] bg-[#2c2c2c] rounded-full hover:bg-[#888888]">
              <Link
                href={"mailto:eagleservicecentre77@yahoo.com"}
                className="font-light text-[18px] text-[#c7c7c7]"
              >
                <img
                  src="/mail.svg"
                  alt="mail-logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="flex-1 w-full gap-6 flex flex-col md:justify-end md:items-center">
        <p className="font-light text-left md:text-right text-[14px] sm:text-[16px] md:text-[18px] text-[#c7c7c7]">
          &copy; Copyright 2025. All Rights Reserved by ESC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
