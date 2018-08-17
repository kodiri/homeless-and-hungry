import React, { Component } from 'react';
import './Medical.css';
import MedicalIconBlue from './Icons/MedicalIconBlue.png';

class Medical extends Component {
  render() {
    return (
      <div className="App">
        <MedicalIconBlue />
        <p>This is the Medical Component</p>
      </div>
    );
  }
}

export default Medical;
