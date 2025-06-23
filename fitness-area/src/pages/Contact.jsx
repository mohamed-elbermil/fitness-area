import React, { useState } from 'react';
import axios from 'axios';
import '../assets/style/Contact.css';
import Navbar from '../assets/components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      await axios.post('http://localhost:5000/api/contact', {
        name: formData.name,
        email: formData.email,
        message: `Sujet: ${formData.subject}\n\n${formData.message}`
      });
      setStatus('Message envoyé avec succès 🎉');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus("Erreur lors de l'envoi ❌");
    }
  };

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
              <p>Lun-Ven: 6h-22h<br />Sam-Dim: 8h-20h</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envoyez-nous un message</h2>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
