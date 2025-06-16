import React from 'react';
import '../assets/style/Contact.css';
import Navbar from '../assets/components/Navbar';

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h1>Contactez-nous</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Nos coordonnées</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Rue du Fitness, 75000 Paris</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>01 23 45 67 89</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>contact@fitness-area.fr</p>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <p>Lun-Ven: 6h-22h<br/>Sam-Dim: 8h-20h</p>
            </div>
          </div>

          <form className="contact-form">
            <h2>Envoyez-nous un message</h2>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact; 