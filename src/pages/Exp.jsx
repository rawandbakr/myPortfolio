import Projects from "../components/Projects"

export default function Experience() {
    const Projectss = [
        {
          id: 1,
          title: "My Portfolio",
          github: "https://github.com/rawandbakr/myPortfolio",
          live: "https://rawanda.netlify.app/",
          info: "my Portfolio website using reactjs",
          date: "1-Mar-2023",
        },
        {
            id: 2,
            title: "Habitat",
            github: "https://github.com/rawandbakr/habitat",
            live: "https://habitatt.netlify.app/",
            info: "engineering bureau website ",
            date: "30-Jan-2023",
          },
          {
            id: 3,
            title: "todo",
            github: "https://github.com/rawandbakr/todo",
            live: "https://rawandtodo.netlify.app/",
            info: "Todo app react js tailwind css ..",
            date: "1-May-2023",
          },
      ];
  return (
    <div id="experience" className='max-h-max w-full flex flex-col p-2'>
      {/* Experience  */}
          <h3 className='font-bold text-3xl'>Experience</h3>
          
          <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center pt-2">
            {Projectss.map((project)=>(
                   <Projects key={project.id} title={project.title} github={project.github} live={project.live} date={project.date} info={project.info}/>
          ))}
          </div>
    </div>
  )
}
