import projectData from '../projectData'
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {

    return (
        <div className='project-container'>
            <h1>This is the home page</h1>
            {projectData.map((e, index) => {
            return (
                <ProjectCard key={index} {...e}/>
            );})}
        </div>
    );
};

export default Dashboard;