import './FilterOptions.css';

const FilterOptions = (props) => {
  const { filterOptions, setFilterOptions } = props;
  const availableFilters = {
    technologies: [
      'JavaScript',
      'Sass',
      'MySQL',
      'Java',
      'MongoDB',
      'React',
      'Node.js',
      'Python',
      'Angular',
      'C++',
    ],
    industries: [
      'IT',
      'Hospitality',
      'Automotive',
      'Textile',
      'ECommerce',
      'Food',
    ],
    locations: ['Paris', 'Nantes', 'Montpeller', 'Munich', 'Brest', 'Toulouse'],
    status: ['Beginning', 'Middle', 'End', 'Overdue'],
    teamvacancies: ['Open', 'Full'],
  };
  return (
    <div id="discovery-filter__Navbar">
      <button className="filter-icon" />
      <header className="filter__title-and-search">
        <p className="filter__title">Discovery Filter</p>
        <input
          className="filter__search"
          type="text"
          placeholder="contain text"
        />
      </header>
      <p className="filter__subtitle">Technologies</p>
      <ul className="filter__tags-container">
        {availableFilters.technologies.map((tech, index) => {
          return (
            <li key={index} className="list-item tags">
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
                  filterOptions.technologies.includes(tech) ? ' selected' : ''
                }`}
              >
                {tech}
              </span>
            </li>
          );
        })}
      </ul>
      <section className="filter__search-stats">
        <button className="parti-btn" />
        <button className="tech-btn" />
        <button className="status-btn" />
        <button className="location-btn" />
        <button className="industry-btn" />
        <button className="pop-btn" />
      </section>
      <button className="filter__btn dark">Apply Filter</button>
    </div>
  );
};

export default FilterOptions;
