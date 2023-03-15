import React from "react";
import BaseButton from "../../comp-commons/BaseButton";

const ProjectsCard = (props) => {
  return (
    <div className="w-[300px] h-[600px] text-start">
      <img className="mb-4" src={props.image}></img>
      <div className="h-[200px] ">
        <h2 className="mb-2">{props.projectName}</h2>
        <p className="">{props.projectContent}</p>
      </div>
      <BaseButton label="Find Out More" colour="transparent" />
    </div>
  );
};

export default ProjectsCard;
