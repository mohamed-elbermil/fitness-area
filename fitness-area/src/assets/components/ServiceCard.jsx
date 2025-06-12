import React from 'react';
import { Target, Trophy, Users, Clock, CheckCircle } from 'lucide-react';
import '../style/ServiceCard.css';

const services = [
  {
    icon: Target,
    title: 'Programmes Personnalisés',
    description: 'Des entraînements sur mesure adaptés à vos objectifs et votre niveau.',
  },
  {
    icon: Trophy,
    title: 'Suivi de Performance',
    description: 'Tracking complet de vos progrès avec analyses détaillées.',
  },
  {
    icon: Users,
    title: 'Coaching en Groupe',
    description: 'Séances collectives motivantes dans une ambiance conviviale.',
  },
  {
    icon: Clock,
    title: 'Flexibilité Horaire',
    description: 'Réservez vos créneaux selon votre emploi du temps.',
  },
];

const values = [
  'Accès illimité aux équipements premium',
  'Suivi nutritionnel personnalisé',
  'Application mobile dédiée',
  'Communauté active et motivante',
  'Sans engagement de durée',
  'Support client 7j/7',
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon className="icon" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="container-service">
      {/* Services */}
      <div className="services-list-wrapper">
        <div className="services-header">
          <h2 className="services-title">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="services-subtitle">
            Une approche complète pour atteindre vos objectifs fitness avec l'accompagnement de nos experts.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="values-wrapper">
        <div className="values-header">
          <h3 className="values-title">
            Services <span className="gradient-text">Inclus</span>
          </h3>
          <p className="values-subtitle">
            Tout ce dont vous avez besoin pour réussir votre transformation
          </p>
        </div>

        <div className="values-list">
          {values.map((value, i) => (
            <div key={i} className="value-item">
              <CheckCircle className="value-icon" />
              <span className="value-text">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
