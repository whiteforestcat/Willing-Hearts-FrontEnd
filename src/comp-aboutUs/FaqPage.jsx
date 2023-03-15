import React from "react";
import AccordianWrapper from "../comp-commons/AccordianWrapper";
import Footer from "../comp-commons/Footer";
import volunteerMainFaq from "../comp-volunteer/datasets/volunteerMainFaq";
import donationsFaq from "../comp-volunteer/datasets/donationsFaq";

const FaqPage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      <div className="text-center mb-20">
        <h1 className="mb-6">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-xl">
          Here you will find answers to questions about our organisation,
          volunteering, donating to us
          <br /> and other topics related to our work
        </p>
      </div>

      {/* Section 2: FAQ on Volunteer */}
      <div className="mb-20">
        <AccordianWrapper
          title="VOLUNTEERS"
          contentDataset={volunteerMainFaq}
        />
      </div>

      {/* Section 3: FAQ on Donations */}
      <div className="mb-40">
        <AccordianWrapper title="DONORS" contentDataset={donationsFaq} />
      </div>

      {/* Section 4: Footer */}
      <Footer />
    </div>
  );
};

export default FaqPage;
