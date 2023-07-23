import {Github,Linkedin} from "lucide-react"
export const Footer = ({footerData}) => {
  return (
    <section className="p-8 bg-slate-800">

<div className="container mx-auto flex md:justify-between md:flex-row flex-col gap-4 items-center"> 
  <h3 className="text-slate-50 text-lg"> Made with ❤️ by Pranav</h3> 
  <div className="flex gap-4 ">

   <a href={footerData.github} target="_blank" rel="noopener noreferrer"><Github className="text-slate-50" size={28} /></a>
   <a href={footerData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="text-slate-50" size={28} /></a>

  </div>

  </div>

    </section>
  )
}
