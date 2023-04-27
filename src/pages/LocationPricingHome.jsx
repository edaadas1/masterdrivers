import React from 'react'
import "../assets/css/location-pricing-home.css";
import securePayment from '../assets/images/secure-payment.png';
import Interac from '../assets/images/Interac.png';
import { Button } from '@mui/material';

const LocationPricingHome = () => {
  return (
    <>
        <div className='location-pricing-home'>
            <div className='location-pricing-home-img-part'>
                <h1>Full Courses, Individual Lessons, and Packages</h1>
            </div>

            <h1>CHOOSE YOUR LOCATION</h1>
            
            <div className='choose-your-location-text'>
                <p>
                Master Driving School offers you <span>fully online</span>  driving courses and individual in-car training. 
                If you are a new driver considered as a <span>beginner driver</span> , you should start your licensing journey 
                with our online <span> G1 Knowledge Test Preparation Course</span>, then <span> G1 Practice Tests</span>, and finally online 
                <span>Beginner Driver Education (BDE)</span> . If you already hold your G1 licence, you may jump directly to 
                online BDE packages to become eligible for <span>G2 Road Test 4 months earlier and to have a great 
                discount on your insurance.</span> 
                </p>
                <br />
                <p>
                Master Driving School (Master Drivers) is <span> approved by the Ministry of Transportation of Ontario 
                (MTO)</span> and serves as a first-class driver training center to become the best one in Ontario. 
                Currently, G2/G in-car lessons/training is available at <span> KW Region 
                (Kitchener, Cambridge, Waterloo), New Hamburg, New Dundee, Petersburg, Mannheim, Guelph, 
                Hamilton, London, Mississauga, Oakville, Milton, Oshawa, Ottowa (Nepean, Barrhaven), Whitby, 
                Ajax, Pickering, St. Catharines, Barrie (Springwater, Elmvale, Stayner, Collingwood, Wasaga Beach)
                Brantford, Burlington, Windsor, Peterborough, Lakefield, Lindsay, Asphodel-Norwood, Downtown 
                Toronto, North York, East York, Richmond Hill, Markham, Woodbridge, Vaughan, Thornhill, 
                Scarborough, and Etobicoke.</span>
                </p>
            </div>

            <div className='location-pricing-home-btn-part'>
                <Button style={{width:500,height:60,paddingTop:15,paddingBottom:15}} variant='contained'>Pricing for Downtown Toronto,North York,East York,Scarbrough,and Etobicoke</Button>
                <Button style={{width:500,height:60,paddingTop:15,paddingBottom:15}} variant='contained'>Pricing for Other Locations</Button>
            </div>

            <div className='location-pricing-payment-images'>
                <img src={securePayment} alt="" className='secure-payment' />
                <img src={Interac} alt="" />
            </div>

        </div>
    </>
  )
}

export default LocationPricingHome
