import React from 'react';
import { Mail } from 'lucide-react';
import '../style/CoachCard.css';

const CoachCard = ({ name, role, image, email }) => {
  return (
    <div className="coach-card new-design">
      <div className="coach-card-img-wrapper">
        <img src={image} alt={name} className="coach-card-img" />
        <div className="coach-card-actions">
          <a
            className="coach-icon-btn"
            href={`mailto:${email || ''}`}
            title="Envoyer un mail"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="coach-card-overlay">
          <div className="coach-card-info">
            <span className="coach-card-name">{name}</span>
            <span className="coach-card-role">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
