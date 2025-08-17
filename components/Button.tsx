"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Button = ({
  text,
  className,
  onClick,
}: {
  text: String;
  className?: String;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        cursor-pointer
        relative
        items-center justify-evenly
        w-[200px] h-[48px]
        bg-black text-white
        py-2
        pr-[5px]
        pl-4
        rounded-full
        overflow-hidden
        flex
        gap-[11px]
        transition-all duration-300 ease-in-out
        hover:w-[220px]
        ${className}
      `}
    >
      {/* Dot */}
      <span
        className="
          w-2 h-2
          bg-[#66fc75]
          rounded-full
        "
      />
      {/* Text */}
      <span
        className="
          text-white text-sm
          whitespace-pre
          leading-[1.2]            
        "
      >
        {text}
      </span>

      {/* Arrow Wrapper */}
      <span
        className="
          w-8 h-8
          relative
          flex items-center justify-center
          bg-white text-black
          rounded-full
          overflow-hidden
        "
      >
        {/* Current arrow */}
        <span
          className="
            absolute
            transition-transform duration-300 ease-in-out
            group-hover:translate-x-4 group-hover:-translate-y-4
          "
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
        {/* Incoming arrow */}
        <span
          className="
            absolute
            -translate-x-4 translate-y-4
            transition-transform duration-300 ease-in-out
            group-hover:translate-x-0 group-hover:translate-y-0
          "
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </span>
    </button>
  );
};

export default Button;
