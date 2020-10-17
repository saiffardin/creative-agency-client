import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import './NavSection.css';

import mainLogo from '../../../images/logos/logo.png';

const NavSection = () => {
    return (
        <main>
            {/* <Container> */}
                <Navbar className='mx-5 px-5' expand="lg">
                    <Navbar.Brand href="#home" className='mx-5'>
                        <img
                            src={mainLogo}
                            width="150"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="text-center"  id="basic-navbar-nav">
                        <Nav style={{fontFamily:'Poppins'}} className="ml-auto">
                            <Nav.Link href="#Home" className='m-2 underline pb-0'>Home</Nav.Link>
                            <Nav.Link href="#OurPortfolio" className='m-2 underline pb-0' >Our Portfolio</Nav.Link>
                            <Nav.Link href="#OurTeam" className='m-2 underline pb-0'>Our Team</Nav.Link>
                            <Nav.Link href="#ContactUs" className='m-2 underline pb-0'>Contact Us</Nav.Link>
                        </Nav>

                        <Button className="landingPage-btn mx-5 my-2" >Login</Button>
                    </Navbar.Collapse>
                </Navbar>
            {/* </Container> */}

        </main>
    );
};

export default NavSection;