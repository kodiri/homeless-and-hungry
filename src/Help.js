import React, { Component } from 'react';
import './Help.css';
import HelpIconBlue from './Icons/HelpIconBlue.png';


class Help extends Component {
    render() {
        return (
            <div className="body">
            <HelpIconBlue />
                <p className="intro">  This is the Help conponent</p>
            </div>
        );
    }
}

export default Help;
