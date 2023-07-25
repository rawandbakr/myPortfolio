import rawand from "../assets/rawandPhoto.jpg";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState, useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.005,
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
      className={`sticky top-0 z-0 flex h-[100px] w-full justify-around  bg-opacity-50 backdrop-blur-sm backdrop-filter 
      ${darkMode ? `bg-cyan-900 bg-opacity-50` : ` bg-black text-white`}`}
    >
      {/*1 social links and header section  */}
      <div className=" flex space-x-2 ">
        {/* social links section */}
        <div className="flex w-auto flex-col items-center justify-center space-y-2 ">
          <a href="https://github.com/rawandbakr">
            <FiGithub size={30} className="hover:stroke-cyan-300" />
          </a>
          <a href="https://www.linkedin.com/in/rawand-abubakr/">
            <FiLinkedin size={30} className="hover:stroke-cyan-300" />
          </a>
        </div>
        {/* icon and name section  */}
        <div
          className="flex items-center justify-start space-x-1 scroll-smooth p-3"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={rawand}
            className="h-12 cursor-pointer rounded-full"
            alt="."
          />
          <span>
            <h1 className="first-letter cursor-pointer text-xl font-bold">
              Rawand A.Ali
            </h1>
            <p className="flex cursor-pointer text-xs">web developer</p>
          </span>
        </div>
      </div>
      {/*2 theme and navbar linkes */}
      <div className="flex flex-row justify-end gap-2">
        {/* theme control */}
        <div className="justify-right self-right flex flex-row items-center rounded">
          {darkMode ? (
            <CiLight size={37} onClick={toggleDarkMode} color={"white"} />
          ) : (
            <BsFillMoonFill
              size={37}
              onClick={toggleDarkMode}
              color={"white"}
            />
          )}
        </div>
        {/* links section on desktop */}
        <div className="hidden items-center justify-end space-x-3 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              className="rounded-lg p-2 hover:text-cyan-300"
              href={`#${link.id}`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      {/*3 links section on mobile */}
      <div className="flex items-center justify-end md:hidden ">
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
            className={`
             absolute
            top-[110px] right-0
            h-auto bg-opacity-50 backdrop-blur-lg backdrop-filter 
            ${toggle ? `w-28` : `w-0`}
            ${darkMode ? `bg-cyan-800 bg-opacity-50` : ` bg-black  text-white`}
            flex rounded-md bg-bgHero bg-cover p-5 text-white backdrop-blur`}
            onClick={() => setToggle(false)}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href={"#".concat(link.id)}
                  className=" hover:text-cyan-300"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className={`absolute top-[110px] right-2 z-10 flex h-auto w-28 rounded-md bg-bgHero  bg-cover p-5 text-white`}
            onClick={() => setToggle(false)}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring" }}
          >
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  whileHover={{ scale: 1.2, originX: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  href={"#".concat(link.id)}
                  className=" hover:text-cyan-300"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      {/* 4 progrees bar */}
      <motion.div
        className="fixed top-[100px] left-0 right-0 h-2 origin-left bg-cyan-400
        "
        style={{ scaleX }}
      />
    </div>
  );
}
