export default function Projects() {
  const projects = [
    {
      title: "HA-Infra EKS — Multi-AZ Amazon EKS Cluster on AWS",
      description:
        "Provisioned a production-grade Amazon EKS cluster with Terraform across 3 availability zones. Includes VPC segmentation, private node groups, secure remote state on S3 + KMS, EBS CSI integration, Traefik ingress, cert-manager, ArgoCD, Prometheus, and Grafana. CI pipeline validates Terraform, TFLint, Checkov, Ansible, and ShellCheck on every push.",
      github: "https://github.com/cl-k/HA-infra-eks",
      demo: null,
      extraLinks: [
        { label: "GitHub Repo", url: "https://github.com/cl-k/HA-infra-eks" },
      ],
    },
    {
      title: "HA-Infra — Highly Available Kubernetes Cluster on AWS",
      description:
        "Provisioned a K3s HA cluster on AWS across 3 AZs using Terraform and Ansible. The setup includes VPC segmentation, private/public subnets, NAT gateways, etcd quorum resilience, ArgoCD, Traefik ingress, cert-manager with Let's Encrypt, Grafana monitoring, and hardened SSH/Kubernetes access restricted to the operator IP.",
      github: "https://github.com/CL-KRMA/HA-infra",
      demo: null,
      extraLinks: [
        { label: "GitHub Repo", url: "https://github.com/CL-KRMA/HA-infra" },
      ],
    },
    {
      title: "AI Chat — AI Chat Platform on Kubernetes",
      description:
        "Built a Kubernetes-based AI platform running multiple open models (Llama3, Llava, Gemma) behind a Traefik ingress. The stack includes GitOps deployment with ArgoCD, persistent storage, monitoring, and a CI/CD flow that runs ESLint, unit tests, security scanning, Docker build, and automatic GitOps updates.",
      github: "https://github.com/cl-k/AI-Chat-app",
      demo: null,
      extraLinks: [
        { label: "App Repo", url: "https://github.com/cl-k/AI-Chat-app" },
        { label: "GitOps Repo", url: "https://github.com/cl-k/AI-Chat-gitops" },
      ],
    },
    {
      title: "n8n — Low-code Automation with Observability",
      description:
        "Deployed n8n with Docker Compose behind Traefik using automated TLS via Let's Encrypt. The setup includes strict network segmentation, read-only Docker socket proxy, monitoring with Prometheus and Grafana, and analytics integration with Umami and PostgreSQL.",
      github: "https://github.com/cl-k/n8n-infra",
      demo: null,
      extraLinks: [
        { label: "Infra Repo", url: "https://github.com/cl-k/n8n-infra" },
      ],
    },
    {
      title: "Taskflow — Task Management Web App",
      description:
        "A full-stack task management application built with Next.js and a REST API, focused on a modern user experience and clean workflow management.",
      github: "https://github.com/cl-k/Taskflow",
      demo: "https://taskflow-omega-teal.vercel.app/",
    },
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">🚀 Personal projects</h2>
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
