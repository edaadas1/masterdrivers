import React from 'react'
import { Button } from '@mui/material';

const HomeCard = () => {
  return (
    <div>
        <div className='offer-card'>
            <h3 className='offer-card-title'>Online G1 Preparation</h3>
            <p className='offer-card-paragraph'>
                If you haven’t taken the G1 Written (Knowledge) Test, these are the best fit for you. 
                The G1 preparation Course will teach you and you will learn everything you need to pass 
                the G1 Test. Also, we offer G1 practice tests for free and are available in English, 
                French, Chinese, Hindi, Arabic, and Turkish. Explore our online programs now and try the 
                demo test.
            </p>
            <div className='offer-card-options'>
                <h4>G1 Knowledge Preparation Course</h4>
                <h4>G1 Knowledge Practice Tests</h4>
            </div>
            <div className='offer-card-button'>
                <Button variant="contained" color='primary'>Learn More</Button>
            </div>
            
        </div>
    </div>
  )
}

export default HomeCard
