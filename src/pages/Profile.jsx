import * as React from 'react';
import userData from "../userData";
import './Profile.css';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

const Profile = () => {
    const navigate = useNavigate();

    const handleProfClick = () => navigate("/dashboard");

    const handleClickProg = () => navigate("/myprojects");

    return (
        <div>
            <TopNavBar />
            <div className='main-container'>
                <div className="prof-container">
                    <h1>Profile</h1>
                    <img src={userData.image} alt=""/>
                    <p>{userData.first_name} {userData.last_name}</p>
                    <p>Title: {userData.title}</p>
                    <p>Site Location: {userData.site_location}</p>
                    <h3>Technologies:</h3>
                
                <div className='chip-container'>
                    <div>
                    {userData.technologies.map((tech) => <Chip label={tech} color="primary" />)}
                    </div>
                </div>
                <div className='prof-btn'>
                    <button onClick={handleProfClick}>
                        Projects
                    </button>
                    <button onClick={handleClickProg}>
                        Matched Projects
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;