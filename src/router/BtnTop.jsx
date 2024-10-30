import React, { useState, useEffect } from "react";
import "./style.scss";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";


export default function BtnTop() {
  const [isVisible, setIsVisible] = useState(false);

  //  Afficher ou cacher le bouton à l'état isVisible
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Utiliser useEffect pour ajouter et supprimer les écouteurs d'événements
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i
            class="fa fa-angle-up"
            aria-hidden="true"
            style={{ fontSize: "25px" }}
          ></i>
        </div>
      )}
    </>
  );
}
