import React from "react";
import { IconType } from "react-icons";
import { mySkills } from "../../assets/data/skillsContent";
import SkillsCard from "../components/SkillsCard";
import { containerStyle } from "../styles";

type Props = {};

export interface skillProps {
  id: number;
  title: string;
  subtitle: string;
  icon: IconType;
  languages: Languages[];
}

interface Languages {
  name: string;
  lowerCase: string;
}

const Skills = (props: Props) => {
  return (
    <div className={`${containerStyle} text-center`} id="skills">
      <h1 className="text-3xl font-bold my-3">My Skills</h1>
      <div className="skills rounded-lg overflow-hidden mt-14 flex flex-wrap justify-center">
        {mySkills.map((skill: skillProps) => (
          <SkillsCard key={skill.id} skillCard={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
