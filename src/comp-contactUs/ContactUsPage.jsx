import React from "react";
import ContactForm from "../comp-commons/ContactForm";
import Footer from "../comp-commons/Footer";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactUsPage = () => {
  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      <div className="w-[1000px] mx-auto mb-24">
        {/* Operating hours section */}
        <section className="text-center space-y-4 mb-12">
          <h1>HOW CAN WE HELP?</h1>
          <div className="space-y-2">
            <p>Willing Hearts is open everyday, 5am-5pm.</p>
            <p>
              Yes! 365 days a year including weekends, and Public Holidays such
              as New Year's, Chinese New <br />
              Year, Good Friday, Labour Day, Vesak Day, Hari Raya Puasa,
              National Day, Hari Raya Haji,
              <br /> Deepavali and Christmas.
            </p>
          </div>
        </section>

        {/* Location section */}
        <section className="text-center space-y-4 mb-24">
          <h1>WE ARE LOCATED AT</h1>
          <img src="../../public/images/contactuspage/willing-hearts-location-on-map.png" />
        </section>

        {/* Contact form section */}
        <section className="space-y-14">
          <div className="text-center space-y-2">
            <h1>STILL HAVE QUESTIONS?</h1>
            <p>
              If you have any questions, please look at our FAQ here. Otherwise,
              please reach out to us.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
