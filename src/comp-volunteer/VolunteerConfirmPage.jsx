import React from "react";
import BaseButton from "../comp-commons/BaseButton";
import { Link, NavLink } from "react-router-dom";

const VolunteerConfirmPage = (req, res) => {
  // let test = { date, timeSlot };
  // test = req.params;

  // console.log(req.params.date);

  return (
    <>
      <div>
        <label>
          Thank you for registering as a volunteer! Your registration has been
          confirmed/
        </label>
        <h1>Insert props codes here</h1>
        <label>
          Please check your email for further insturctions on how to get
          started.{" "}
        </label>
        <br />
        <label>Lets make a difference together!</label>
        <div>
          <BaseButton
            type="submit"
            label="Add To Calendar"
            colour="transparent"
            className="mt-8"
          />
          <BaseButton
            type="submit"
            label="Invite Your Friends"
            colour="transparent"
            className="mt-8"
          />
        </div>
        <Link to="/donate">
          <p>Back to Home</p>
        </Link>
      </div>
    </>
  );
};

export default VolunteerConfirmPage;
