import React from "react";
import BaseButton from "../BaseButton";
import Footer from "../Footer";
import AccordianWrapper from "../AccordianWrapper";
import ContactForm from "../ContactForm";

// Sample dataset for FAQ (accordian wrapper):
const accordianDummyContent = [
  {
    id: 1,
    contentTitle: "What You Need To Know",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
  {
    id: 2,
    contentTitle: "How do I get there",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
  {
    id: 3,
    contentTitle: "What should I wear and bring with me?",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
  {
    id: 4,
    contentTitle: "What should I expect?",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
  {
    id: 5,
    contentTitle: "How do I check the availability or cancel my slot?",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
  {
    id: 6,
    contentTitle: "How can I help with delivering the food?",
    content:
      "We have always been asked - How does Willing Hearts sustain itself? In truth, it is with the generous support from friends, volunteers, donors, sponsors and just about anyone who believes in our cause. We extend our heartfelt gratitude to each one for your generosity and continuous support since we started! ",
  },
];

function CommonComponentExamples() {
  return (
    <div className="bg-secondary h-screen">
      {/* Button */}
      <div className="m-5">
        <p className="text-4xl mb-5">Button:</p>
        <BaseButton label="Volunteer Now" colour="red" />
        <br />
        <BaseButton label="Find Out More" colour="white" />
        <br />
        <BaseButton label="Sign Up" colour="white" />
        <br />
        <BaseButton label="Join Us" colour="red" />
        <br />
        <BaseButton label="Donate" colour="red" />
        <br />
        <BaseButton label="Next" colour="red" className="w-[294px]" />
        <br />
        <BaseButton label="Add To Calendar" colour="white" icon="calendar" />
        <br />
        <BaseButton label="Invite Your Friends" colour="white" icon="share" />
      </div>
      {/* Footer */}
      <div className="mt-16">
        <p className="text-4xl my-5 mx-5">Footer:</p>
        <Footer />
      </div>
      {/* Accordian Wrapper */}
      <div className="mt-16 py-10">
        <p className="text-4xl mx-5">FAQ:</p>
        <AccordianWrapper
          title="VOLUNTEERS"
          contentDataset={accordianDummyContent}
        />
      </div>
      {/* Contact Form */}
      <div className="mt-16 py-10">
        <p className="text-4xl mx-5">Contact Form:</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default CommonComponentExamples;
