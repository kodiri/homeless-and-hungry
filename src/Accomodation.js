import React from 'react';
import './Accomodation.css';
import AccommodationIconBlue from './Icons/AccommodationIconBlue.png';

export class Accommodation extends React.Component {
    render() {
        return (
            <div>
                <AccommodationIconBlue />
                <div className='AccommodationItems'>
                    <div className='item'>
                        <h5>CARITAS ANCHOR HOUSE</h5>
                        <p>For people affected by homelessness, drug & alcohol misuse,
                mental health, domestic abuse & offending. Accommodation and varied services.</p>
                        <ol>,
                            <li>Address: 81 Barking Road, Canning Town, London E16 4HB</li>
                            <li>Phone: 0207 476 6062</li>
                            <li>Website: <a href='https://www.caritasanchorhouse.org.uk/'>https://www.caritasanchorhouse.org.uk/</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h5>HOLY TRINITY BROMPTON SHELTER</h5>
                        <p>Safe, non-judgmental place where all are welcome. Food, advice, friendship and practical support
                        in a non-threatening Christian environment. Hot breakfast, coffee bar and a range of activities.
                        Counselling, debt and welfare advice, and alcohol and drug support through partner organisations.</p>
                        <ol>
                            <li>Opening Hours: </li>
                            <li>Wednesday - Friday: 9am–2pm</li>
                            <li>Address: Queen's Gate (St Augustin's), London SW7 5LP</li>
                            <li>Phone: 020 7590 8248</li>
                            <li>Website: <a href='https://www.htb.org/'>https://www.htb.org/</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h5>KAIROS COMMUNITY TRUST</h5>
                        <p>Supported accommodation for single homeless people 18+ with drug and alcohol dependency who
                     are committed to becoming clean and dry, and have low support needs.</p>
                        <ol>
                            <li>Opening Hours: </li>
                            <li>Monday – Friday: 9am–5pm</li>
                            <li>Address: 22 Linden Grove, London SE15 3LF</li>
                            <li>Phone: 020 7277 6264</li>
                            <li>Website: <a href='http://www.kairoscommunity.org.uk/'>http://www.kairoscommunity.org.uk/</a></li>
                        </ol>
                    </div>
                    <div classname='item'>
                        <h5>SIMON COMMUNITY (HOUSE OF HOSPITALITY)</h5>
                        <p>A therapeutic community where formerly homeless residents work with volunteers to take outreach
                    support to street homeless guests. Clothing from the street cafe when available.</p>
                        <ol>
                            <li>Opening Hours:</li>
                            <li>Monday – Friday: 7:15am–8:30am</li>
                            <li>Saturday - Sunday: 1pm–3pm</li>
                            <li>Address: 129 Malden Road, Kentish Town, London NW5 4HS</li>
                            <li>Phone: 020 7485 6639</li>
                            <li>Website: <a href='https://www.simoncommunity.org.uk/'>https://www.simoncommunity.org.uk/</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h5>TRINITY HOMELESS PROJECTS</h5>
                        <p>Accommodation and support for single homeless men 16-55 with support needs.
                    25 per cent of bedspaces are for ex-offenders. Prefer applicants to have a local connection.</p>
                        <ol>
                            <li>Opening Hours:</li>
                            <li>Monday–Friday: 8:30am–5pm </li>
                            <li>Address: 17-18 Pownall Gardens, Hounslow, London TW3 1YW</li>
                            <li>Phone: 020 8737 6611</li>
                            <li>Website: <a href='http://www.wearetrinity.org.uk/'>http://www.wearetrinity.org.uk/</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}