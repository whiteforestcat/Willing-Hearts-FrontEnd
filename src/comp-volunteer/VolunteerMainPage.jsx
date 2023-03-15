import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BaseButton from "../comp-commons/BaseButton";
import AccordianWrapper from "../comp-commons/AccordianWrapper";
import Footer from "../comp-commons/Footer";
import volunteerMainFaq from "./datasets/volunteerMainFaq";

const VolunteerMainPage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      {/* section 1 */}
      <section className="w-[1000px] mx-auto text-center pb-20">
        <h1 className="mb-10">
          VOLUNTEERING AT
          <br />
          WILLING HEARTS IS{" "}
          <span className="bg=[url(public/Images/Common/highlight-circle.png)]">
            SIMPLE
          </span>
        </h1>
        <h3 className="mb-6">
          Just bring a similing face, two helping hands, a willing heart and the
          question "How can I help
          <br />
          today?" That's all it takes to make a difference in your community.
        </h3>
        <Link to="/volunteer/volunteer-form">
          <BaseButton label="Join Us" colour="red" className="mb-14" />
        </Link>
        <img
          src="/Images/VolunteerPage/founder-teaching-students.png"
          className="rounded-2xl"
        />
      </section>

      {/* section 2 */}
      <div className="bg-white py-20">
        <section className="w-[1200px] mx-auto text-center">
          <h1 className="mb-4">VOLUNTEER ROLES</h1>
          <p className="mb-16">
            There will always be someone who needs a helping hand at the soup
            kitchen. Someone will grab you along the way,
            <br />
            asking for help.
          </p>
          <div className="flex flex-row space-x-20 mx-auto mb-14">
            <div className="w-[370px]">
              <img
                src="/Images/VolunteerPage/cartoon-ingredients.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">PREPERATION OF INGREDIENTS</p>
              <p className="">
                This involves chopping vegetables, prepping
                <br />
                meat, opening bottles and packets of sauces,
                <br />
                cooking the food, and other tasks for the
                <br />
                meals to be ready and deliverd on time.
              </p>
            </div>
            <div className="w-[370px]">
              <img
                src="/Images/VolunteerPage/cartoon-pots-and-pans.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">CLEANING & WASHING</p>
              <p className="">
                Often the most overlooked part of the
                <br />
                whole process. Used trays, covers,
                <br />
                baskets, cooking utensils, pots and pans
                <br />
                all need washing.
              </p>
            </div>
            <div className="w-[370px]">
              <img
                src="/Images/VolunteerPage/cartoon-bowl.png"
                className="mx-auto mb-6"
              />
              <p className="text-2xl mb-4">PACKING LUNCH BOXES</p>
              <p className="">
                This is a relatively simple task: line up
                <br />
                food containers, scoop portions of rice
                <br />
                along with other dishes of the day, cover
                <br />
                the containers and put them into the
                <br />
                delivery basket.
              </p>
            </div>
          </div>
          <hr />
          <div className="w-[370px] mx-auto mt-14">
            <img
              src="/Images/VolunteerPage/cartoon-car.png"
              className="mx-auto mb-6"
            />
            <p className="text-2xl mb-4">DRIVER</p>
            <p className="">
              Food distribution is crucial for Willing
              <br />
              Hearts to provide their daily meal service
              <br />
              and ensure that beneficiaries have food to
              <br />
              eat throughout the year.
            </p>
          </div>
        </section>
      </div>

      {/* section 3 */}
      <section className="text-center py-20">
        <h1 className="mb-10">WE ARE OPEN DAILY!</h1>
        <h3 className="mb-8">
          The Soup Kitchen is open every day, 365 days a year including Weekends
          and Public Holidays.
        </h3>
        <div className="w-fit mx-auto text-left">
          <h3 className="mb-2">These are our volunteer timings:</h3>
          <ul className="text-xl list-disc list-inside">
            <li>Early Morning (5am - 9am)</li>
            <li>Morning (9am - 1pm)</li>
            <li>Afternoon (1pm - 5pm)</li>
          </ul>
        </div>
      </section>

      {/* section 4 */}
      <div className="bg-white py-20">
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
              <img src="/Images/VolunteerPage/carousel-cisco.png" />
            </div>
            <div>
              <img src="/Images/VolunteerPage/carousel-cisco.png" />
            </div>
            <div>
              <img src="/Images/VolunteerPage/carousel-cisco.png" />
            </div>
          </Carousel>
        </section>
      </div>

      {/* section 5 */}
      <div className="py-20">
        <section className="w-[1000px] mx-auto text-center">
          <img
            src="/Images/VolunteerPage/large-group-of-volunteers.png"
            className="rounded-2xl mb-16"
          />
          <h1 className="mb-10">FOR VOLUNTEERING IN GROUPS</h1>
          <h3 className="mb-10">
            Join us for a day or multiple days a week. At Willing Hearts, we
            offer a flexible schedule, so you don't have
            <br />
            to worry about being unable to commit in order to contribute.
          </h3>
          <h3 className="mb-5">
            If you are planning to come with a large group, please contact us.
          </h3>
          <Link to="/contact-us">
            <BaseButton label="Contact Us" colour="red" />
          </Link>
        </section>
      </div>

      {/* section 6 */}
      <div className="bg-white py-20">
        <section className="text-center flex flex-row space-x-6 justify-center">
          <img
            src="/Images/VolunteerPage/student-with-book.png"
            className="rounded-2xl w-[282px] mt-16"
          />
          <img
            src="/Images/VolunteerPage/two-students-in-red.png"
            className="rounded-2xl w-[282px] mb-16"
          />
          <div className="my-auto">
            <h1 className="mb-10">WE GRANT CIP HOURS!</h1>
            <h3 className="mb-10">
              At Willing Hearts, we recognize the importance of community
              <br />
              involvement and service for our youth. That's why we offer the
              <br /> opportunity for students to earn Community Involvement
              <br />
              Program (CIP) hours by participating in our volunteer program.
            </h3>
            <h3 className="mb-5">
              Click <span className="underline">here</span> to download the log
              sheet.
            </h3>
            <Link to="/volunteer/volunteer-form">
              <BaseButton label="Volunteer Now" colour="red" />
            </Link>
          </div>
        </section>
      </div>

      {/* section 7 */}
      <section className="py-20">
        <AccordianWrapper title="FAQ" contentDataset={volunteerMainFaq} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VolunteerMainPage;
