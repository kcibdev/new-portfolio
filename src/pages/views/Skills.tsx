import React from "react";
import { containerStyle } from "../styles";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className={`${containerStyle} text-center`}>
      <h1 className="text-3xl font-bold my-3">My Skills</h1>
    </div>
  );
};

export default Skills;
