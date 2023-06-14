import {DiJava,DiReact,DiMongodb,DiHtml5,DiCss3,DiNodejs,DiJavascript,DiGit,DiMysql} from 'react-icons/di'
import {SiRedux,SiExpress,SiTailwindcss} from 'react-icons/si'
import {MdHtml,MdCss,MdJavascript}from 'react-icons/md'
import {motion, spring} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


export default function Skills() {
  const { ref, inView} = useInView();

  return (
    <div id="skills" className='max-h-max w-full flex flex-col p-2'>
      {/* skills  */}
      <div className='p-2'
          ref={ref}>
          <h3 className=' font-bold text-3xl'>Skills</h3>
          <br/>
        {inView?<motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className='flex flex-wrap justify-center items-center'>
              <DiJava  size={75}/>
              <DiReact  size={75}/>
              <DiMongodb  size={75}/>
              <MdHtml  size={75}/>
              <MdCss  size={75}/>
              <DiNodejs  size={75}/>
              <MdJavascript  size={75}/>
              <SiRedux  size={75}/>
              <DiGit  size={75}/>
              <DiMysql  size={75}/>
              <SiExpress  size={75}/>
              <SiTailwindcss size={75}/>
          </motion.div>:<></>}
          

      </div>
      {/* experiences */}
      <div>

      </div>
    </div>
  )
}
