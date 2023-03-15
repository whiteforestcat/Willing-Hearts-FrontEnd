import React from "react";

const OtherProjsCard = (props) => {
  return (
    <div className="w-[300px] h-[400px] text-start">
      <img className="mb-4" src={props.image}></img>
      <div className="h-[170px] mb-6">
        <h3 className="mb-2">{props.projectName}</h3>
        <p className="">{props.projectContent}</p>
      </div>
    </div>
  );
};

export default OtherProjsCard;
