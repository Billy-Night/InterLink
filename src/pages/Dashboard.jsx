import projectData from '../projectData';
import ProjectCard from '../components/ProjectCard';
import './Dashboard.css';
// import { Anchor, Filter } from '@mui/icons-material';
import './Dashboard.css';
import TopNavBar from '../components/TopNavBar';
import FilterOptions from '../components/FilterOptions';

const Dashboard = () => {
  return (
    <>
      <TopNavBar />
      <FilterOptions />
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
          return <ProjectCard key={index} {...e} />;
        })}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
