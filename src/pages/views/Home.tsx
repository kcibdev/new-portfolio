import React from "react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";

import { containerStyle, homeImage } from "../styles";
import ProfileImage from "../../assets/images/profile.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <div
      className={`home ${containerStyle}  h-screen md:flex justify-center items-center`}
      id="home"
    >
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 justify-items-center ml:px-32">
        <div className={`home__image ${homeImage}`}>
          <img
            src={ProfileImage}
            className="w-full h-full object-cover"
            alt="home"
          />
        </div>
        <div className="home__details text-center flex flex-col items-center ml:text-left ml:items-start">
          <h1 className="home__title text-3xl font-bold w-[300px] md:w-auto mb-2 ml:text-4xl">
            Full Stack Web & Mobile Developer
          </h1>
          <p className="home__description text-[15px] max-w-[500px] md:max-w-auto ml:text-[18px] my-2 font-semibold">
            Developer with 5+ years of experience from creating, designing and managing web & mobile
            applications. Proficient with developing database, creating user interfaces, writing and testing code, debugging
            issues, implementing new features based on user feedback.
          </p>
          <div className="home__icons flex justify-around items-center w-[230px] my-3 ml:justify-between">
            <a href="https://github.com/kcibdev" target="_blank" className="primary-color">
              <FiGithub className="home__icon text-xl" />
            </a>
            <a href="https://x.com/kcibdev">
              <FiTwitter className="home__icon text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/kcib/">
              <FiLinkedin className="home__icon text-xl" />
            </a>
          </div>
          <div className="home__connect-btn mt-3">
            <a href="#contact" className="flex items-center">
              Let's talk{" "}
              <BsArrowRightCircle className="home__icon text-xl ml-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
