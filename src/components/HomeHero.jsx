
import { HashLink } from "react-router-hash-link"
export const HomeHero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center md:px-10 px-5 py-5 gradient" >
    
<div className="container mx-auto flex flex-col items-center gap-8">
  <div className="text-center"> 
  <code className="font-mono text-lime-500 text-xl font-medium">console.log(&ldquo;Hey! 👋🏼&rdquo;)</code>
      <div className=" glitch-wrapper">
          <div className="glitch after:content-[attr(data-glitch)] before:content-[attr(data-glitch)]" data-glitch ="I&apos;m Pranav">I&apos;m Pranav</div>

      </div>
  </div>
 
<p className="text-slate-50 text-xl font-medium">Crafting Seamless User Experiences with Frontend Magic</p>

<button className="rounded-xl bg-slate-50 px-5 py-3 text-base  font-medium text-slate-700 transition duration-200 hover:bg-slate-200 active:bg-brand-700"><HashLink smooth to="/#project">Projects</HashLink> </button>
</div>


       
    
    
    
    </section>
  )
}
