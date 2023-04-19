import React from 'react'
import "../assets/css/home.css";
import logo from '../assets/images/masterdrivers-logo.png';
import workus from '../assets/images/work-with-us.jpg';
import HomeCard from './HomeCard';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EuroIcon from '@mui/icons-material/Euro';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';
import SelectBox1 from './SelectBox1';
import SelectBox2 from './SelectBox2';
import ImageSlider from './HomeSlider';
import Testimonials from './Testimonials';

const Home = () => {

    const slides = [
        { url: "https://masterdrivers.ca/images/Master-Drivers-Master-Driving-School-G2-Road-Test-online-mto-approved-bde-and-in-car-training-passed-g2-road-test-instructor-kitchener-kw.jpeg-300x225.jpeg", title: "beach" },
        { url: "https://masterdrivers.ca/images/Master-Drivers-Master-Driving-School-G2-Road-Test-in-car-training-passed-g2-road-test-instructor-kitchener-kw-300x225.jpeg", title: "boat" },
        { url: "https://masterdrivers.ca/images/Master-Drivers-Master-Driving-School-G2-Road-Test-in-car-training-passed-road-test-instructor-kitchener-kw.jpeg-300x261.jpeg", title: "forest" },
        { url: "https://masterdrivers.ca/images/Master-Drivers-Master-Driving-School-G2-Road-Test-online-bde-and-in-car-training-passed-g2-road-test-instructor-kitchener-kw-300x225.jpeg", title: "city" },
        { url: "https://masterdrivers.ca/images/Master-Drivers-Master-Driving-School-G2-Road-Test-in-car-training-learner19-vaselia-passed-g2-road-test-instructor-tuba-kitchener-kw-300x225.jpeg", title: "italy" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };

  return (
    <div>

        <div className='carimage-and-text'>
            <div className='register-now'>
                <h2>Let's Find Your Driving Course!</h2>
                <div className='register-part'>
                    <div className='register-boxes'>
                        <SelectBox1/>
                        <SelectBox2/>
                    </div> 
                    <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='error'>Register Now</Button>
                </div>
            </div>
        </div> 

        <div className='home'>
            <img src={logo} alt='logo' width={300}></img>
            <h1 className='home-aiming-text' style={{textAlign:"center"}}>Best driving school in Ontario!</h1>
            <div className='home-aim-paragraphs'>
                <p>       
                    Master Driving School (Master Drivers) is approved by the Ministry of Transportation of Ontario (MTO) 
                    and we are on the way to being the best driving school (driver training center/centre) in Ontario, 
                    initially Kitchener. Currently, G2/G in-car lessons/training is available at KW Region (Kitchener, 
                    Cambridge, Waterloo), New Hamburg, New Dundee, Petersburg, Mannheim, Guelph, Hamilton, London,
                    Mississauga, Oakville, Milton, Oshawa, Ottowa (Nepean, Barrhaven), Whitby, Ajax, Pickering, St.
                    Catharines, Barrie (Springwater, Elmvale, Stayner, Collingwood, Wasaga Beach) Brantford, Burlington,
                    Windsor, Peterborough, Lakefield, Lindsay, Asphodel-Norwood, Downtown Toronto, North York, East 
                    York, Richmond Hill, Markham, Woodbridge, Vaughan, Thornhill, Scarborough, and Etobicoke.
                </p>
                <br />
                <p>
                    Take our online courses such as G1 Preparation and Beginner Driver Education, choose the best 
                    course that fits you, study anytime and anywhere you want, and be ready to get your license.
                    When you complete the Beginner Driver Education course, you will be eligible for a potential 
                    discount on your auto insurance and you may book your road test 4 months earlier. When you 
                    complete your 30 hours of the online course (available in English, French, Hindi, Chinese, 
                    Spanish, Arabic, and Urdu), you have to take a minimum of 10 hours of in-car training to get 
                    the MTO certificate.
                </p>
            </div>

            <h1 className='what-we-offer'>WHAT WE OFFER?</h1>
            <div className='offer-cards'>
            <div className='offer-card'>
            <h3 className='offer-card-title'>Online G1 Preparation</h3>
            <p className='offer-card-paragraph'>
                If you haven’t taken the G1 Written (Knowledge) Test, these are the best fit for you. 
                The G1 preparation Course will teach you and you will learn everything you need to pass 
                the G1 Test. Also, we offer <span className='offer-card-span'>G1 practice tests for free</span> 
                and are available in <span className='offer-card-span'>English,French, Chinese, Hindi, Arabic, 
                and Turkish.</span>  Explore our online programs now and try the demo test.
            </p>
            <div className='offer-card-options'>
                <h4>G1 Knowledge Preparation Course</h4>
                <h4>G1 Knowledge Practice Tests</h4>
            </div>
            <div className='offer-card-button'>
                <Button variant="contained" color='primary'>Learn More</Button>
            </div>
            
            </div>
            <div className='offer-card'>
            <h3 className='offer-card-title'>Online Beginner Driver Education</h3>
            <p className='offer-card-paragraph'>
                If you are already holding your G1 Licence and waiting for the G2 Road Test, complete our online 
                Beginner Driver Education to become eligible to book your <span className='offer-card-span'>road 
                test 4 months earlier</span>  and have a great <span className='offer-card-span'>insurance discount.</span>
            </p>
            <div className='offer-card-options'>
                <h4>Student Package</h4>
                <h4>Standard Package</h4>
                <h4>Premium Package</h4>
            </div>
            <div className='offer-card-button'>
                <Button variant="contained" color='primary'>Learn More</Button>
            </div>
            
            </div>
            <div className='offer-card'>
            <h3 className='offer-card-title'>Individual In-car Driving Lessons</h3>
            <p className='offer-card-paragraph'>
                We offer a minimum of 2 hours of in-car training whose goal is to become more confident before 
                the <span className='offer-card-span'>G2 or G Road Test.</span>  These lessons will also help senior drivers improve their driving skills. 
                Our <span className='offer-card-span'>one-on-one in-car training can be scheduled online</span> based on your availability. We have 
                experienced (ex-examiner) instructors who can train in <span className='offer-card-span'>English, Hindi, Chinese, Urdu, Punjabi, 
                Arabic, and Turkish</span> depends on the location. Explore our lessons now.
            </p>
            <div className='offer-card-options'>
                <h4>2 hours of in-car training</h4>
                <h4>G2 / G Road Test</h4>
            </div>
            <div className='offer-card-button'>
                <Button variant="contained" color='primary'>Learn More</Button>
            </div>
            
            </div>
            <div className='offer-card'>
            <h3 className='offer-card-title'>Individual In-car Driving Packages</h3>
            <p className='offer-card-paragraph'>
                You may also buy our one-on-one in-car training packages to purchase more than 2 hours at once 
                and get discount. You can book your lessons when you are available to take.
            </p>
            <div className='offer-card-options'>
                <h4>4 hours of in-car training</h4>
                <h4>6 hours of in-car training</h4>
                <h4>10 hours of in-car training</h4>
            </div>
            <div className='offer-card-button'>
                <Button variant="contained" color='primary'>Learn More</Button>
            </div>
            
            </div>
                    {/* <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/> */}
            </div>

            <div className='pricing-details-location' >
                <h2>Let's Find Your Driving Pricing!</h2>
                <div className='pricing-details-location-part'>
                    <div className='pricing-details-location-boxes'>
                        <SelectBox2/>
                    </div> 
                    <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='error'>Let's Go Pricing Details</Button>
                </div>
            </div>

            <h1 className='why-choose-master'>WHY CHOOSE MASTER DRIVERS?</h1>
                    
            <div className='why-choose-master-body'>
                <div className='qualified-and-affordable'>
                    <div className='qualified'>
                        <div className='qualified-text'>
                            <h2>Qualified Instructors</h2>
                            <p>Experienced, patient and friendly instructors with high pass rates.</p>
                        </div>
                        <DirectionsCarFilledOutlinedIcon/>
                    </div>
                    <div className='affordable'>
                        <div className='affordable-text'>
                            <h2>Affordable Prices </h2>
                            <p>Master Drivers offer competitive prices for feature-rich driver education services.</p>
                        </div>
                        <EuroIcon/>
                    </div>
                </div>
                
                <div style={containerStyles}>
                     <ImageSlider slides={slides} />
                </div>
               
                <div className='e-learning-and-multiculturalism'>
                <div className='e-learning'>
                        <LaptopMacIcon/>
                        <div className='e-learning-text'>
                            <h2>E-Learning Option</h2>
                            <p>We are capable of online driving education. You can take the course whenever 
                               and wherever you want.
                            </p>
                        </div>
                    </div>
                    <div className='multiculturalism'>
                        <LanguageIcon/>
                        <div className='multiculturalism-text'>
                            <h2>Multiculturalism</h2>
                            <p>We pride ourselves on offering diversity.  In-car training is provided in 
                               multi-languages such as English, Hindi, Urdu, Chinese, Tamil, Arabic, German, 
                               and Turkish.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <h1 className='why-choose-master'>TESTIMONIALS</h1>

           <Testimonials/>

            <h1>JOIN OUR TEAM</h1>
            
            <div className='work-with-us'>
                <img src={workus} alt="" width={500} style={{borderRadius:10}} />
                <div className='work-with-us-text'>
                    <h1>We are hiring new in-car <br /> driving instructors.</h1>
                    <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='success'>Schedule an Interview</Button>
                </div>        
            </div>

            <div className='user-numbers'>
                <div className='user-numbers-card'>
                    <p style={{fontSize:60,fontWeight:600}}>8,000+ Students</p>
                    <p style={{fontSize:20}}>THE NUMBER OF STUDENTS MASTER DRIVERS <br /> DRIVING SCHOOL</p>
                </div>           
            </div>

            {/* fixed whatsapp icon */}
            <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
            

        </div>

    </div>
  )
}

export default Home
