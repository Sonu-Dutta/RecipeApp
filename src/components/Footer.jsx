import React from 'react';
import "./Footer.css"
import { FaInstagram ,FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';
import logo from "../assests/boy.png"

function Footer() {
  return (

    <div className='whole-Footer'>
       <div className='foot-left'> <span className='logos'><img src={logo} alt="logo" className='logo'/> FoodYummy</span>
       <div className="foottest">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis quidem libero commodi, excepturi et incidunt saepe dicta maxime quibusdam vel error! Eveniet!"</div>
       
       <div className='foot-right'>
         <span className='icons'><FaInstagram/></span>  
         <span className='icons'><FaTwitter/></span>   
         <span className='icons'><FaFacebook/></span>  
         <span className='icons'><FaLinkedin/></span>  
         <span className='icons'><FaYoutube/></span>  
            {/* <p>Youtube</p> */}
       </div>
       
       </div>
      



    </div>
  )
}

export default Footer