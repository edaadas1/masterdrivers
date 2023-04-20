import React from 'react'
import "../assets/css/career.css";
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {MdCloudUpload,MdDelete} from "react-icons/md"
import { AiFillFileImage } from 'react-icons/ai';
import photo1 from "../assets/images/career-foto1.jpg"
import photo2 from "../assets/images/career-foto2.jpg"

const Career = () => {

    const [findUs, setFindUs] = React.useState(10);

    const handleChange = (event) => {
        setFindUs(event.target.value);
    };

    const [image,setImage] = useState(null);
    const [fileName,setFileName] = useState("No selected file")

    const [image2,setImage2] = useState(null);
    const [fileName2,setFileName2] = useState("No selected file")

  return (
    <>   
        <div className='career-page'>
            <div className='career-banner'>
            </div>
            <div className='career-body'>
                <h1>About Working Here</h1>
                <p className='introduction-text'>
                    <span className='introduction-text-bold'>Master Driving School is recruiting new driving instructors to the team. </span>We wish to recruit 
                    instructors who have a passion for training and truly desire to make safer the lives of the 
                    Ontarians. You will be training people to drive safely and confidently in a relaxed, positive,
                    and fun environment in Ontario.<span className='introduction-text-bold'> The last thing we want is to put students off or make them 
                    feel uncomfortable.</span> We offer you career advancement opportunities that are aligned with the 
                    ISO standards.
                </p>
                <p>
                    Our fully online process management system offers our instructors to set their own daily, 
                    weekly, and monthly schedules online with their accounts. That means you are free to determine
                    how many hours plus which days you are going to give service in the name of Master Drivers. 
                    Also, our students are able to schedule online with the available instructors they want to 
                    choose.<span className='introduction-text-bold'>We are accepting applications from all around
                    Ontario.</span> 
                </p>

                <div className='candidates-part'>
                    <div className='candidates-must-have'>
                        <h3>Candidates Must Have</h3>
                        <ul>
                            <li>G Driver’s Licence.</li>
                            <li>In-car Driving Instructor Certification.</li>
                            <li>A valid Ontario Driving Instructor’s Licence (MTO approved).</li>
                            <li>Own Car Insurance.</li>
                            <li>A clean driving record for the last 3 years and Vulnerable Sector Check (VSC).</li>
                            <li>Vehicle Ownership; own vehicle in good condition with the brake peddle on the passenger side.</li>
                            <li>Ontario Car Safety Check Report..</li>
                            <li>5 images showing a dual brake pedal for the instructor, every side view of the instructor’s vehicle including the license plate.</li>
                        </ul>

                        <h3 style={{marginTop:40 ,marginBottom:20}}>Attention</h3>
                        <ul>
                            <li>Only those who meet the requirements for the position will be contacted.</li>
                            <li>Payment: We offer hourly rates based on experience.</li>
                            <li>Fill out the form and let us reach you to coordinate an online interview. Be aware of the required fields.</li>
                            <li>Please wait and see the feedback over the SUBMIT button after submission. If you have an issue with the contact form, 
                                please get in touch with us via <span style={{fontWeight:"bold"}}> e-mail.</span>
                            </li>
                        </ul>

                        <div className='career-photos'>
                            <img src={photo1} alt="" width={500} style={{marginBottom:20}}/>
                            <img src={photo2} alt="" width={500}/>
                        </div>
                    </div>
                    <div className='candidates-form'>
                        <h3>APPLICATION FORM</h3>
                        <form action="">
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Email" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Phone Number" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Locations you can give services" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="HST Number" variant="outlined" />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={3}
                                defaultValue="Message"
                                style={{marginTop:5,marginBottom:5}}
                            />

                            <Select style={{marginBottom:10}}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={findUs}
                                label="Course"
                                onChange={handleChange}
                                >
                                <MenuItem value={10} disabled>How did you find us?</MenuItem>
                                <MenuItem value={20}>Google Search</MenuItem>
                                <MenuItem value={30}>Google Ads</MenuItem>
                                <MenuItem value={40}>Indeed</MenuItem>
                                <MenuItem value={50}>Yelp</MenuItem>
                                <MenuItem value={60}>Kijiji</MenuItem>
                                <MenuItem value={70}>Referral</MenuItem>
                                <MenuItem value={80}>Instagram</MenuItem>
                                <MenuItem value={90}>Other</MenuItem>
                            </Select>
                            <Typography>G Driver's Licence *</Typography>
                            <form action="" className='file-uploader-form' onClick={()=>document.querySelector(".input-field").click()}>
                                <input type="file" className='input-field' hidden
                                onChange={({target:{files}})=>{
                                    files[0] && setFileName(files[0].name)
                                    if(files){
                                    setImage(URL.createObjectURL(files[0]))
                                    }
                                }}
                                />

                                {image ?
                                <img src={image} width={300} height={10} alt={fileName} />
                                :
                                <>
                                <MdCloudUpload color="#147cf" size={60}/>
                                <p>Browse Files to upload</p>
                                </>
                                }
                            </form>

                            <section className='uploaded-row'>
                            <AiFillFileImage color="#1475cf" />
                            <span className='upload-content'>
                                {fileName}
                                <MdDelete
                                onClick={()=>{
                                    setFileName("No Selected File")
                                    setImage(null)
                                }}
                                />
                            </span>
                            </section>

                            <Typography>In-car Driving Instructor’s Certification *</Typography>
                            
                            <form action="" className='file-uploader-form' onClick={()=>document.querySelector(".input-field2").click()}>
                                <input type="file" className='input-field2' hidden
                                onChange={({target:{files}})=>{
                                    files[0] && setFileName2(files[0].name)
                                    if(files){
                                    setImage(URL.createObjectURL(files[0]))
                                    }
                                }}
                                />

                                {image2 ?
                                <img src={image2} width={300} height={10} alt={fileName2} />
                                :
                                <>
                                <MdCloudUpload color="#147cf" size={60}/>
                                <p>Browse Files to upload</p>
                                </>
                                }
                            </form>

                            <section className='uploaded-row'>
                            <AiFillFileImage color="#1475cf" />
                            <span className='upload-content'>
                                {fileName2}
                                <MdDelete
                                onClick={()=>{
                                    setFileName2("No Selected File")
                                    setImage2(null)
                                }}
                                />
                            </span>
                            </section>

                            
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Career
