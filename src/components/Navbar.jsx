import rawand from '../assets/rawandPhoto.jpg'
import {FiMenu} from 'react-icons/fi'
import {TfiClose} from 'react-icons/tfi'
import {FiGithub,FiLinkedin} from 'react-icons/fi'
import { useState } from 'react'
export default function Navbar() {
  const [toggle,setToggle]=useState(false)
  return (
    <div className="z-0 sticky top-0 flex justify-around w-full h-[100px]  text-white backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black">
      {/* social links and header section  */}
      <div className=" flex space-x-2 ">
        {/* social links section */}
        <div className="flex flex-col space-y-2 justify-center items-center w-auto">
          <a href='https://github.com/rawandbakr'>
            <FiGithub />
          </a>
          <a href='https://www.linkedin.com/in/rawand-abubakr/'>
            <FiLinkedin />
          </a>
        </div>
        {/* icon and name section  */}
        <div className="flex justify-start p-3 items-center space-x-1 ">
          <img src={rawand} className="rounded-full h-12" alt="." />
          <h1 className="font-bold text-xl">
            Rawand A.Ali
            <p className="flex text-xs">web developer</p>
          </h1>
        </div>
      </div>
      {/* links section on desktop */}
      <div className="md:flex justify-end items-center space-x-3 hidden">
        <a className='p-2 rounded-lg' href="">ABOUT</a>
        <a className='p-2 rounded-lg' href="">SKILLS</a>
        <a className='p-2 rounded-lg' href="">CONTACT</a>
      </div>
      {/* links section on desktop */}
      <div className="md:hidden flex justify-end items-center ">
        {toggle ?
          <TfiClose size={30} onClick={() => setToggle(false)} />
        :
          <FiMenu size={30} onClick={() => setToggle(true)} />
        }
        {toggle ?
          <div
            className="absolute top-20 right-2 h-auto w-28 p-5 flex z-10 rounded-md  text-white bg-bgHero bg-cover"
            onClick={() => setToggle(false)}>
            <div className="flex flex-col space-y-3 ">
              <a href="">ABOUT</a>
              <a href="">SKILLS</a>
              <a href="">CONTACT</a>
            </div>
          </div>
         :
          <></>
        }
      </div>
    </div>
  );
}
