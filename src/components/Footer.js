import React from 'react';

import './Footer.css';


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <h6 className="social-follow">Follow me</h6>
              <a href="https://github.com/maximosandoval"
                target="_blank"
                className="social-icon-link github">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/maximosandoval/"
                target="_blank"
                className="social-icon-link linkedin">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
                
              </a>
              
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer;