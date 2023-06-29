export type Project = {
  title: string;
  techs: string[];
  link: string;
  description: string;
};


const personalProjects: Project[] = [
  {
    title: "Dev Portfolio",
    description: "Source code for Astro SSG portfolio site",
    techs: ["Typescript", "Astro", "Netlify"],
    link: "https://github.com/katzy687/Astro-Portfolio",
  },
  {
    title: "Bump2Release",
    description: "CLI release tool for syncing bumped tags",
    techs: ["python, bump2version, git"],
    link: "https://github.com/katzy687/bump2release",
  },
  {
    title: "Abstract HTTP Client",
    description: "Reusable abstraction over the Requests library",
    techs: ["python, requests"],
    link: "https://github.com/QualiSystemsLab/abstract-http-client",
  }
];

const workProjects: Project[] = [
  {
    title: "AD Sync Service",
    description: "Sync AD users to App DB on cron scheduler",
    techs: ["python", "ldap3", "keyring"],
    link: "https://github.com/QualiSystemsLab/cloudshell-user-sync",
  },
  {
    title: "Scriptfoundry CLI",
    description: "CLI tool for templating orchestration projects",
    techs: ["python", "cookiecutter", "click"],
    link: "https://github.com/QualiSystemsLab/cloudshell-scriptfoundry",
  },
  {
    title: "Sandbox Reporter",
    description: "Utility library for Cloudshell logging",
    techs: ["python, cloudshell"],
    link: "https://github.com/QualiSystemsLab/cloudshell-sandbox-reporter",
  },
  {
    title: "CI API Client",
    description: "REST client for consuming Cloudshell CI environments",
    techs: ["python, cloudshell"],
    link: "https://github.com/QualiSystemsLab/cloudshell-sandbox-reporter",
  }
];


const contributingProjects: Project[] = [
  {
    title: "Terraform Service",
    description: "Added support for multiple git providers and offline use",
    techs: ["python", "terraform", "gitlab"],
    link: "https://github.com/QualiSystemsLab/CloudShell-Terraform-Shell",
  },
  {
    title: "Ansible Service",
    description: "Forked extension providing streaming logs and 'day 2' playbooks",
    techs: ["python", "ansible"],
    link: "https://github.com/QualiSystemsLab/Ansible-Shell-Extended",
  }
];


export {personalProjects, workProjects, contributingProjects};
