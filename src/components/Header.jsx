import { HashLink } from 'react-router-hash-link';

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Menu } from '@headlessui/react';
export const Header = () => {

  return (
    <header className='fixed bg-slate-50 md:px-10 px-5 py-5 w-screen z-40 shadow-lg '>
    <nav className='flex justify-between items-center relative'>
      <div className='glitch-wrapper'>
      <h1 className='glitch text-3xl glitch after:content-[attr(data-header)] before:content-[attr(data-header)] text-slate-600' data-header="Pranav">Pranav</h1>
      </div>
        
    <ul className=' hidden md:flex gap-5 font-medium text-lg'>
        <li><HashLink smooth to="/#home">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#project">Project</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact</HashLink></li>

       
      </ul>
      <div className="flex  md:hidden">

          <Menu as="div"  >
            <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> 
            {({open})=>(open? <XMarkIcon className="h-6 w-6 text-slate-700 hover:text-slate-600" aria-hidden="true" />: <Bars3Icon className="h-6 w-6 text-slate-700 hover:text-slate-600" aria-hidden="true" />)}
            


            </Menu.Button>

            <Menu.Items as='ul' className="absolute  right-0  mt-2 w-full divide-y    bg-slate-700 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 text-white font-medium text-lg focus:outline-none">
            <div className="px-1 py-1 flex flex-col items-center  min-w-full  rounded-md">

            <Menu.Item as="li" className="  min-w-full " >
                {({close,active})=>(  <HashLink  smooth to="/#home" ><button className={`${active && 'bg-slate-500'} min-w-full p-5  rounded-md`   }  onClick={close}> Home </button></HashLink> )}
                 </Menu.Item>
                 <Menu.Item as="li" className="  min-w-full " >
                {({close,active})=>(  <HashLink  smooth to="/#about" ><button className={`${active && 'bg-slate-500'} min-w-full p-5 rounded-md`   }  onClick={close}> About </button></HashLink> )}
                 </Menu.Item>
                 <Menu.Item as="li" className="  min-w-full " >
                {({close,active})=>(  <HashLink  smooth to="/#project" ><button className={`${active && 'bg-slate-500'} min-w-full p-5 rounded-md`   }  onClick={close}> Project </button></HashLink> )}
                 </Menu.Item>
                 <Menu.Item as="li" className="  min-w-full " >
                {({close,active})=>(  <HashLink  smooth to="/#contact" ><button className={`${active && 'bg-slate-500'} min-w-full p-5 rounded-md`   }  onClick={close}> Contact </button></HashLink> )}
                 </Menu.Item>

         
    </div>  
                    </Menu.Items>


          </Menu>
        </div>
        


    </nav>
   

    </header>
  )
}
