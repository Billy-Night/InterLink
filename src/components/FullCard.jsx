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
      <Button onClick={handleOpen} />
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
          <div className="modal-full-card">
            <div className="full-card__img-container">
              <img src={props.image} alt="img" />
            </div>
            <div className="full-card__main-section">
              <div className="title-and-description">
                <p className="full-card__title">{props.name}</p>
                <p className="full-card__description">{props.description}</p>
              </div>
              <div className="full-card__icon-and-p">
                <button className="location-btn" />
                <p>{props.location}</p>
              </div>
              <div className="full-card__icon-and-p">
                <button className="industry-btn" />
                <p>{props.industry}</p>
              </div>
              <div className="full-card__icon-and-p">
                <button className="tech-btn" />
                {props.technologies.map((tech, index) =>
                  <p key={index}>{tech}</p>
                )}
              </div>
              <div className="full-card__icon-and-p">
                <button className="status-btn" />
                <p>{props.status}%</p>
              </div>
              <div className="full-card__icon-and-p">
                <button className="pop-btn" />
                <p>{props.employeeviews}</p>
              </div>
              <div className="full-card__icon-and-p">
                <button className="parti-btn" />
                <p>{Object.keys(props.team).length}</p>
              </div>
            </div>
            <div className="full-card__tags">
              {props.technologies.map((tech, index) => (
                <Chip key={index}
                  className="full-card__single-tag"
                  sx={{ mr: '10px' }}
                  label={tech}
                  color="primary"
                />
              ))}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default FullCard;
