import React, { useState } from "react";
import CalendarDisp from "./CalendarDisp";
import Footer from "../comp-commons/Footer";

const Volunteer = () => {
  const [roles, setRoles] = useState("");
  const [dispCal, setDispCal] = useState(false);

  const getRole = (e) => {
    if (e.target.id === "soup") {
      console.log(e.target.id)
      setRoles("soupkitchen");
      setDispCal(true);
    } else if (e.target.id === "driver") {
      console.log(e.target.id);
      setRoles("driver");
      setDispCal(true);
    }
  };

  return (
    <div className="bg-secondary text-greyscale1">
      
      <div className="w-[1000px] mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4">
            SIGN UP AS A VOLUNTEER
            <br />& MAKE AN IMPACT
          </h1>
          <h3 className="mb-12">
            You don't have to look far to find someone in need. You
            <br /> can make a real difference in the lives of those in your
            <br /> own community.
          </h3>
        </div>
        <section className="bg-white rounded-md mb-10 py-10">
          <div className="flex px-16">
            <img
              src="../../donateImages/number1.png"
              style={{ display: "inline" }}
              className="mr-2"
            />
            <h1 className="text-2xl">Select Volunteer Role</h1>
          </div>
          <div className="flex px-16">
            <p className="ml-9 text-base mb-6">
              *Driver Volunteer must have vehicle of their own
            </p>
          </div>
          <div className="flex px-16">
            <button className="ml-9" onClick={getRole}>
              <input
                type="radio"
                name="volunteer-position"
                id="soup"
                className="checked hidden"
              />
              <label
                htmlFor="soup"
                className="px-5 py-2.5 border border-primary rounded-l-lg"
              >
                Soup Kitchen Volunteer
              </label>
            </button>
            <button onClick={getRole}>
              <input
                type="radio"
                name="volunteer-position"
                id="driver"
                className="checked hidden"
              />
              <label
                htmlFor="driver"
                className="px-5 py-2.5 border border-primary rounded-r-lg"
              >
                Driver Volunteer
              </label>
            </button>
          </div>

          {/* <button type="button" id="soup" onClick={getRole}>
            Soup Kitchen Volunteer
          </button>
          <button type="button" id="driver" onClick={getRole}>
            Driver Volunteer
          </button> */}
        </section>
        <section>{dispCal && <CalendarDisp roles={roles} />}</section>
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default Volunteer;
