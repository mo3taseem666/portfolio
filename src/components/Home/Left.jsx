import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Left({click,setClick,setcursorClicked}) {
  const [check,setCheck] = useState(false)
  return (
    <div className='flex z-10 self-end w-[46%]'
    onMouseDown={()=>setcursorClicked(true)}
    onMouseUp={()=>setcursorClicked(false)}>
      <div className=' '>
        <div className='flex flex-col gap-16 mb-10 '>
        <p className='text-[#bfe7f1] uppercase tracking-wide text-4xl '>thanks for visiting</p>
        <p className='text-[#3ba6c7] text-2xl tracking-wide [word-spacing:4px]  '>you can explore my <Link to={'/projects'} className='cursor-none' onMouseLeave={function(){setClick(false)}} onMouseEnter={()=>setClick(true)}><span className='text-white '>PROJECTS</span></Link> by simply check its section or just clicking the button below. You can also know more <Link to={'/about'} className='cursor-none' onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)}><span className='text-white '>ABOUT</span></Link> my technical skills in its section. And surely you will find several ways to <Link to={'/contact'} className='cursor-none' onMouseLeave={()=>setClick(false)} onMouseEnter={()=>setClick(true)}><span className='text-white '>CONTACT</span></Link> me.</p>
        </div>
       <div onMouseEnter={function() {setCheck(true);setClick(true)}} onMouseLeave={function() {setCheck(false);setClick(false)}} className='w-fit rounded-full'> <Link className='rounded-full block ' to={'/projects'}><button  className=' bg-[#4BC1E6] hover:bg-[#286172] cursor-none relative hover:text-white duration-200 py-4 px-8 tracking-widest rounded-full pr-14 flex items-center gap-5 uppercase text-3xl '>explore <i className={`fa-solid right-7 duration-200 text-[#16252e] absolute fa-arrow-right text-xl ${check ? 'right-[20px] ' :'' } `}></i></button></Link></div>
        </div>
    </div>

  )
}
