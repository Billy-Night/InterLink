import React, { useState } from 'react';
import './DiscoveryFilter.css';
import FilterOptions from './FilterOptions';

const DiscoveryFilter = (props) => {
  const { filterOptions, setFilterOptions } = props;
  const [navStatus, setNavStatus] = useState(0);
  const [divWidth, setDivWidth] = useState('');

  const openNavBar = () => {
    if (navStatus === 0) {
      setDivWidth('30vw');
      setNavStatus(1);
    } else {
      setDivWidth('0px');
      setNavStatus(0);
    }
  };

  return (
    <div id="discovery-filter__Navbar" style={{ width: divWidth }}>
      <FilterOptions {...{ filterOptions, setFilterOptions }} />
      <button className="filter-icon" onClick={openNavBar}></button>
      <header>
        <h1 className="filter__title">Discovery Filter</h1>
        <input
          className="filter__text-field"
          type="text"
          placeholder="contain text"
        />
      </header>
      <main>
        <section className="discovery__search-tags">
          <button>Java Script</button>
          <button>Java</button>
          <button>React</button>
          <button>Sass</button>
          <button>Agile</button>
          <button>Node.js</button>
          <button>Sql</button>
          <button>MongoDB</button>
          <button>UX-Design</button>
        </section>
        <section className="discovery__search-stats">
          <button>Participants</button>
          <button>Technology</button>
          <button>Status</button>
          <button>Location</button>
          <button>Industry</button>
          <button>Popularity</button>
        </section>
      </main>

      <footer>
        <button className="apply-btn">Apply Filter</button>
      </footer>
    </div>
  );
};

export default DiscoveryFilter;
