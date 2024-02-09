import React from 'react';
import "./Compo.css"
import { NavLink } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
    return(
        <>
        <div className='header'>

            <div className='logo'>
                <img src='https://www.theindiatourism.com/images/logo.webp' alt='hd'/>

            </div>
            <div className='middle'>
                <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='hd'/>

            </div>
            <div className='mail'>
                <p>Email : info@theindiatourism.com</p>
                <FaPhoneVolume/>: 1234567890
            </div>
            <div className='login'>

              <NavLink to='/login'>
              <IoPersonCircleSharp className='icon'/>
                
                </NavLink>  

            </div>


        </div>
     
        
        </>
    )
}



export default Header;