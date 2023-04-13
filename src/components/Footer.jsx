import React from 'react'
import "../assets/css/footer.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {

  return (
    <>
        <div className='footer'>  

            <div className='social-icons'>
                <ul>
                    <li><a href=""><CiFacebook size="30px" color='19A7CE'/></a></li>
                    <li><a href=""><SlSocialInstagram className='instagram' size="25px" color='E11299'/></a></li>
                    <li><a href=""><AiOutlineYoutube className='youtube' size="35px" color='red'/></a></li>
                </ul>
            </div>

            <div className='footer-text-part'>

            <div className='helpful-links'>
                <h2>Helpful Links</h2>
                <ul>
                    <li>
                        <LocalShippingIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}> Truck Driver Training </a>
                    </li>
                    <li>
                        <CalendarMonthIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Book In-car Lessons</a>
                    </li>
                    <li>
                        <CalendarMonthIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Book a Road Test</a>
                    </li>
                    <li>
                        <LibraryBooksIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>MTO Driver's Handbook</a>
                    </li>
                    <li>
                        <LightbulbIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Understanding Demerit Points</a>
                    </li>
                    <li>
                        <OndemandVideoIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Useful Videos</a>
                    </li>
                </ul>
            </div>
            <div className='service-location'>
                <h2>Service Locations</h2>
                <div className='service-location-names'>
                    <ul>
                        <li>KW Region</li>
                        <li>Guelph</li>
                        <li>Barrie</li>
                        <li>Brantford</li>
                        <li>Burlington</li>
                        <li>Hamilton</li>
                        <li>London</li>
                    </ul>
                    <ul>
                        <li>Mississauga</li>
                        <li>St.Catharines</li>
                        <li>Scarborough</li>
                        <li>North York</li>
                        <li>East York</li>
                        <li>Richmond Hill</li>
                        <li>Markham</li>
                        
                    </ul>
                    <ul>
                        <li>Ajax</li>
                        <li>Pickering</li>
                        <li>Oshawa</li>
                        <li>Ottowa</li>
                        <li>Whitby</li>
                        <li>Etobicoke</li>
                        <li>Downtown Toronto</li>
                    </ul>
                    <ul>
                        <li>Oakville</li>
                        <li>Milton</li>
                        <li>Woodbridge</li>
                        <li>Vaughan</li>
                        <li>Peterborough</li>
                    </ul>
                </div>  
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <LocalPhoneIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>	(226) 777-6000</a>
                    </li>
                    <li>
                        <AccessTimeIcon/>
                        <p style={{marginLeft:10}}>
                        Monday – Saturday <br />
                        8.00 AM – 7.30 PM <br />
                        Sunday <br />
                        9.30 AM – 5.00 PM
                        </p>
                    </li>
                    <li>
                        <MailIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Email Us</a>
                    </li>
                    <li>
                        <CalendarMonthIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>B2B Meeting</a>
                    </li>
                    <li>
                        <LockIcon/>
                        <a href="" style={{textDecoration:"none",color:"white",marginLeft:10}}>Privacy Policy</a>
                    </li>
                </ul>

            </div>

            </div>
            
        </div>
        <div className='footer-licence'>
            <p> &copy; 2022 - Master Driving School</p>
        </div>
    </>
  )
}

export default Footer
