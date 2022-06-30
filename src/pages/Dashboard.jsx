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
<<<<<<< HEAD
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
=======
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
>>>>>>> c514a9c5733b90637044a16fc35eea77eb999203
        </div>
      </div>
<<<<<<< HEAD
=======
    </div>
>>>>>>> c514a9c5733b90637044a16fc35eea77eb999203
    </>
  );
};

export default Dashboard;
