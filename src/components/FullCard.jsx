import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Chip, ListItem } from '@mui/material';
// import { MyContext } from '../context/MyProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FullCard = (props) => {
  // const context = useContext(MyContext);

  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    // context.handleCardId(id);
  };
  const handleClose = () => setOpen(false);

  //* data to be rendered with props & map
  // {
  //   id: 1,
  //   name: "AutoScript",
  //   // image: AutoScripImg,
  //   location: "Lyon",
  //   type: "Web Application",
  //   description:
  //     "AutoScript is a  bringing in a new way to measure tire wear with the aid of web development",
  //   industry: "Automotive",
  //   technologies: ["React", "JavaScript", "Express", "Node.js", "MySQL"],
  //   team: {
  //     Manager: "Tom Cruise",
  //     ScrumMaster: "Jane Doe",
  //     TechLead: "Mark zuckerberg",
  //     WebDeveloper: "Elon Musk",
  //     JuniorDeveloper: "Bill Gates",
  //     DevOps: "Steve Carrell",
  //   },
  //   resources: "",
  //   employeeviews: 10,
  //   requestaccess: "Unavailable",
  // },

  return (
    <div>
      <Button onClick={handleOpen}>Show Details</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/*//! All of this can be replaced!  */}
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            {props.name}
            </Typography>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={props.image}
            />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.description}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.location}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.type}
            </Typography>
            <Box>
            {props.technologies.map((tech) => <Chip sx={{mr: "10px"}} label={tech} color="primary" />)}
            </Box>
          </Box>
          {/*//! End of replace */}
        </Fade>
      </Modal>
    </div>
  );
}

export default FullCard;
