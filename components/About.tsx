export default function About() {
  return (
    <div className="about-section">
      <h2 className="about-title">👋 About me</h2>
      <p className="about-text">
        I am a <strong>Cloud &amp; DevOps Engineer</strong> specialized in cloud
        architectures and deployment automation. Hands-on experience with
        Kubernetes, including Amazon EKS, and Terraform, building CI/CD
        pipelines with GitHub Actions and ArgoCD that automate the entire path
        from commit to deployment, including linting, tests, security scans,
        image publishing, and GitOps updates.
      </p>

      <p className="about-text">
        My skills have been built through hands-on practice since 2022 and have
        been applied professionally since 2024. I am passionate about
        infrastructure optimization, reliability, and distributed systems.
      </p>

      <p className="about-text">
        <strong>Core expertise:</strong>
      </p>

      <p className="about-text">
        <strong>Cloud & Platforms</strong>: AWS (VPC, EC2, EKS, NAT, EIP, IAM,
        S3, KMS, security groups), with working familiarity in GCP and Azure.
      </p>

      <p className="about-text">
        <strong>Kubernetes & Containerization</strong>: container orchestration,
        high-availability clusters, Amazon EKS, Docker, and Docker Compose.
      </p>

      <p className="about-text">
        <strong>Infrastructure as Code</strong>: Terraform for resilient
        infrastructure provisioning, remote state management, and Ansible for
        environment configuration.
      </p>

      <p className="about-text">
        <strong>CI/CD & GitOps</strong>: GitHub Actions, ArgoCD, Traefik,
        cert-manager, and Let&apos;s Encrypt for automated release workflows and
        secure exposure.
      </p>

      <p className="about-text">
        <strong>Monitoring & Security</strong>: Prometheus, Grafana, Trivy,
        Checkov, secret management with Ansible Vault, network segmentation, and
        vulnerability scanning.
      </p>

      <p className="about-text">
        🎯 My goal is to deliver robust, scalable, and secure systems that keep
        production environments reliable and efficient.
      </p>
    </div>
  );
}
