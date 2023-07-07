/* eslint-disable react/prop-types */
// title and description for each section

export const TitleDesc = (props) => {
  return (
    <div className="text-center mx-auto ">
        <h2 className="text-4xl font-extrabold tracking-wider text-slate-700 mb-4">{props.title} </h2>
            {/* add a dash props.title */}
         <p className="md:text-lg text-xl font-medium max-w-5xl mx-auto">{props.subtitle}</p>
             {/* props.decription */}

  
  </div>

  )
}
