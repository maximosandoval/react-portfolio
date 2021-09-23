import React from 'react';
import '../App.css'
import './HeroSection.css'
import { Button } from './Button';



function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Maximo Sandoval</h1>
      <p>Full Stack Web Developer</p>
      <div className="hero-btns">
        <Button className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        >
          My Work
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;