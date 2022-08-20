import React from "react";
import { containerStyle } from "../styles";
import AboutCard from "../components/AboutCard";
import { services } from "../../assets/data/serviceContent";

type Props = {};

const About = (props: Props) => {
  return (
    <div className={`about ${containerStyle} text-center `} id="about">
      <div className="about__head flex flex-col items-center">
        <h1 className="text-3xl font-bold my-3">About Me</h1>
        <p className="text-base my-4 font-medium md:text-lg md:font-normal max-w-[470px]">
          Am a self taught full stack developer. I've been building stuff on the
          web and mobile from 2017 and been able to create accessible, inclusive
          products and digital experiences for friends, startups and clients.
          Through my coding journey i have been able to use alot of technologies
          that i find interesting and can use to build cool stuff for you
        </p>
      </div>
      <div className="about_cards flex flex-wrap items-center justify-around gap-5 mt-10 px-6">
        {services.map((service) => (
          <AboutCard key={service.id} aboutService={service} />
        ))}
      </div>
    </div>
  );
};

export default About;
