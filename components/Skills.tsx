export default function Skills() {
  const skills = [
    {
      category: "Cloud & Platforms",
      items: [
        "AWS (VPC, EC2, EKS, IAM, S3, KMS)",
        "GCP (familiarity)",
        "Azure (familiarity)",
      ],
    },
    {
      category: "Kubernetes & Containers",
      items: [
        "Kubernetes",
        "Amazon EKS",
        "Docker",
        "Docker Compose",
      ],
    },
    {
      category: "Infrastructure as Code",
      items: [
        "Terraform",
        "Ansible",
        "Remote state on S3 + KMS",
      ],
    },
    {
      category: "CI/CD & GitOps",
      items: [
        "GitHub Actions",
        "ArgoCD",
        "Traefik",
        "cert-manager / Let's Encrypt",
      ],
    },
    {
      category: "Monitoring & Security",
      items: [
        "Prometheus",
        "Grafana",
        "Trivy",
        "Checkov",
        "Ansible Vault",
      ],
    },
    {
      category: "Scripting & DevOps",
      items: [
        "Bash",
        "Python automation",
        "Linux & SSH",
        "Reverse proxy & ingress",
      ],
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">💡 My technical expertise</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>
                  <span className="skill-bullet">🔹</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
