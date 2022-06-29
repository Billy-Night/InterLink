import React, { useContext, useState } from 'react';
import FullCard from "./FullCard";
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
    <Paper sx={{ maxWidth: "350px", minWidth: "200px", p: "2rem" }} elevation={12}>
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
        <Typography className='font-card' variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        {display && 
          <Chip variant="outlined" color="success" onDelete={handleDelete} avatar={<Avatar src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />} />
        }
      </CardActions>
      <Chip avatar={<Avatar alt="Natacha" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />} label={props.team.Manager} variant="outlined" />
      {/* Modal */}
      <FullCard {...props}/>
    </Paper>
  );
}

export default ProjectCard;
