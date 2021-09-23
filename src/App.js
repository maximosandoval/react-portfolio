// import logo from './logo.svg';
import Navbar from "./components/Navbar/index";
import "./App.css";
import React from "react";
import Index from "./components/Index/index";
import Portfolio from "./components/Portfolio/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Resume from "./components/Resume/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />

          <Route exact path="/portfolio" component={Portfolio} />

          <Route exact path="/about" component={About} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
