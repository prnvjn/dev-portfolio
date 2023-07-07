/* eslint-disable react/prop-types */
import { TitleDesc } from "./TitleDesc"
import { HashLink } from 'react-router-hash-link';
export const About = (props) => {
  const about = props.about
  const title = about.heading
  const subtitle =about.subheading
  const skills = about.skills
  const description = about.description
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
    <p className="text-slate-600 font-medium text-lg flex flex-col gap-4">
      {description.map((paragraph,key)=>  <p key={key}dangerouslySetInnerHTML={{ __html: paragraph }}>

      </p>
)}
     
     <p className="mt-4"></p></p>





     <HashLink smooth to="/#contact">
     <button className="rounded-xl bg-slate-700 px-5 py-3 text-base  font-medium text-slate-50 transition duration-200 hover:bg-slate-600 active:bg-brand-700"> Contact</button>
     </HashLink>
    <a href="#contact"></a>
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
