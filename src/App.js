import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setResponsive(true);
    } else {
      setResponsive(false);
    };
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;