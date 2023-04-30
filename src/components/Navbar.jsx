import logo from '../assets/images/masterdrivers-logo.png';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../assets/css/navbar.css";
import { Button } from '@mui/material';
import {Link} from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Navbar =()=> {

    const [status,setStatus] = useState("none");
    const [coursestatus,setCourseStatus] = useState("none");
    const [torontostatus,settorontoStatus] = useState("none");

    const showhiddenlocations =()=>{
        if(status==="none"){
            setCourseStatus("none")
            setStatus("block")
        }
        else{
            settorontoStatus("none")
            setStatus("none")
        }
    }

    const showhiddencourses =()=>{
        if(coursestatus==="none"){
            setStatus("none")
            settorontoStatus("none")
            setCourseStatus("block")
        }
        else{
            setCourseStatus("none")
        }
    }


    const showhiddentorontolocations =()=>{
        if(torontostatus==="none"){
            settorontoStatus("block")
        }
        else{
            settorontoStatus("none")
        }
    }

    return(
        <>

        <div className='topbar'>
        <div className='social-media-icons'>
                <ul>
                    <li><a href=""><CiFacebook size="30px" color='#3b5998'/></a></li>
                    <li><a href=""><SlSocialInstagram className='instagram' size="25px" color='#C13584'/></a></li>
                    <li><a href=""><AiOutlineYoutube className='youtube' size="35px" color='red'/></a></li>
                </ul>
            </div>
        </div>
        <div className="navbar">
        
            <div className='bottom-social-icons'>

            <img src={logo} alt="logo" width={200}></img>
            <div className='navbar-options'>

                <ul className='navbar-options-ul'>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li onClick={showhiddencourses}>
                        <Link to="/online-courses" className='link'>Online Courses
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                        </Link>
                    </li>
                    <li onClick={showhiddenlocations}>
                        <Link to="/location-pricing" className='link'>Locations and Pricing
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                        </Link>
                    </li>
                    <li><Link to="/blogs" className='link'>Blogs</Link></li>
                    <li><Link to="/career" className='link'>Career</Link></li>
                    <li><Link to="/contact-us" className='link'>Contact Us</Link></li>
                </ul>
            </div>
            <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='success'>Login</Button>
            </div>

           
        </div>

        <div style={{display:status}} className='locations-part'>
                <div className='location-uls'>
                <ul>
                    <li><Link to="/pricings" className='link'>KW Region(Kitchener,Waterloo,Cambridge)</Link></li>
                    <li>Barrie</li>
                    <li>Brantford</li>
                    <li>Burlington</li>
                    <li className='toronto' onClick={showhiddentorontolocations} >
                        Toronto
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </li>
                    
                 </ul>
                <ul>
                    <li>Guelph</li>
                    <li>Hamilton</li>
                    <li>London</li>
                    <li>Milton - Oakville</li>
                </ul>
                <ul>
                    <li>Mississauga</li>
                    <li>Orangeville</li>
                    <li>Oshawa</li>
                    <li>Peterborough,Lindsay,Lakefield,Norwood</li>
                </ul>
                <ul>
                    <li>Richmond Hill,Vaughan,Woodbridge,Thornhill</li>
                    <li>St.Catharines</li>
                    <li>Whitby,Ajax,Pickering</li>
                    <li>Windsor</li>
                </ul>

                
                </div>
        </div> 

        <div style={{display:coursestatus}} className='online-courses-part'>
                <div className='online-courses-uls'>
                    <ul>
                        <li><Link style={{textDecoration:"none"}} to="/g1-knowledge-preparation">G1 Knowledge Preparation</Link></li>
                        <li><Link style={{textDecoration:"none"}} to="/online-beginner-driver-education">Online Beginner Driver Education</Link></li>
                    </ul>
                </div>
        </div>


        <div style={{display:torontostatus}} className='toronto-locations-part'>
            <ul>
                <li>Downtown Toronto</li>
                <li>East York</li>
                <li>Etobicoke</li>
                <li>North York</li>
                <li>Scarborough</li>
            </ul>
        </div>

        </>
    )
}

export default Navbar