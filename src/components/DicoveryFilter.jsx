import React from 'react';

const DiscoveryFilter = () => {
  return (
    <div id="discovery-filter__page">
      <header>
        <h1>Discovery Filter</h1>
        <input type="text" placeholder="contain text" />
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
