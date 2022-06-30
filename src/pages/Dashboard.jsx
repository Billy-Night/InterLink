import projectData from '../projectData'
import ProjectCard from '../components/ProjectCard';
import "./Dashboard.css";
import SideNavBar from '../components/SideNavBar';

const Dashboard = () => {

    return (
        <div>
            <SideNavBar />
            <div className='main-container'>
                {projectData.map((e, index) => {
                return (
                    <ProjectCard key={index} {...e}/>
                );})}
            </div>
        </div>
    );
};

export default Dashboard;