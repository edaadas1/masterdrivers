import React from 'react'
import "../assets/css/pricings.css";
import saveMoney from "../assets/images/save your time and money.jpg"
import selfConfidence from "../assets/images/self-confidence.jpg"
import payOnline from "../assets/images/pay-online.jpg"
import schedule from "../assets/images/schedule.jpg"
import pay from "../assets/images/Online-secure Payment.jpg"
import securePayment from '../assets/images/secure-payment.png';
import customPricing from '../assets/images/custom pricing.png';
import { Button } from '@mui/material';

const Pricings = () => {
  return (
    <>
        <div className='pricings'>
            <div className='pricings-banner'>
              
            </div>
            <h1>NO NEED TO FOLLOW A LIVE OR VIRTUAL CLASS!</h1>

            <div className='pricings-body'>
                <p>
                Master Driving School offers G2/G in-car lessons/training in <span> KW Region (Kitchener, Cambridge, 
                Waterloo), New Dundee, New Hamburg, Petersburg, Mannheim, Guelph, Hamilton, London, Mississauga, 
                Oakville, Milton, Oshawa, Ottowa (Nepean, Barrhaven), Whitby, Ajax, Pickering, St. Catharines, 
                Barrie (Springwater, Elmvale, Stayner, Collingwood, Wasaga Beach), Brantford, Burlington, Windsor,
                Downtown Toronto, North York, East York, Richmond Hill, Woodbridge, Vaughan, Thornhill, 
                Scarborough, Etobicoke, Peterborough, Lindsay, and Lakefield.</span>
                </p>

                <h1 style={{marginTop:80}}>MTO APPROVED G2 / BEGINNER DRIVER CERTIFICATION PACKAGES</h1>

                <div className='pricings-g2-packages-cards'>
                    <div className='student-package'>
                        <h1 style={{marginBottom:45}}>STUDENT</h1>
                        <p style={{marginBottom:45}}>565$</p>
                        <p className='package-info'>
                        Insurance discount
                        G2 in 8 months

                        30 hours of online and self-paced Beginner Driver Education

                        10 hours of in-car training
                        (will be scheduled upon completion of online training)

                        Certified Online through MTO
                        (Certificate Fee included)
                        (You will become eligible to take the G2 Road Test 4 months earlier and a great insurance discount upon completion of the whole program)

                        Pick-up and drop-off for in-car lessons included

                        Valid for 1 year

                        + HST

                        Only for High School, College, and University students
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                    <div className='standard-package'>
                        <h1 style={{marginBottom:45}}>STANDARD</h1>
                        <p style={{marginBottom:45}} className='package-price'>575$</p>
                        <p className='package-info'>
                        Insurance discount
                        G2 in 8 months

                        30 hours of online and self-paced Beginner Driver Education

                        10 hours of in-car training
                        (will be scheduled upon completion of online training)

                        Certified Online through MTO
                        (Certificate Fee included)
                        (You will become eligible to take the G2 Road Test 4 months earlier and a great insurance discount upon completion of the whole program)

                        Pick-up and drop-off for in-car lessons included

                        Valid for 1 year

                        + HST
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                    <div className='premium-package'>
                        <h1 style={{marginBottom:45}}>PREMIUM</h1>
                        <p style={{marginBottom:45}} className='package-price'>695$</p>
                        <p className='package-info'>
                        Insurance discount
                        G2 in 8 months
                        Road Test

                        30 hours of online and self-paced Beginner Driver Education

                        10 hours of in-car training
                        (will be scheduled upon completion of online training)

                        Road Test
                        1-hour of one-on-one in-car training
                        (Warm-up before the road test if there is enough time before the test)
                        Car for the road test

                        Certified Online through MTO
                        (Certificate Fee included)
                        (You will become eligible to take the G2 Road Test 4 months earlier and a great insurance discount upon completion of the whole program)

                        Pick-up and drop-off for in-car lessons included

                        Valid for 1 year

                        + HST
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                </div>

                <div className='pricings-page-img-and-text'>
                    <div className='pricings-page-img-and-text-div'>
                        <img src={saveMoney} alt="" />
                        <div>
                            <h2 style={{marginBottom:20}}>Save a $10 Discount on BDE Packages!</h2>
                            <p>
                            If you <span style={{fontWeight:"bold"}}>pay via e-transfer</span>, you will get a $10 discount over the total amount regardless of the BDE package type.
                            </p>
                        </div>
                    </div>
                    <div className='pricings-page-img-and-text-div'>
                        <img src={selfConfidence} alt="" />
                        <div>
                            <h2 style={{marginBottom:20}}>Feel More Confident and Comfortable!</h2>
                            <p>
                            Master Driving School (Master Drivers) offers individual lessons for G2 and G Road Tests 
                            to make you feel confident and comfortable before the tests.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='to-buy-an-online-beginner-driver-education-package'>
                    <img src={payOnline} alt="" />
                    <div className='to-buy-an-online-beginner-driver-education-package-text-part'>
                        <h2>To buy an Online Beginner Driver Education Package</h2>
                        <ul>
                            <li>Choose a package below and click on the “Buy Now” button to go to the booking page.</li>
                            <li>Select the package from the list and click on the image or the price tag.</li>
                            <li>You will be asked to sign up to proceed. Sign up and proceed with the confirmation page.</li>
                            <li>Select a payment method. Click on the “Confirm” button and wait for the secure payment screen. If you choose e-transfer, you have to make the payment to “deposit@masterdrivers.ca”. Then your booking will be confirmed.</li>
                            <li>Write your credit card information and click on the “Pay” button.</li>
                            <li>Follow the instructions related to course access that will be sent to your email.</li>
                            <li>Currently, if you are going to take your in-car lessons Downtown Toronto, 
                                North&East York, Scarborough, or Etobicoke please click here for the Pricing. 
                                Please choose the location that is closest to you for your in-car training. 
                                In case of being far from these locations, you will be asked to come to 20km 
                                in the vicinity of the city center of the location you choose.
                            </li>
                            <p style={{fontWeight:"bold",marginTop:20}}>
                            It is a requirement that a student completes both the online and in-car portions 
                            of the BDE at the same driving school. Since you’ll be taking the in-car training 
                            at the nearest location to you, please take a look at our service locations before 
                            payment.
                            </p>
                        </ul>
                    </div>
                </div>

                <h1>INDIVIDUAL IN-CAR DRIVING LESSONS and ROAD TEST</h1>

                <div className='in-car-lessons-cards'>
                    <div className='in-car-lessons-card'>
                        <div className='in-car-lessons-card-text-part'>
                            <h2>2 Hours of In-car Training</h2>
                            <p className='in-car-lessons-price'>99$</p>
                            <p className='in-car-lessons-info'>
                            Pick-up

                            2 hours of in-car training including Mock Road Test (practicing with an exam-like scenario)

                            Drop-off

                            + HST

                            Note: According to MTO, you are not allowed to schedule more than 2 hours of in-car training in a day.
                            </p>
                        </div>
                        
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                    <div className='in-car-lessons-card'>
                        <div className='in-car-lessons-card-text-part'>
                            <h2>”G2 or G” Road Test</h2>
                            <p className='in-car-lessons-price'>149$</p>
                            <p className='in-car-lessons-info'>
                            Pick-up

                            1-hour of one-on-one in-car training
                            (Warm-up before the road test if there is enough time before the test)

                            Car for the road test

                            Drop-off

                            + HST

                            Note-1: Be advised that there is 1-hour in-car training before the road test. Also, you have to be at the test center 30 minutes before the test. So, you should choose a booking time that is 1,5 hours prior to your road test appointment.

                            Note-2: You will be charged a fee ($45+HST) in case this service period exceeds 15 minutes or more.
                            </p>
                        </div>
                        
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                </div>
                
                <div className='to-buy-an-online-beginner-driver-education-package'>
                    <img src={schedule} alt="" />
                    <div className='to-buy-an-online-beginner-driver-education-package-text-part' style={{marginBottom:50}}>
                        <h2>To buy an individual in-car driving lesson</h2>
                        <ul>
                            <li>Choose an in-car (in-vehicle) driving lesson below and click on the “Buy Now” button to go to the booking page.</li>
                            <li>Select the lesson from the list and click on the image or the price tag.</li>
                            <li>Select the instructor.</li>
                            <li>You will see the first available date and time, depending on the instructor you choose. If you want to change the date, click on the date box up in the middle and select the date you want.</li>
                            <li>You will be asked to sign up to proceed. If you already signed up, then log in and proceed with the confirmation page.</li>
                            <li>Write the pick-up and drop-off locations (20km in the vicinity of your booking location, otherwise you will be asked to come to a central point) on the left side of the page. Check the purchase details on the right side of the page.</li>
                            <li>Select a payment method. Click on the “Confirm” button and wait for the secure payment screen. If you choose e-transfer, you have to make the payment to “deposit@masterdrivers.ca”. Then your booking will be confirmed.</li>
                            <li>Write your credit card information and click on the “Pay” button.</li>
                            <li>Follow the instructions related to the schedule that will be sent to your email.</li>
                            <li>Click here for Toronto Pricing.</li>
                            <li><span style={{fontWeight:"bold"}}>According to MTO, you are not allowed to schedule more than 2 hours of in-car training in a day.</span></li>
                        </ul>
                    </div>
                </div>

                <h1>INDIVIDUAL IN-CAR DRIVING PACKAGES</h1>

                <div className='pricings-g2-packages-cards'>
                    <div className='student-package'>
                        <h1 style={{marginBottom:45}}>4 Hours of In-car Training</h1>
                        <p>179$</p>
                        <p style={{height:250}}>
                        Pick-up for the in-car lesson

                        2 x 2 hours of in-car training according to your needs and weaknesses

                        Mock Road Test (practicing with an exam-like scenario)

                        Drop-off

                        + HST
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                    <div className='standard-package'>
                        <h1 style={{marginBottom:45}}>6 Hours of In-car Training</h1>
                        <p className='package-price'>269$</p>
                        <p style={{height:250}}>
                        Pick-up for the in-car lesson

                        3 x 2 hours of in-car training according to your needs and weaknesses

                        Mock Road Test (practicing with an exam-like scenario)

                        Drop-off

                        + HST
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                    <div className='premium-package'>
                        <h1 style={{marginBottom:45}}>10 Hours of In-car Training</h1>
                        <p className='package-price'>439$</p>
                        <p style={{height:250}}>
                        Pick-up for the in-car lesson

                        5 x 2 hours of in-car training according to your needs and weaknesses

                        Mock Road Test (practicing with an exam-like scenario)

                        Drop-off

                        + HST
                        </p>
                        <Button style={{paddingTop:10,paddingBottom:10}} color="success" variant='contained'>Buy Now</Button>
                    </div>
                </div>

                <div className='to-buy-an-online-beginner-driver-education-package'>
                    <img src={pay} alt="" />
                    <div className='to-buy-an-online-beginner-driver-education-package-text-part' style={{marginBottom:50}}>
                        <h2>To buy an individual in-car driving package</h2>
                        <ul>
                            <li>Choose an in-car driving package below and click on the “Buy Now” button to go to the booking page.</li>
                            <li>Select the package from the list and click on the image or the price tag.</li>
                            <li>You will be asked to sign up to proceed. If you already signed up, then log in and proceed with the confirmation page.</li>
                            <li>Select a payment method. Click on the “Confirm” button and wait for the secure payment screen. If you choose e-transfer, you have to make the payment to “deposit@masterdrivers.ca” within 1 hour. Then your booking will be confirmed.</li>
                            <li>Write your credit card information and click on the “Pay” button.</li>
                            <li>Follow the instructions related to the schedule that will be sent to your email.</li>
                            <li><span style={{fontWeight:"bold"}}>According to MTO, you are not allowed to schedule more than 2 hours of in-car training in a day.</span></li>
                            <li>Click here for Toronto Pricing.</li>
                        </ul>
                    </div>
                </div>

                <div className='pricings-secure-payment-images-part'>
                    <img src={securePayment} alt="" className='secure-payment' />
                </div>

                <div className='how-to-use-credits'>
                    <h2 style={{marginBottom:40}}>How to use your in-car training credits when you purchased BDE Silver/Gold or an in-car driving package</h2>
                    <p>
                    If you purchase one of the packages above that means you have credits of 2 hours of an in-car training/lesson.

                    For example, if you purchase 10 hours of an in-car training package, you have 5 pieces of 2 hours of in-car training/lesson.
                    </p>
                    <p>When you want to schedule an in-car training/lesson that is already defined in your package purchased, follow these steps;</p>
                    <ul>
                        <li>Go to the <a href="https://booking.masterdrivers.ca/v2/#book">booking page.</a></li>
                        <li>Choose the location where you want to take the in-car training.</li>
                        <li>Choose the 2 hours of in-car training/lesson from the list and click on the image or the price tag.</li>
                        <li>Select the instructor (you will directly come to the date and time selection in case there is only one instructor in the location you chose).</li>
                        <li>You will see the first available date and time, depending on the instructor you choose. If you want to change the date, click on the date box up in the middle and select the date you want.</li>
                        <li>You will be asked to sign up to proceed. Log in with the user name and password you created when you purchased the package, and proceed with the confirmation page.</li>
                        <li>Write the pick-up and drop-off locations (20km in the vicinity of your booking location, otherwise you will be asked to come to a central point) on the left side of the page. Check the purchase details on the right side of the page.</li>
                        <li>Click on the “Confirm Booking” button and you will see the payment options.</li>
                        <li>Do not proceed with the Stripe, just choose the package on the left side of the page to utilize your credits.</li>
                        <li>When you select the package you will see the Stripe option will disappear. That means you are not going to be charged.</li>
                        <li>Click on the “Confirm” button.</li>
                        <li>Now you have 4 pieces of 2 hours of in-car training left to be used.</li>
                        <li>Do the same to schedule your next 2 hours of in-car training.</li>
                        <li><span style={{fontWeight:"bold"}}>According to MTO, you are not allowed to schedule more than 2 hours of in-car training in a day.</span></li>
                        <li><span style={{fontWeight:"bold"}}>If you want to change a booking, do not cancel it! Go to your bookings on the “my bookings” menu and reschedule it.</span></li>
                    </ul>
                </div>

                <h1>CUSTOM PRICING</h1>

                <div className='custom-pricing'>
                    <img src={customPricing} alt="" />
                    <div className='custom-pricing-text-part'>
                        <p>
                        We offer discounts to High Schools, Colleges, or Companies based on the number of total 
                        users as below. Submit a request for custom pricing.
                        </p>
                        <h2>For Beginner Driver Education Packages:</h2>
                        <ul>
                            <li>% 5 discount for 5 or more users.</li>
                        </ul>
                        <h2>For G1 Preparation Course and G1 Practice Tests:</h2>
                        <ul>
                            <li>% 20 discount for 10 to 50 users</li>
                            <li>% 30 discount for 51 to 100 users</li>
                            <li>% 50 discount for 101 and more users</li>
                        </ul>
                    </div>
                </div>

                <Button style={{paddingTop:10,paddingBottom:10}} color="primary" variant='contained'>SUBMIT A REQUEST</Button>

            </div>
        </div>
    </>
  )
}

export default Pricings
