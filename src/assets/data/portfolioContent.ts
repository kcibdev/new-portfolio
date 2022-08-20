import Albaama from "../images/albaama.png";
import Metamask from "../images/metamask.png";

export const portfolios = [
  {
    id: 0,
    img: "https://play-lh.googleusercontent.com/7yraXXwHYZhILCctORn3PcTzIIqdARICxXY07hTIF637_lHAqdt3aQpXOPmYTZH76yk=w240-h480-rw",
    title: "Student Social Application",
    desc: "A social app where students are able to post, communicate, upload and download pdfs etc <br /> skills: <b>Flutter, dart, APIs, PHP, MySql, Firebase</b>",
    link: "https://play.google.com/store/apps/details?id=com.kcib.quelib",
    isAvailable: true,
  },
  {
    id: 1,
    img: "https://play-lh.googleusercontent.com/SvSGmjbErolaNRqq3xqx6NFn3Rldjqz_SFvqRZQ5ElujeYVbP2k21M_C8lAdu28Hq60=w240-h480",
    title: "Food Delivery Application",
    desc: "An ecommerce food delivery mobile aplication <br /> skills: <b>Flutter, dart, APIs</b>",
    link: "https://play.google.com/store/apps/details?id=ng.foodnow",
    isAvailable: true,
  },
  {
    id: 2,
    img: Metamask,
    title: "Blockchain Application",
    desc: "Blockchain site to send and receive payments using MetaMask with Auth<br /> skills: <b>React.js, Tailwind CSS, Solidity, Styled-Components, Zustand</b>",
    link: "https://kcib-crypto.netlify.app",
    isAvailable: true,
  },
  {
    id: 3,
    img: Albaama,
    title: "Ecommerce Website",
    desc: "E-commerce site where users can order for products and have it delivered to them<br /> skills: <b>HTML, CSS, JavaScript (JQuery), PHP, MYSQL</b>",
    link: "/",
    isAvailable: false,
  },
];
