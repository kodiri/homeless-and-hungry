import React, { Component } from 'react';
import './Medical.css';
import MedicalIcon from './Icons/MedicalIcon.svg';

class Medical extends Component {
  render() {
    return (
      <div className="App">
        <img src={MedicalIcon} className="Icon" alt="Medical Icon" />
        <p>This is the Medical Component</p>
      </div>
    );
  }
}

export default Medical;
