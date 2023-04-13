import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/testimonial.css"
import userimage from "../assets/images/testimonial-user.png"

const Testimonials = () => {
  return (
    <div>
       <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={userimage} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              Nick is definitely a master driver!After 10hrs in car lessons with him,I know I'm ready and competent
              to tackle the G2 road test.He genuinely cares and wants you to get most out of the lessons.His 
              professional and very easy to work with.I recommend the school and Nich as an instructor.
            </p>
          </div>
        </div>

        <div>
          <img src={userimage} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              Best learning experience,Altan was super calm and had great knowledge on the G road test requirements.
              I had my G road test today and passed!All throughout the G road test journey he was encouraging and ensured
              we cover all possible test router!Thank you!!
            </p>
          </div>
        </div>

        <div>
          <img src={userimage} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              It great and the ınstructor Marina is great and very helpful.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
