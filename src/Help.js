import React, { Component } from 'react';
import './Help.css';
import HelpIcon from './Icons/HelpIcon.svg';


class Help extends Component {
    render() {
        return (
            <div className="body">
                <img src={HelpIcon} className="Icon" alt="Help Icon" />
                <div className='HelpItems'>
                    <div className='item'>
                        <h5>Hope Worldwide</h5>
                        <p>Advice for homeless people, including referrals to hostels
                            and assistance with finding private rented accommodation.
                            Also provide a residential drug and alcohol rehabilitation programme.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Monday – Friday: 10am–4pm</li>
                            <li>Address: 360-364 City Road, London, EC1V 2PY</li>
                            <li>Phone: 020 7713 7655</li>
                            <li>Website: <a href='http://www.hopeworldwide.org.uk'>http://www.hopeworldwide.org.uk</a></li>
                        </ol>
                    </div>
                </div>
                <div className='HelpItems'>
                    <div className='item'>
                        <h5>All Saints Church, Islington</h5>
                        <p>Food and social contact for people who are homeless and on the margins.
                            Breakfast Tuesday and Thursday 10am-12 noon. Informal advice on finding emergency accommodation,
                            signposting to other organisations and other issues around homelessness.</p>
                        <ol>
                            <li>Opening hours: make contact first</li>
                            <li>Address: Carnegie Street, London, N1 9QW</li>
                            <li>Phone: 020 7837 0720</li>
                            <li>Email: allsaints.islington@london.anglican.org</li>
                        </ol>
                    </div>
                </div>
                <div className='HelpItems'>
                    <div className='item'>
                        <h5>Alone in London Service</h5>
                        <p>Support services for young people aged 16-25 who are homeless or at risk of becoming homeless.
                            Services include: information and signposting; housing advice;
                            advice on welfare benefits; general advocacy; help with getting into education,
                            training & employment; counselling service;
                            family mediation and mediation for young ex-offenders and their families.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Monday - Friday: 9am - 1pm, 2pm - 4pm</li>
                            <li>Address: Endeavour Centre, Sherborne House,
                                34 Decima Street, London, SE1 4QQ</li>
                            <li>Phone: 020 7278 4224</li>
                            <li>Email: enquiries@als.org.uk</li>
                            <li>Website: <a href='http://www.aloneinlondon.org'>http://www.aloneinlondon.org</a></li>
                        </ol>
                    </div>
                </div>
                <div className='HelpItems'>
                    <div className='item'>
                        <h5>Focus Homeless Outreach Team</h5>
                        <p>Community mental health team offering support to homeless people with mental health problems.
                            Street outreach work. Sessions in hostels and day centres.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Monday - Friday: 9am - 5pm</li>
                            <li>Address: 4 Greenland Road, London, NW1 0AS</li>
                            <li>Phone: 020 3317 6590</li>
                            <li>Website: <a href='http://www.candi.nhs.uk'>http://www.candi.nhs.uk</a></li>
                        </ol>
                    </div>
                </div>
                <div className='HelpItems'>
                    <div className='item'>
                        <h5>Barka UK - Reconnection Project</h5>
                        <p>Street outreach work with Eastern European rough sleepers, who are destitute. 
                            Help people connect to homelessness day centres and work with them to prepare for 
                            reconnection with their families and communities. 
                            People can be referred to the Barka Network of Inclusion Program in Poland, 
                            where they can access detox, 
                            learn new work skills and build friendships with others who share their journey.</p>
                        <ol>
                            <li>Opening hours:</li>
                            <li>Monday - Friday: 9am - 5pm</li>
                            <li>Address: Lancaster House, 70 Newington Causeway, London, SE1 6DF</li>
                            <li>Phone: 020 7275 7768</li>
                            <li>Email: barka.uk@googlemail.com</li>
                            <li>Website: <a href='http://www.barkauk.org'>http://www.barkauk.org</a></li>
                        </ol>
                    </div>
                </div>
            </div>

        );
    }
}

export default Help;
