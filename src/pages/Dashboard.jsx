import projectData from "../projectData";
import ProjectCard from "../components/ProjectCard";
import "./Dashboard.css";
// import { Anchor, Filter } from '@mui/icons-material';
import "./Dashboard.css";
import TopNavBar from "../components/TopNavBar";
import FilterOptions from "../components/FilterOptions";
import { useState } from "react";

const Dashboard = () => {
  const [filterOptions, setFilterOptions] = useState({
    technologies: [],
    industries: [],
    locations: [],
  });

  const filteredData = projectData.filter((project) => {
    if (filterOptions.technologies.length < 1) return true;
    let found = false;
    filterOptions.technologies.forEach((techFilter) => {
      if(!found && project.technologies.includes(techFilter)) {
        found = true;
      }
    });
    
    return found;
  });

  return (
    <>
      <TopNavBar />

      <FilterOptions {...{ filterOptions, setFilterOptions }} />

      <div id="dashboard__page">
        <header>
          <h1 className="project-name">Discovery Collection</h1>
          <div className="search__field-and-btn">
            <input
              placeholder="contain text"
              type="text"
              className="search__field"
            />
            <button className="search__btn" />
          </div>
        </header>

        <div className="cards-container">

          {projectData.map((e, index) => {

          {filteredData.map((e, index) => {

            return <ProjectCard key={index} {...e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
