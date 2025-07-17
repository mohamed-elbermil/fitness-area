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
          <div className="contact-info" style={{height: '100vh', padding: 0}}>
            <iframe
              title="Localisation Fitness Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292315674!3d48.8583730792876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1e1e1e1%3A0x1a2b3c4d5e6f7g8h!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100vh', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contactez l'un de nos clubs
            </h2>
            <p>Pour tout renseignement, prenez directement RDV au club ou laissez-nous vos coordonnées afin d’être appelé par l’un de nos conseillers.</p>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" placeholder='' name="name" value={formData.name} onChange={handleChange} required />
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
