import projectData from '../projectData';
import ProjectCard from '../components/ProjectCard';
import './Dashboard.css';

import './Dashboard.css';
// import TopNavBar from '../components/TopNavBar';
import FilterOptions from '../components/FilterOptions';

const Dashboard = () => {
  return (
    <>
      <FilterOptions />
      <div className="project-container">
        {projectData.map((e, index) => {
          return <ProjectCard key={index} {...e} />;
        })}
      </div>
    </>
  )
}

export default Dashboard;

