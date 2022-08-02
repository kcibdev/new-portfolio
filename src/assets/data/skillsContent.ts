import { BiCodeCurly } from "react-icons/bi";
import { IoServerOutline } from "react-icons/io5";
import { BsVectorPen } from "react-icons/bs";
import { ImAndroid } from "react-icons/im";

export const mySkills = [
  {
    id: 0,
    title: "Frontent Developer",
    subtitle: "More than 4 years",
    icon: BiCodeCurly,
    languages: [
      {
        name: "HTML",
        lowerCase: "html",
      },
      {
        name: "CSS",
        lowerCase: "css",
      },
      {
        name: "JavaScript & JQuery",
        lowerCase: "js",
      },
      {
        name: "React.js, TypeScript, Next.js",
        lowerCase: "react",
      },
      {
        name: "Tailwind CSS",
        lowerCase: "tailwind",
      },
    ],
  },
  {
    id: 1,
    title: "Backend Developer",
    subtitle: "More than 4 years",
    icon: IoServerOutline,
    languages: [
      {
        name: "PHP",
        lowerCase: "php",
      },
      {
        name: "Node.js (Express.js, Sequelize)",
        lowerCase: "node",
      },

      {
        name: "MySql",
        lowerCase: "mysql",
      },
      {
        name: "MongoDB",
        lowerCase: "mongodb",
      },
      {
        name: "GraphQL",
        lowerCase: "graphql",
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Developer",
    subtitle: "More than 2 years",
    icon: ImAndroid,
    languages: [
      {
        name: "Flutter & Dart",
        lowerCase: "flutter",
      },
      {
        name: "Firebase",
        lowerCase: "firebase",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    subtitle: "More than 4 years",
    icon: BsVectorPen,
    languages: [
      {
        name: "Figma",
        lowerCase: "figma",
      },
      {
        name: "illustrator",
        lowerCase: "illustrator",
      },
      {
        name: "Heroku & Netlify",
        lowerCase: "heroku",
      },
      {
        name: "Git & Github",
        lowerCase: "git",
      },
    ],
  },
];
