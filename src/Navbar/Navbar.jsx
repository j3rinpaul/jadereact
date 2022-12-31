import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBDropdown,MDBDropdownItem,MDBDropdownToggle,MDBDropdownMenu
} from 'mdb-react-ui-kit';
import {
  Link, NavLink,
} from "react-router-dom"
import logo from "../assets/jadelogo-removebg-preview.png"
import './navbar.css'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    
    <MDBNavbar expand='lg'  id='fcolor'  >
      <MDBContainer fluid>
        <MDBNavbarBrand as={Link} to="/">
            <div id='navimg'>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
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
            <NavLink to="/Home"><MDBNavbarLink id='navitem' >Home</MDBNavbarLink></NavLink>
            <NavLink to="/About"><MDBNavbarLink id='navitem'>About</MDBNavbarLink></NavLink>
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
           

              <MDBDropdown id="navitem" >
                <MDBDropdownToggle  color='link' className='navids' >Products</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link="/Product">Display Products</MDBDropdownItem>
                  <MDBDropdownItem link="/Backdrop">Backdrops & Accessories</MDBDropdownItem>
                  <MDBDropdownItem link="/Flags">Outdoor Flags & Bases</MDBDropdownItem>
                  <MDBDropdownItem link="/Umbrella">Tent & Umbrella</MDBDropdownItem>
                  <MDBDropdownItem link="/Advd">Advertising accessories</MDBDropdownItem>
                  <MDBDropdownItem link="/Qs">Q-Stand & Indoor-Flag Poles</MDBDropdownItem>
                  <MDBDropdownItem link="/Counter">Counter & Tables</MDBDropdownItem>
                  <MDBDropdownItem link="/Printing">Printing Services</MDBDropdownItem>
                  <MDBDropdownItem link="/Promotional">Promotional Gifts</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              
            <NavLink to="/News"><MDBNavbarLink  id='navitem'>News</MDBNavbarLink></NavLink>
            <NavLink to="/Contact"><MDBNavbarLink  id='navitem'>Contact</MDBNavbarLink></NavLink>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavLink} from "react-router-dom"
//  import logo from "../assets/jadelogo-removebg-preview.png"
//  import "./navbar.css"

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg" id='fcolor'>
//       <Container>
//         <Navbar.Brand href="/" id='navimg'><img src={logo} alt="" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="navbar-dark-example" className="col">
//         <Nav className="me-auto">
//         <NavLink to="/Home"><Nav.Link id='navitem' >Home</Nav.Link></NavLink>
//         <NavLink to="/About"><Nav.Link id='navitem'>About</Nav.Link></NavLink>
//                <Nav>
//                  <NavDropdown
//                    id="navitem"
//                    title="Products"
//                  >
//                    <NavDropdown.Item href="/Product">Display Products</NavDropdown.Item>
//                    <NavDropdown.Item href="/Backdrop">Backdrops & Accessories</NavDropdown.Item>
//                    <NavDropdown.Item href="/Flags">Outdoor Flags & Bases</NavDropdown.Item>
//                    <NavDropdown.Item href="/Umbrella">Tent & Umbrella</NavDropdown.Item>
//                    <NavDropdown.Item href="/Advd">Advertising accessories</NavDropdown.Item>
//                    <NavDropdown.Item href="/Qs">Q-Stand & Indoor-Flag Poles</NavDropdown.Item>
//                    <NavDropdown.Item href="/Counter">Counter & Tables</NavDropdown.Item>
//                    <NavDropdown.Item href="/Printing">Printing Services</NavDropdown.Item>
//                    <NavDropdown.Item href="/Promotional">Promotional Gifts</NavDropdown.Item>
//                  </NavDropdown>
//                </Nav>
//              <NavLink to="/News"><Nav.Link  id='navitem'>News</Nav.Link></NavLink>
//              <NavLink to="/Contact"><Nav.Link  id='navitem'>Contact</Nav.Link></NavLink>
//              </Nav>
//              </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;