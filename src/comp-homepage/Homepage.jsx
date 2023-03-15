import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BaseButton from "../comp-commons/BaseButton";
import AccordianWrapper from "../comp-commons/AccordianWrapper";
import Footer from "../comp-commons/Footer";
import { NavLink, Link } from "react-router-dom";
import otherProjectsDataset from "./datasets/otherProjsDataset";
import OtherProjsCard from "./Components/OtherProjsCard";

const Homepage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-8">
      {/* section 1 */}
      <section className="text-center flex flex-row space-x-6 justify-center">
        <img
          src="Images/Homepage/Soup_kitchen.png"
          className="rounded-2xl w-[384px] mb-32 ml-5 mr-3"
        />
        <img
          src="Images/Homepage/Offering_help.png"
          className="rounded-2xl w-[279px] h-[422px] mt-36"
        />
        <div className="my-auto">
          <h1 className="mb-10 ml-16 ">
            WE PROVIDE
            <br />
            WARM MEALS TO
            <br />
            ANYONE IN NEED
          </h1>
          <h3 className="mb-10 ml-16">
            We have a "no question asked" policy,
            <br />
            just as you would for your own family.
          </h3>
        </div>
      </section>

      {/* section 2 */}
      <div className="bg-white py-14">
        <section className="w-[1200px] mx-auto text-center">
          <div className="flex flex-row space-x-20 mx-auto mb-5">
            <div className="w-[370px]">
              <img
                src="Images/Homepage/Cartoon_Meals1.png"
                className="mx-auto  mt-6"
              />
              <h1 className="text-3xl mb-4 font-bold">11,000</h1>
              <p className="">Meals A Day</p>
            </div>
            <div className="w-[370px]">
              <img
                src="Images/Homepage/Cartoon_beneficiaries1.png"
                className="mx-auto mt-2"
              />
              <p className="text-3xl mb-4 font-bold">6,000</p>
              <p className="">Beneficiaries</p>
            </div>
            <div className="w-[370px]">
              <img
                src="Images/Homepage/Cartoon_Locations1.png"
                className="mx-auto mb-3 mt-2"
              />
              <p className="text-3xl mb-4 font-bold">70</p>
              <p className="">Locations Islandwide</p>
            </div>
            <div className="w-[370px]">
              <img
                src="Images/Homepage/Cartoon_hearts1.png"
                className="mx-auto mb-3"
              />
              <p className="text-3xl mb-4 font-bold">365</p>
              <p className="">Days, We Are Open!</p>
            </div>
          </div>
        </section>
      </div>

      {/* section 3 */}
      <div className="py-20">
        <section className="w-[1000px] mx-auto text-center">
          <h1 className="mb-10">
            WE ARE A <br /> COMMUNITY-BASED ORGANISATION
          </h1>
          <h3 className="mb-10">
            We wouldn't be here today without the help of our family,
            neighbours, and everyone in the community.
            <br />
            We believe in looking out for each other, you'll never know when you
            might need a helping hand.
          </h3>
          <div className="flex mx-auto justify-center">
            <Link to="/volunteer">
              <BaseButton className="mr-3" label="Volunteer" colour="red" />
            </Link>
            <Link to="/donate">
              <BaseButton className="ml-3" label="Donate" colour="white" />
            </Link>
          </div>
          <br />
          <img
            src="Images/Homepage/community_volunteer.png"
            className="rounded-2xl mb-16"
          />
        </section>
      </div>

      {/* section 4 */}
      <div className="bg-white py-20">
        <section className="w-[1000px] mx-auto text-center">
          <h1 className="mb-10">
            MAKING A DIFFERENCE <br /> IS A COLLECTIVE EFFORT
          </h1>
          <h3 className="mb-10">
            Established in 2005, out mission has remained unchanged: to provide
            meals to those in need. We are proud
            <br />
            to have received the IPC (Institution of Public Character) status in
            2022, recognising our commitment to
            <br />
            serving our community.
          </h3>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            className="w-[1000px]"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="mr-9 self-center"
                  />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-9 self-center"
                  />
                </div>
              );
            }}
          >
            <div>
              <img src="Images/Homepage/GroupLogos.png" />
            </div>
            <div>
              <img src="Images/Homepage/GroupLogos.png" />
            </div>
            <div>
              <img src="Images/Homepage/GroupLogos.png" />
            </div>
          </Carousel>
        </section>
      </div>

      {/* section 5 */}
      <div className=" py-20">
        <section className="flex flex-row justify-center">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            className="w-[1000px]"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="mr-9 self-center"
                  />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-9 self-center"
                  />
                </div>
              );
            }}
          >
            <div>
              <img src="Images/Homepage/volunteer-carousell.png" />
              <NavLink to="/volunteer" className="relative bottom-32 left-36">
                <BaseButton label="Volunteer Now" colour="red" />
              </NavLink>
            </div>
            <div>
              <img src="Images/Homepage/volunteer-carousell.png" />
              <NavLink to="/volunteer" className="relative bottom-32 left-36">
                <BaseButton label="Volunteer Now" colour="red" />
              </NavLink>
            </div>
            <div>
              <img src="Images/Homepage/volunteer-carousell.png" />
              <NavLink to="/volunteer" className="relative bottom-32 left-36">
                <BaseButton label="Volunteer Now" colour="red" />
              </NavLink>
            </div>
          </Carousel>
        </section>
      </div>

      {/* section 6*/}
      <div className="bg-white py-16">
        <section className="w-[1200px] mx-auto text-center">
          <h1 className="mb-10">OTHER PROJECTS</h1>
          <div className="flex flex-row justify-center space-x-36 mb-20">
            {otherProjectsDataset.map((project) => {
              return (
                <OtherProjsCard
                  key={project.id}
                  image={project.image}
                  projectName={project.projectName}
                  projectContent={project.projectContent}
                />
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
