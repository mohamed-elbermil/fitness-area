import React from 'react';
import CoachCard from '../assets/components/CoachCard';
import Navbar from '../assets/components/Navbar';
import "../assets/style/Coaching.css"
import ServiceCard from "../assets/components/ServiceCard"
import banner1 from '../assets/images/banner-1.jpg';

const Coaching = () => {
  const coaches = [
    {
      name: 'Camille Dupont',
      role: 'Coach Fitness',
      image: 'https://images.pexels.com/photos/7242904/pexels-photo-7242904.jpeg',
    },
    {
      name: 'Lucas Martin',
      role: 'Coach Nutrition',
      image: 'https://images.pexels.com/photos/5209197/pexels-photo-5209197.jpeg',
    },
  ];

  return (
    <>
      <Navbar />
      {/* Bannière immersive */}
      <div className="coaching-hero-banner">
        <img src={banner1} alt="Coaching" className="coaching-hero-img" />
        <div className="coaching-hero-overlay" />
        <div className="coaching-hero-content">
          <h1 className="coaching-hero-title">Coaching</h1>
          <p className="coaching-hero-subtitle">Atteignez vos objectifs avec nos coachs pros</p>
        </div>
      </div>
      {/* Programmes d'entraînement */}
      <section className="programs-section">
        <div className="programs-header">
          <h2 className="programs-title">Notre programme d'entraînement</h2>
          <a href="#" className="programs-link">Voir tous les coachs &rarr;</a>
        </div>
        <div className="programs-grid">
          <div className="program-card" style={{backgroundImage: 'url(https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg)'}}>
            <span className="program-title">YOGA</span>
          </div>
          <div className="program-card" style={{backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg)'}}>
            <span className="program-title">Entraînement</span>
          </div>
          <div className="program-card" style={{backgroundImage: 'url(https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg)'}}>
            <span className="program-title">Perte de poids</span>
          </div>
          <div className="program-card" style={{backgroundImage: 'url(https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg)'}}>
            <span className="program-title">Mobilité</span>
          </div>
        </div>
      </section>
      {/* Section Coachs */}
      <section className="coaching-coaches-section">
        <h2 className="coaching-section-title">Our Certified Trainers</h2>
        <p className="coaching-section-subtitle">will help you achieve your goals.</p>
        <div className="coaching-coaches-list">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              name={coach.name}
              role={coach.role}
              image={coach.image}
              onBook={() => alert(`Réserver avec ${coach.name}`)}
              onInfo={() => alert(`Infos sur ${coach.name}`)}
            />
          ))}
        </div>
      </section>
      {/* Programmes et témoignages à venir */}
    </>
  );
};

export default Coaching;
