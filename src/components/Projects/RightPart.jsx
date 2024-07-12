import React, { useState } from "react";

const data = [{link: 'https://popcorn-website-gwna.vercel.app/',id :1, name : 'Popcorn' , front : 'A funny website you can use to add your movies watchlist and haseven more features.', back : {p1 : '- Getting your movies from a Real API.' , p2 : '- Access To LocalStorage, so Your data will be waiting for you if you closed the website.' , p3 : '- Rate your movies, Get the average-rate for your list and much more you can discover yourself by visiting the website.'  },feat:'Features :'},
  {link: 'https://mo3taseem666.github.io/space-travel/',id: 2 ,name : 'Space' , front : 'Take a journey to our universe like you never did before.', back : {b1 : '- Single page aplication without using any Library of Framework.' , p2 : '- Beautiful design with good animations.' , p3 : '- Responsive to all screen sizes, so maybe you can try it on your phone.'  },feat:'Features :'},
  {link: 'https://far-away-one-mu.vercel.app/',id: 3 ,name : 'Far away' , front : 'A small website but with so much cool functionality! I am sure you will like it.', back : {p1 : '- You can use it for a real life purpose.' , p2 : '- Gave me so much knowledge about how useState works in Reactjs.' , p3 : '- Do not forget to try the sorting feature.' },feat:'Features :' },
  {link: 'https://mo3taseem666.github.io/quiz-app/',id: 4 ,name : 'Quiz App' , front : 'A good idea needs a good design to be represented, A quiz you can make and share it with your friends.', back : {p1 : '- A very good design with dark mode so please go ahead and try it.' , p2 : '- The questions are real so the answers are uniqe! you will get a real points in the end.' , p3 : '- Responsive to all screen sizes.'  },feat:'Features :'},
  {link: 'https://mo3taseem666.github.io/purchase/',id: 5 ,name : 'Purchase From' , front : 'A Form that takes you through multiple steps to complete your customized purchase', back : {p1 : '- unfortunately it is not a responsive design, because I wanted to focus on the functionality.' , p2 : '- Only vanilla Javascript put here, so it was really a good practise.' , p3 : '- Validation and synchronization to make your purchase perfectly done.'  },feat:'Features :'},
  {link: 'https://mo3taseem666.github.io/links/',id: 6 ,name : 'Other Projects' , front : 'Different projects you can explore,I am very sure you will like them.', back : {p1 : '- Age Calculator' , p2 : '- Album Website' , p3 : '- A small Landing Page', p4: '- Login Form' },feat: 'Examples'}
]

export default function RightPart({ setClick }) {
  return (
    <div className=" flex w-full z-10 justify-center gap-12 flex-wrap  ">
      {data.map((element)=>{return <Card name={element.name} link={element.link} feat={element.feat} id={element.id} front={element.front} back={Object.values(element.back).map((el)=>{return <p>{el}</p>})} />})}
    </div>
  );
}

function Card({name,id,front,back,feat,link}) {
  const [ rotate,setRotate] = useState(false)
  const [iconRotate,setIconRotate] = useState(false)

  return (
    <div className=" flip-box  relative rounded-2xl  ">
      <div onClick={()=>setRotate(old=>!old)} style={{ transform: rotate ? 'rotateY(180deg)' : 'rotateY(0deg)' }} className="inner">
        <div className="front px-5 pt-10 rounded-2xl flex flex-col items-center ">
          <p className="text-3xl mb-5 font-semibold tracking-wide">{name}</p>
          <p className="text-center mb-10">{front}{" "}</p>
          <p>Click me to know more..</p>
        </div>
        <div className="back px-5 text-left pt-10 flex flex-col items-start rounded-2xl">
          <p className="text-xl self-center mb-5 font-semibold tracking-wide">{feat}</p>
          <div className="flex flex-col gap-2">
            {back}
          {/* <p>- Getting your movies from a Real API.</p>
          <p>- Access To LocalStorage, so Your data will be waiting for you if you closed the website.</p>
          <p>- Rate your movies, Get the average-rate for your list and much more you can discover yourself by visiting the website.</p> */}
          </div>
        </div>
      </div>
      <a target="blank" href={link}>
        <div onMouseEnter={()=> setIconRotate(true)} onMouseLeave={()=>  setIconRotate(false)} className="absolute size-20 left-[185px] flex justify-center items-center -bottom-9 rounded-full bg-[#ABDAE9] ">
            <i class={`fa-solid fa-arrow-right-long text-3xl  duration-200 -rotate-45 ${iconRotate ? 'rotate-0' : ''} `}></i>
          </div>
      </a>
    </div>
  );
}
