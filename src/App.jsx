
import './App.css'
import "./style/hero.css"
import {  useRoutes } from "react-router-dom";

import { Header } from './components/Header';
import data from "./data"
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

function App() {



  const element = useRoutes([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/project/:id",
      element:<ProjectPage/>
    }
  ])

  return (

    <>
    <Header headerData={data.header}></Header>
      {element}
   <Footer footerData={data.header}></Footer>
    </>
  )
}

export default App
