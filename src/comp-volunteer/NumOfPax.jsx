import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";
import VolunteerForm from "./VolunteerForm";
import CorpForm from "./CorpVolunteer/CorpForm";

const NumOfPax = (props) => {
  // States
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [corp, setCorp] = useState(false);
  const [dispCorpForm, setDispCorpForm] = useState(false);
  const [dispIndividualForm, setDispIndividualForm] = useState(false);
  const [qty, setQty] = useState(0);

  // Function to handle changes in user input
  function handleChange(e) {
    if (e.target.id === "adult") {
      setAdult(e.target.value);
    } else if (e.target.id === "child") {
      setChild(e.target.value);
    }
  }

  const handleChecked = (e) => {
    setCorp(e.target.checked);
  };

  // Function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    if (props.date === "") {
      alert("Please select date!");
    } else if (props.timeSlot === "") {
      alert("Please select time");
    }

    if (corp) {
      setDispCorpForm(true);
    } else {
      setDispIndividualForm(true);
    }

    // parseInt(adult);
    // parseInt(child);
    setQty(parseInt(adult) + parseInt(child));
    console.log(qty);
  }

  return (
    <div className="w-[800px]  mx-auto text-greyscale1 ">
      {/* Form section */}
      <section className=" bg-white rounded-2xl mb-10 px-16 ">
        {/* User input section */}
        <h1 className="text-2xl pt-12 mb-14">Select No. of Pax</h1>

        <form className="" onSubmit={handleSubmit}>
          <div className="flex mb-6">
            <div className="border border-solid border-primary rounded">
              <p className="w-[168px]">
                Adult
                <br />
                16 years and above
              </p>
            </div>
            <input
              id="adult"
              type="number"
              placeholder="0"
              min="0"
              onChange={handleChange}
              className="ml-6"
            />
          </div>
          <div className="flex mb-7">
            <div className="border border-solid border-primary rounded">
              <p className="w-[168px]">
                Children
                <br />3 - 15 years
              </p>
            </div>
            <input
              id="child"
              type="number"
              placeholder="0"
              min="0"
              onChange={handleChange}
              className="ml-6"
            />
          </div>

          {/* <BaseInput
            type="number"
            id="adult"
            value={adult}
            handleChange={handleChange}
            required={true}
            placeholder="0"
          /> */}
          <br />
          <label>
            <input type={"checkbox"} id="corp" onChange={handleChecked} />
            Tick here if you wish to volunteer as a <br /> corporate
          </label>
          <div className="">
            <BaseButton
              type="submit"
              label="Continue"
              colour="red"
              className="mt-6"
            />
            <br />
            <br />
            <br />
            <br />
            <h1 className="mt-2 invisible">hello</h1>
          </div>
        </form>
      </section>
      <section className="">
        {dispCorpForm && (
          <CorpForm
            date={props.date}
            timeSlot={props.timeSlot}
            roles={props.roles}
            qty={qty}
          />
        )}
        {dispIndividualForm && (
          <VolunteerForm
            date={props.date}
            timeSlot={props.timeSlot}
            roles={props.roles}
            qty={qty}
          />
        )}
      </section>
    </div>
  );
};

export default NumOfPax;
