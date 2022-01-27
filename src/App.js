import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// VIEWS IMPORTATION
import Home from "./view/Home";
import Contact from "./view/Contact";
// COMPONENTS IMPORTATION
import Navbar from "../src/component/Navbar";
import Footer from "../src/component/Footer";

const App = () => {
  const [isResponsive, setResponsive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("is responsive in entry point", isResponsive)
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setResponsive(true);
    } else {
      setResponsive(false);
    };
  };

  return (
    <Router>
      <Navbar isResponsive={isResponsive} />
      <Switch>
        <Route
          exact path="/"
          component={(props) => <Home {...props} isResponsive={isResponsive} />} />
        <Route
          exact path="/contact"
          component={(props) => <Contact {...props} isResponsive={isResponsive} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;