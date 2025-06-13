import React, { useState, useEffect } from "react";
import "../style/Bubble.css";
import bubbles from "../../data/bubblesData";

function Bubble() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 10); // 6 bulles
      setActiveIndex(random);
    }, 2000); // Change toutes les secondes

    return () => clearInterval(interval); // Nettoyage du setInterval
  }, []);

  return (
    <section className="center">
      <div className="container">
        {bubbles.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`bubble ${activeIndex === i ? "active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Bubble;
