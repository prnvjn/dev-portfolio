/* eslint-disable react/prop-types */
const ProjectComponent = ({list,key}) => {
const changeColor =(e)=>{
 
}
  return (
    <div key={key} className=" mx-auto grid grid-cols-2 md:gap-16 gap-8 mt-24 items-center group" >  
        <img className="col-span-2 lg:col-span-1 w-full rounded-xl  group-hover:rounded-3xl ease-in duration-100" src={list.image} alt="" />
        
        <div className="lg:text-left lg:col-span-1 lg:py-8  text-center col-span-2 flex flex-col gap-6 ">   
        <h3 className="text-3xl font-extrabold tracking-normal text-slate-700 ">{list.title} </h3>
        <p className="text-slate-600 font-medium text-lg flex flex-col gap-4">{list.description}</p>
     <p className="flex flex-wrap gap-4 justify-center lg:justify-start">{ list.technologies.map((technology)=>< span className="bg-slate-50 p-4 rounded-xl text-base font-medium shadow" key={technology} >{technology}</span>)  }</p>

     <div className="flex flex-wrap gap-4 justify-center lg:justify-start ">
<button className="rounded-xl bg-slate-700 px-9 py-3 text-base  font-medium text-slate-50 transition duration-200 hover:bg-slate-500 active:bg-brand-700">Preview</button>
<button className="rounded-xl border-slate-700 border-4 px-9 py-3 text-base  font-medium text-slate-700 transition duration-200 hover:bg-slate-100 active:bg-brand-700">Code</button>
</div>
        </div>


    </div>

  )
}


export default ProjectComponent