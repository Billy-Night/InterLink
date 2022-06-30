import React, { useState } from 'react';
import FullCard from './FullCard';
import '../pages/Dashboard.css';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Chip, Paper } from '@mui/material';

// import { MyContext } from '../context/MyProvider';

const ProjectCard = (props) => {
  // const context = useContext(MyContext);
  const [display, setDisplay] = useState(true);

  const handleDelete = () => setDisplay(false);

  //! Paper is a styled div, CardMedia = img
  return (
    // onClick={() => context.handleCardId(props.id)}
    <Paper
      sx={{ maxWidth: '350px', minWidth: '200px', p: '2rem' }}
      elevation={12}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography
          className="font-card"
          variant="body2"
          color="text.secondary"
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        {display && (
          <Chip
            variant="outlined"
            color="success"
            onDelete={handleDelete}
            avatar={
              <Avatar src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
            }
          />
        )}
      </CardActions>
      <Chip
        avatar={
          <Avatar
            alt="Natacha"
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
        }
        label={props.team.Manager}
        variant="outlined"
      />
      {/* Modal */}
      <FullCard {...props} />
    </Paper>
  );
};

export default ProjectCard;

/*
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
</main>*/
