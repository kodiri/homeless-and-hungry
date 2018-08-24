import React, { Component } from 'react';
import './Washing.css';
import WashingIcon from './Icons/WashingIcon.svg';

class Washing extends Component {
    render() {
        return (
            <div className="body">
                <img src={WashingIcon} className="Icon" alt="Washing Icon" />
                <div className='WashingItems'>
                    <div className='item'>
                        <h4>Barons Court Project</h4>
                        <p>Day centre for people vulnerable due to mental ill-health and/or homelessness. 
                            Tenancy sustainment support. Cost-price cafe, laundry and shower facilities available on drop-in days. 
                            Life skills training Thursday 2pm-5pm. Women's Group Fri 12 noon-2pm. Green Palm Club (BME social group) 
                            Fri 2.30pm-5pm. 
                            Activities throughout the week such as drama, relaxation, computer sessions and quizzes.</p>
                        <ol>
                            <li>Address: 69 Talgarth Road, London, W14 9DD</li>
                            <li>Phone: 020 7603 5232</li>
                            <li>Email: michael@baronscourtproject.org</li>
                            <li>Website: <a href='http://www.baronscourtproject.org'>http://www.baronscourtproject.org</a></li>
                        </ol>
                    </div>
                    <div className='item'>
                        <h4>Ace of Clubs</h4>
                        <p>Day centre for the homeless, vulnerable and others in need. 
                            Cheap meals, access to physical and mental health care, laundry, shower facilities. 
                            Advice on benefits and housing Monday-Friday. Advice on finding accommodation. 
                            Welfare advice. IT Suite with basic computing lessons and internet café sessions for online benefit claims and job searches. 
                            Food & safety classes.</p>
                        <ol>
                            <li>Address: St Alphonsus Road, London, SW4 7AS</li>
                            <li>Phone: 020 7720 2811</li>
                            <li>Email: sarahmiles@aceofclubs.org.uk</li>
                            <li>Website: <a href='http://www.aceofclubs.org.uk'>http://www.aceofclubs.org.uk</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Washing;