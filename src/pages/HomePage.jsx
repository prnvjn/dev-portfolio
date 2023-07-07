import { About } from '../components/About';
import { HomeHero } from '../components/HomeHero';
import { Project } from '../components/Project';
import Contact from '../components/Contact';
import data from "../data"

export const HomePage = () => {
  return (
    <>
<HomeHero></HomeHero>
    <About about={data.about} ></About>
   <Project projects={data.projects} ></Project>
   <Contact></Contact>


    </>
  )
}
