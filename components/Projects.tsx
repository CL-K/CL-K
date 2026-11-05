export default function Projects() {
  const projects = [
    {
      title: "Cryptodash – Complete DevOps Project",
      description:
        "End-to-end DevOps pipeline: Infrastructure as Code (Terraform/Kubernetes), containerized application, and automated GitOps deployment with ArgoCD.",
      github: "https://github.com/CL-KRMA/cryptodash-infra",
      demo: null,
      extraLinks: [
        { label: "Infra Repo", url: "https://github.com/CL-KRMA/cryptodash-infra" },
        { label: "App Repo", url: "https://github.com/CL-KRMA/cryptodash-app" },
        { label: "GitOps Repo", url: "https://github.com/CL-KRMA/cryptodash-gitops" },
      ],
    },
    {
      title: "AI‑Chat‑app – Multi-model AI Application",
      description:
        "Next.js application integrating multiple AI models (Gemma, LLaMA, LLaVA) with REST API and user interface.",
      github: "https://github.com/CL-KRMA/AI-Chat-app",
      demo: null,
      extraLinks: [
        { label: "Infra Repo", url: "https://github.com/CL-KRMA/AI-Chat-infra" },
        { label: "App Repo", url: "https://github.com/CL-KRMA/AI-Chat-app" },
        { label: "GitOps Repo", url: "https://github.com/CL-KRMA/AI-Chat-gitops" },
      ],
    },
    {
      title: "React/Node.js, Next.js Application",
      description: "REST API + modern user interface.",
      github: "https://github.com/CL-KRMA/Galerie-en-ligne-fullstack",
      demo: "https://galerie-en-ligne-fullstack.vercel.app/",
    },
    {
      title: "Taskflow – Simplified Task Management with Next.js",
      description:
        "Taskflow: robust REST API with a modern and intuitive user interface.",
      github: "https://github.com/CL-KRMA/Taskflow",
      demo: "https://taskflow-omega-teal.vercel.app/",
    },
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">🚀 My projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  🔗 View code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  🌐 View demo
                </a>
              )}
              {project.extraLinks &&
                project.extraLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                    📂 {link.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
