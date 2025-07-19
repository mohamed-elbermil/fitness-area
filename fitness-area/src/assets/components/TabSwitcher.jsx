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
    <></>
  );
};

export default TabSwitcher;
