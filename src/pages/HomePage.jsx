import { About } from '../components/About';
import { HomeHero } from '../components/HomeHero';
import { Project } from '../components/Project';
import Contact from '../components/Contact';
import data from "../data"
import Socials from '../components/Socials';

export const HomePage = () => {
  return (
    <div className='relative'>
    <Socials/>  
    <HomeHero></HomeHero>

    <About about={data.about} ></About>
   <Project projects={data.projects} ></Project>
   <Contact></Contact>
   

    </div>
  )
}
