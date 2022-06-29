import projectData from '../projectData'
import ProjectCard from '../components/ProjectCard';
import "./Dashborad.css";

const Dashboard = () => {

    return (
        <div className='project-container'>
            {projectData.map((e, index) => {
            return (
                <ProjectCard key={index} {...e}/>
            );})}
        </div>
    );
};

export default Dashboard;