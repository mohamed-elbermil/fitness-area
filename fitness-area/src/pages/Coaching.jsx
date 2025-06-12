import React from 'react';
import CoachCard from '../assets/components/CoachCard';
import Navbar from '../assets/components/Navbar';
import "../assets/style/Coaching.css"
import ServiceCard from "../assets/components/ServiceCard"

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
    <Navbar/>
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '80px auto' }}>
      <h1 className='coach-title' style={{ textAlign: 'center', marginBottom: '30px' }}>Votre équipe de <span>fitness-area</span></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
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
    </div>
    <ServiceCard/>
    </>
  );
};

export default Coaching;
