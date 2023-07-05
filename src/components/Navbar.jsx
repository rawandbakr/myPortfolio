import rawand from "../assets/rawandPhoto.jpg";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";
import {BsFillMoonFill} from "react-icons/bs"

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.005
  });
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div
      className={`z-0 sticky top-0 flex justify-around w-full h-[100px]  backdrop-filter backdrop-blur-sm bg-opacity-50 ${
        darkMode ? `bg-opacity-50 bg-cyan-900` : ` bg-black text-white`
      }`}>
      {/*1 social links and header section  */}
      <div className=" flex space-x-2 ">
        {/* social links section */}
        <div className="flex flex-col space-y-2 justify-center items-center w-auto ">
          <a href="https://github.com/rawandbakr">
            <FiGithub size={30} className="hover:stroke-cyan-300" />
          </a>
          <a href="https://www.linkedin.com/in/rawand-abubakr/">
            <FiLinkedin size={30} className="hover:stroke-cyan-300" />
          </a>
        </div>
        {/* icon and name section  */}
        <div
          className="flex justify-start p-3 items-center space-x-1 scroll-smooth"
          onClick={() => window.scrollTo(0, 0)}>
          <img
            src={rawand}
            className="rounded-full h-12 cursor-pointer"
            alt="."
          />
          <span>
            <h1 className="font-bold text-xl first-letter cursor-pointer">
              Rawand A.Ali
            </h1>
            <p className="text-xs flex cursor-pointer">web developer</p>
          </span>
        </div>
      </div>
      {/*2 theme and navbar linkes */}
      <div className="flex flex-row justify-end gap-2">
        {/* theme control */}
        <div className="flex flex-row justify-right items-center self-right rounded">
          {darkMode?
          <CiLight
          size={37}
          onClick={toggleDarkMode}
          color={"yellow"}/>
        :
        <BsFillMoonFill
            size={37}
            onClick={toggleDarkMode}
            color={"#9CFFF1"}
          />
        }
        </div>
        {/* links section on desktop */}
        <div className="md:flex justify-end items-center space-x-3 hidden">
          {links.map((link) => (
            <a
              key={link.id}
              className="p-2 rounded-lg hover:text-cyan-300"
              href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      {/*3 links section on mobile */}
      <div className="md:hidden flex justify-end items-center ">
        {toggle ? (
          <TfiClose
            size={40}
            className="hover:fill-orange-300"
            onClick={() => setToggle(false)}
          />
        ) : (
          <FiMenu
            size={40}
            className="hover:stroke-cyan-300"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle ? (
          <motion.div
            className="absolute top-[110px] right-2 h-auto w-28 p-5 flex z-10 rounded-md  text-white bg-bgHero bg-cover"
            onClick={() => setToggle(false)}
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}>
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href={"#".concat(link.id)}
                  className=" hover:text-cyan-300">
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute top-[110px] right-2 h-auto w-28 p-5 flex z-10 rounded-md  text-white bg-bgHero bg-cover"
            onClick={() => setToggle(false)}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring" }}>
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href={"#".concat(link.id)}
                  className=" hover:text-cyan-300">
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <motion.div 
      className="fixed top-[100px] left-0 right-0 h-2 origin-left bg-cyan-400
        " style={{ scaleX }} />
    </div>
  );
}
