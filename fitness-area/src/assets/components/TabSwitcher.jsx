import React, { useState } from "react";
import { Activity, Target, TrendingUp, ChevronRight } from "lucide-react";
import "../style/TabSwitcher.css";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("activity");

  const tabsData = [
    {
      id: "activity",
      label: "Activités",
      icon: <Activity className="w-5 h-5" />,
      title: "Découvrez nos activités fitness",
      description:
        "Une gamme complète d'exercices adaptés à tous les niveaux pour atteindre vos objectifs.",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Musculation",
          description:
            "Développez votre force et sculptez votre corps avec nos équipements de pointe.",
          category: "Force",
        },
        {
          image:
            "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Cardio Training",
          description:
            "Améliorez votre endurance cardiovasculaire avec nos programmes dynamiques.",
          category: "Endurance",
        },
        {
          image:
            "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Yoga & Pilates",
          description:
            "Trouvez l'équilibre parfait entre flexibilité, force et sérénité.",
          category: "Bien-être",
        },
      ],
    },
    {
      id: "coaching",
      label: "Coaching",
      icon: <Target className="w-5 h-5" />,
      title: "Coaching personnalisé premium",
      description:
        "Bénéficiez d'un accompagnement sur-mesure avec nos coachs certifiés.",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Coach Personnel",
          description:
            "Un accompagnement individuel pour maximiser vos résultats en toute sécurité.",
          category: "Premium",
        },
        {
          image:
            "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Coaching Nutrition",
          description:
            "Optimisez votre alimentation avec nos experts en nutrition sportive.",
          category: "Nutrition",
        },
        {
          image:
            "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Suivi Mental",
          description:
            "Développez votre mental de champion avec nos coachs spécialisés.",
          category: "Mental",
        },
      ],
    },
    {
      id: "tracking",
      label: "Suivi",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Suivez vos progrès en temps réel",
      description:
        "Analysez vos performances et célébrez chaque victoire sur votre parcours fitness.",
      cards: [
        {
          image:
            "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Analytics Avancés",
          description:
            "Visualisez vos progrès avec des graphiques détaillés et des métriques précises.",
          category: "Data",
        },
        {
          image:
            "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Objectifs Personnalisés",
          description:
            "Définissez et atteignez vos objectifs avec notre système de suivi intelligent.",
          category: "Goals",
        },
        {
          image:
            "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=800",
          title: "Communauté",
          description:
            "Partagez vos succès et motivez-vous avec notre communauté active.",
          category: "Social",
        },
      ],
    },
  ];

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parcours">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Votre parcours{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              fitness
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez nos différents services conçus pour vous accompagner à
            chaque étape de votre transformation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-16 lg:mb-20">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border border-gray-100 overflow-hidden">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                 switch-button relative flex items-center gap-3 px-6 lg:px-8 py-4 lg:py-5 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                <span
                  className={`transition-transform duration-300 ${
                    activeTab === tab.id ? "scale-110" : ""
                  }`}
                >
                  {tab.icon}
                </span>
                {tab.label}

                {/* Active indicator */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div className="animate-fadeIn">
            {/* Content Header */}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {activeTabData.cards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 lg:h-72">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg theme">
                        {card.category}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="card-sport">
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/btn">
                      En savoir plus
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabSwitcher;
