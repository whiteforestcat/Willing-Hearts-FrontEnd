import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../comp-commons/BaseInput";
import BaseButton from "../comp-commons/BaseButton";
import Footer from "../comp-commons/Footer";

const VolunteerForm = (props) => {
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [organisation, setOrgnaisation] = useState("");
  const [occupation, setOccupation] = useState("");

  // const [details, setDetails] = useState([]);

  // Function to handle changes in user input
  function handleChange(inputId, inputVal) {
    if (inputId === "name") {
      setName(inputVal);
    } else if (inputId === "mobileNumber") {
      setMobileNumber(inputVal);
    } else if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "password") {
      setPassword(inputVal);
    } else if (inputId === "confirmPassword") {
      setConfirmPassword(inputVal);
    } else if (inputId === "maleGender") {
      setGender("Male");
    } else if (inputId === "femaleGender") {
      setGender("Female");
    } else if (inputId === "dateOfBirth") {
      setDateOfBirth(inputVal);
    } else if (inputId === "organisation") {
      setOrgnaisation(inputVal);
    } else if (inputId === "occupation") {
      setOccupation(inputVal);
    }
  }
  const createUser = async (details) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/users/create-new-user-or-sign-in",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      if (!res.ok) {
        throw new Error();
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Account already exists! Email or password do not match!");
      throw error;
    }
  };

  const createAppt = async (volunteerDeets) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5001/volunteer-slots/new-sign-up",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteerDeets),
        }
      );

      if (!res.ok) {
        throw new Error();
      }
      // console.log(res.data);
    } catch (error) {
      // console.log(error);
      alert(
        "You have an exisiting volunteer assignment at your selected date and time!"
      );
    }
  };

  // Function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const day = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getFullYear();
    const modifiedDate = `${year}-${month + 1}-${day}`;

    console.log(modifiedDate);

    const volunteerDeets = {
      date: modifiedDate,
      role: props.roles,
      timing: props.timeSlot,
      email: email,
      qty: props.qty,
      type_of_volunteer: "individual",
    };

    const details = {
      name: name,
      mobile_number: mobileNumber,
      email: email,
      password: password,
      gender: gender,
      date_of_birth: dateOfBirth,
      organisation: organisation,
      occupation: occupation,
    };

    console.log(volunteerDeets);

    try {
      await createUser(details);

      await createAppt(volunteerDeets);
    } catch (error) {
      console.log(error);
    }
    // navigate("/volunteer/volunteer-confirmation", {
    //   date: props.date,
    //   timeSlot: props.timeSlot,
    // });
    // .catch(alert("Account already exists! Email or password do not match!"));
  };

  return (
    <div>
      <div className="w-[1000px] mx-auto text-greyscale1 bg-white rounded-2xl">
        {/* Form section */}
        <div className="flex flex-row space-x-14 px-16">
          {/* User input section */}
          <form className="w-[590px] space-y-9" onSubmit={handleSubmit}>
            <div className="py-10">
              <div className="flex mb-10">
                <img
                  src="../../donateImages/number4.png"
                  style={{ display: "inline" }}
                  className="mr-2"
                />
                <h1 className="text-2xl">Enter Particulars</h1>
              </div>
              <div className="ml-9">
                <div className="flex mb-4">
                  <div>
                    <BaseInput
                      type="string"
                      id="name"
                      value={name}
                      handleChange={handleChange}
                      required={true}
                      placeholder="Name*"
                      className="w-[22.188rem]"
                    />
                    <BaseInput
                      type="string"
                      id="mobileNumber"
                      value={mobileNumber}
                      handleChange={handleChange}
                      required={true}
                      placeholder="MobileNumber*"
                      className="mt-9"
                    />
                    <BaseInput
                      type="email"
                      id="email"
                      value={email}
                      handleChange={handleChange}
                      required={true}
                      placeholder="Email*"
                      className="mt-9"
                    />
                    <BaseInput
                      type="string"
                      id="password"
                      value={password}
                      handleChange={handleChange}
                      required={true}
                      placeholder="Password*"
                      className="mt-9"
                    />
                    <BaseInput
                      type="string"
                      id="confirmPassword"
                      value={confirmPassword}
                      handleChange={handleChange}
                      required={true}
                      placeholder="Confirm Password*"
                      className="mt-9"
                    />
                  </div>
                  <div className="ml-24">
                    <div>
                      <p className="mb-0.5">Gender</p>

                      <button>
                        <input
                          type="radio"
                          name="genderRadio"
                          id="maleGender"
                          className="checked hidden"
                        />
                        <label
                          htmlFor="maleGender"
                          className="border border-primary py-0.5 px-2 rounded-l-lg"
                        >
                          M
                        </label>
                      </button>
                      <button>
                        <input
                          type="radio"
                          name="genderRadio"
                          id="femaleGender"
                          className="checked hidden"
                        />
                        <label
                          htmlFor="femaleGender"
                          className="border border-primary py-0.5 px-2 rounded-r-lg"
                        >
                          F
                        </label>
                      </button>
                      {/* <br />
                  <input type="radio" name="genderRadio" id="maleGender" />
                  <label>M</label>
                  <input type="radio" name="genderRadio" id="femaleGender" />
                  <label>F</label> */}
                    </div>

                    <BaseInput
                      type="date"
                      id="dateOfBirth"
                      value={dateOfBirth}
                      handleChange={handleChange}
                      required={false}
                      placeholder="Date of Birth(DD/MM/YY)"
                      className="mt-9 w-[22.188rem]"
                    />
                    <BaseInput
                      type="string"
                      id="organisation"
                      value={organisation}
                      handleChange={handleChange}
                      required={false}
                      placeholder="Organisation"
                      className="mt-9"
                    />
                    <BaseInput
                      type="string"
                      id="occupation"
                      value={occupation}
                      handleChange={handleChange}
                      required={false}
                      placeholder="Occupation"
                      className="mt-9"
                    />
                  </div>
                </div>
                <label>
                  By clicking sign up, you aree to Willing Hearts' Privacy
                  Policy and Terms of Use
                </label>
                <BaseButton
                  type="submit"
                  label="Sign Up"
                  colour="red"
                  className="mt-8"
                />
              </div>
            </div>
          </form>
        </div>
        {/* {console.log(volunteerDeets)} */}
      </div>
    </div>
  );
};

export default VolunteerForm;
