import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <img
        src="../../public/images/common/footer-stroke.png"
        className="w-11/12 mx-auto"
      />
      <div className="flex flex-row">
        {/* Links */}
        <div className="flex flex-row flex-grow text-xl space-x-16 text-greyscale1 ml-40 mt-20 mb-16">
          {/* Get to know us */}
          <div>
            <h4 className="text-primary font-bold">Get to Know Us</h4>
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/about-us">
                <p>About Us</p>
              </Link>
              <p>Financial Statements</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          {/* Connect With Us */}
          <div>
            <h4 className="text-primary font-bold">Connect With Us</h4>
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/faq">
                <p>FAQ</p>
              </Link>
              <Link to="/contact-us">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
          {/* Get Involved */}
          <div>
            <h4 className="text-primary font-bold">Get Involved</h4>
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/volunteer">
                <p>Volunteer</p>
              </Link>
              <Link to="/donate">
                <p>Donate</p>
              </Link>
              <Link to="/projects">
                <p>Projects</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex flex-row text-[42px] text-primary space-x-4 mr-28 mb-24 items-end">
          <a
            href="https://www.facebook.com/WillingHeartsSingapore/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            href="https://www.instagram.com/willingheartssg/?hl=en"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
        </div>
      </div>
      {/* Red border */}
      <div className="h-4 bg-primary"></div>
    </div>
  );
};

export default Footer;
