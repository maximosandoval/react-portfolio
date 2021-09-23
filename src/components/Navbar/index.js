import React from "react";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Maximo Sandoval</h1>
        <div className="navlinks">
          <span>{' '}<a href="/">Home</a>{' '}</span>
          <span> {' '}<a href="/portfolio">Portfolio</a>{' '}</span>
          <span> {' '}<a href="/about">About</a>{' '}</span>
          <span>{' '}<a href="/contact">Contact</a>{' '}</span>
          <span> {' '}<a href="/resume">Resume</a>{' '}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
