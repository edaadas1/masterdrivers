import React from 'react'
import "../assets/css/online-beginner-driver.css";
import onlineEducation1 from '../assets/images/online driver education.jpg';
import onlineEducation2 from '../assets/images/online-beginner-education-2.jpg';
import chapter1 from '../assets/images/chapter-1.jpg';
import chapter2 from '../assets/images/chapter-2.jpg';
import chapter3 from '../assets/images/chapter-3.jpg';
import chapter4 from '../assets/images/chapter-4.jpg';
import chapter5 from '../assets/images/chapter-5.jpg';
import chapter6 from '../assets/images/chapter-6.jpg';
import chapter7 from '../assets/images/chapter-7.jpg';
import chapter8 from '../assets/images/chapter-8.jpg';
import chapter9 from '../assets/images/chapter-9.jpg';
import chapter10 from '../assets/images/chapter-10.jpg';
import { Button } from '@mui/material';


const OnlineBeginnerDriverEducation = () => {
  return (
    <>
      <div className='online-beginner-driver-education'>
         <div className='online-beginner-education-img-part'>
                <h1>Online Beginner Driver Education</h1>
          </div>

          <h1>MTO APPROVED ONLINE BEGINNER DRIVER EDUCATION</h1>
          <br />
          <h2 style={{marginBottom:25}}>OFFICIAL, PROFESSIONAL, BENEFICIAL</h2>

          <div className='online-beginner-driver-education-cards'>
            <div className='online-beginner-driver-education-card'>
              <p>
              Master Driving School offers MTO-approved 40 hours of Beginner Driver Certification Course that 
              includes 30 hours of online self-paced course and 10 hours of in-car training. Our instructor’s 
              priority is to ensure their students practice the advanced knowledge acquired while taking our 
              online course. 
              </p>
              <img src={onlineEducation2} alt="" />
            </div>

            <div className='online-beginner-driver-education-card'>
              <img src={onlineEducation1} alt="" />
              <p>
              Every Master Drivers student is respected and treated as an integral part of the Master Drivers 
              family. We promise to ensure each student drives away with comprehensive driving readiness training,
              confident vehicle maneuvering, and a lifetime of safe driving skills. 
              </p>
            </div>
            
          </div>

          <h1>WHAT IS INCLUDED?</h1>

          <div className='online-beginner-driver-education-bottom-cards'>
              <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter1} alt="" />
                        <h3>Rules of the Road</h3>
                        <p>
                        Traffic Laws and Regulations Traffic Control Devices
                        </p>
                 
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter2} alt="" />
                        <h3>Vehicle and Its Components</h3>
                        <p>
                        Use of Baic Vehicle Components Vehicle and Its Components
                        </p>
                    
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter3} alt="" />
                        <h3>Vehicle Handling</h3>
                        <p>
                        Safe Vehicle Handling The Effect of Conditions Avoiding Collisions Skid and Slide Control
                        </p>
                   
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter4} alt="" />
                        <h3>Driver Behaviour</h3>
                        <p>
                        Adjustment of Driving Behaviour Controlled Emotional Reactions Positive Driving Attitudes Decision Making
                        </p>
                       
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter5} alt="" />
                        <h3>Respect and Responsibilities</h3>
                        <p>
                        Responding to Emergencies Leadership in Promoting Safe Driving Driving with Care for the Environment Lifelong Learning Approach to Driving
                        </p>
                   
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter6} alt="" />
                        <h3>Sharing The Road</h3>
                        <p>
                        Cooperative Driving Communicating with Other Road Users
                        </p>
                      
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter7} alt="" />
                        <h3>Attention</h3>
                        <p>
                        Safe and Responsible Actions Related to Impaired Driving Managing Driver Distractions Managing Division of Attention
                        </p>
                      
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter8} alt="" />
                        <h3>Perception and Risk Management</h3>
                        <p>
                        Safe and Proper Observation Skills Accurate Perception of Personal Limits, Abilities, 
                        and Risk Tolerance Accurate Risk Perception Recognition and Avoidance of Common Collision
                        Situations Identification of Potential Hazards and Effective Response to Hazards Effective
                        Decision-making to Ensure Safe Driving Minimized Risk Through Appropriate Driving Actions
                        </p>
                      
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter9} alt="" />
                        <h3>10 hours of additional section</h3>
                        <p>
                        Ontario GDL System Traffic Lights and Signs (Additional) Safe and Responsible Driving 
                        (Additional) Winter Driving (Additional) Understanding Demerit Points Maintaining Your 
                        Vehicle First Aid What to do After an Accident Buying or Selling a Used/New Vehicle 
                        Registering and Insuring a Vehicle
                        </p>
                      
                </div>
                <div className='online-beginner-driver-education-bottom-card'>
                        <img src={chapter10} alt="" />
                        <h3>10 hours of in-car Training</h3>
                        <p>
                        When you complete the online portion of the Beginner Driver Education, then you will 
                        take the 10 hours of in-car portion. After that, you will be issued an MTO-approved 
                        certificate that shows your driving history. That can be received at any Service 
                        Ontario office. Then, you can take your road test 4 months earlier than the usual 
                        waiting period.Also, you will have a great insurance discount with this certificate.
                        </p>
                      
                </div>


          </div>

          <div className='online-beginner-driver-education-btn-part'>
            <Button style={{width:300,height:50}} variant="contained" color='primary'>PRICING FOR TORONTO</Button>
            <Button style={{width:300,height:50}} variant="contained" color='primary'>PRICING FOR TORONTO</Button>
          </div>



      </div>
    </>
  )
}

export default OnlineBeginnerDriverEducation
