
import './App.css'
import "./style/hero.css"
import {  useRoutes } from "react-router-dom";

import { Header } from './components/Header';

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
    <Header></Header>
      {element}
   <Footer></Footer>
    </>
  )
}

export default App
