import React from 'react'
import hero from '../assets/laptop cat.png'
import {motion} from 'framer-motion'


export default function Hero() {

  return (
    <div className={`max-h-max w-full flex flex-col md:flex-row justify-between items-center space-x-2 space-y-2 p-5`}>
       {/* hero section left section */}
       <div className='flex rounded-md justify-center items-center'>
        <motion.img
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 200,
          bottom: 100,
        }}
        src={hero}
        className="w-[400px] md:w-auto"
        alt="."
        />
      </div>
      {/* hero section text right */}
      <div 
      className='flex flex-col rounded-md  pl-2 
      justify-centers
      '>
        <h1 className=' font-extrabold text-4xl'>I'm Rawand,</h1>
        <br/>
        <p 
        className='flex font-serif font-bold'>
         a web developer based in Sulaymaniyah.
         I create visually appealing websites using the latest technologies to exceed my clients' expectations.
         Let's work together to bring your ideas to life!
        </p>
      </div>
     
    </div>
  )
}