/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { TitleDesc } from "./TitleDesc"
import ProjectComponent from "./ProjectComponent"

export const Project = ({projects}) => {


  return (
    <div id="project" className="min-h-screen flex  md:px-10 px-5 md:py-36 py-24 shadow-lg">
    <section className="container mx-auto">


<TitleDesc title={projects.heading} subtitle={projects.subheading}/>
<div className="flex flex-col gap-4 mt-4">
{projects.projectsList.map((project,key)=><ProjectComponent list={project} key={key}/>)}
</div>

{/* <TitleDesc title={"Project"}/>
<Link to={"/project/"+1}>project</Link> */}
    </section>
    
   
    </div>
  )
}
