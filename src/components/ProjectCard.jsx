import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';

const ProjectCard = (props) => {
  const [display, setDisplay] = useState(true);

  const handleDelete = () => {
    setDisplay(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component=""
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
    </Card>
  );
}

export default ProjectCard;
