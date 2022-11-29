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
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

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
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="navitem"
                  title="Products"
                >
                  <NavDropdown.Item href="/">Display Products</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-2">Backdrops & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-2">Outdoor Flags & Bases</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-2">Tent & Umbrella</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Advertising accessories</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Q-Stand & Indoor-Flag Poles</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Counter & Tables</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Printing Services</NavDropdown.Item>
                  <NavDropdown.Item href="#/action-3">Promotional Gifts</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Link to="/Contact"><MDBNavbarLink  id='navitem'>News</MDBNavbarLink></Link>
            <Link to="/Contact"><MDBNavbarLink  id='navitem'>Contact</MDBNavbarLink></Link>
       

           
            {/* <div className='wbtn'>
              <a href="https://wa.me/971556644943"><AiOutlineWhatsApp/></a>
              {/* <a href="Sales@jadesign.com"><AiOutlineMail/></a> */}
            {/* </div> */} 
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}