import React from 'react'
import hero from '../assets/laptop cat.png'
export default function Hero() {
  return (
    <div className='max-h-max w-full flex flex-col md:flex-row justify-between items-center space-x-2 space-y-2 p-5'>
       {/* hero section left section */}
       <div className='flex rounded-md justify-center items-center'>
        <img src={hero}
        className="w-[400px] md:w-auto"
        alt="."
        />
      </div>
      {/* hero section text right */}
      <div 
      className='flex flex-col rounded-md text-black pl-2 
      justify-centers
      '>
        <h1 
        className=' font-extrabold text-4xl'>I'm Rawand,</h1>
        <br/>
        <p 
        className='flex font-serif font-bold'>
         a web developer based in Sulaymaniyah.
         I create visually appealing websites using the latest technologies to exceed my clients' expectations.
         Let's work together to bring your ideas to life!
        </p>
        <br/>
        <button className='bg-black text-white backdrop-blur opacity-50 hover:text-cyan-300 hover:opacity-100 rounded-md w-1/4 p-1 font-extrabold self-center md:self-auto'>Call for action</button>
      </div>
     
    </div>
  )
}