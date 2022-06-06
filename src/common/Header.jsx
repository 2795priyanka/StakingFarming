import React from 'react'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

function Header() {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col lg={12} md={12} className="px-0">
                            <Navbar collapseOnSelect expand="lg"  >
                                <Container>
                                    <Navbar.Brand href="#home">STAKING <br></br> FARMING</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="m-auto">
                                            <Nav.Link href="#about-us">About Us</Nav.Link>
                                            <Nav.Link href="#how_it_works">How it works</Nav.Link>
                                            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                                            <Nav.Link href="#faq">FAQs</Nav.Link>
                                        </Nav>
                                        <Nav>
                                           <Nav.Link href="#stake-now"  className='stake_btn'>STAKE NOW</Nav.Link>
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