import React, { Component } from 'react';
import './Washing.css';
import WashingIconBlue from './Icons/WashingIconBlue';

class Help extends Component {
    render() {
        return (
            <div className="body">
            <WashingIconBlue />
                <p className="intro">  This is the Washing component</p>
            </div>
        );
    }
}

export default Washing;