import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineFieldTime,
} from "react-icons/ai";

export default function Projects(props) {

  return (
    <div className="max-h-max flex flex-col rounded-xl h-56 w-11/12 bg-bgHero bg-cover text-white items-center p-2 grayscale hover:grayscale-0 hover:shadow-cyan-500 hover:shadow-2xl">
        <h1 className=" font-medium mt-3">{props.title}</h1>
        {/* short discription of the project */}
        <div className="flex flex-col">
          <p className="mt-3 p-1 h-20"> 
          {props.info}
          
          </p>
          <div className="flex flex-row items-center gap-2">
            <AiOutlineFieldTime />
            <p>{props.date}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-10 mt-3">
            <a href={props.github}>
              <AiFillGithub size={46} />
              
            </a>
            <a href={props.live}>
              <AiOutlineLink size={46} />
            </a>
          </div>
        </div>
    </div>
  );
}
