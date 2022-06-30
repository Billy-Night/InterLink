
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
          );
        })}
                <li>
          <p>Industry</p>
          <button></button>
          <button></button>
        </li>
        <li></li>
      </ul>

      <button>By Locations</button>
      <button>Availability</button>
      <button>Industry</button>
      <button></button>
    </div>
  );
};

export default FilterOptions;