import React from "react";
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer';

const Resume = () => {
  return (
    <>
    <div>
      <h1 className="contact">Resume</h1>
      <p className="center">Entry-level full stack web developer leveraging a background in marketing and communications<br /> dedicated to building and optimizing the performance of user-centric, high-impact websites. <br /> Recently earned a certificate in Full Stack Web Development from the University of Denver Coding Boot Camp. <br /><br /> Innovative and creative problem-solver with a passion for collaboration <br /> in developing apps, software, and websites.</p>
      <h1 className="contact">Technical Skills</h1>
      <p className="center">Languages: JavaScript ES6+, jQuery, CSS3, HTML5, SQL, NoSQL</p>
      <p className="center">Applications: GitHub, MongoDB, MySQL </p>
      <p className="center">Tools: Express, React, Node.js, Bulma, WordPress, <br /> Handlebars, Query, Bootstrap, API, UI kit</p>
      
    </div>
    <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Resume;
