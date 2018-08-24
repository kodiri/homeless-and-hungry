import React, { Component } from 'react';
import './Interface.css';
import AccommodationIconBlue from './Icons/AccommodationIcon.svg';
import FoodIconBlue from './Icons/FoodIcon.svg';
import HelpIconBlue from './Icons/HelpIcon.svg';
import ClothingIconBlue from './Icons/ClothingIcon.svg';
import MedicalIconBlue from './Icons/MedicalIcon.svg';
import WashingIconBlue from './Icons/WashingIcon.svg';
import HomelessHungryLogo from './Icons/HomelessHungryLogov2.svg';





class Interface extends Component {
  render() {
    return (
      <div className="container">
        <div className="MasterBox">
          <div className="Box">
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
          </div>
        </div>

        <div className="MasterBox">
          <div className="box">
            <div>
              <img src={AccommodationIconBlue} className="Icon" alt="Accommodation Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Accommodation</h1>
            </div>
            <div><p className="IntroText">
              Find accommodation within London.</p>
            </div>
            <div className="Btn"><label>Find Accommodation</label></div>
          </div>

          <div className="box">
            <div>
              <img src={FoodIconBlue} className="Icon" alt="Food Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Food</h1>
            </div>
            <div><p className="IntroText">
              Find food within London.
            </p>
            </div>
            <div>
            <div className="Btn"><label>Find Food</label></div>
            </div>

          </div>
        </div>

        <div className="MasterBox">
          <div className="box">
            <div><img src={ClothingIconBlue} className="Icon" alt="Clothing Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Clothing</h1>
            </div>
            <div><p className="IntroText">
              Find clean clothing within London.
            </p>
            </div>
            <div>
            <div className="Btn"><label>Find Clothing</label></div>
            </div>
          </div>



          <div className="box">
            <div><img src={WashingIconBlue} className="Icon" alt="Washing Icon" />
            </div>
            <div><h1 className="MainHeading">Washing</h1>
            </div>
            <div><p className="IntroText">
              Find places to have a wash within London.
            </p>
            </div>
            <div>
            <div className="Btn"><label>Find Washing Facilities</label></div>
            </div>
          </div>
        </div>

        <div className="MasterBox">
          <div className="box">
            <div>
              <img src={MedicalIconBlue} className="Icon" alt="Medical Services Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Medical Services</h1>
            </div>
            <div><p className="IntroText">
              Find medical services within London.
            </p>
            </div>
            <div>
            <div className="Btn"><label>Find Medical Services</label></div>
            </div>
          </div>
          <div className="box">
            <div><img src={HelpIconBlue} className="Icon" alt="Help and Assistance Icon" />
            </div>
            <div>
              <h1 className="MainHeading">Help & Assistance</h1>
            </div>
            <div><p className="IntroText">
              Find help and assistance within London.
            </p>
            </div>
            <div>
            <div className="Btn"><label>Find Help & Assistance</label></div>
            </div>
          </div>
        </div>

        <div className="MasterBox">
          <div className="box">
            <div><h1 className="IntroText">Footer Text to be added</h1>
            </div>
          </div>
        </div>

      </div >

    );

  }
}

export default Interface;