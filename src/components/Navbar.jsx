import logo from '../assets/images/masterdrivers-logo.png';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../assets/css/navbar.css";
import { Button } from '@mui/material';
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import {Link} from "react-router-dom";

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
        <div className="navbar">
            <div className='social-media-icons'>
                <ul>
                    <li><a href=""><BsFacebook color='white' size={23}/></a></li>
                    <li><a href=""><RiInstagramFill className='instagram' color='white' size={27}/></a></li>
                    <li><a href=""><BsYoutube className='youtube'  color='white' size={27}/></a></li>
                </ul>
            </div>

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
                    <li><Link to="/career" className='link'>Career</Link></li>
                    <li><Link to="/blogs" className='link'>Blogs</Link></li>
                    <li><Link to="/contact-us" className='link'>Contact Us</Link></li>
                </ul>
            </div>
            <Button style={{paddingLeft:50,paddingRight:50}} variant="contained" color='success'>Login</Button>
            </div>

           
        </div>

        <div style={{display:status}} className='locations-part'>
                <div className='location-uls'>
                <ul>
                    <li>KW Region(Kitchener,Waterloo,Cambridge)</li>
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
                        <li>G1 Knowledge Preparation</li>
                        <li>Online Beginner Driver Education</li>
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