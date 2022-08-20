import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../assets/data/experienceContent";
import { containerStyle } from "../styles";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className={`experience ${containerStyle} text-center`} id="experience">
      <h1 className="text-3xl font-bold my-3">Experience</h1>
      <div className="exp__card flex flex-col items-center justify-center gap-10 mt-5">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
