import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import './FullCard.css';
import { Chip } from '@mui/material';

const FullCard = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
          {/* You can edited this html and css */}
          <div className='modal-full-card'>
            <p>
            {props.name}
            </p>
            <img src={props.image} alt="img"/>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <p>{props.type}</p>
            <div>
            {props.technologies.map((tech) => <Chip sx={{mr: "10px"}} label={tech} color="primary" />)}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default FullCard;
