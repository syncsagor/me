import React, { useState } from 'react';
import './certification.css'
function Certification() {
    const [showCertification, setShowCertification] = useState(1);

    const onShowCertification = index => setShowCertification(index);
   

  return (
    <section className="section certification">
        <h2 className="section__title">Certification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="certification__container container">
            <div className="certification__tabs">
                <div onClick={ () => onShowCertification(1)} className={showCertification === 1 ? 'certification__button button--flex certification__active' : 'certification__button button--flex'}>
                <i className='uil uil-briefcase-alt certification__icon'></i>
                    Experience
                </div>
                <div onClick={() => onShowCertification(2)} className={showCertification === 2 ? 'certification__button button--flex certification__active' : 'certification__button button--flex'}>
                   
                <i className='uil uil-graduation-cap certification__icon'></i>
                    Education
                </div>
            </div>

            <div className="certification__sections">
                <div className={showCertification === 1 ? 'certification__content certification__content-active ' : 'certification__content'}>
                    <div className="certification__data">
                        <div>
                            <h3 className="certification__title">
                                Indroduction to Frontend web development
                            </h3>
                            <span className="certification__subtitle">
                            on Coursera (Current)
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> March 2023- Present
                            </div>
                        </div>
                         <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                     </div>
                    </div>
                
                     
                    <div className="certification__data">
                        <div></div>
                        <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                        </div>
                  
                        <div>
                            <h3 className="certification__title">
                            Responsive Website Basics: Code with HTML, CSS, and JavaScript
                            </h3>
                            <span className="certification__subtitle">
                            <a className='certification__link' href="https://coursera.org/share/d537eb8046c520fb7bc472dfab28c7b4" target='_blank' rel="noreferrer">Certification on Coursera</a>
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> 2020 - 2021
                            </div>
                        </div>
                     
                    </div>
                    <div className="certification__data">
                        <div>
                            <h3 className="certification__title">
                                Interactivity with Javascript
                            </h3>
                            <span className="certification__subtitle">
                            <a className='certification__link' href="https://coursera.org/share/b86356c34c64f08c755f1ecdaa18a749" target='_blank' rel="noreferrer">Certification on Coursera</a>
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> September 2022
                            </div>
                        </div>
                         <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                     </div>
                    </div>
                
                          
                    <div className="certification__data">
                        <div></div>
                        <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                        </div>
                  
                        <div>
                            <h3 className="certification__title">
                                   Introduction to CSS3
                            </h3>
                            <span className="certification__subtitle">
                                <a className='certification__link' href="https://coursera.org/share/7f5bdfed221062384249e9c452669daa" target='_blank' rel="noreferrer">Certification on Coursera</a>
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> Aug 2020 -  September 7, 2020
                            </div>
                        </div>
                       
                        
                    </div>


                    <div className="certification__data">
                        <div>
                        <h3 className="certification__title">
                                   Introduction to HTML5
                            </h3>
                            <span className="certification__subtitle">
                                <a className='certification__link' href="https://www.coursera.org/account/accomplishments/verify/KWY38W3YHLKG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target='_blank' rel="noreferrer">Certification on Coursera</a>
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> July, 2020 - August 29, 2020
                            </div>
                        </div>
                         <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                     </div>
                    </div>

                    
                </div>





                <div className={showCertification === 2 ? 'certification__content certification__content-active ' : 'certification__content'}>
                    <div className="certification__data">
                        <div>
                            <h3 className="certification__title">
                                Comilla University <br />
                                Department of English.
                            </h3>
                            <span className="certification__subtitle">
                                Bachelors of Arts in Economics
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> January 2020- Present
                            </div>
                        </div>
                         <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                     </div>
                    </div>
                
                          
                    <div className="certification__data">
                        <div></div>
                        <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                        </div>
                  
                        <div>
                            <h3 className="certification__title">
                                   Rajshahi College <br />
                                   Department of Economics
                            </h3>
                            <span className="certification__subtitle">
                            Bachelors of Arts in Economics
                            </span>
                            <div className="certification__calender">
                                <i className='uil uil-calender-alt'></i> 2018 - 2019 (1 year)
                            </div>
                        </div>
                       
                        
                    </div>

                    <div className="certification__data">
                        <div>
                            <h3 className="certification__title">
                                Hat Gangopara Degree College
                            </h3>
                            <span className="certification__subtitle">
                               Arts and Humanities
                            </span>
                            <div className="certification__calendar">
                                <i className='uil uil-calendar-alt'></i> January 2016- 2018
                            </div>
                        </div>
                         <div>
                        <span className='certification__rounder'></span>
                        <span className='certification__line'></span>
                     </div>
                    </div>
                    
            
                    
                </div>





            </div>
        </div>
    </section>
  )
}

export default Certification