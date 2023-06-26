export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    description: "SSG portfolio site",
    techs: ["JS", "Astro"],
    link: "https://github.com/katzy687/Astro-Portfolio",
  },
  {
    title: "Bump2Release",
    description: "A CLI release tool for syncing bumped tags",
    techs: ["python, bump2version, git"],
    link: "https://github.com/katzy687/bump2release",
  },
  {
    title: "Abstract HTTP Client",
    description: "A reusable abstraction over the Requests library",
    techs: ["python, requests"],
    link: "https://github.com/QualiSystemsLab/abstract-http-client",
  },
  {
    title: "Scriptfoundry CLI",
    description: "A CLI tool for templating Cloudshell orchestration projects",
    techs: ["python", "cookiecutter", "click"],
    link: "https://github.com/QualiSystemsLab/cloudshell-scriptfoundry",
  },
  {
    title: "Sandbox Reporter",
    description: "A utility library for Cloudshell logging",
    techs: ["python, cloudshell"],
    link: "https://github.com/QualiSystemsLab/cloudshell-sandbox-reporter",
  },
  {
    title: "Sandbox API Client",
    description: "A customized REST client for Cloudshell CI",
    techs: ["python, cloudshell"],
    link: "https://github.com/QualiSystemsLab/cloudshell-sandbox-reporter",
  }
];

export default projects;
