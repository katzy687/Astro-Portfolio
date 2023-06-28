export type Tool = {
    category: string;
    techs: string[];
  };
  
  const tools: Tool[] = [
    {
      category: "Languages",
      techs: ["Python", "JS/TS", "Go"]
    },
    {
      category: "Databases",
      techs: ["PostGresQL", "MongoDB", "Redis", "Supabase", "Neon", "Neo4J"]
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
      category: "Containers",
      techs: ["Docker", "Docker Compose"]
    },
  ];
  
  export default tools;
  