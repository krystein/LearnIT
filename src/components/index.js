import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Hero from "./Hero";
import Legend from "./Legend";
import Section from "./Section";
import Activities from "./Activities";
import Principles from "./Principles";
import Values from "./Values";
import Assignment from "./Assignment";
import Donate from "./Donate";
import Activity from "./Activity";
import Testimonial from "./Testimonal";
import Contact from "./Contact";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import ContactForm from "./ContactForm";
// navbar
import Navbar from "./Navbar";

const Index = ({ isOpen, toggle }) => {
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Legend />
          <Section />
          <Activities />
          <Principles />
          <Values />
          <Assignment />
          <Donate />
          <Activity />
          <Testimonial />
          <Contact />
        </Route>
        <Route path="/ContactForm">
          <ContactForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Index;
