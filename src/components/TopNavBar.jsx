import { Link } from 'react-router-dom';

const TopNavBar = () => {
    
    return (
        <div>
            <h1>This is the top nav</h1>
            <ul>
                <li>
                    <Link to="/">Sign in</Link>
                </li>
                <li>
                    <Link to="/register">Registeration</Link>
                </li>
                <li>
                    <Link to="/profile">User Profile</Link>
                </li>
                <li>
                    <Link to="/home">Project Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default TopNavBar;