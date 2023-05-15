import React from 'react'
import { FiGithub , FiLinkedin} from 'react-icons/fi'

export default function Footer() {
  return (
    <div className=' bg-bgHero bg-cover h-20 w-full text-white flex flex-row justify-center gap-2 items-center '>
        <p className='text-sm font-semibold italic'>©all right reserved to Rawand</p>
        {/* social links section */}
        <div className="flex flex-row justify-center items-center w-auto  gap-2">
          <a href="https://github.com/rawandbakr">
            <FiGithub size={30} className="hover:stroke-cyan-300" />
          </a>
          <a href="https://www.linkedin.com/in/rawand-abubakr/">
            <FiLinkedin size={30} className="hover:stroke-cyan-300" />
          </a>
        </div>
    </div>
  )
}
