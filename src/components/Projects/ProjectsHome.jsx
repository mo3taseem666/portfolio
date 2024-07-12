import React from "react";
import LeftList from "./LeftList";
import RightPart from "./RightPart";

export default function ProjectsHome({setClick}) {
  return <div className="z-10 mt-10 flex justify-between gap-10 cursor-none items-center">
    {/* <LeftList setClick={setClick} /> */}
    <RightPart setClick={setClick} />
  </div>;
}
