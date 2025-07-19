import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../style/Header.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="nav-banner">
        <Navbar />
        <div className="banner">
          <div className="banner-left">
            <h1>L'effort d'aujourd'hui, la force de demain</h1>
            <p>
              Dans notre salle, chaque séance te rapproche un peu plus de ton
              potentiel.
            </p>
            <div className="btn-both">
              <Link to="/formules" className="btn btn-subscribe">S'inscrire</Link>
              <a
                href="https://www.instagram.com/fitnessarea8/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-join"
              >
                Rejoindre la communauté
              </a>
            </div>
          </div>
          <div className="banner-right">
            <div className="infos">
              <p>90%</p>
              <span>de satisfaction</span>
            </div>
            <div className="infos">
              <p>16</p>
              <span>ans d'expérience</span>
            </div>
            <div className="infos">
              <p>150</p>
              <span>tasse de café</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
