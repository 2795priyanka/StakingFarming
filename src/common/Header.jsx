import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import gochart from '../assets/images/gochart_white.png'
import crypto from '../assets/images/crypto_white.png'
function Header() {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col lg={12} md={12} className="px-0">
                            <Navbar collapseOnSelect expand="lg"  >
                                <Container>
                                    <Navbar.Brand href="#home">
                                        <img src={crypto} alt="logo" className='img-fluid' style={{ width: "60px" }} />
                                        <img src={gochart} alt="logo" className='img-fluid' style={{ width: "60px", marginLeft: "-10px" }} />

                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="m-auto">
                                            <Nav.Link href="#about-us">About Us</Nav.Link>
                                            <Nav.Link href="#how_it_works">How it works</Nav.Link>
                                            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                                            <Nav.Link href="#faq">FAQs</Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <Nav.Link href="#stake-now" className='stake_btn'>STAKE NOW</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header