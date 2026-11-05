import About from "@/components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <h1>
          👋 Hello, I&apos;m <strong>Cheick</strong>
        </h1>
        <p>
          <strong>DevOps Engineer</strong> passionate about building modern digital
          solutions. My goal is to turn your ideas into high-performing and
          scalable web experiences.
        </p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}