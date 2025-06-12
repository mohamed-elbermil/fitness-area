import React from 'react';
import { Facebook, Instagram, Linkedin, Info, Calendar } from 'lucide-react';
import '../style/CoachCard.css';

const CoachCard = ({ name, role, image, onBook, onInfo }) => {
  return (
    <div className="coach-card">
      <div className="coach-image">
        <img src={image} alt={name} />
      </div>
      <div className="coach-content">
        <h3>{name}</h3>
        <p className="coach-role">{role}</p>

        <div className="social-icons">
          <Facebook size={16} />
          <Instagram size={16} />
          <Linkedin size={16} />
        </div>

        <div className="coach-actions">
          <button className="btn-book" onClick={onBook}>
            <Calendar size={16} /> Réserver
          </button>
          <button className="btn-info" onClick={onInfo}>
            <Info size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
