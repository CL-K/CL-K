import Image from "next/image";
import reactLogo from "../app/assets/logos/react.png";
import nodeLogo from "../app/assets/logos/nodejs.png";
import nextLogo from "../app/assets/logos/nextjs.png";
import mysqlLogo from "../app/assets/logos/mysql.png";
import postgresLogo from "../app/assets/logos/postgresql.png";
import mongoLogo from "../app/assets/logos/mongodb.png";
import wordpressLogo from "../app/assets/logos/wordpress.png";
import apacheLogo from "../app/assets/logos/apache.png";
import nginxLogo from "../app/assets/logos/nginx.png";

export default function Skills() {
  const skills = [
    {
      category: "Cloud & Platforms",
      items: [
        { name: "AWS (VPC, EC2, EKS, IAM, S3, KMS)" },
        { name: "GCP (familiarity)" },
        { name: "Azure (familiarity)" },
      ],
    },
    {
      category: "Kubernetes & Containers",
      items: [
        { name: "Kubernetes" },
        { name: "Amazon EKS" },
        { name: "Docker" },
        { name: "Docker Compose" },
      ],
    },
    {
      category: "Infrastructure as Code",
      items: [
        { name: "Terraform" },
        { name: "Ansible" },
        { name: "Remote state on S3 + KMS" },
      ],
    },
    {
      category: "CI/CD & GitOps",
      items: [
        { name: "GitHub Actions" },
        { name: "ArgoCD" },
        { name: "Traefik", logo: nginxLogo },
        { name: "cert-manager / Let's Encrypt" },
      ],
    },
    {
      category: "Monitoring & Security",
      items: [
        { name: "Prometheus" },
        { name: "Grafana" },
        { name: "Trivy" },
        { name: "Checkov" },
        { name: "Ansible Vault" },
      ],
    },
    {
      category: "Scripting & DevOps",
      items: [
        { name: "Bash" },
        { name: "Python automation" },
        { name: "Linux & SSH" },
        { name: "Reverse proxy & ingress" },
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
                  {item.logo ? (
                    <Image src={item.logo} alt={item.name} className="skill-logo" />
                  ) : (
                    "🔹"
                  )}
                  <strong>{item.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
