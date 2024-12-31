import ContactMe from "../sections/ContactMe"
import AboutMe from "../sections/AboutMe"
import Hero from "../sections/Hero"
import Skills from "../sections/Skills"

const Home = () => {
  return (
   
        <main className="bg-slate-600 hover:focus:focus-within:">
            <Hero />
            <AboutMe />
            <Skills />
            <ContactMe />
        </main>
  
  )
}
export default Home