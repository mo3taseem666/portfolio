import React from "react";

export default function Welcome() {
  return (
    <div className="text-white  flex relative justify-center uppercase mt-20 font-semibold text-5xl">
      <div className="relative   ">
        <p className="">welcome to my world</p>
        <div className="absolute flex w-[1px] bg-white left-1/2 h-[530px] top-[90px] ">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[#4BC1E6]"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 top-[530px] rounded-full bg-[#4BC1E6]"></div>
        </div>
      </div>
    </div>
  );
}
