import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// VIEWS IMPORTATION
import Home from "./view/Home";
import Contact from "./view/Contact";
// COMPONENTS IMPORTATION
import Navbar from "../src/component/Navbar";
import Footer from "../src/component/Footer";

const App = () => {
  return (
    <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        <Footer />
    </Router>
  );
};

export default App;