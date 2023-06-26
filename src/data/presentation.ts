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
  description:`I'm working as a Software Engineer since 2016. 
  I enjoy working across the web stack, from backend and frontend frameworks to cloud infra and devops automation. 
  Outside of tech, I enjoy trekking, training martial arts, and pick-up basketball.`,
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
