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
        
/**
 * Creating the page with components. Our component navbar inside container, where also we are creating some button, what will appear after how sizes of the site will low
* Before creating navbar we also create other component class Header inside our App class.
* React-Router matches the URL and loads up the component of that particular page.
* The NavLink component provides a declarative way to navigate around the application.
* To specify which route to navigate to, use the to prop and pass the path name.
 */
class App extends Component {
  render() {
    return (
      /**
       * Here we are creating class Header with select form and two titles inside
       */
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
        <div className="navbar-nav" data-testid="navbar">  
            <NavLink  exact={true} to="/frontend" className="nav-link nav-item home-link" data-testid="home-link">Home</NavLink>
            <NavLink to="/frontend/solution" className="nav-link nav-item solution-link" data-testid="solution-link">Solution for Blind People</NavLink>
            <NavLink to="/frontend/birthday" className="nav-link nav-item birthday-link" data-testid="birthday-link">Birthday Present</NavLink> 
            <NavLink to="/frontend/cartoonizer" className="nav-link nav-item cartoonizer-link" data-testid="cartoonizer-link">Cartoonizer</NavLink>
            <NavLink to="/frontend/contact" className="nav-link nav-item contact-link" data-testid="contact-link">Contact Us</NavLink>
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
    /**
     * The Router component has a path prop that accepts the page's path, and the page component should be wrapped with the Router,
     *  as shown below.The exact prop above tells the Router component to match the path exactly. 
     * If you don't add the exact prop on the / path, it will match with all the routes starting with a / including /contact.
     */
    );
  }
}

export default App;
