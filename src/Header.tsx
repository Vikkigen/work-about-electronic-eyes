import React, { Component } from 'react';
import './HeaderStyles.css';
//This class Header for showing us three parts of App class in comfortable way
class Header extends Component {
  
  render() {
    return (
      /**Here we create a select menu to select language in the future for our site.
       * Also, we have some space between select form and main titles.
       */
    <div className="headerBlock">
  <select name="language" id="language">
    <option value="English">English</option>
    <option value="Espanol">Español</option>
  </select>
  <nav className="flex items-center justify-between flex-wrap text-white bg-brand-blue p-6">
    <div className="flex items-center flex-no-shrink mr-6">
    </div>
    <div className="w-full block lg:flex lg:items-center lg:w-auto">
       <div className="text-sm lg:flex-grow"> 
      </div>
    </div>
  </nav>

  <div className="bg-brand-blue  px-8 py-8 mb-8">
  <h1 className="font-bold uppercase text-x12 mb-4 text-white text-center">electronic eyes</h1>
  <p className="mb-8  text-white text-center">Help for visually impaired people</p>
  </div>
 </div>);
  }
}

export default Header;
