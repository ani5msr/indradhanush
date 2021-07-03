import React, { Component } from 'react';

import Homepage from "./Homepage.js"
import volunteer from "./components/volunteer.js"

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Contact from "./components/Contact.js";

class App extends Component {
  render() {
    return (
        <div className="App">
            <BrowserRouter>

                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/volunteer' component={volunteer} />
                   
                    <Route exact path='/contact' component={Contact} />
                </Switch>

            </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

// To be worked on
// <SiteFooter></SiteFooter>
