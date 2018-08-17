import React, { Component } from 'react';
import './Interface.css';
import AccommodationIconBlue from './Icons/AccommodationIcon.svg';
import FoodIconBlue from './Icons/FoodIcon.svg';
import HelpIconBlue from './Icons/HelpIcon.svg';
import HelpIconBlue from './Icons/AccommodationIcon.svg';
import ClothingIconBlue from './Icons/ClothingIcon.svg';
import MedicalIconBlue from './Icons/MedicalIcon.svg';
import WashingIconBlue from './Icons/WashingIcon.svg';
import RoundedButtonIconBlue from './Icons/RoundedButtonIcon.svg';
import HomelessHungryLogo from './Icons/HomelessHungryLogo2.png';





class Interface extends Component {
  render() {
    return (
      <div className="container">
        <div><img src={HomelessHungryLogo} className="Logo" alt="Homeless and Hungry Logo" />
        </div>
        <div><h1 className="MainHeading">Welcome to the Hungry and Homeless App.</h1>
          <div><h1 className="IntroText">Your one stop for services for homeless people.</h1>
            <div><h1 className="IntroText">Find accommodation, food, fresh clothing, somewhere to wash, medical attention and also help and support.</h1>
              <div><h1 className="IntroText">Simply click on the icon for the section you need.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div>
            <div><img src={AccommodationIconBlue} className="Icon" alt="Accommodation Icon" />
            </div>
            <h1 className="MainHeading">Accommodation</h1>
          </div>
          <div><p className="IntroText">
            Find accommodation within London.</p>
          </div>
        </div>
        <div className="box">
          <div>
            <div><img src={FoodIconBlue} className="Icon" alt="Food Icon" />
            </div>
            <h1 className="MainHeading">Food</h1>
          </div>
          <div><p className="IntroText">
            Find food within London.
            </p>
          </div>
        </div>
        <div className="box">
          <div>
            <div><img src={ClothingIconBlue} className="Icon" alt="Clothing Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Clothing</h1>
            </div>
            <div><p className="IntroText">
              Find clean clothing within London.
            </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div>
            <div>
              <img src={WashingIconBlue} className="Icon" alt="Washing Icon" />
            </div>
            <div><h1 className="MainHeading">Washing</h1>
            </div>
            <div><p className="IntroText">
              Find places to have a wash within London.
            </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div>
            <div>
              <img src={MedicalIconBlue} className="Icon" alt="Medical Services Icon" />
            </div>
            <h1 className="MainHeading">Medical Services</h1>
            </div>
            <div><p className="IntroText">
              Find medical services within London.
            </p>
            </div>
            <div className="box">
              <div>
                <div><img src={HelpIconBlue} className="Icon" alt="Help and Assistance Icon" />
                </div>
                <div>
                  <h1 className="MainHeading">Help & Assistance</h1>
                </div>
                <div><p className="IntroText">
                  Find help and assistance within London.
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>
           
    );

  }
}

export default Interface;