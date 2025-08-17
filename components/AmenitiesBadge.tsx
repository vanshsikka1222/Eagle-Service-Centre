const AmenitiesBadge = ({text,disable}:{text:string;disable:boolean}) => {
  return (
    <div className={`w-fit px-6 py-2 font-geist font-light text-[#2C2C2C] text-[18px] rounded-[32px] bg-[#F3F3F3] border border-[#C7C7C7] flex justify-center items-center gap-2 ${disable?"hidden":"opacity-100"}`}>
      <p>{text}</p>
    </div>
  )
}

export default AmenitiesBadge
