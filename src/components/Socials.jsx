import {Github,Linkedin} from "lucide-react"
const Socials = () => {



  return (
    <div className=' z-50 fixed top-1/2  p-2 flex flex-col gap-4  shadow-xl rounded-r-xl '>


<Github className=" hover:px-0.5 rounded-lg cursor-pointer" size={36}/>
<Linkedin className=" hover:px-0.5 rounded-lg cursor-pointer " size={36}/>
    </div>
  )
}

export default Socials