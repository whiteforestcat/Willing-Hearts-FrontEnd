import React from "react";
import { Link, NavLink } from "react-router-dom";
// import styles from "./NavBar.module.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div className="flex">
            <img
              className="mr-5 ml-3"
              src="/Images/NavBar/WillingHearts_logo.png"
            />
            <div className="mt-4 navbar-logo-text noWrap">WILLING HEARTS</div>
          </div>
        </Link>

        <ul className="nav-items">
          <div className="w-[600px]"></div>
          <li className="dropdown dropdown-hover ">
            <NavLink to="/about-us">
              <label tabIndex={0} className=" bg-{secondary} m-1 noWrap">
                ABOUT US
              </label>
            </NavLink>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow  rounded-box w-25"
            >
              <li>
                <NavLink to="/projects">
                  <a>Projects</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/news">
                  <a>News</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq">
                  <a>FAQ</a>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="grey">
            <NavLink
              to="/donate"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              DONATE
            </NavLink>
          </li>
          <li className="grey">
            <NavLink
              to="/volunteer"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              VOLUNTEER
            </NavLink>
          </li>
          <li className="noWrap grey">
            <NavLink
              to="/contact-us"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              CONTACT US
            </NavLink>
          </li>
          <div className="w-[50px]"></div>
          <li>
            <NavLink
              to="/login"
              // className={(navData) => (navData.isActive ? styles.active : "")}
            >
              <img src="/Images/NavBar/person.png" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
