import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import userData from "../userData";
import './Profile.css';
import { Button, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

const Profile = () => {
    const navigate = useNavigate();

    const handleProfClick = () => navigate("/dashboard");

    return (
        <div>
            <TopNavBar />
            <div className='main-container'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 500,
                        },
                    }}
                    >
                    <Paper elevation={3} >
                        <div className="prof-container">
                            <h1>Profile</h1>
                            <img src={userData.image} alt=""
                            display="flex"
                            textAlign="center" 
                            />
                            <p>{userData.first_name} {userData.last_name}</p>
                            <p>Title: {userData.title}</p>
                            <p>Site Location: {userData.site_location}</p>
                            <h3>Technologies:</h3>
                            <Box>
                            {userData.technologies.map((tech) => <Chip sx={{m: "2%"}} label={tech} color="primary" />)}
                            </Box>
                        </div>
                            <Button onClick={handleProfClick} variant="contained" color="success">
                                Projects
                            </Button>
                    </Paper>
                </Box>
            </div>
        </div>
    );
};

export default Profile;