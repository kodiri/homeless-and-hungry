import React, { Component } from 'react';
import './Clothing.css';
import ClothingIcon from './Icons/ClothingIcon.svg';
import { Link } from 'react-router-dom';

class Clothing extends Component {
    render() {
        return (
            <div className="body">
                <img src={ClothingIcon} className="Icon" alt="Clothing Icon" />
                <div><h1 className="MainHeading">Clothing</h1>
                    <div><h1 className="IntroText">Here are your search results for Clothing.</h1>
                        <div><h1 className="IntroText">To return to the main menu click on the button at the bottom of the page.</h1>
                            <div className='ClothingItems'>
                                <div className='item'>
                                    <h5>The St Leonard’s Church</h5>
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
                                    <h5>At the TAB Centre</h5>
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
                            <break></break>
                            <Link to='/'>
              <div className="Btn"><label>Main Menu</label></div>
            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clothing;