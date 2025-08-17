import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" font-geist flex flex-col gap-4 items-center justify-center  min-h-[calc(100dvh-80px)] text-center p-6">
      <h1 className="text-[36px] md:text-[64px] lg:text-[80px] font-semibold">
        404
      </h1>
      <p className="text-[#2c2c2c] text-[16px] md:text-[18px] font-light mb-11">
        Looks like the page you're looking for isn't here. Maybe it’s taking a
        break, just like we all need sometimes.
      </p>
      <Link href="/">
       

        <Button text={"Back Home"} />
      </Link>
    </div>
  );
}
