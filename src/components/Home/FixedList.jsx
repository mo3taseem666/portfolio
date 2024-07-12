import React from 'react'

export default function FixedList({click,setClick}) {
  return (
    <ul className='flex text-[#4bc1e6] z-10 absolute top-[350px] right-20 flex-col gap-10'>
        <li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='hover:text-white duration-200'><i className="fa-brands fa-linkedin  text-lg"></i></li>
        <li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='hover:text-white duration-200'><i className="fa-brands fa-github  text-lg"></i></li>
        <li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='hover:text-white duration-200'><i className="fa-brands fa-whatsapp  text-lg"></i></li>
        <li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='hover:text-white duration-200'><i className="fa-brands fa-facebook  text-lg"></i></li>
        <li onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)} className='hover:text-white duration-200'><i className="fa-brands fa-google  text-lg"></i></li>
    </ul>
  )
}
