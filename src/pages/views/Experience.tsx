import React from "react";
import { containerStyle } from "../styles";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className={`experience ${containerStyle} text-center`} id="experience">
      <h1 className="text-3xl font-bold my-3">Experience</h1>
    </div>
  );
};

export default Experience;
