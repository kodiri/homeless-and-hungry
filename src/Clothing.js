import React, { Component } from 'react';
import './Clothing.css';
import ClothingIconBlue from './Icons/ClothingIconBlue';

class Help extends Component {
    render() {
        return (
            <div className="body">
            <ClothingIconBlue />
                <p className="intro">  This is the Clothing component</p>
            </div>
        );
    }
}

export default Clothing;