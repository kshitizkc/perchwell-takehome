import React from "react";
interface RibbonProps {
  label: string;
  color: string;
}

export default function ListingRibbon({ label, color }: RibbonProps) {
  return (
    <div>
      <div
        className=" rounded-r-md -ml-2 mt-2 h-[21px] inline-block text-[12px]"
        style={{ background: color }}
      >
        <span
          className={
            "absolute mt-[21px] border-t-4 border-t-[#002349] border-l-8 border-l-transparent border-r-transparent"
          }
        ></span>
        <span className="px-[8px] py-[3px] font-abeezee text-white">
          {label}
        </span>
      </div>
    </div>
  );
}
