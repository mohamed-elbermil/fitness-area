import React, { useState } from "react";
import image1 from "../images/carre.png";
import image2 from "../images/carre1.webp";
import image3 from "../images/carre.png";
import "../style/TabSwitcher.css";
import "../style/variables.css";

function TabSwitcher() {
  const [selected, setSelected] = useState("activity");

  return (
    <div className="containers">
      <div>
        <button
          className={selected === "activity" ? "active-button" : ""}
          onClick={() => setSelected("activity")}
        >
          Activity
        </button>

        <button
          className={selected === "test" ? "active-button" : ""}
          onClick={() => setSelected("test")}
        >
          Test
        </button>

        <button
          className={selected === "Tracking" ? "active-button" : ""}
          onClick={() => setSelected("Tracking")}
        >
          Tracking
        </button>
      </div>

      {selected === "activity" && (
        <>
          <h2>phrase au hasardhbdejkbefkfjez</h2>
          <div className="all-images">
            <div className="images">
              <img src={image2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image1} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
          </div>
        </>
      )}
      {selected === "test" && (
        <>
          <h2>phrase au hasardhbdejkbefkfjez</h2>
          <div className="all-images">
            <div className="images">
              <img src={image1} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image3} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
          </div>
        </>
      )}
      {selected === "Tracking" && (
        <>
          <h2>phrase au hasardhbdejkbefkfjez</h2>
          <div className="all-images">
            <div className="images">
              <img src={image1} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
            <div className="images">
              <img src={image2} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum adipisci nobis nam.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TabSwitcher;
