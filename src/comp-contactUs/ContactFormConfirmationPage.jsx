import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../comp-commons/BaseButton";
import Footer from "../comp-commons/Footer";

const ContactFormConfirmationPage = () => {
  return (
    <div className="bg-secondary h-screen text-greyscale1 pt-24 flex flex-col">
      {/* Confirmation message */}
      <section className="w-[1000px] mx-auto text-center flex-grow">
        <img
          src="../../public/images/common/smiling-emoji.png"
          className="mx-auto mb-5"
        />
        <h1 className="mb-4">THANKS FOR REACHING OUT</h1>
        <p className="mb-8">
          We have receieved your enquiry. Our team will get back to you within 1
          working day.
          <br /> If you require urgent assistance, kindly contact our hotline at
          +65 6476 5822.
        </p>
        <Link to="/">
          <BaseButton label="Back To Home" colour="transparent" />
        </Link>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ContactFormConfirmationPage;
