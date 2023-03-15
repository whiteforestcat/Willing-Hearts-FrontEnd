import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "./BaseInput";
import BaseTextArea from "./BaseTextArea";
import BaseButton from "./BaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle changes in user input
  function handleChange(inputId, inputVal) {
    if (inputId === "name") {
      setName(inputVal);
    } else if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "subject") {
      setSubject(inputVal);
    } else if (inputId === "message") {
      setMessage(inputVal);
    }
  }

  // Function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/contact-us/confirmation-page");
  }

  return (
    <div className="w-[930px] mx-auto text-greyscale1">
      {/* Form section */}
      <div className="flex flex-row space-x-14">
        {/* User input section */}
        <form className="w-[590px] space-y-9" onSubmit={handleSubmit}>
          <BaseInput
            type="string"
            id="name"
            value={name}
            handleChange={handleChange}
            required={true}
            placeholder="Name*"
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
            id="subject"
            value={subject}
            handleChange={handleChange}
            required={true}
            placeholder="Subject*"
            className="mt-9"
          />
          <BaseTextArea
            rows="5"
            id="message"
            value={message}
            handleChange={handleChange}
            required={true}
            placeholder="Your message*"
            className="mt-9"
          />
          <BaseButton
            type="submit"
            label="Submit"
            colour="transparent"
            className="mt-8"
          />
        </form>
        {/* contact info section */}
        <div className="space-y-8 pt-6">
          {/* Hotline */}
          <div className="flex flex-row">
            <div className="mr-3">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <p className="text-base">Hotline</p>
              <p className="text-xl">+65 6476 5822</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-row">
            <div className="mr-3">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </div>
            <div>
              <p className="text-base">Email</p>
              <p className="text-xl">admin@willinghearts.org.sg</p>
            </div>
          </div>
          {/* Address */}
          <div className="flex flex-row">
            <div className="mr-3">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div>
              <p className="text-base">Address</p>
              <p className="text-xl">No. 1 Lorong J Telok Kurau</p>
              <p className="text-xl">Singapore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
