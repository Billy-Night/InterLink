
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
        industries: ["IT", "Hospitality", "Automotive", "Textile", "ECommerce", "Food"],
        locations: ["Paris", "Nantes", "Montpeller", "Munich", "Brest", "Toulouse"],
        status: ["Beginning", "Middle", "End", "Overdue"],
        teamvacancies: ["Open", "Full", ""]
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
        </ul>
    </div>
  );
};

export default FilterOptions;