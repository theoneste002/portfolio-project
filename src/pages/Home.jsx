import ContactMe from "../sections/ContactMe"
import AboutMe from "../sections/AboutMe"
import Hero from "../sections/Hero"
import Skills from "../sections/Skills"
import Project from "../sections/Project"
import Education from "../sections/Education"





const Home = () => {
  return (
   
        <main className="bg-slate-600 hover:focus:focus-within:">
            <Hero />
            <AboutMe />
            <Education />
            <Project/>
            <Skills />
            <ContactMe />
            
     

        </main>
  
  )
}
export default Home