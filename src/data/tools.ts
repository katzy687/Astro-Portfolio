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
      techs: ["PostGresQL", "MongoDB", "Redis", "Supabase"]
    },
    {
      category: "Backend",
      techs: ["Flask", "FastAPI", "ExpressJS"]
    },
    {
      category: "Frontend",
      techs: ["Astro", "React", "SolidJS"]
    },
    {
      category: "Cloud Providers",
      techs: ["AWS", "Azure", "Linode"]
    },
    {
      category: "IaC",
      techs: ["Terraform", "Ansible", "Cloud Formation", "Pulumi"]
    },
    {
      category: "Containers",
      techs: ["Docker"]
    },
  ];
  
  export default tools;
  