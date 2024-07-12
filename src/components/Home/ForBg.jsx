import React from 'react'
import forbg1 from '../../assets/forbg1.png'
import forbg2 from '../../assets/forbg2.png'

export default function ForBg() {
  return (
        <>
        <div className="absolute -left-96 -top-80 opacity-15 h-[1000px] rotate-12 ">
            <img className='h-full' src={forbg1} alt="#" />
        </div>

        <div className="absolute -bottom-96 -right-80 opacity-15 h-[1000px] -rotate-12 ">
            <img className='h-full' src={forbg2} alt="#" />
        </div>
        </>
  )
}
