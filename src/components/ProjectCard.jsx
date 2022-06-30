import FullCard from './FullCard';
import './ProjectCard.css';

// import { MyContext } from '../context/MyProvider';

const ProjectCard = (props) => {
  // const context = useContext(MyContext);

  //! Paper is a styled div, CardMedia = img
  return (
    // onClick={() => context.handleCardId(props.id)}

    <div className="cards-container">
      <main className="project-card-container">
        <div className="project-card__img-container">
          <img src={props.image} alt="img" />
          {/* <img src={props.image} alt="img" /> */}
        </div>
        <div className="card__header-and-stats">
          <h2 className="card__header">{props.name}</h2>
          <div className="card__stats">
            <section className="icon-and-value">
              <div className="card__stats-icon parti-icon"></div>
              <p className="card__stats-subtitle">
                {Object.keys(props.team).length}
              </p>
            </section>
            <section className="icon-and-value">
              <div className="card__stats-icon tech-icon"></div>
              <p className="card__stats-subtitle">
                {props.technologies.length}
              </p>
            </section>
            <section className="icon-and-value">
              <div className="card__stats-icon status-icon"></div>
              <p className="card__stats-subtitle">{props.status}%</p>
            </section>
          </div>
          <footer className="card__footer">
            <div className="footer__avatar"></div>
            <div className="footer__contacts">
              <h3 className="contact-name">Jane Perez</h3>
              <p className="contact-position">{Object.keys(props.team)[0]}</p>
              <p className="contact-email">{props.contact}</p>
            </div>
          </footer>
        </div>
        {/*/!Please ignore for now}
          {/* <div className="expend-card"><FullCard {...props} /></div> */}
      </main>
    </div>
  );
};

export default ProjectCard;
