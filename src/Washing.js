import React, { Component } from 'react';
import './Washing.css';
import WashingIcon from './Icons/WashingIcon.svg';

class Washing extends Component {
    render() {
        return (
            <div className="body">
            <img src={WashingIcon} className="Icon" alt="Washing Icon" />
                <p className="intro">  This is the Washing component</p>
            </div>
        );
    }
}

export default Washing;