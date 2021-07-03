import React, { Component } from 'react';

import Homepage from "./Homepage.js"
import volunteer from "./components/volunteer.js"
import donate1 from "./components/donate1.js"
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
                    <Route exact path='/donate' component={donate1} />
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