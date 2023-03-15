import React, { useState, useRef } from "react";
import BaseButton from "../comp-commons/BaseButton";
import BaseInput from "../comp-commons/BaseInput";
import Footer from "../comp-commons/Footer";
import { NavLink } from "react-router-dom";
import BaseButtonSelect from "../comp-commons/examplePage/BaseButtonSelect";

const DonationForm = () => {
  const [taxDeduction, setTaxDeduction] = useState(false);
  const [personaChoice, setPersonaChoice] = useState("persona");
  const [donationAmount, setDonationAmount] = useState();
  const [customAmount, setCustomAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState();
  const [particulars, setParticulars] = useState({});

  const [anonymous, setAnonymous] = useState(false);
  const [salutation, setSalutation] = useState("");
  const [particularsName, setParticularsName] = useState("");
  const [particularsNRIC, setParticularsNRIC] = useState("");
  const [particularsMobile, setParticularsMobile] = useState("");
  const [particularsEmail, setParticularsEmail] = useState("");
  const [particularsAddress, setParticularsAddress] = useState("");

  const [data, setData] = useState({
    anonymous: anonymous,
    salutaion: salutation,
    persona: personaChoice,
    taxDeduction: taxDeduction,
    particulars: particulars,
    donationAmount: donationAmount,
    donationFrequency: donationFrequency,
  });

  const [creditNumber, setCreditNumber] = useState();
  const [creditExpiry, setCreditExpiry] = useState("");
  const [creditCCV, setCreditCCV] = useState();
  const [creditName, setCreditName] = useState("");

  const [creditInfo, setCreditInfo] = useState({
    creditNumber: creditNumber,
    creditExpiry: creditExpiry,
    creditCCV: creditCCV,
    creditName: creditName,
  });

  const submitParticulars = () => {
    setParticulars({
      anonymous: anonymous,
      particularsName: particularsName,
      particularsNRIC: particularsNRIC,
      particularsMobile: particularsMobile,
      particularsEmail: particularsEmail,
      particularsAddress: particularsAddress,
    });
  };

  function handleChange(inputId, inputVal) {
    if (inputId === "name") {
      setParticularsName(inputVal);
    }
    if (inputId === "nric") {
      setParticularsNRIC(inputVal);
    }
    if (inputId === "mobile") {
      setParticularsMobile(clearNumber(inputVal));
    }
    if (inputId === "email") {
      setParticularsEmail(inputVal);
    }
    if (inputId === "address") {
      setParticularsAddress(inputVal);
    }
  }

  ///////////////////////////////////////////////////////////////

  // Functions to format credit card inputs
  // Function that removes any non-digits from string
  function clearNumber(value = "") {
    return value.replace(/\D+/g, "");
  }

  // Function to format credit card number input field
  function formatCreditCardNumber(value) {
    // If no value, return it
    if (!value) {
      return value;
    }
    // Remove non-digits
    const clearValue = clearNumber(value);

    // Splits into sections of 4
    let nextValue;
    nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
    return nextValue.trim();
  }
  // Function to format CCV input field
  function formatCCV(value) {
    const clearValue = clearNumber(value);
    return `${clearValue.slice(0, 3)}`;
  }

  // Function to format credit card expiration date input field
  function formatExpirationDate(value) {
    // Remove non-digits
    const clearValue = clearNumber(value);

    // Split and include forward slash
    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }

    return clearValue;
  }

  ///////////////////////////////////////////////////////////////

  function handleChangeCredit(inputId, inputVal) {
    if (inputId === "credit-number") {
      setCreditNumber(formatCreditCardNumber(inputVal));
    }
    if (inputId === "credit-expiry") {
      setCreditExpiry(formatExpirationDate(inputVal));
    }
    if (inputId === "credit-CCV") {
      setCreditCCV(formatCCV(inputVal));
    }
    if (inputId === "credit-name") {
      setCreditName(inputVal);
    }
  }

  const submitDonationForm = (e) => {
    e.preventDefault();
    if (donationAmount) {
      setCustomAmount("");
    }
    setData({
      persona: personaChoice,
      taxDeduction: taxDeduction,
      particulars: particulars,
      donationAmount: customAmount ? customAmount : donationAmount,
      donationFrequency: donationFrequency,
    });
    setCreditInfo({
      creditNumber: creditNumber,
      creditExpiry: creditExpiry,
      creditCCV: creditCCV,
      creditName: creditName,
    });
  };

  return (
    <div className="bg-secondary">
      {/* submitDonationForm submits the entire donation form */}
      <form onSubmit={submitDonationForm} className="mb-24">
        <div>
          <div className="text-center mb-10">
            <h1 className="text-5xl mb-4">
              YOUR SUPPORT CAN <br />
              CHANGE A LIFE
            </h1>

            <p className="text-xl">
              Every donation counts, support now. Your contribution can <br />{" "}
              make a world of difference in the lives of those in need.
            </p>
          </div>

          {/* ///////////////////SELECT PERSONA//////////////////////////// */}

          <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
            <h4 className="text-2xl">
              <img
                src="donateImages/number1.png"
                style={{ display: "inline" }}
                className="mr-2"
              />
              Select Individual/Corporate
            </h4>
            <p className="text-base mb-7 ml-10">
              We are an IPC registered charity, all monetary donations will be
              entitled to tax relief
            </p>

            <div>
              <div className="flex mb-7 ml-10">
                {/* <button>
                  <input
                    type="radio"
                    name="test1"
                    id="test"
                    className=" checked:bg-black hidden"
                  />
                  <label htmlFor="test" className="px-5 py-2.5">
                    Hello
                  </label>
                </button> */}

                <button
                  className=""
                  onClick={() => setPersonaChoice("Individual")}
                >
                  <input
                    type="radio"
                    name="persona"
                    id="individual"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="individual"
                    className="px-5 py-2.5 border border-primary rounded-l-lg"
                  >
                    Individual
                  </label>
                </button>

                <button onClick={() => setPersonaChoice("Corporate")}>
                  <input
                    type="radio"
                    name="persona"
                    id="corporate"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="corporate"
                    className="px-5 py-2.5 border border-primary rounded-r-lg"
                  >
                    Corporate
                  </label>
                </button>
              </div>
              <div className="mb-8 ml-10">
                <input
                  type="checkbox"
                  id="taxDeduct"
                  onClick={() => setTaxDeduction(!taxDeduction)}
                  className="mr-1"
                />
                <label htmlFor="taxDeduct">
                  I would like to receive tax relief for this donation
                </label>
              </div>

              <div className="ml-10">
                <BaseButtonSelect label="Continue" colour="red" />
              </div>
            </div>
          </section>
          <br />

          {/* ///////////////////PARTICULARS FOR TAX RELIEF//////////////////////////// */}

          {/* display taxDeduction form only when checkbox is ticked */}
          {taxDeduction && (
            <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
              <h4 className="text-2xl">
                <img
                  src="donateImages/number2.png"
                  style={{ display: "inline" }}
                  className="mr-2"
                />
                Enter Particulars
              </h4>
              <div className="mb-[1.813rem] ml-10">
                <input
                  type="checkbox"
                  id="anonymous"
                  onClick={() => setAnonymous(!anonymous)}
                  className="mr-1"
                />
                <label htmlFor="anonymous">
                  I would like to receive tax relief for this donation
                </label>
              </div>
              <div className="mb-[1.813rem]">
                <p
                  className="ml-10 mb-0.5"
                  style={{ color: "rgb(138,138,138)" }}
                >
                  Salutation
                </p>
                <button
                  onClick={() => setSalutation("Mr")}
                  value={salutation}
                  className="text-primary"
                >
                  <input
                    type="radio"
                    name="salutation"
                    id="mr"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="mr"
                    className="border border-primary py-0.5 px-2 rounded-l-lg ml-10"
                  >
                    Mr
                  </label>
                </button>
                <button
                  onClick={() => setSalutation("Mrs")}
                  value={salutation}
                  className="text-primary"
                >
                  <input
                    type="radio"
                    name="salutation"
                    id="mrs"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="mrs"
                    className="border border-primary py-0.5 px-2"
                  >
                    Mrs
                  </label>
                </button>
                <button
                  onClick={() => setSalutation("Miss")}
                  value={salutation}
                  className="text-primary"
                >
                  <input
                    type="radio"
                    name="salutation"
                    id="miss"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="miss"
                    className="border border-primary py-0.5 px-2"
                  >
                    Miss
                  </label>
                </button>
                <button
                  onClick={() => setSalutation("Ms")}
                  value={salutation}
                  className="text-primary"
                >
                  <input
                    type="radio"
                    name="salutation"
                    id="ms"
                    className="checked hidden"
                  />
                  <label
                    htmlFor="ms"
                    className="border border-primary py-0.5 px-2 rounded-r-lg"
                  >
                    Ms
                  </label>
                </button>
              </div>
              <div className="mb-8 ml-10">
                <div style={{ display: "flex" }}>
                  <BaseInput
                    type="string"
                    id="name"
                    value={particularsName}
                    handleChange={handleChange}
                    placeholder="Name*"
                    className="w-[20rem]"
                  />
                  <BaseInput
                    type="string"
                    id="nric"
                    value={particularsNRIC}
                    handleChange={handleChange}
                    placeholder="NRIC/FIN Number"
                    className="w-[20rem] ml-24"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <BaseInput
                    type="string"
                    id="mobile"
                    value={particularsMobile}
                    handleChange={handleChange}
                    placeholder="Mobile Number*"
                    className="w-[20rem] mt-9"
                  />
                  <BaseInput
                    type="string"
                    id="email"
                    value={particularsEmail}
                    handleChange={handleChange}
                    placeholder="Email Address*"
                    className="w-[20rem] ml-24 mt-9"
                  />
                </div>
                <div style={{ display: "flex" }} className="mb-9">
                  <BaseInput
                    type="string"
                    id="address"
                    value={particularsAddress}
                    handleChange={handleChange}
                    placeholder="Address"
                    className="w-[46.25rem] mt-9"
                  />
                </div>
                <div onClick={submitParticulars}>
                  <BaseButtonSelect label="Continue" colour="red" />
                </div>
              </div>
            </section>
          )}
          <br />

          {/* /////////////////// CREDIT CARD DETAILS //////////////////////////// */}

          <section className="w-[996px] mx-auto bg-white py-12 pl-16 rounded-2xl">
            <h4 className="text-2xl">
              <img
                src="donateImages/number3.png"
                style={{ display: "inline" }}
                className="mr-2"
              />
              Credit Card Payment
            </h4>
            <p className="text-base mb-7 ml-10">
              All transactions are secured and encrypted
            </p>
            <div className="flex flex-row mb-8 ml-10 mt-8">
              <button
                onClick={() => setDonationAmount(10)}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-amount"
                  id="10"
                  className="checked hidden"
                />
                <label
                  htmlFor="10"
                  className="border border-primary py-2 px-5 rounded-md"
                >
                  $10
                </label>
              </button>
              <button
                onClick={() => setDonationAmount(20)}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-amount"
                  id="20"
                  className="checked hidden"
                />
                <label
                  htmlFor="20"
                  className="border border-primary py-2 px-5 rounded-md"
                >
                  $20
                </label>
              </button>
              <button
                onClick={() => setDonationAmount(50)}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-amount"
                  id="50"
                  className="checked hidden"
                />
                <label
                  htmlFor="50"
                  className="border border-primary py-2 px-5 rounded-md"
                >
                  $50
                </label>
              </button>
              <button
                onClick={() => setDonationAmount(100)}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-amount"
                  id="100"
                  className="checked hidden"
                />
                <label
                  htmlFor="100"
                  className="border border-primary py-2 px-5 rounded-md"
                >
                  $100
                </label>
              </button>
              <button
                onClick={() => setDonationAmount(200)}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-amount"
                  id="200"
                  className="checked hidden"
                />
                <label
                  htmlFor="200"
                  className="border border-primary py-2 px-5 rounded-md"
                >
                  $200
                </label>
              </button>

              <div className="border border-primary h-10 px-5 py-2 rounded-md text-primary">
                <label htmlFor="custom-amount">$</label>
                <input
                  type="text"
                  id="custom-amount"
                  className="focus:outline-none"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mb-8 ml-10">
              <button
                onClick={() => setDonationFrequency("Donate Once")}
                className="text-primary"
              >
                <input
                  type="radio"
                  name="donation-frequency"
                  id="donate-once"
                  className="checked hidden"
                />
                <label
                  htmlFor="donate-once"
                  className="border border-primary h-10 px-5 py-2 rounded-l-lg"
                >
                  Donate Once
                </label>
              </button>
              <button
                onClick={() => setDonationFrequency("Donate Monthly")}
                className="text-primary mr-3.5"
              >
                <input
                  type="radio"
                  name="donation-frequency"
                  id="donate-monthly"
                  className="checked hidden"
                />
                <label
                  htmlFor="donate-monthly"
                  className="border border-primary h-10 px-5 py-2 rounded-r-lg"
                >
                  Donate Monthly
                </label>
              </button>
            </div>
            <div className="mb-8 ml-10">
              <div className="flex space-x-5">
                <BaseInput
                  type="string"
                  id="credit-number"
                  value={creditNumber}
                  handleChange={handleChangeCredit}
                  placeholder="Credit Card Number"
                  className="w-[20rem]"
                />
                <BaseInput
                  type="string"
                  id="credit-expiry"
                  value={creditExpiry}
                  handleChange={handleChangeCredit}
                  placeholder="MM/YY"
                  className="w-[6rem] ml-11"
                />
                <BaseInput
                  type="string"
                  id="credit-CCV"
                  value={creditCCV}
                  handleChange={handleChangeCredit}
                  placeholder="CCV"
                  className="w-[6rem] ml-11"
                />
              </div>

              <div>
                <BaseInput
                  type="string"
                  id="credit-name"
                  value={creditName}
                  handleChange={handleChangeCredit}
                  placeholder="Name of Cardholder"
                  className="w-[40.063rem] mt-9"
                />
              </div>
            </div>
            <div className="mb-8 ml-10">
              <NavLink to="/thankyou">
                <BaseButtonSelect type="submit" label="Donate" colour="red" />
              </NavLink>
              {/* <BaseButtonSelect
                type="submit"
                label="Test-Donate"
                colour="red"
              /> */}
            </div>
          </section>
        </div>
      </form>
      <Footer />
    </div>
  );
};
// npm i

export default DonationForm;
