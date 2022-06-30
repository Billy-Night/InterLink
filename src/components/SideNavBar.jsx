import { Link } from 'react-router-dom';

const SideNavBar = () => {

    return (
        <div>
            <h1>This is the side navbar</h1>
            <ul>
                <li>
                    <Link to="/profile">User</Link>
                </li>
                <li>
                    <Link to="/dashboard">Project Dashboard</Link>
                </li>
                <li>
                    <Link to="/">Sign Out</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNavBar;