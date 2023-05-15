import {DiJava,DiReact,DiMongodb,DiHtml5,DiCss3,DiNodejs,DiJavascript,DiGit,DiMysql} from 'react-icons/di'
import {SiRedux,SiExpress,SiTailwindcss} from 'react-icons/si'
import {MdHtml,MdCss,MdJavascript}from 'react-icons/md'
import {motion} from 'framer-motion'

export default function Skills() {
  return (
    <div id="skills" className='max-h-max w-full flex flex-col p-2'>
      {/* skills  */}
      <div className='p-2'>
          <h3 className=' font-bold text-3xl'>Skills</h3>
          <br/>
          <div className='flex flex-wrap justify-center items-center'>
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
          </div>

      </div>
      {/* experiences */}
      <div>

      </div>
    </div>
  )
}
