"use client";
import "./mobileMenu.scss";
import React, { useState } from "react";
import HamburgerIcon from "/src/assets/header/hamburger.svg";
import CloseIcon from "/src/assets/header/close.svg";

export default function MobileMenu() {
  const [isActive, setisActive] = useState(false);

  const toggleMenu = () => {
    setisActive((isActive) => !isActive);
    document.querySelector("body").classList.toggle("overlay-active");
  };

  return (
    <div className="lap-dn">
      <div className="df aic jce">
        <HamburgerIcon onClick={toggleMenu} />
        {isActive && (
        <div className="mobileMenu">
          <div className="df aic jce">
            <CloseIcon onClick={toggleMenu} />
          </div>
          <ul>
            <li><a href="#">Lorem.</a></li>
            <li><a href="#">Dolor!</a></li>
            <li><a href="#">Placeat?</a></li>
            <li><a href="#">Totam?</a></li>
            <li><a href="#">Amet!</a></li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
