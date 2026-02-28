import { Footer } from "./layout/Footer"
import { Navbar } from "./layout/Navbar"
import { About } from "./sections/About"
import { ContactMe } from "./sections/ContactMe"
import { Experience } from "./sections/Experience"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"

function App() {

  return (
    <>
    <div className="min-h-screen overflow-x-hidden relative">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-[url('/hero-bg.jpg')]  bg-center opacity-15"
    aria-hidden="true"
  />

  {/* Gradient overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"
    aria-hidden="true"
  />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills/>
          <Projects/>
          <Experience/>
          <ContactMe/>
        </main>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
