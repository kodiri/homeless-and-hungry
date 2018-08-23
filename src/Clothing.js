import React, { Component } from 'react';
import './Clothing.css';
import ClothingIcon from './Icons/ClothingIcon.svg';

class Clothing extends Component {
    render() {
        return (
            <div className="body">
            <img src={ClothingIcon} className="Icon" alt="Clothing Icon" />
                <p className="intro">  This is the Clothing component</p>
            </div>
        );
    }
}

export default Clothing;