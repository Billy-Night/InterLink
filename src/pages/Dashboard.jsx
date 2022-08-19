import { useState } from "react";
import projectData from "../projectData";
import ProjectCard from "../components/ProjectCard";
import "./Dashboard.css";
import TopNavBar from "../components/TopNavBar";
import FilterOptions from "../components/FilterOptions";
import filterImg from "../images/adjusting.png";
// import DiscoveryFilter from '../components/DiscoveryFilter';

const Dashboard = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [filterOptions, setFilterOptions] = useState({
    technologies: [],
    industries: [],
    locations: [],
    status: []
  });

  const filterToProject = {
    technologies: "technologies",
    industries: "industry",
    locations: "location",
    status: "status"
  }

  // Filter each project (only display projects that match ALL selected criteria)
  const filteredData = projectData.filter((project) => {
    var currentFilter;

    // Check wether criteria are selected
    var filterActive = false;
    Object.keys(filterToProject).forEach((filterOption) => {
      currentFilter = filterOptions[filterOption];
      if (
        !filterActive &&
        currentFilter !== undefined &&
        !(Array.isArray(currentFilter) && currentFilter.length < 1)
      ) {
        filterActive = true;
      }
    });
    if(!filterActive) return true;

    // go through all criteria and if any of those does not match reject project
    var keep = true;
    var projectKey;

    Object.keys(filterToProject).forEach((filterOption) => {
      currentFilter = filterOptions[filterOption];
      if (keep && currentFilter !== undefined) {
        projectKey = filterToProject[filterOption];
        if (projectKey === undefined || project[projectKey] === undefined)
          return;
        // case one
        if (
          Array.isArray(currentFilter) &&
          Array.isArray(project[projectKey])
        ) {
          currentFilter.forEach((filter) => {
            if (keep) keep = project[projectKey].includes(filter);
          });
          return;
        }
        // case two
        if (
          !Array.isArray(currentFilter) &&
          Array.isArray(project[projectKey])
        ) {
          if (keep) keep = project[projectKey].includes(currentFilter);
          return;
        }
        // case three
        if (
          Array.isArray(currentFilter) &&
          !Array.isArray(project[projectKey])
        ) {
          currentFilter.forEach((filter) => {
            if (keep) keep = project[projectKey] === filter;
          });
          return;
        }
        // case four
        if (project[projectKey] !== currentFilter) keep = false;
      }
    });

    return keep;
  });

  const handleFilterDisplay = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <TopNavBar />
      <img
        id="filter-img"
        src={filterImg}
        alt="filter"
        onClick={handleFilterDisplay}
        className="filter-icon"
      />
      {showFilter ? (
        <FilterOptions {...{ filterOptions, setFilterOptions }} handleFilterDisplay={handleFilterDisplay}  />
      ) : null}
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

        <main className="cards-container">
          {filteredData.map((e, index) => {
            return <ProjectCard key={index} {...e} />;
          })}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
