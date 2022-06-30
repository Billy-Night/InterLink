import { Link } from "react-router-dom";
import "./FilterOptions.css";


const FilterOptions = (props) => {
  const { filterOptions, setFilterOptions } = props;

  const availableFilters = {
    technologies: [
      "JavaScript",
      "Sass",
      "MySQL",
      "Java",
      "MongoDB",
      "React",
      "Node.js",
      "Python",
      "Angular",
      "C++",
    ],
    industries: ["IT"],
    locations: [],
  };

  return (
    <div>
      <p>This is the filters</p>
      <ul>
        <p>Technologies</p>

        {availableFilters.technologies.map((tech) => {
          return (
            <li className="list-item">
              <span
                onClick={() => {
                  setFilterOptions({
                    technologies: filterOptions.technologies.includes(tech)
                      ? filterOptions.technologies.pop(tech)
                      : filterOptions.technologies.push(tech),
                    ...filterOptions,
                  });
                }}
                className={`chip${
                  filterOptions.technologies.includes(tech) ? " selected" : ""
                }`}
              >
                {tech}
              </span>
            </li>
            
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
                    <button>Hospitality</button>
                    <button>Automotive</button>
                    <button>Textile</button>
                    <button>ECommerce</button>
                    <button>Food</button>
                </li>
                <li>
                    <p>Location</p>
                    <button>Paris</button>
                    <button>Nantes</button>
                    <button>Montpeller</button>
                    <button>Casablanca</button>
                    <button>Munich</button>
                    <button>Rennes</button>
                    <button>Lille</button>
                    <button>Brest</button>
                    <button>Bruxelles</button>
                    <button>Aveiro</button>
                    <button>Dijon</button>
                    <button>Toulouse</button>
                </li>
                <li>
                    <p>Status</p>
                    <button>Beginning</button>
                    <button>Middle</button>
                    <button>End</button>
                    <button>Overdue</button>
                </li>
                <li>
                    <p>Team Vacancies</p>
                    <button>Open</button>
                    <button>Full</button>
                </li>
                <li>
                    <p>Popularity</p>
                    <button>Highest</button>
                    <button>Lowest</button>
                </li>
            </ul>
        </div>
    )
};

export default FilterOptions;
