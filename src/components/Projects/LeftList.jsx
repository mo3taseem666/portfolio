import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftList({setClick}) {
    const [active,setActive] = useState(1)
    console.log(active);
  const arr = [1, 2, 3, 4, 5, 6];

  return <div className="flex justify-between  w-[13%] items-center  z-10">
  <ul className="text-white   flex flex-col z-10 gap-12 text-3xl">
    {arr.map((el)=> {return <Link onClick={()=>setActive(el)} key={Number(el)} className="cursor-none"><li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className={`${el === active ? ' text-[#4BC1E6]' : ''} w-full `} >PROJECT 0{el}</li></Link> })}
  </ul>;

  <div className=" flex w-[1px] bg-white relative h-[530px]  ">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[#4BC1E6]"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 top-[530px] rounded-full bg-[#4BC1E6]"></div>
        </div>
  </div>
}
