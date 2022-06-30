
// import { Link } from 'react-router-dom';



const FilterOptions = () => {
    
    const filterOptions = {
        javascript: false,
        Sass: false,
    } 

    return (
        <div>
            <p>This is the filters</p>
            <ul>
                <li>
                    <p>Technologies</p>
                    <button>JavaScript</button>
                    <button>Sass</button>
                    <button>MySQL</button>
                    <button>Java</button>
                    <button>MongoDB</button>
                    <button>React</button>
                    <button>Node.js</button>
                    <button>Python</button>
                    <button>Angular</button>
                    <button>C++</button>
                </li>
                <li>
                    <p>Industry</p>
                    <button>IT</button>
                    <button></button>
                </li>
                <li>
                </li>
            </ul>

            <button>By Locations</button>
            <button>Availability</button>
            <button>Industry</button>
            <button></button>
        </div>
    )
}

export default FilterOptions;