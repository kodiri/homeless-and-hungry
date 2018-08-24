import React from 'react';
import './Food.css';
import FoodIcon from './Icons/FoodIcon.svg';


export default class Food extends React.Component {
    render() {
        return (
            <div>
                <img src={FoodIcon} className="Icon" alt="Food Icon" />
            </div>
        )
    }
}