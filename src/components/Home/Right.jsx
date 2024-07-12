import React, { useState } from 'react'
import pic from '../../assets/testt.jpg'
import nextjs from '../../assets/next11.png'
import tailwind from '../../assets/tailwind11.svg'

export default function Right({show,setShow,click,setClick}) {
  const [now,setNow] = useState(false)
  return (<div className='w-[50%] self-end z-10 -mr-10 flex justify-center flex-col gap-7 items-center '>
    <div className='size-96 flex  justify-center items-center relative bg-transparent rounded-full border-4 border-[#4BC1E6] '>
      
       <Circles now={now} />

      <img onMouseEnter={function(){setShow(true);setClick(true)}} onMouseLeave={function(){setShow(false);setClick(false)}} onClick={()=> setNow(el=>!el)} className='rounded-full cursor-none  brightness-75' src={pic} alt="#" />
    </div>
    <p className='text-[#4BC1E6] text-2xl tracking-wider uppercase '>front-end developer</p>
  </div>
  )
}

function Circles({now}) {
  
  return <div style={{left:`${now ? -125 : '0'}px`}}  className={` absolute size-20 flex justify-center items-center cursor-none  rounded-full bg-gradient-to-br from-sky-700 to to-sky-950 top-[150px] left-0 duration-700    `}>
  <div className={`bg-gradient-to-br from-sky-700 to to-sky-950 absolute size-20 rounded-full top-28 left-[30px] flex justify-center duration-300 items-center ${now ? '' : 'top-28 left-[70px]' } `}><i title='React Js' className="fa-brands text-[#10b9ba] text-5xl fa-react"></i></div>
  <div className={`bg-gradient-to-br from-sky-700 to to-sky-950 absolute size-20 rounded-full bottom-28 left-[30px] flex justify-center duration-300 items-center ${now ? '' : 'bottom-28 left-[70px]' }  `}> <img title='Tailwind Css' className='size-14' src={tailwind} alt="" />  </div>
  
  <img title='Next Js' className='h-14' src={nextjs} alt="" />
</div>
}


// -left-[100px] top-[150px]
// top-24 left-[32px]
// bottom-24 left-[30px]