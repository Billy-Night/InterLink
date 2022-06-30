import projectData from '../projectData';
import ProjectCard from '../components/ProjectCard';
import './Dashboard.css';
import { Anchor } from '@mui/icons-material';
import './Dashboard.css';
import TopNavBar from '../components/TopNavBar';

const Dashboard = () => {
  return (

    <div className="project-container">
      {projectData.map((e, index) => {
        return <ProjectCard key={index} {...e} />;
      })}
    </div>
  )
}

export default Dashboard;

