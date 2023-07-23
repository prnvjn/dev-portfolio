import {Github,Linkedin} from "lucide-react"
const Socials = ({socials}) => {



  return (
    <div className='md:flex z-50 fixed top-1/2  p-2 hidden flex-col gap-4  shadow-xl rounded-r-xl backdrop-blur '>

<a href={socials.github} target="_blank" rel="noopener noreferrer"><Github className=" hover:px-0.5 rounded-lg cursor-pointer" size={36}/></a>
<a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className=" hover:px-0.5 rounded-lg cursor-pointer " size={36}/></a>

    </div>
  )
}

export default Socials