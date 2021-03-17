//https://reacttraining.com/react-router/web/example/basic
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, /*Link,*/ NavLink } from "react-router-dom";
import Solution from './Solution';
import Home from './Home';
import Cartoonizer from './Cartoonizer';
import Birthday from './Birthday';
import Contact from './Contact';
import Header from './Header';
import {ThemeContext, themes} from './theme-context';
        

class App extends Component {
  render() {
    return (
       <ThemeContext.Provider value={themes.en}>
          <Header>
          </Header> 
       <Router>
      <div className="container mx-auto px-4 mt-8">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" >
             <span className="navbar-toggler-icon"></span>
             </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <div className="navbar-nav">  
            <NavLink  exact={true} to="/frontend" className="nav-link nav-item">Home</NavLink>
            <NavLink to="/frontend/solution" className="nav-link nav-item">Solution for Blind People</NavLink>
            <NavLink to="/frontend/birthday" className="nav-link nav-item">Birthday Present</NavLink> 
            <NavLink to="/frontend/cartoonizer" className="nav-link nav-item">Cartoonizer</NavLink>
            <NavLink to="/frontend/contact" className="nav-link nav-item">Contact Us</NavLink>
        </div>
        </div>
        </nav> 
        <Route exact path="/" component={Home} />
        <Route exact path="/frontend" component={Home} />
        <Route exact path="/frontend/solution" component={Solution} />
        <Route exact path="/frontend/birthday" component={Birthday} />
        <Route exact path="/frontend/cartoonizer" component={Cartoonizer} />
        <Route exact path="/frontend/contact" component={Contact} />
        <Route exact path="/frontend/header" component={Header} />
        </div>
    </Router>
    </ThemeContext.Provider>
    );
  }
}

export default App;
