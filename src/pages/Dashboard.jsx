import projectData from '../projectData';
import ProjectCard from '../components/ProjectCard';
import './Dashboard.css';
import { Anchor } from '@mui/icons-material';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div id="dashboard__page">
      <header>
        <h1 className="project-name">Discovery Collection</h1>
        <div className="search__field-and-btn">
          <input
            placeholder="contain text"
            type="text"
            className="search__field"
          />
          <button className="search__btn" />
        </div>
      </header>

      <div className="cards-container">
        <main className="project-card-container">
          <div className="project-card__img"></div>
          <div className="card__header-and-stats">
            <h2 className="card__header">Sustainability Chain</h2>
            <div className="card__stats">
              <section className="icon-and-value">
                <div className="card__stats-icon parti-icon"></div>
                <p className="card__stats-subtitle">7</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon tech-icon"></div>
                <p className="card__stats-subtitle">3</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon status-icon"></div>
                <p className="card__stats-subtitle">80%</p>
              </section>
            </div>
            <footer className="card__footer">
              <div className="footer__avatar"></div>
              <div className="footer__contacts">
                <h3 className="contact-name">Jane Perez</h3>
                <p className="contact-position">Project manager</p>
                <p className="contact-email">perezj@gmail.com</p>
              </div>
            </footer>
          </div>
          <div className="expend-card"></div>
        </main>

        {/* another card for an example */}
        <main className="project-card-container">
          <div className="project-card__img"></div>
          <div className="card__header-and-stats">
            <h2 className="card__header">Sustainability Chain</h2>
            <div className="card__stats">
              <section className="icon-and-value">
                <div className="card__stats-icon parti-icon"></div>
                <p className="card__stats-subtitle">7</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon tech-icon"></div>
                <p className="card__stats-subtitle">3</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon status-icon"></div>
                <p className="card__stats-subtitle">80%</p>
              </section>
            </div>
            <footer className="card__footer">
              <div className="footer__avatar"></div>
              <div className="footer__contacts">
                <h3 className="contact-name">Jane Perez</h3>
                <p className="contact-position">Project manager</p>
                <p className="contact-email">perezj@gmail.com</p>
              </div>
            </footer>
          </div>
          <div className="expend-card"></div>
        </main>
        {/* another card */}
        <main className="project-card-container">
          <div className="project-card__img"></div>
          <div className="card__header-and-stats">
            <h2 className="card__header">Sustainability Chain</h2>
            <div className="card__stats">
              <section className="icon-and-value">
                <div className="card__stats-icon parti-icon"></div>
                <p className="card__stats-subtitle">7</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon tech-icon"></div>
                <p className="card__stats-subtitle">3</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon status-icon"></div>
                <p className="card__stats-subtitle">80%</p>
              </section>
            </div>
            <footer className="card__footer">
              <div className="footer__avatar"></div>
              <div className="footer__contacts">
                <h3 className="contact-name">Jane Perez</h3>
                <p className="contact-position">Project manager</p>
                <p className="contact-email">perezj@gmail.com</p>
              </div>
            </footer>
          </div>
          <div className="expend-card"></div>
        </main>
        {/* another card */}
        <main className="project-card-container">
          <div className="project-card__img"></div>
          <div className="card__header-and-stats">
            <h2 className="card__header">Sustainability Chain</h2>
            <div className="card__stats">
              <section className="icon-and-value">
                <div className="card__stats-icon parti-icon"></div>
                <p className="card__stats-subtitle">7</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon tech-icon"></div>
                <p className="card__stats-subtitle">3</p>
              </section>
              <section className="icon-and-value">
                <div className="card__stats-icon status-icon"></div>
                <p className="card__stats-subtitle">80%</p>
              </section>
            </div>
            <footer className="card__footer">
              <div className="footer__avatar"></div>
              <div className="footer__contacts">
                <h3 className="contact-name">Jane Perez</h3>
                <p className="contact-position">Project manager</p>
                <p className="contact-email">perezj@gmail.com</p>
              </div>
            </footer>
          </div>
          <div className="expend-card"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="project-container">
{projectData.map((e, index) => {
  return <ProjectCard key={index} {...e} />;
})}
</div> */
}
