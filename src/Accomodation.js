import React from 'react';
import './Accomodation.css';
import AccommodationIcon from './Icons/AccommodationIcon.svg';

export default class Accommodation extends React.Component {
    render() {
        return (
            <div>
                <img src={AccommodationIcon} className="Icon" alt="Accommodation Icon" />
            </div>
        );
    }
}