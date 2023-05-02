import React from 'react'
import "../assets/css/online-courses-home.css";
import { Button } from '@mui/material';
import courseImage1 from '../assets/images/G1 knowledge written test preparation course-boy.jpg';
import courseImage2 from '../assets/images/e-learning online course.jpg';
import defensiveDriving from '../assets/images/Defensive-Driving.jpg';
import winterSafety from '../assets/images/Winter-Safety.jpg';
import nightDriving from '../assets/images/Night-Driving.jpg';
import backRoad from '../assets/images/Back Roads and Trail.jpg';
import towingTrailers from '../assets/images/Towing Trailers.jpg';
import journeyManagement from '../assets/images/Journey Management.jpg';



const OnlineCourses = () => {
  return (
    <>
        <div className='online-courses-home'>
            <div className='online-courses-home-img-part'>
                <h1>Online Driving Courses</h1>
            </div>

            <div className='online-courses-home-text-part'>
                <h1>ONLINE DRIVING COURSES</h1>
                <p>
                    Master Driving School offers online courses to new drivers who want to get a driver’s licence 
                    in Ontario in two aspects. <span>G1 Knowledge Preparation Course</span> and <span>G1 
                    Knowledge Practice Tests </span> will prepare you for the G1 Written Test which is the first step of Graduating Licensing 
                    System of Ontario. After you pass your written test at a Drive Test Centre, you must hold 
                    your G1 license for one year, or 8 months if you are enrolled in one of our MTO-approved 
                    <span>Online Beginner Driver Education (BDE) Programs. Upon completion of the online BDE, you will 
                    be able to have a great discount on your insurance. Take a deep look at each section.</span>
                </p>

                <div className='online-courses-home-course-card-part'>
                    <div className='online-courses-home-course-card'>
                        <h2>G1 KNOWLEDGE TEST PREPARATION</h2>
                        <div className='online-courses-home-course-card-img-and-p'>
                        <img src={courseImage1} alt="" />
                        <p>Master Driving School offers a fully online and self-paced <span> G1 Knowledge Preparation 
                           Course</span> that includes 270 minutes of training and <span>15 pieces of G1 Practice Tests. 
                           We also offer 600 questions within 15 Practice Tests in multi- languages</span> to provide 
                           all you need before the G1 Knowledge Test. Currently, English, French, Hindi, Chinese,
                           Arabic, and Turkish tests are available to take. Other languages, primarily Urdu and 
                           Arabic will be available soon.
                        </p>
                        </div>
                        <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='primary'>Learn more</Button>
                    </div>

                    <div className='online-courses-home-course-card'>
                        <h2>G2 / BEGINNER DRIVER CERTIFICATION</h2>
                        <div className='online-courses-home-course-card-img-and-p'>
                        <img src={courseImage2} alt="" />
                        <p>
                        Master Driving School offers <span> 30 hours of BDE online self-paced</span> modernized, 
                        industry-leading, MTO-approved course content + min 10 hours of in-car training 
                        <span>for beginner drivers.</span> Within the 30 hours of training, students will learn the 
                        skills needed to be a safe driver, honing these skills in their in-car sessions.
                        This component is completely online and compatible with any mobile device, offering 
                        a flexible, self-paced training experience. There is no difference between in-class 
                        training and online training.
                        </p>
                        </div>
                        <div className='online-courses-home-course-card-btn-part'>
                            <Button variant="contained" color='primary'>PRICING FOR TORONTO</Button>
                            <Button variant="contained" color='primary'>PRICING FOR OTHER LOCATIONS</Button>
                        </div>
                    </div>
                </div>

                <div className='online-courses-home-course-card-explanation'>
                    <p>
                        Master Driving School also offers online safety courses with a solution partner 
                        (<a href="">Topstone Solutions</a>) to the drivers who want to improve their driving skills such 
                        as defensive Driving, Back Roads and Trail Driving, Journey Management, 
                        Night Driving, Shifting Manual Transmissions, Winter Safety (Working and 
                        Driving in snow, ice, extreme cold). Click on each image to see details.
                    </p>
                </div>

            </div>

            <div className='online-courses-home-bottom-cards'>
                    <div className='online-courses-home-bottom-card'>
                        <img src={defensiveDriving} alt="" />
                        <h3>Defensive Driving</h3>
                        <p>
                        This online Defensive Driving Awareness course informs you on how to safely operate 
                        your vehicle in all weather conditions,  perform vehicle maintenance, and prepare 
                        yourself mentally for driving. An alert, proactive, safety-first approach and attitude 
                        can make any road travel safer for ourselves and all others.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/defensive-driving-awareness">Buy Now</a></Button>
                    </div>
                    <div className='online-courses-home-bottom-card'>
                        <img src={winterSafety} alt="" />
                        <h3>Winter Safety</h3>
                        <p>
                        The winter season brings challenges to anyone who works outdoors or drives on the roads. 
                        Both working and road conditions can be treacherous, posing risks to health and safety. 
                        This course is designed to help learners stay safe while working or driving in snowy, 
                        icy, and extreme cold conditions.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/winter-safety-working-driving-in-snow-ice-extreme-cold">Buy Now</a></Button>
                    </div>
                    <div className='online-courses-home-bottom-card'>
                        <img src={nightDriving} alt="" />
                        <h3>Night Driving</h3>
                        <p>
                        Night Driving is designed to help drivers manage the unique hazards of driving in the 
                        dark. Specifically, it covers how drivers might prevent nighttime accidents by paying 
                        special attention to their trucks, the road, and themselves.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/night-driving-driver-training-series">Buy Now</a></Button>
                    </div>
                    <div className='online-courses-home-bottom-card'>
                        <img src={backRoad} alt="" />
                        <h3>Back Road and Trail Driving</h3>
                        <p>
                        This course aims to help you become a better and safer driver by providing you with the 
                        knowledge required to drive on back roads, trails, or other surfaces that are not 
                        conventionally paved, whether it be for your work or for leisure.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/back-road-and-trail-driving">Buy Now</a></Button>
                    </div>
                    <div className='online-courses-home-bottom-card'>
                        <img src={towingTrailers} alt="" />
                        <h3>Towing Trailers</h3>
                        <p>
                        Trailers towed by motor vehicles provide an efficient, convenient way to carry heavy 
                        loads but they present challenges to drivers. This online Towing Trailers course is 
                        designed to provide an understanding of how towing a trailer affects the vehicle you 
                        are driving and what you can do as a driver to stay safe as you tow your load.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/towing-trailers">Buy Now</a></Button>
                    </div>
                    <div className='online-courses-home-bottom-card'>
                        <img src={journeyManagement} alt="" />
                        <h3>Journey Management</h3>
                        <p>
                        Journey Management is a flexible and dynamic set of concepts that can be used as a tool 
                        to make road journeys safer for everyone in your company. It incorporates written 
                        policies and a standardized journey planning process to promote and enhance driver 
                        safety. This online course is designed to provide an overview of Journey Management 
                        principles and provide guidance on how to create or enhance a Journey Management program.
                        </p>
                        <Button variant="contained" color='primary'><a style={{textDecoration:"none",color:"white"}} href="https://www.bistrainer.com/store/topstone-solutions-store/productdetails/journey-management">Buy Now</a></Button>
                    </div>


                </div>


        </div>




    </>
  )
}

export default OnlineCourses
