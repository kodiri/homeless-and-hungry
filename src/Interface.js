import React, { Component } from 'react';
import './Interface.css';
import AccommodationIconBlue from './Icons/AccommodationIcon.svg';
import FoodIconBlue from './Icons/FoodIcon.svg';
import HelpIconBlue from './Icons/AccommodationIcon.svg';
import ClothingIconBlue from './Icons/ClothingIcon.svg';
import MedicalIconBlue from './Icons/MedicalIcon.svg';
import WashingIconBlue from './Icons/WashingIcon.svg';
import RoundedButtonIconBlue from './Icons/RoundedButtonIcon.svg';





class Help extends Component {
    render() {
        return (
            <div className="body">
                <p className="intro">Welcome to the Hungry and Homeless App, your one stop for services for homeless people.</p>
            </div>
            <div className="App">
            <header className="App-header">
              <img src={AccommodationIconBlue} className="Icon" alt="Accommodation Icon" />
              <h1 className="MainHeading">Welcome to React</h1>
            </header>
            <p className="IntroText">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
    }
}

export default Interface;