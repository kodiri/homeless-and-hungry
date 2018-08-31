import React, { Component } from 'react';
import './results.css';
import MedicalIcon from './Icons/MedicalIcon.svg';
import { Link } from 'react-router-dom';

class Medical extends Component {
    render() {
        return (
            <div>
                <img src={MedicalIcon} className="Icon" alt="Medical Icon" />
                <div><h1 className="MainHeading">Medical</h1>
                    <div><h1 className="IntroText">Here are your search results for Medical.</h1>
                        <div><h1 className="IntroText">To return to the main menu click on the button at the bottom of the page.</h1>
                            <div className='AccommodationItems'>
                                <div className='item'>
                                    <h5>Kings Cross Primary Health Care Centre</h5>
                                    <p>Drop-in primary health care service for homeless people. Doctor and nurse available.
                                      Referrals to drug and alcohol services and GPs. Sexual health screening, HIV and hepatitis testing, hepatitis vaccination.
                          Shower and clothes store for people using the medical facilities.</p>
                                    <ol>,
                            <li>Address: 264 Pentonville Road, London N1 9JY</li>
                                        <li>Phone: 020 3317 6075</li>
                                    </ol>
                                </div>
                                <div className='item'>
                                    <h5>Camden Health Improvement Practice</h5>
                                    <p>Primary health care sessions at day centres and hostels throughout Camden. Health assessment and general health care.
                                      Well women checks. Hepatitis and HIV screening. Dental service.
                                      Alcohol and drug advice and treatment.
                                      Advice and assistance with using local health services, registering with a GP,
                          finding a dentist or optician and on housing benefit.</p>
                                    <ol>
                                        <li>Opening Hours: </li>
                                        <li>Address: The Margarete Centre, 108 Hampstead Road, London NM1 2LS</li>
                                        <li>Phone: 020 3317 6075</li>
                                        <li>Email: chip@nhs.net</li>
                                    </ol>
                                </div>
                                <div className='item'>
                                    <h5>Great Chapel Street Medical Centre</h5>
                                    <p>Walk-in medical centre for homeless people in Westminster not registered with a doctor.
                          GP and nurse available during opening hours.</p>
                                    <ol>
                                        <li>Opening Hours: </li>
                                        <li>Monday – Friday: 9am–5pm</li>
                                        <li>Address: 13 Great Chapel Street, London W1F 8FL</li>
                                        <li>Phone: 020 7437 9360</li>
                                        <li>Email: info@greatchapelst.org.uk</li>
                                        <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.greatchapelst.org.uk'>http://www.greatchapelst.org.uk</a></li>
                                    </ol>
                                </div>
                                <div className='item'>
                                    <h5>The Dr Hickey Surgery</h5>
                                    <p>Drop-in primary health care service for homeless people.
                                      Fully equipped medical room, with full time GP and practice nurse.
                                      CPN. Access to a psychiatrist.
                          General counselling and alcohol/drug counselling and treatment.</p>
                                    <ol>
                                        <li>Address: 3 Arneway Street, London SW1P 2BG</li>
                                        <li>Phone: 020 7222 8593</li>
                                        <li>Email: info@cardinalhumecentre.org.uk</li>
                                        <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.cardinalhumecentre.org.uk'>http://www.cardinalhumecentre.org.uk</a></li>
                                    </ol>
                                </div>
                                <div className='item'>
                                    <h5>Joint Homelessness Team (JHT) - Westminster</h5>
                                    <p>Support and housing advice for people with mental health problems who are using homelessness agencies,
                                      and for street homeless people. Assessments for community care and referrals to appropriate agencies.
                          The team includes social workers, CPNs and psychiatrists.</p>
                                    <ol>
                                        <li>Address: 190 Vauxhall Bridge Road, London SW1V 1DX</li>
                                        <li>Phone: 020 7854 4206</li>
                                        <li>Website: <a target="_blank" rel="noopener noreferrer" href='http://www.cnwl.nhs.uk/service/joint-homelessness-team/'>http://www.cnwl.nhs.uk/service/joint-homelessness-team/</a></li>
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

export default Medical;
