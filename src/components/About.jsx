import { TitleDesc } from "./TitleDesc"

export const About = () => {
  const skills = ["JavaScript","Python","CSS","HTML5","PHP","TypeScript","SQL","NoSQL","XML","React" , "Tailwind", "Next.JS", "SASS", "Bootstrap", "Git", "Firebase", "Node" , "Express", "Selenium", "MySQL", "Amazon Web Services (AWS)", "JSON", "RESTful API", "MongoDB", "Linux", "Vite"]
  const title = "About"
  const subtitle ="Gain deeper understanding of my work, capabilities, and current focus within the realm of programming and technology. "
  return (
    <div id="about" className="min-h-screen flex  md:px-10 px-5 md:py-36 py-24 ">
       <section className="container mx-auto grid grid-cols-2 md:gap-36 gap-24
    ">
      {/* title */}
      <div className="col-span-2">
      <TitleDesc title={title} subtitle={subtitle}/>
      </div>
       
<div className=" col-span-2 grid  md:grid-cols-2 md:gap-36 gap-20 ">
  {/* Get to know me  */}
  <div className="flex flex-col items-start gap-4">
    <h3 className="text-3xl font-extrabold tracking-normal text-slate-700 ">Get to know me</h3>
    <p className="text-slate-600 font-medium text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque labore, architecto vitae atque eaque reprehenderit eum nemo cumque, assumenda, delectus quas officiis! Expedita cumque necessitatibus labore vitae reiciendis vel.</p>
    <button className="rounded-xl bg-slate-700 px-5 py-3 text-base  font-medium text-slate-50 transition duration-200 hover:bg-slate-600 active:bg-brand-700">button</button>
  </div>
       
       
        {/* skills */}


  <div className="flex flex-col items-start gap-4">
<h3 className="text-3xl font-extrabold tracking-normal text-slate-700 ">My Skills</h3>
<p className="flex flex-wrap gap-4">{skills.map((skill)=> <span className="bg-slate-50 p-4 rounded-lg text-base font-medium shadow" key={skill} >{skill}</span> )}</p>
  </div>





</div>
        
    </section>
      </div>
  )
}
