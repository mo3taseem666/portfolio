import React from 'react'
import Left from './Left'
import Right from './Right'

export default function LeftRight({click,setClick,show,setShow,setcursorClicked}) {
  return (
    <div className=' flex justify-between mt-10 overflow-x-hidden items-center '>
      <Left setcursorClicked={setcursorClicked} click={click} setClick={setClick} />
      <Right click={click} setClick={setClick} show={show} setShow={setShow} />
    </div>
  )
}
