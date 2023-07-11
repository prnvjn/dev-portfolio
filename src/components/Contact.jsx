import { TitleDesc } from "./TitleDesc"
const Contact = () => {
  return (
    <div id='contact' className=" flex  md:px-10 px-5 md:py-36 py-24 background-design justify-center items-center">
      
      <section className="container lg:py-16 py-8 bg-slate-50
    rounded-md shadow-md">
<TitleDesc title={"Contact"} subtitle={"Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"}/>

<form name="contact" data-netlify="true" method="post" className="flex flex-col gap-8  lg:w-1/2 p-8 mx-auto justify-center">
<input type="hidden"  name="form-name" value="contact" />
  <input className="p-4 rounded-lg bg-slate-700 placeholder:text-slate-300 text-slate-50"  placeholder="What's your name 🤨?" type="text" name="name" required/>
  <input className="p-4 rounded-lg bg-slate-700 placeholder:text-slate-300 text-slate-50" placeholder="What's your email address?" type="email" name="email" required />
  <textarea className="p-4 rounded-lg bg-slate-700 placeholder:text-slate-300 text-slate-50" placeholder="What can I do for you?" rows="8" name="message" required ></textarea>
 

    <button className="rounded-xl bg-slate-700 px-8 py-3 w-1/2 text-base  font-medium text-slate-50 transition duration-200 hover:bg-slate-600 active:bg-brand-700 justify-self-center " type="submit">Send</button>

</form>

    </section>
    
  
    </div>
  )
}

export default Contact