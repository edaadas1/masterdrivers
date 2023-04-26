import React from 'react'
import "../assets/css/contact-us.css";
import { TextField, MenuItem, Checkbox, Button } from '@mui/material';
import  Select  from '@mui/material/Select';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactUs = () => {

    const [course, setCourse] = React.useState(10);
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [status, setStatus] = React.useState("none");

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
        setStatus("block")
    };

  return (
    <>
      <div className='contact-us-page'>
        <div className='contact-us-form'>
       
            <div className='form-part'>
            <h3 style={{marginBottom:20,marginTop:5,fontSize:25,fontFamily:"Noto Serif Hebrew, serif"}}>GET IN TOUCH</h3>
            <div>
                <form action="">
                    <div className='columns'>
        <div className='first-column'>
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Email" variant="outlined" />
                            <TextField style={{marginBottom:5}} required id="outlined-basic" label="Phone Number" variant="outlined" />
                        </div>
                        <div className='second-column'>
                            <Select style={{marginBottom:10}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={course}
                label="Course"
                onChange={handleChange}
                >
                <MenuItem value={10} disabled>Subject</MenuItem>
                <MenuItem value={20}>G1 Knowledge Preparation Course</MenuItem>
                <MenuItem value={30}>G1 Knowledge Practice Test</MenuItem>
                <MenuItem value={40}>Online BDE Course</MenuItem>
                <MenuItem value={50}>G2/G in-car lessons</MenuItem>
                <MenuItem value={60}>Road Test</MenuItem>
                <MenuItem value={70}>Payment</MenuItem>
                <MenuItem value={80}>Other</MenuItem>
                </Select>
                <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="Message"
                />
                <div className='first-checkbox'>
                        <Checkbox
                            label="Value 1"
                            value={checkedOne}
                            onChange={handleChangeOne}
                        />
                        <p>I want to buy a new service</p>
                    </div>
                    <div className='second-checkbox'>
                    <Checkbox
                            label="Value 2"
                            value={checkedTwo}
                            onChange={handleChangeTwo}
                        />
                        <p>I need to support for the existing service</p>
                    </div>
                    <div style={{display:status}} className="service-support">
                  
                    </div>
                    <Button style={{marginTop:10}} variant="contained" color='warning'>SUBMIT</Button>
                    
                        </div>
                    </div>
              


                {/* <input type="text" placeholder='First Name' required /> <br />
                <input type="text" placeholder='Last Name' required /><br />
                <input type="email" placeholder='E-mail' required /><br />
                <input type="text" placeholder='Phone Number' required /><br />
                
                <textarea name="" id="" cols="30" rows="10" placeholder=''></textarea><br />
                <input type="submit" value="Submit" /> */}
            </form>
            </div>
            
            </div>
            <div className='contact-us-map-part'>
                <div className='map-icons'>
                    <ul>
                        <li style={{marginRight:50}}>
                            <MailIcon/>
                            <p>Email Us</p>
                        </li>
                        <li>
                            <LocalPhoneIcon/>
                            <p>Call Us</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10731137.80010985!2d-93.70651518576767!3d48.95526259105919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario%2C%20Kanada!5e0!3m2!1str!2str!4v1681740523614!5m2!1str!2str" 
                    width="400" height="300" style={{border:0,borderRadius:10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
                
        </div>
      </div>
    </>
  )
}

export default ContactUs
