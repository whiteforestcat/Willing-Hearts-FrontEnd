import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BaseAccordian = ({ contentTitle, content, border = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to toggle accordian
  function setIsOpenToTrue() {
    setIsOpen(true);
  }

  function setIsOpenToFalse() {
    setIsOpen(false);
  }

  return (
    <div
      className={`w-[650px] mx-auto py-10 ${
        border ? `border-b border-primary` : `border-0`
      }`}
    >
      <div className="flex flex-row text-2xl">
        <h3
          className={`flex-grow ${isOpen ? `text-primary` : `text-greyscale1`}`}
        >
          {contentTitle}
        </h3>
        <div>
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} onClick={setIsOpenToFalse} />
          ) : (
            <FontAwesomeIcon icon={faPlus} onClick={setIsOpenToTrue} />
          )}
        </div>
      </div>
      {isOpen ? <p className="mt-2">{content}</p> : null}
    </div>
  );
};

export default BaseAccordian;
