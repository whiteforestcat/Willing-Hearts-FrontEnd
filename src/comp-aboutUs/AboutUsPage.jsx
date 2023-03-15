import React from "react";
import JourneyCard from "./Components/JourneyCard";
import Footer from "../comp-commons/Footer";
import homeDataset from "../comp-volunteer/datasets/home";

const AboutUsPage = () => {
  const disp = homeDataset.map((home) => {
    return (
      <JourneyCard
        key={home.id}
        image={home.image}
        homeName={home.homeName}
        year={home.year}
        content={home.content}
      />
    );
  });

  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      {/* Section 1: Our story */}
      <div className="w-[1000px] mx-auto text-center pb-20">
        <h1>OUR STORY</h1>
        <br />
        <h3>
          We are Willing hearts and we run a soup kitchen that provides around
          11,000 daily meals, island-wide, 365 <br />
          days a year (even on public holidays). we have a "no questions asked"
          policy, just as you would for your own
          <br /> family. That means that we provide meals to <b>anyone </b>
          who needs it.
        </h3>
        <br />
        <h3>
          Our belief is that every deserves access to a warm meal and we are
          committed to serving our community
          <br /> with compassion and respect. That's the mission of Willing
          Hearts when it was founded in 2005. We were
          <br /> awarded IPC (Institution of Public Character) status in 2022.
        </h3>
        <br />
        <h3>
          As we are a community-based orgnaisation wholly run by volunteers, we
          hope to establish partnerships with
          <br /> different orgnaisations. These organisations could be
          businesses as well as individual volunteers to support the
          <br /> Willing Hearts soup kitchen and the causes that we champion.
        </h3>
      </div>

      {/* Section 2: Our Journey */}
      <div className="bg-white py-20">
        <div className="w-[1200px] mx-auto">
          <h1 className="text-center mb-14">Our Journey</h1>
          <div className="grid grid-cols-3 gap-x-0 gap-y-12 justify-items-center">
            {disp}
          </div>
        </div>
      </div>

      {/* Section 3: Mission & Vision */}
      <div className="w-[1000px] mx-auto my-24">
        <img src="Images/AboutUsPage/mr-tony-tay-video.png" className="mb-10" />
        <div className="flex flex-row space-x-20">
          <div className="w-[600px]">
            <h1 className="mb-6">MISSION</h1>
            <h3 className="text-justify">
              To provide daily meals and other support services to the
              underpriviledged, the needy and other marginalised members in
              Singapore. We strive to assist and guide them towards
              rehabilitating and reinstating themselves as flourishing members
              of our society.
            </h3>
          </div>
          <div className="w-[313px]">
            <h1 className="mb-6">VISION</h1>
            <h3 className="text-justify">
              Improving the lives of the underpriviledged and marginalised by
              providing them with their "daily bread" and to help them become
              thriving members of our society.
            </h3>
          </div>
        </div>
      </div>

      {/* Section 4: Committee */}
      <div className="bg-white py-20">
        <div className="w-[1200px] mx-auto">
          <h1 className="text-center mb-10">COMMITTEE MEMBERS</h1>
          <img
            src="Images/AboutUsPage/Comm.png"
            className="mx-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
