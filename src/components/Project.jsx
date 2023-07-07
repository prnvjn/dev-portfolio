/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { TitleDesc } from "./TitleDesc"

export const Project = ({projects}) => {


  return (
    <div id="project" className="min-h-screen flex  md:px-10 px-5 md:py-36 py-24">
    <section className="container mx-auto">


<TitleDesc title={projects.heading} subtitle={projects.subheading}/>

{/* <TitleDesc title={"Project"}/>
<Link to={"/project/"+1}>project</Link> */}
    </section>
    
   
    </div>
  )
}
