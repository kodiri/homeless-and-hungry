import React, { Component } from 'react';
import './Help.css';
import HelpIcon from './Icons/HelpIcon.svg';


class Help extends Component {
    render() {
        return (
            <div className="body">
            <img src={HelpIcon} className="Icon" alt="Help Icon" />
                <p className="intro">  This is the Help conponent</p>
            </div>
        );
    }
}

export default Help;
