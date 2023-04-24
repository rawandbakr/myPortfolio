import rawand from '../assets/rawandPhoto.jpg'
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'
import {FiGithub,FiLinkedin} from 'react-icons/fi'
import { useState } from 'react'
import {motion} from 'framer-motion'
export default function Navbar() {

  const [toggle,setToggle]=useState(false)
  const links=['ABOUT' ,'SKILLS','CONTACT']
  return (
    <div className="z-0 sticky top-0 flex justify-around w-full h-[100px]  text-white backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black">
      {/* social links and header section  */}
      <div className=" flex space-x-2 ">
        {/* social links section */}
        <div className="flex flex-col space-y-2 justify-center items-center w-auto ">
          <a href='https://github.com/rawandbakr'>
            <FiGithub size={30} className='hover:stroke-cyan-300'/>
          </a>
          <a href='https://www.linkedin.com/in/rawand-abubakr/'>
            <FiLinkedin size={30} className='hover:stroke-cyan-300' />
          </a>
        </div>
        {/* icon and name section  */}
        <div className="flex justify-start p-3 items-center space-x-1 scroll-smooth" onClick={()=>window.scrollTo(0, 0)} >
          <img src={rawand} className="rounded-full h-12 cursor-pointer" alt="." />
          <span>
          <h1 className="font-bold text-xl first-letter cursor-pointer">
            Rawand A.Ali
          </h1>
          <p className="flex text-xs  cursor-pointer">web developer</p>
          </span>
        </div>
      </div>
      {/* links section on desktop */}
      <div className="md:flex justify-end items-center space-x-3 hidden">
        {links.map(link=>
        <a className='p-2 rounded-lg hover:text-cyan-300' href={'#'.concat(link)}>{link}</a>
        )}
        {/* <a className='p-2 rounded-lg hover:text-cyan-300' href="#about">ABOUT</a>
        <a className='p-2 rounded-lg hover:text-cyan-300' href="#skills">SKILLS</a>
        <a className='p-2 rounded-lg hover:text-cyan-300' href="#contact">CONTACT</a> */}
      </div>
      {/* links section on desktop */}
      <div className="md:hidden flex justify-end items-center ">
        {toggle ?
          <TfiClose size={40} className='hover:fill-orange-300' onClick={() => setToggle(false)} />
        :
          <FiMenu size={40} className='hover:stroke-cyan-300' onClick={() => setToggle(true)} />
        }
        {toggle ?
          <motion.div
            className="absolute top-[110px] right-2 h-auto w-28 p-5 flex z-10 rounded-md  text-white bg-bgHero bg-cover"
            onClick={() =>setToggle(false)}
            initial={{x:'-100vw',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{type:'spring'}}
            >
            <div className="flex flex-col space-y-3">
            {links.map(link=>
        <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href={'#'.concat(link)} className=' hover:text-cyan-300'>{link}</motion.a>
        )}
              {/* <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#about" className=' hover:text-cyan-300'>ABOUT</motion.a>
              <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#skills" className=' hover:text-cyan-300'>SKILLS</motion.a>
              <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#contact" className=' hover:text-cyan-300'>CONTACT</motion.a>
            */}
            </div>
          </motion.div>
         :
         <motion.div
            className="absolute top-[110px] right-2 h-auto w-28 p-5 flex z-10 rounded-md  text-white bg-bgHero bg-cover"
            onClick={() =>setToggle(false)}
            initial={{x:0,opacity:1}}
            animate={{x:'-100vw',opacity:0}}
            transition={{type:'spring'}}
            >
            <div className="flex flex-col space-y-3">
            {links.map(link=>
        <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href={'#'.concat(link)} className=' hover:text-cyan-300'>{link}</motion.a>
        )}
              {/* <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#about" className=' hover:text-cyan-300'>ABOUT</motion.a>
              <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#skills" className=' hover:text-cyan-300'>SKILLS</motion.a>
              <motion.a whileHover={{scale:1.2,originX:0}} transition={{type:'spring',stiffness:500}} href="#contact" className=' hover:text-cyan-300'>CONTACT</motion.a>
            */}
            </div>
          </motion.div>
        }
      </div>
    </div>
  );
}
