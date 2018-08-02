import React, { Component } from 'react';
import './Help.css';
import Icons from './Icons/HelpIconBlue.png';


class Help extends Component {
    render() {
        return (
            <div className="body">
            <Icons />
                <p className="intro">  This is the Help conponent</p>
            </div>
        );
    }
}

export default Help;
