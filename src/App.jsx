import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./comp-NavBar/NavBar";
import CommonComponentExamples from "./comp-commons/examplePage/CommonComponentExamples";
import ContactUsPage from "./comp-contactUs/ContactUsPage";
import ContactFormConfirmationPage from "./comp-contactUs/ContactFormConfirmationPage";
import Homepage from "./comp-homepage/Homepage";
import AboutUsPage from "./comp-aboutUs/AboutUsPage";
import DonatePage from "./comp-donate/DonatePage";
import DonationForm from "./comp-donate/DonationForm";
import VolunteerMainPage from "./comp-volunteer/VolunteerMainPage";
import ProjectsPage from "./comp-aboutUs/ProjectsPage";
import NewsPage from "./comp-aboutUs/NewsPage";
import FaqPage from "./comp-aboutUs/FaqPage";
import LoginPage from "./comp-login/LoginPage";
import ThankYouPage from "./comp-donate/ThankYouPage";
import TrainingKitchen from "./comp-kitchen/TrainingKitchen";
import VolunteerConfirmPage from "./comp-volunteer/VolunteerConfirmPage";
import Volunteer from "./comp-volunteer/Volunteer";

function App() {
  return (
    <div>

      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/donateForm" element={<DonationForm />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/volunteer" element={<VolunteerMainPage />} />
        <Route path="/trainingKitchen" element={<TrainingKitchen/>} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route
          path="/contact-us/confirmation-page"
          element={<ContactFormConfirmationPage />}
        />
        <Route
          path="/volunteer/volunteer-confirmation"
          element={<VolunteerConfirmPage />}
        />
        <Route path="/volunteer/volunteer-form" element={<Volunteer />} />
      </Routes>
    </div>
  );
}

export default App;
