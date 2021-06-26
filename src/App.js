import React, { Component } from 'react';
import SiteHeader from "./components/Header.js"; 
import PrimaryNav from "./components/PrimaryNav.js"; 
import SecondaryNav from "./components/SecondaryNav.js"; 
import Carousel from "./components/Carousel.js"; 
import DocumentLinks from "./components/DocumentLinks.js";
import Testimonial from "./components/Testimonial.js";
import SiteFooter from "./components/SiteFooter.js";
import Volunteer from "./components/Volunteer.js"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            
        <PrimaryNav></PrimaryNav>
        <SecondaryNav></SecondaryNav>
       
       
        <Testimonial></Testimonial>
        
      </div>
    );
  }
}

export default App;

// To be worked on
// <SiteFooter></SiteFooter>