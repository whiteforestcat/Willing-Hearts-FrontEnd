import React from "react";
import Footer from "../comp-commons/Footer";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="bg-secondary">
      <div className="text-center">
        <img src="./donateImages/thankyou.png" className="mx-auto mb-8" />
        <h1 className="text-5xl mb-8">
          THANK YOU FOR YOUR GENEROSITY AND SUPPORT
        </h1>
        <p className="text-xl mb-4">
          Your support means the world to us and to those we serve. We truly
          appreciate it. You will <br />
          receive an email with details of your donation
        </p>
        <div className="mb-36">
          <NavLink to="/" className="text-xl ">
            Back to Home
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
