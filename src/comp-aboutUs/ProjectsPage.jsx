import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectsCard from "./Components/ProjectsCard";
import projectsDataset from "../comp-volunteer/datasets/projects";
import BaseButton from "../comp-commons/BaseButton";
import Footer from "../comp-commons/Footer";

const ProjectsPage = () => {
  const [projectsToDisplay, setProjectsToDisplay] = useState("ongoing");
  const [selectOngoing, setSelectOngoing] = useState(false);
  const [selectPast, setSelectPast] = useState(false);
  const ongoingProjects = projectsDataset.filter((item) => {
    return ["ongoing"].indexOf(item.status) > -1;
  });
  const pastProjects = projectsDataset.filter((item) => {
    return ["past"].indexOf(item.status) > -1;
  });

  // Function to switch to display "ongoing" projects
  function displayOngoingProjects() {
    setProjectsToDisplay("ongoing");
    setSelectOngoing(true);
    setSelectPast(false);
  }

  // Function to switch to display "past" projects
  function displayPastProjects() {
    setProjectsToDisplay("past");
    setSelectOngoing(false);
    setSelectPast(true);
  }

  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      {/* Section 1: Projects */}
      <section className="w-[1200px] mx-auto mb-24">
        <div className="text-center  mb-14">
          <h1>PROJECTS</h1>
          <br />
          <h3>
            A community of brothers and sisters who lend a helping hand to one
            another. <br />
            Read more to find out how you can get involved to help.
          </h3>
        </div>

        <div className="flex flex-row space-x-7">
          <img src="Images/Projects/SoupKitchen.png" className="rounded-2xl" />
          <div>
            <h2 className="mb-2">SOUP KITCHEN</h2>
            <h3 className="mb-10">
              Soup Kitchen is a volunteer-run organisation that serves daily
              meals to those in need in the community. We rely on the kindness
              and generosity of volunteers to prepare and distribute meals. We
              welcome anyone who wants to make a positive impact in ther
              community to join us.
            </h3>
            <Link to="/volunteer">
              <BaseButton label="Find Out More" colour="transparent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Other projects and activities */}
      <div className="w-[1200px] mx-auto text-center">
        <h2 className="mb-3">OTHER PROJECTS AND ACTIVITIES</h2>
        <div className="flex flex-row space-x-20 justify-center mb-9">
          <button
            className="text-2xl"
            onClick={displayOngoingProjects}
            style={{ color: selectOngoing ? "red" : "black" }}
          >
            ONGOING
          </button>
          <button
            className="text-2xl"
            onClick={displayPastProjects}
            style={{ color: selectPast ? "red" : "black" }}
          >
            PAST
          </button>
        </div>
        <div className="flex flex-row justify-center space-x-36 mb-20">
          {projectsToDisplay === "ongoing"
            ? ongoingProjects.map((project) => {
                return (
                  <ProjectsCard
                    key={project.id}
                    image={project.image}
                    projectName={project.projectName}
                    projectContent={project.projectContent}
                  />
                );
              })
            : pastProjects.map((project) => {
                return (
                  <ProjectsCard
                    key={project.id}
                    image={project.image}
                    projectName={project.projectName}
                    projectContent={project.projectContent}
                  />
                );
              })}
        </div>
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
