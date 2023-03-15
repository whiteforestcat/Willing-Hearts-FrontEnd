import React from "react";
import BaseAccordian from "./BaseAccordian";

const AccordianWrapper = ({ title, contentDataset }) => {
  return (
    <div className="text-greyscale1 w-[895px] mx-auto bg-white rounded-2xl py-10">
      <h2 className="text-3xl text-center">{title}</h2>
      {contentDataset.map((item) => {
        if (contentDataset.indexOf(item) === contentDataset.length - 1) {
          return <BaseAccordian key={item.id} {...item} border={false} />;
        }
        return <BaseAccordian key={item.id} {...item} />;
      })}
    </div>
  );
};

export default AccordianWrapper;
