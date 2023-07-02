export type Skill = {
    category: string;
    techs: string[];
  };
  
  const skills: Skill[] = [
    {
      category: "Languages",
      techs: ["Python", "JS/TS", "Go"]
    },
    {
      category: "Databases",
      techs: ["PostGresQL", "MongoDB", "Redis", "Supabase", "Neo4J", "InfluxDB"]
    },
    {
      category: "Backend",
      techs: ["Flask", "FastAPI", "Node", "Express", "Gin"]
    },
    {
      category: "Frontend",
      techs: ["React", "Solid", "Astro", "TailwindCSS", "Vite"]
    },
    {
      category: "Cloud Providers",
      techs: ["AWS", "Azure", "Linode", "Netlify"]
    },
    {
      category: "IaC",
      techs: ["Terraform", "Ansible", "Pulumi"]
    },
    {
      category: "CI",
      techs: ["Github Actions", "Gitlab CI", "Jenkins"]
    },
    {
      category: "Monitoring",
      techs: ["Grafana", "Loki", "Prometheus", "Elastic stack"]
    },
    {
      category: "Services",
      techs: ["Hashicorp Vault"]
    },
  ];
  
  export default skills;
  