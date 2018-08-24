import React, { Component } from 'react';
import './Clothing.css';
import ClothingIcon from './Icons/ClothingIcon.svg';

class Clothing extends Component {
    render() {
        return (
            <div className="body">
                <img src={ClothingIcon} className="Icon" alt="Clothing Icon" />
                <div className='ClothingItems'>
                    <div className='item'>
                        <h4>The St Leonard’s Church</h4>
                        <p>Our drop-in provides: hot and cold food and drink, 
                            cooked breakfast once a week,
                            cooked lunch once a week,
                            supplies of toiletries, clean clothing and shoes, sleeping bags,
                            advice and links to relevant shelters, organisations and agencies,
                            access to the TB X-ray van a couple of times a year a weekly film club.</p>
                        <ol>
                            <li>Address: The St Leonard’s Church, Shoreditch High Street, E1 6JN</li>
                            <li>Mobile: 07572 290 655</li>
                            <li>Email: dropin@sct.org.uk</li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h4>At the TAB Centre</h4>
                        <p>Our drop-in provides: hot and cold food and drink, 
                            cooked breakfast once a week,
                            cooked lunch once a week,
                            supplies of toiletries, clean clothing and shoes, sleeping bags,
                            advice and links to relevant shelters, organisations and agencies,
                            access to the TB X-ray van a couple of times a year a weekly film club.</p>
                        <ol>
                            <li>Address: 3 Godfrey Place, London E2 7NT</li>
                            <li>Email: dropin@sct.org.uk</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clothing;