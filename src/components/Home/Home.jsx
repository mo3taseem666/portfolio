import React from "react";
import Welcome from "./Welcome";
import LeftRight from "./Left Right";
import FixedList from "./FixedList";

export default function Home({click,setClick,show,setShow,cursorClicked,setcursorClicked}) {

  return (
    <div className=" cursor-none  ">
      <Welcome />
      <LeftRight cursorClicked={cursorClicked} setcursorClicked={setcursorClicked} show={show} setShow={setShow} click={click} setClick={setClick} />
      <FixedList setClick={setClick} />
    </div>
  );
}
