import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import OpenToWork from "@/components/OpenToWork"
import ContactMe from "@/components/ContactMe"
import Experience from "@/components/Experience"

export default async function Home() {
  return (
    <>
      <div>
        <OpenToWork />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </>
  )
}
