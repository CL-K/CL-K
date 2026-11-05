import About from "@/components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main className="home">
        <div className="hero-content">
          <span className="eyebrow">Cloud &amp; DevOps Engineer</span>
          <h1>
            Hello, I&apos;m <strong>Cheick</strong>
          </h1>
          <p>
            <strong>Cloud &amp; DevOps Engineer</strong> specialized in cloud
            architectures and deployment automation. Hands-on experience with
            Kubernetes, including Amazon EKS, and Terraform, building CI/CD
            pipelines with GitHub Actions and ArgoCD to automate delivery from
            commit to production.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="btn btn-primary">
              View my work
            </a>
            <a href="/contact" className="btn btn-secondary">
              Let&apos;s talk
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Projects delivered</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Operational mindset</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-card">
            <span className="label">Core stack</span>
            <p>Docker • Kubernetes • AWS • Terraform</p>
          </div>
          <div className="mini-card accent">
            <span className="label">Focus</span>
            <p>Automation, CI/CD, observability</p>
          </div>
        </div>
      </main>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}