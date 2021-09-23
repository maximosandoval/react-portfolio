import React from "react";
import "../../App.css";
import Create from "../Form";
import Footer from "../Footer";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
  return (
    <>
      <div>
            <h1 className="contact">Contact</h1>
      <Create />
            
        </div>

      <Footer />
    </>
  );
};

export default Contact;
