import React from "react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";

import { containerStyle, homeImage } from "../styles";
import ProfileImage from "../../assets/images/profile.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={`home ${containerStyle}  h-screen`} id="home">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 justify-items-center">
        <div className={`home__image ${homeImage}`}>
          <img
            src={ProfileImage}
            className="w-full h-full object-cover"
            alt="home"
          />
        </div>
        <div className="home__details text-center flex flex-col items-center">
          <h1 className="home__title text-3xl font-bold w-[300px] md:w-auto mb-2">
            Full Stack Web & Mobile Developer
          </h1>
          <p className="home__description text-[15px] w-[350px] md:w-auto my-2 font-semibold">
            I specialize in building softwares for clients. I love learning new
            technologies and always looking to improve my skills.
          </p>
          <div className="home__icons flex justify-around items-center w-[230px] my-3">
            <a href="#link" className="primary-color">
              <FiGithub className="home__icon text-xl" />
            </a>
            <a href="#link">
              <FiTwitter className="home__icon text-xl" />
            </a>
            <a href="#link">
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
