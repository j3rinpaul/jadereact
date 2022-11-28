
import React from 'react'
import "./footer.css"
import {
  AiOutlineWhatsApp,
  AiOutlinePhone
} from "react-icons/ai"
import logo from "../assets/jadelogo-removebg-preview.png"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer'> 

        <div className='img'>
            <Link to="/Home" ><img src={logo} alt="" /></Link>
  
        </div>

        <div className='details'>
          <a href='https://jadesignadvertising.com'><p>Jadesign @ 2022</p></a>
          
  
        </div>

        <div className='icons'>
          <a href="https://wa.me/971556644943"><AiOutlineWhatsApp className='icon1'/></a>
          <a href="https://wa.me/971522423041"><AiOutlinePhone className='icon2'/></a>
        </div>
    </div>
  )
}

export default Footer