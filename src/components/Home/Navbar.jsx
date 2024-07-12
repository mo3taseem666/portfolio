import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({setClick}) {

    const [isActive , setActive] = useState(0)

  return (
    <div  className='text-white relative items-center flex justify-between'>
      <div className='flex relative h-12 hover:tracking-widest items-center w-72 justify-start'>
        <Link onClick={()=>setActive(0)} to={'/'}><p className='uppercase text-3xl font-medium tracking-wider duration-200 cursor-none hover:text-[#4BC1E6] hover:tracking-widest'>moataseem</p></Link>
      </div>
        
        <ul className='flex relative gap-[68px] border-1 border py-[18px] px-[35px] '>
        <div className=' absolute flex items-center h-[1px] bg-white -left-[810px] w-[120%] top-[40px] '><div className='size-2 absolute   left-0 -bottom-[3px]  rounded-full bg-[#4BC1E6] '></div><div className='size-2 absolute animate  left-0 -bottom-[3px]  rounded-full bg-[#4BC1E6] '></div><div className='w-2 h-2 absolute animate2 bg-[#4BC1E6] left-0 -bottom-[3px]  rounded-full  '></div></div>
            <Text  setClick={setClick} x={'home'} id={'/'} i={0} isActive={isActive} setActive={setActive} />
            <Text  setClick={setClick} x={'projects'} id={'projects'} i={1} isActive={isActive} setActive={setActive} />
            <Text  setClick={setClick} x={'about'} id={'about'} i={2} isActive={isActive} setActive={setActive} />
            <Text  setClick={setClick} x={'contact'} id={'contact'} i={3} isActive={isActive} setActive={setActive} />
        </ul>
    </div>
  )
}



function Text({x,i,isActive,setActive ,id,setClick}) {

    function handleClick() {
      setActive(i)
    }

    return <Link onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='cursor-none' to={id}><li  onClick={handleClick} className={`uppercase relative   hover:bg-[#4BC1E6] hover:text-[#153B47] transition-all duration-500 p-2 text-xl rounded-sm tracking-wide ${isActive === i ? 'text-[#4BC1E6] ' : '' } `}>{x}</li></Link>
}


// left-[806px]
// 1500 
// bottom-[38px]
// top-[37px]