import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenToWork from "@/components/OpenToWork";
import ContactMe from "@/components/ContactMe";

export default async function Home() {
  return (
    <>
      <OpenToWork/>
      <About />
      <Skills />
      <Projects/>
      <ContactMe/>
    </>
  );
}
