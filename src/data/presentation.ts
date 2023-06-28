type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "katzy687@gmail.com",
  title: "Natti Katz",
  description:`Hi, I'm Natti. I'm a Software Engineer working in the tech space since 2016.
  I enjoy building across the web stack - from database and api design to frontend frameworks, cloud infra and devops.
  This page is to showcase some projects I've worked on.
  Outside of tech, I enjoy trekking, martial arts, and basketball.`,
  socials: [
    {
      label: "Github",
      link: "https://github.com/katzy687",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nattik/",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/katzy687/",
    }
  ],
};

export default presentation;
