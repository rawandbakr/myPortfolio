import {DiJava,DiReact,DiMongodb,DiHtml5,DiCss3,DiNodejs,DiJavascript,DiGit,DiMysql} from 'react-icons/di'
import {SiRedux,SiExpress,SiTailwindcss} from 'react-icons/si'
import {MdHtml,MdCss,MdJavascript}from 'react-icons/md'
export default function Skills() {
  const iconsStyle=""
  return (
    <div className='max-h-max w-full flex flex-col p-2'>
      {/* skills  */}
      <div className='p-2'>
          <h3 className=' font-bold text-3xl'>Skills</h3>
          <br/>
          <div className='flex flex-row justify-center items-center space-x-2'>
              <DiJava color='black' size={75}/>
              <DiReact color='black' size={75}/>
              <DiMongodb color='black' size={75}/>
              <MdHtml color='black' size={75}/>
              <MdCss color='black' size={75}/>
              <DiNodejs color='black' size={75}/>
              <MdJavascript color='black' size={75}/>
              <DiGit color='black' size={75}/>
              <DiMysql color='black' size={75}/>
              <SiRedux color='black' size={75}/>
              <SiExpress color='black' size={75}/>
              <SiTailwindcss color='black' size={75}/>
          </div>

      </div>
      {/* experiences */}
      <div>

      </div>
    </div>
  )
}
