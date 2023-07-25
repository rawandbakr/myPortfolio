import rawand from "../assets/rawandPhoto.jpg";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { DarkModeContext } from "../context/DarkModeContext";
import { BsFillMoonFill } from "react-icons/bs";
import { BiCloset } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Navigation() {
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
      className={` absolute items-center justify-end bg-opacity-50 backdrop-blur-sm backdrop-filter
      ${toggle ? `top-0 right-0` : `top-5 right-5 rounded-full p-1`}
      ${darkMode ? `bg-cyan-900 bg-opacity-50` : ` bg-black text-white`}
      `}
    >
      {toggle ? (
        <div className="flex h-screen w-56 flex-col space-y-10">
          <TfiClose
            size={40}
            className="mt-5 mr-5 flex flex-row self-end hover:fill-orange-300"
            onClick={() => setToggle(false)}
          />
                    {/* name and photo */}
          <div
            className="flex flex-row self-center space-x-1 scroll-smooth p-3"
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
                    {/* section links */}

          <div className="flex flex-col items-start self-center ">
            {links.map((link) => (
              <a
                key={link.id}
                className="rounded-lg p-2 text-xl hover:text-cyan-300"
                href={`#${link.id}`}
                onClick={() => setToggle(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <FiMenu
          size={40}
          className="hover:stroke-cyan-300"
          onClick={() => setToggle(true)}
        />
      )}
    </div>
  );

  /* <div className="justify-right self-right flex flex-row items-center rounded">
{darkMode ? (
  <CiLight size={37} onClick={toggleDarkMode} color={"white"} />
) : (
  <BsFillMoonFill
    size={37}
    onClick={toggleDarkMode}
    color={"black"}
  />
)}
</div> */
}
