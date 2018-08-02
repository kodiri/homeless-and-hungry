import React, { Component } from 'react';
import './Medical.css';
import Icons from './Icons/MedicalIconBlue.png';

class Medical extends Component {
  render() {
    return (
      <div className="App">
        <Icons />
        <p>This is the Medical Component</p>
      </div>
    );
  }
}

export default Medical;
