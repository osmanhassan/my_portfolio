import {
  mobile,
  backend,
  creator,
  web,
  db,
  javascript,
  jquery,
  html,
  css,
  reactjs,
  backbone,
  tailwind,
  nodejs,
  mongodb,
  git,
  spring,
  express,
  divine,
  carrent,
  jobit,
  tripguide,
  java,
  bootstrap,
  mysql,
  postgre,
  oracle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Desktop Development",
    icon: backend,
  },
  {
    title: "DB Administration",
    icon: db,
  },
  {
    title: "Deployment",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "BackboneJs",
  //   icon: backbone,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgre",
    icon: postgre,
  },
  {
    name: "Oracle",
    icon: oracle,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Tech Lead",
    company_name: "Divine IT Limited",
    icon: divine,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Provide technical leadership and guidance to the development team",
      "Manage project planning, task allocation, and progress tracking",
      "Lead the design and architecture of software systems",
      "Collaborate with cross-functional teams to deliver high-quality solutions",
      "Conduct thorough code reviews and enforce coding standards",
      "Collaborate with stakeholders to align technical solutions with business needs",
      "Stay updated with the latest technologies and industry trends",
      "Effectively communicate technical concepts to various audiences",
      "Resolve conflicts and promote a positive team culture",
    ],
  },
  {
    title: "Java Team Lead",
    company_name: "Divine IT Limited",
    icon: divine,
    iconBg: "#E6DEDD",
    date: "May 2021 - April 2022",
    points: [
      "Lead and manage a team of Java developers, providing technical guidance and support",
      "Oversee the entire software development lifecycle for Java projects",
      "Design and architect Java-based applications, ensuring scalability and performance",
      "Conduct code reviews to maintain code quality and enforce coding standards",
      "Allocate tasks and responsibilities for efficient project execution",
      "Implement coding standards and best practices",
      "Conduct performance evaluations and provide feedback",
      "Support recruitment process by evaluating technical skills of candidates",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Divine IT Limited",
    icon: divine,
    iconBg: "#E6DEDD",
    date: "May 2020 - April 2021",
    points: [
      "Design, develop, and maintain high-quality software solutions",
      "Write clean, efficient, and well-documented code following coding standards",
      "Perform code reviews and provide constructive feedback to team members",
      "Mentor and assist junior developers in their technical growth",
      "Investigate and resolve complex technical issues and bugs",
      "Take ownership of projects and drive them to successful completion",
      "Continuously seek opportunities to optimize and refactor existing codebase",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Divine IT Limited",
    icon: divine,
    iconBg: "#E6DEDD",
    date: "May 2019 - April 2020",
    points: [
      "Develop and maintain software applications",
      "Write clean and efficient code in various programming languages",
      "Troubleshoot and resolve technical issues and bugs",
      "Conduct unit testing to ensure software functionality",
      "Implement security measures and data protection practices",
      "Support QA teams to ensure software quality",
      "Document software designs and features",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Divine IT Limited",
    icon: divine,
    iconBg: "#E6DEDD",
    date: "January 2018 - April 2019",
    points: [
      "Assist in software development and maintenance",
      "Write and modify code under senior guidance",
      "Test and debug software for functionality",
      "Learn coding standards and best practices",
      "Document software processes and procedures",
      "Work independently on features or modules",
      "Engage in continuous learning and training",
      "Communicate progress and challenges effectively",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
