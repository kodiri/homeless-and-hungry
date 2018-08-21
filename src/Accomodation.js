import React from 'react';
import './Accomodation.css';
import AccommodationIconBlue from './Icons/AccommodationIconBlue.png';

export class Accommodation extends React.Component {
    render() {
        return (
            <div>
                <AccommodationIconBlue />
                <div>
                    <li>Centrepoint - Bruce House Foyer
                        Referral address
                        124 Drury Lane London WC2B 5SU
                        Referral phone
                        020 7557 4500
                        Referral email
                        brucehouse-service@centrepoint.org
                        Website http://www.centrepoint.org.uk</li>
                    <li>St Mungo's - Endell Street
                        Referral address
                        83 Endell Street London WC2H 9DN
                        Referral phone
                        020 7632 4000
                        Referral email
                        info@mungosbroadway.org.uk
                        Website http://www.mungosbroadway.org.uk</li>
                    <li>Look Ahead - Edward Alsop Court
                        Referral address
                        18 Great Peter Street London SW1P 2BT
                        Referral phone
                        0207 222 8953</li>
                    <li>Riverside Care and Support - King George's Hostel
                        Referral address
                        75 Great Peter Street London SW1P 2BN
                        Referral phone
                        020 7222 3288
                        Website http://www.riverside.org.uk</li>
                    <li>Montfort House
                        Referral address
                        Carlisle Place London SW1P 1NL
                        Referral phone
                        020 7592 1875
                        Referral email
                        montforthouse@passage.og.uk
                        Website http://www.passage.org.uk</li>
                </div>
            </div>
        );
    }
}