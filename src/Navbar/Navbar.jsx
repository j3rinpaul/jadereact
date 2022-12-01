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
// import { CDropdown,CDropdownMenu,CDropdownToggle,CDropdownItem } from '@coreui/react';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';

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
            {/* <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="navitem"
                  title="Products"
                >
                  <NavDropdown.Item href="/Product">Display Products</NavDropdown.Item>
                  <NavDropdown.Item href="/Backdrop">Backdrops & Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="/Flags">Outdoor Flags & Bases</NavDropdown.Item>
                  <NavDropdown.Item href="/Umbrella">Tent & Umbrella</NavDropdown.Item>
                  <NavDropdown.Item href="/Advd">Advertising accessories</NavDropdown.Item>
                  <NavDropdown.Item href="/Qs">Q-Stand & Indoor-Flag Poles</NavDropdown.Item>
                  <NavDropdown.Item href="/Counter">Counter & Tables</NavDropdown.Item>
                  <NavDropdown.Item href="/Printing">Printing Services</NavDropdown.Item>
                  <NavDropdown.Item href="/Promotional">Promotional Gifts</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse> */}

              {/* <MDBDropdown>
                <MDBDropdownToggle>Products</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link={"/Product"}>Menu item</MDBDropdownItem>
                  <MDBDropdownItem link>Menu item</MDBDropdownItem>
                  <MDBDropdownItem link>Menu item</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}

              

            <Link to="/News"><MDBNavbarLink  id='navitem'>News</MDBNavbarLink></Link>
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