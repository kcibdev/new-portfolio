import { BsGrid1X2, BsCode } from "react-icons/bs";
import { IoServerOutline } from "react-icons/io5";
import { ImAndroid } from "react-icons/im";

export const services = [
  {
    id: 0,
    title1: "Frontend",
    title2: "Developer",
    icon: BsCode,
    lists: [
      "User Interface Design",
      "User Experience Design",
      "Develop features on users feedback",
      "Creating responsive design",
      "Optimized website for best speed and scalability",
    ],
  },
  {
    id: 1,
    title1: "Backend",
    title2: "Deveoper",
    icon: IoServerOutline,
    lists: [
      "Debug and troubleshoot apps",
      "Develop & maintain Application Programming Interfaces (APIs)",
      "Writing clean & maintainable code",
      "collaboration and effective team skills",
    ],
  },
  {
    id: 2,
    title1: "Mobile",
    title2: "Developer",
    icon: ImAndroid,
    lists: [
      "Developing APIs to support mobile functionality",
      "UI/UX mobile design",
      "implementation of new apps or already existing ones",
      "Ensuring the correct linking of the backend and frontend ",
      "Working with colleagues to innovate app functionality and design",
    ],
  },
  {
    id: 3,
    title1: "UI/UX",
    title2: "Designer",
    icon: BsGrid1X2,
    lists: [
      "Create a user friendly interface",
      "Develop product base on user needs",
    ],
  },
];
