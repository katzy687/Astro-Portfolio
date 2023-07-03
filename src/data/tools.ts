export type Skill = {
    category: string;
    techs: string[];
  };
  
  const skills: Skill[] = [
    {
      category: "Languages",
      techs: ["Python", "Javascript", "Typescript"]
    },
    {
      category: "Databases",
      techs: ["PostGresQL", "MongoDB", "Redis", "InfluxDB"]
    },
    {
      category: "Backend",
      techs: ["Flask", "FastAPI", "SQLAlchemy", "Alembic", "Node", "Express", "Mongoose", "Prisma"]
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
      techs: ["Grafana", "Loki", "Prometheus"]
    }
  ];
  
  export default skills;
  