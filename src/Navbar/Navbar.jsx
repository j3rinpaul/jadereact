import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {
  Link,
} from "react-router-dom"
import logo from "../assets/jadelogo-removebg-preview.png"
import './navbar.css'
import {
  AiOutlineWhatsApp
} from "react-icons/ai"


export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    
    <MDBNavbar expand='lg'  id='fcolor'  >
      <MDBContainer fluid>
        <MDBNavbarBrand as={Link} to="/">
            <div id='navimg'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div> 
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <Link to="/Home"><MDBNavbarLink id='navitem' >Home</MDBNavbarLink></Link>
            <Link to="/About"><MDBNavbarLink id='navitem'>About</MDBNavbarLink></Link>
            {/* <Link to="/Product"><MDBNavbarLink  id='navitem'>Products</MDBNavbarLink></Link> */}
            <Link to="/Contact"><MDBNavbarLink  id='navitem'>Contact</MDBNavbarLink></Link>
            <div className='wbtn'>
              <a href="https://wa.me/971556644943"><AiOutlineWhatsApp/></a>
              {/* <a href="Sales@jadesign.com"><AiOutlineMail/></a> */}
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}