import React, { useState } from 'react'
import "../assets/css/g1-knowledge.css";
import g1KnowledgeVideo1 from '../assets/images/g1-knowledge-video-1.png';
import g1KnowledgeVideo2 from '../assets/images/g1-knowledge-video-2.png';
import g1KnowledgeVideo3 from '../assets/images/g1-knowledge-video-3.png';
import g1KnowledgeVideo4 from '../assets/images/g1-knowledge-video-4.png';
import g1KnowledgePreparationCourse from '../assets/images/G1 Knowledge Preparation Course.png';
import g1KnowledgePracticeTests from '../assets/images/g1-knowledge-practice-tests.jpg';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button } from '@mui/material';

const G1KnowledgePreparation = () => {

  const [whostatus,setWhoStatus] = useState("none");
  const [wherestatus,setWhereStatus] = useState("none");
  const [howmuchstatus,setHowMuchStatus] = useState("none");
  const [whatstatus,setWhatStatus] = useState("none");
  const [downIcon,setDownIcon] = useState("block");
  const [upIcon,setUpIcon] = useState("none");

  const handleWho=()=>{
      if(whostatus==="none"){
        setWhereStatus("none")
        setHowMuchStatus("none")
        setWhatStatus("none")
        setWhoStatus("block")
        setDownIcon("none")
        setUpIcon("block")
      }
      else{
        setWhoStatus("none")
        setDownIcon("block")
        setUpIcon("none")
      }
  }

  const handleWhere =()=>{
    if(wherestatus==="none"){
      setWhoStatus("none")
      setHowMuchStatus("none")
      setWhatStatus("none")
      setWhereStatus("block")
      setDownIcon("none")
      setUpIcon("block")
    }
    else{
      setWhereStatus("none")
      setDownIcon("block")
      setUpIcon("none")
    }
  }

  const handleHowMuch =()=>{
    if(howmuchstatus==="none"){
      setWhoStatus("none")
      setWhatStatus("none")
      setWhereStatus("none")
      setHowMuchStatus("block")
      setDownIcon("none")
      setUpIcon("block")
    }
    else{
      setHowMuchStatus("none")
      setDownIcon("block")
      setUpIcon("none")
    }
  }

  const handleWhat =()=>{
    if(whatstatus==="none"){
      setWhoStatus("none")
      setHowMuchStatus("none")
      setWhereStatus("none")
      setWhatStatus("block")
      setDownIcon("none")
      setUpIcon("block")
    }
    else{
      setWhatStatus("none")
      setDownIcon("block")
      setUpIcon("none")
    }
  }


  return (
    <>
        <div className='g1-knowledge'>
            <div className='g1-knowledge-img-part'>
                <h1>G1 Knowledge Preparation</h1>
            </div>

            <h1>FUNDAMENTALS OF THE OFFICIAL G1 KNOWLEDGE TEST</h1>

            <div className='g1-knowledge-cards'>
              <ul>
                <li className='who-card-li' onClick={handleWho}>Who can take the G1 Test?<ArrowDropDownIcon style={{display:downIcon,marginLeft:10}}></ArrowDropDownIcon><ArrowDropUpIcon style={{display:upIcon,marginLeft:10}}></ArrowDropUpIcon></li>
                <li className='where-card-li' onClick={handleWhere}>Where to get a G1 Test?<ArrowDropDownIcon style={{display:downIcon,marginLeft:10}}></ArrowDropDownIcon><ArrowDropUpIcon style={{display:upIcon,marginLeft:10}}></ArrowDropUpIcon></li>
                <li className='how-much-card-li' onClick={handleHowMuch}>How much does it cost?<ArrowDropDownIcon style={{display:downIcon,marginLeft:10}}></ArrowDropDownIcon><ArrowDropUpIcon style={{display:upIcon,marginLeft:10}}></ArrowDropUpIcon></li>
                <li className='what-card-li' onClick={handleWhat}>What should I study?<ArrowDropDownIcon style={{display:downIcon,marginLeft:10}}></ArrowDropDownIcon><ArrowDropUpIcon style={{display:upIcon,marginLeft:10}}></ArrowDropUpIcon></li>
              </ul>
              <div style={{display:whostatus}} className='who-text'>
                <p>
                All new drivers who are considered to be “beginners” can apply for a driver’s license as long 
                as they are at least 16 years old. You need a Class G licence to drive a car, van, or small 
                truck. You must have a Class G licence before you can be licensed to drive any other type of 
                vehicle. The only exception is motorcycles. You may get a motorcycle licence (Class M) without 
                first getting a Class G licence. To get a G1 license you must take a G1 knowledge test that is 
                also known as the G1 written test about the traffic signs and rules of the road in Ontario.
                </p>
              </div>
              <div style={{display:wherestatus}} className='where-text'>
                <p>
                The official test is created by the Ministry of Transportation (MTO) and is offered in all 
                DriveTest Centres. All testing centres may have a paper test option while a few have an online 
                option too. In addition to the written exam, you will also need to pass a vision test. You don’t 
                need to book a G1 written test in advance. Just find a DriveTest centre and reach there at least 
                an hour before the closing time of that centre.
                </p>
              </div>
              <div style={{display:howmuchstatus}} className='how-much-text'>
                <p>
                The G1 package fee is $158.25 which will cover your knowledge test, eventual G2 driver’s test, 
                and your 5-year license. You have to pay this fee at the time you apply for your G1 license.  
                If you need to retake the written exam, it will be an additional $15.75. You should check online 
                for the current information concerning these government fees. Cash, debit cards, credit cards, 
                or personal cheques may be used to pay these fees.
                </p>
              </div>
              <div style={{display:whatstatus}} className='what-text'>
                <p>
                There are 40 multiple-choice questions on the official G1 test. You will receive two test sheets 
                each with 20 questions. The first part is about road signs, while the second one is about the 
                rules of the road. There is no time limit to complete the test. Usually, it takes about 30 
                minutes to complete. You may take your time and read the questions carefully before you choose 
                your answers. For writing or reading issues, you may request an audio or verbal test. The total 
                passing score for both sections is 80%. That means you will need 16 or more questions right on 
                each of those two sections in order to pass your G1 test. The results of your G1 written test 
                are valid for one year.
                </p>
              </div>
            </div>

            <div className='g1-knowledge-video-cards'>
              <div className='g1-knowledge-video-card'>
                  <img src={g1KnowledgeVideo1} alt="" />
              </div>
              <div className='g1-knowledge-video-card'>
                <img src={g1KnowledgeVideo2} alt="" />
              </div>
              <div className='g1-knowledge-video-card'>
                <img src={g1KnowledgeVideo3} alt="" />
              </div>
              <div className='g1-knowledge-video-card'>
                <img src={g1KnowledgeVideo4} alt="" />
              </div>
            </div>

            <h1>HOW TO PREPARE TO THE G1 KNOWLEDGE TEST?</h1>

            <p className='how-to-prepare-text'>
            Master Driving School offers a fully online and self-paced G1 Knowledge Preparation Course that 
            includes 270 minutes of training and 15 pieces of G1 Practice Tests. We also offer 600 questions 
            within 15 Practice Tests in multi-languages to provide all you need before the G1 Knowledge Test. 
            Currently, English, French, Hindi, Chinese, Arabic, and Turkish tests are available to take. Other 
            languages, primarily Urdu will be available soon. These tests will provide you with the same types 
            of questions you will see on the real G1 Knowledge Test. Each test is based on the most recent MTO 
            Driver’s Handbook, uses the same method of grading, covers the same driving topics used by the MTO, 
            and includes 40 questions (20 Rules of The Road, 20 Road Signs).
            </p>

            <h1 className='g1-preparation-course-header'>G1 KNOWLEDGE PREPARATION COURSE</h1>

            <p className='g1-preparation-course-text'>
                Master Driving School offers a fully online and self-paced G1 Knowledge Preparation Course 
                that includes two main chapters which cover the Rules of The Road and Road Signs.
            </p>

            <div className='g1-knowledge-preparation-course'>
              <div className='g1-knowledge-preparation-course-columns'>
                <div className='g1-knowledge-preparation-course-first-col'>
                    <ul>
                      <li>The first chapter will teach you the most common rules of the road regarding the topics below.</li>
                      <ul>
                        <li>Getting ready to drive</li>
                        <li>Driving alone</li>
                        <li>Sharing the road with other road users</li>
                        <li>Driving through intersections</li>
                        <li>Stopping</li>
                        <li>Changing directions</li>
                        <li>Changing positions</li>
                        <li>Parking along roadways</li>
                        <li>Freeway driving</li>
                        <li>Dealing with particular situations</li>
                        <li>Driving at night and in bad weather</li>
                        <li>Dealing with emergencies</li>
                        <li>Driving efficiently</li>
                      </ul>
                    </ul>
                </div>
                <div className='g1-knowledge-preparation-course-second-col'>
                    <ul>
                      <li>The second chapter will demonstrate all the road signs you will face in G1 written test and in real life.</li>
                        <ul>
                        <li>270 minutes of online and self-paced course.</li>
                        <li>Covers all the topics regarding Rules of The Road and Road Signs.</li>
                        <li>15 x exam-like practice tests simulating the G1 Written Test.</li>
                        <li>More than 700 unique questions that are the same types you will see on the official exam.</li>
                        <li>Use a computer or a tablet for the best user experience.</li>
                        </ul>
                    </ul>
                    <ul>
                      <li>Click on the “BUY Now” button below.</li>
                      <li>Select the course and create an account.</li>
                      <li>Confirm your account by clicking on the link sent via email.</li>
                      <li>Complete the payment process.</li>
                      <li>Start studying.</li>
                    </ul> 
                </div>
              </div>
                
                <div className='g1-knowledge-preparation-course-buy-part'>
                  <img src={g1KnowledgePreparationCourse} alt="" />
                  <div className='buy-part-price'>
                    <p>Price:$9.95</p>
                    <Button style={{width:300,height:55,paddingLeft:50,paddingRight:50}} variant="contained" color="primary"><CreditCardIcon></CreditCardIcon>Buy Now</Button>
                  </div>
                </div>
            </div>

            <h1 className='g1-preparation-course-header'>G1 KNOWLEDGE PRACTICE TESTS FREE</h1>

            <p className='g1-practice-test-text'>
              The official site for the Ontario Ministry of Transportation has only 8 sample questions to give 
              a preview of the G1 Knowledge Test. Master Driving School offers online, self-paced, exam-like, 
              instructive, and reinforcing 15 pieces of G1 Knowledge Practice Tests in multi-languages (English, 
              French, Turkish, Hindi, Chinese, and Arabic) to prepare you for the real G1 written test and make 
              you feel confident before the test. The G1 Written Test may ask you about;
            </p>


            <div className='g1-knowledge-practice-tests'>
              <div className='g1-knowledge-practice-tests-columns'>
                <div className='g1-knowledge-practice-tests-first-col'>
                      <ul>
                        <li>Getting on or off a freeway</li>
                        <li>Driver licence suspensions</li>
                        <li>The demerit point system</li>
                        <li>Passing other vehicles</li>
                        <li>Collision reporting</li>
                        <li>Sharing the road with other road users</li>
                        <li>Rules of the road</li>
                        <li>Seatbelts</li>
                        <li>Traffic signs and lights</li>
                        <li>Emergency vehicles</li>
                        <li>How to use headlights</li>
                        <li>Speed limits</li>
                        <li>What drivers must do when they meet streetcars and school buses</li>
                      </ul>
                </div>
                <div className='g1-knowledge-practice-tests-second-col'>
                    <ul>
                      <li>The second chapter will demonstrate all the road signs you will face in G1 written test and in real life.</li>
                        <ul>
                        <li>15 x exam-like practice tests simulating the G1 Written Test.</li>
                        <li>600 unique questions that are the same types you will see on the official exam.</li>
                        <li>Currently available in English, French, Hindi, Chinese, Arabic, and Turkish. Will be available in 23 languages.</li>
                        <li>Use a computer or a tablet for the best user experience.</li>
                        </ul>
                    </ul>
                    <ul>
                      <li>Click on the “START Now” button below.</li>
                      <li>Select the test you want to take.</li>
                      <li>Create an account.</li>
                      <li>Confirm your account by clicking on the link sent via email.</li>
                      <li>Start studying.</li>
                    </ul> 
                </div>
              </div>
                
                <div className='g1-knowledge-practice-tests-img-part'>
                  <img src={g1KnowledgePreparationCourse} alt="" />
                  <div className='g1-knowledge-practice-tests-btn-part'>
                    <Button style={{width:300,height:60,paddingLeft:50,paddingRight:50}} variant="contained" color="primary"><CreditCardIcon></CreditCardIcon>START NOW</Button>
                  </div>
                </div>
            </div>

            <h1>PREVIEW THE G1 PRACTICE TESTS</h1>

            <h1>WHAT IS NEXT AFTER THE G1 WRITTEN TEST?</h1>
            <p className='after-written-test-text'>
            Once you successfully pass your G1 test, you will be a G1 licence holder. This gives you the right 
            to practice your driving in a vehicle on the road, under proper supervision. You are strongly 
            recommended to practice driving in a car as much as possible during this stage of your licensing 
            process. There are a few important legal restrictions to keep in mind during this period:
                <ul>import { useState } from 'react';

                  <li>You must always have a licensed driver in the vehicle with you while you are driving. The supervising driver needs to have a BAC level below 0.05 and have more than four years of driving experience.</li>
                  <li>You cannot have any alcohol while operating a car with a G1 license.</li>
                  <li>You need to be wearing a seatbelt while driving and every passenger in your vehicle must also wear their seatbelts.</li>
                  <li>You are not allowed to drive alone between the hours of midnight and five in the morning.</li>
                  <li>Your G1 license will allow you to drive on any local Ontario roadways except for 400 series highways or high-speed expressways, marked as QEW.</li>
                </ul>
            </p>
            <hr className='line' />
            <div className='after-written-test-columns'>
                <div className='after-written-test-first-col'>
                  <p>
                  After you pass your written test at a Drive Test Centre, you must hold your G1 license for one 
                  year, or 8 months if you are enrolled in one of our MTO-approved Online Beginner Driver 
                  Education (BDE) Programs. Upon completion of our Online BDE, you will be able to have a great 
                  discount on your insurance. 
                  <ul>
                    <li>You may take only the Online BDE in advance.</li>
                    <li>When you finish your self-paced online education you should take a minimum of 10 hours of in-car training to become eligible for the MTO certificate.</li>
                  </ul>
                  </p>
                </div>
                <div className='after-written-test-second-col'>
                  <img src={g1KnowledgePracticeTests} alt="" />
                </div>
            </div>

            <div className='after-written-test-columns-btn-part'>
                <Button style={{paddingTop:15,paddingBottom:15}} variant='contained'><SearchIcon></SearchIcon>G2 and G Packages for Toronto</Button>
                <Button variant='contained'><SearchIcon></SearchIcon>G2 and G Packages for Other Locations</Button>
            </div>

        </div>
    </>
  )
}

export default G1KnowledgePreparation
