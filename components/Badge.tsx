import React from 'react'

const Badge = ({text,className}:{text:String,className?:String}) => {
  return (
    <div className={`w-fit min-w-[166px] h-[35px] font-geist font-light text-[#2C2C2C] text-[18px] rounded-[32px] py-[4px] px-[24px] bg-[#F3F3F3] flex justify-center items-center ${className}`}>
      {text}
    </div>
  )
}

export default Badge
