import { useEffect, useState } from "react";
import styles from "./DonatePage.module.css";
import BaseButton from "../comp-commons/BaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AccordianWrapper from "../comp-commons/AccordianWrapper";
import donateFAQ from "./datasets/donateFAQ";
import Footer from "../comp-commons/Footer";
import { NavLink } from "react-router-dom";

function DonatePage() {
  const [beneficiaries, setBeneficiaries] = useState(330); // need to use useEffect to change beneficiaries value each time option changes
  const [selection, setSelection] = useState("100");

  const changeAmount = () => {
    setBeneficiaries(selection * 3.3);
  };

  const handleSelectChange = (event) => {
    setSelection(event.target.value);
  };

  useEffect(() => {
    changeAmount();
  }, [selection]);

  return (
    <div className="bg-secondary">
      <div className="text-center bg-secondary">
        <h1 className="text-5xl mx-1.5 mb-1.5">
          YOUR DONATION MAKES A DIFFERENCE
        </h1>
        <p className="text-lg mb-12">
          With your support, we are able to provide meals and support services
          to those who are in need. Your <br /> donation ensures that no one
          goes hunrgy and that no one goes without the basic necessities of
          life.
        </p>
        <img
          src="/donateImages/donationMain.png"
          className={`mx-auto ${styles.topImage} mb-16`}
        />
        <br />
        <h1 className="mb-9">GIVE THE GIFT OF SUPPORT</h1>
        <br />
        {/* // very useful! <form action=""></form> the action specifies where the form data is sent, value is a url */}

        <div className="mb-16 text-primary">
          <p className="text-2xl">
            Every
            <select
              id="selection"
              onChange={handleSelectChange}
              className="text-5xl px-4 mx-2 rounded-2xl"
            >
              {/* // IMPORTANT!!! option value is linked to event.target.value of
            handleSelectChange */}
              <option value="100">$100</option>
              <option value="20">$20</option>
              <option value="50">$50</option>
              <option value="200">$200</option>
            </select>
            donated provides{" "}
            <span className="text-5xl mx-2 underline decoration-solid">
              {beneficiaries}
            </span>{" "}
            beneficiaries with meals
          </p>
        </div>
        <br />
        <div
          className={`mx-auto ${styles.donationModes} bg-white p-12 mb-16 rounded-2xl`}
        >
          <h1 className="text-3xl mb-1.5">READY TO MAKE A DONATION?</h1>
          <p className="mb-10 text-xl">We offer 4 payment methods</p>
          <div className={`mx-auto ${styles.container} space-x-1.5`}>
            {/* <li
              className={`${styles.card} ${styles.QRCode}`}
              onMouseEnter={displayQRCode}
              onMouseLeave={displayPayNowPrompt}
            >
              <img
                src="./donateImages/QRCodeCover.png"
                className="mx-20 mt-10 mb-4"
              />
              <p className="">PayNow QR</p>
              <div className="mb-7 mt-3">
                <BaseButton label="Donate" colour="red" />
              </div>
            </li> */}

            <li className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="./donateImages/QRCodeCover.png"
                    className="mx-20 mt-10 mb-4"
                  />
                  <p className="">PayNow QR</p>
                  <div className="mb-7 mt-3">
                    <BaseButton label="Donate" colour="red" />
                  </div>
                </div>
                <div className={styles.flipCardBack}>
                  <img
                    src="./donateImages/QRCode-content.png"
                    className="mt-10 mb-4"
                    width="100px"
                    style={{ marginLeft: "75px", marginRight: "75px" }}
                  />
                  <p>Willing Hearts CLG Ltd.</p>
                  <p>UEN: 202228129C</p>
                  <p>*Ineligible for tax relief</p>
                </div>
              </div>
            </li>

            <li className={`${styles.card} rounded-2xl`}>
              <img src="./donateImages/creditcard.png" className="mx-16 mt-7" />
              <p className="">Credit/Debit Card</p>
              <div className="mb-7 mt-3">
                <NavLink to="/donateForm">
                  <BaseButton label="Donate" colour="red" />
                </NavLink>
              </div>
            </li>
            <li className={`${styles.card} rounded-2xl`}>
              <img
                src="./donateImages/givingSG.png"
                className="mx-12 mt-20 mb-10"
              />
              <p className="">Giving.sg</p>
              <a
                href="https://www.giving.sg/willing-hearts"
                target="_blank"
                className="mb-4"
              >
                <div className="mb-7 mt-3">
                  <BaseButton label="Donate" colour="red" />
                </div>
              </a>
            </li>

            <li className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="./donateImages/cash.png"
                    className="mx-20 mt-10 mb-3"
                  />
                  <p>Cash/Cheque</p>
                  <div className="mb-7 mt-3">
                    <BaseButton label="Donate" colour="red" />
                  </div>
                </div>
                <div className={styles.flipCardBack}>
                  <p className="mt-14">
                    Please make cheque <br /> payable to <br />
                    "Willing Hearts" <br /> with your Name, NRIC & Contact No.
                    to <br />
                    1 Lorong J Telok Kurau <br /> Singapore 425792
                  </p>
                </div>
              </div>
            </li>

            {/* <li className={styles.card}>
              <img src="./donateImages/cash.png" className="mx-20 mt-10 mb-3" />
              <p>Cash/Cheque</p>
              <div className="mb-7 mt-3">
                <BaseButton label="Donate" colour="red" />
              </div>
            </li> */}
          </div>
        </div>

        <div
          className={`bg-white ${styles.donateInKind} mx-auto py-12 rounded-2xl`}
        >
          <h1 className="text-3xl mb-2">PREFER TO DONATE IN KIND?</h1>
          <p className="text-xl mb-4">
            Here are some recommended list of items
          </p>
          <img
            src="./public/donateImages/ingredients.png"
            className="mx-auto mb-14"
          />
          <div className="">
            <p className="text-base mb-4">
              You may wish to donate directly to Willing Hearts at
            </p>
            <h3 className="text-xl">
              No.1 Lorong J Telok Kurau Singapore 425792
            </h3>
            <h3 className="text-xl mb-4">
              We are open from 4.30 am to 3.00 pm
            </h3>
            <p className="text-base">
              For donations in large quantities of provisions and/or frozen
              ingredients, please click here
            </p>
          </div>
        </div>
        <div className=" py-20">
          <h1>
            WHAT OTHERS <br /> SAY
          </h1>
          <br />
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
                <img src="./donateImages/reviews.png" />
              </div>
              <div>
                <img src="./donateImages/reviews2.png" />
              </div>
            </Carousel>
          </section>
        </div>
      </div>
      <div className="mb-20">
        <AccordianWrapper title="FAQ" contentDataset={donateFAQ} />
      </div>
      <Footer />
    </div>
  );
}

export default DonatePage;
