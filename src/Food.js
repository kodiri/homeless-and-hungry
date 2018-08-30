import React from 'react';
import './Food.css';
import FoodIcon from './Icons/FoodIcon.svg';


export default class Food extends React.Component {
    render() {
        return (
            <div>
                <img src={FoodIcon} className="Icon" alt="Food Icon" />
                <div className='FoodItems'>
                    <div className='item'>
                        <h5>BLOOMSBURY CENTRAL BAPTIST CHURCH</h5>
                        <p>Free food and limited number of tickets for Sunday Roast.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Sunday: 12:30am–1:30pm (free, only for 25 people)</li>
                            <li>Monday – Friday: 10am–4pm (tea, coffee, biscuits)</li>
                            <li>Address: 235 Shaftesbury Ave, London WC2H 8EP</li>
                            <li>Phone: 020 7240 0544</li>
                            <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.bloomsbury.org.uk'>http://www.bloomsbury.org.uk</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h5>AMERICAN INTERNATIONAL CHURCH SOUP KITCHEN</h5>
                        <p>The soup kitchen provides free hot meals, clothes and toiletries.
                        The clothing store is open on alternate Mondays.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Monday - Tuesday: 10am–12am</li>
                            <li>Thursday – Saturday: 10am–12am</li>
                            <li>Address: 79A Tottenham Court Rd, London W1T 4TD</li>
                            <li>Phone: 020 7580 2791</li>
                            <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://amchurch.co.uk/soup-kitchen/'>http://amchurch.co.uk/soup-kitchen/</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h5>CHRIST APOSTOLIC CHURCH (BETHEL) UK</h5>
                        <p>Welcomes homeless people every Sunday morning for a cooked breakfast
                        and the last Saturday of the month for hot meals.</p>
                        <ol>
                            <li>Opening Hours: </li>
                            <li>Saturday: 2pm–3:30pm</li>
                            <li>Sunday: 8am–9am</li>
                            <li>Address: 217/223 Kingsland Rd, Hackney, London E2 8AN</li>
                            <li>Phone: 20 7729 4375</li>
                            <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://cacbethel.org/dev/'>http://cacbethel.org/dev/</a></li>
                        </ol>
                        <div className='item'>
                            <h5>EALING SOUP KITCHEN</h5>
                            <p>Free food and also they give practical help/housing advice. AA meetings.</p>
                            <ol>
                                <li>Opening Hours: </li>
                                <li>Friday: 11am–4pm</li>
                                <li>Saturday - Sunday: 3:30pm–5pm</li>
                                <li>Monday: 7pm–9pm</li>
                                <li>Address: St John's Church Hall, Mattock Lane, London W13 9LA</li>
                                <li>Phone: 0208 840 0651</li>
                                <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.havengreen.org.uk/ealingsoupkitchen.html'>http://www.havengreen.org.uk/ealingsoupkitchen.htm</a></li>
                            </ol>
                        </div>
                        <div class='item'>
                            <h5>CHRISTIAN KITCHEN</h5>
                            <p>Hot meals from a mobile kitchen van</p>
                            <ol>
                                <li>Opening Hours: </li>
                                <li>Monday – Sunday: 7:30pm–8:30pm</li>
                                <li>Address: 65 Blackhorse Road, Walthamstow, London E17 7AS</li>
                                <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.christiankitchen.co.uk/'>http://www.christiankitchen.co.uk/</a> </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}