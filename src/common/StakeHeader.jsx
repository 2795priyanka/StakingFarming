import React from 'react'
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

function StakeHeader() {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col lg={12} md={12} className="px-0">
                            <Navbar collapseOnSelect expand="lg"  >
                                <Container>
                                    <Navbar.Brand to="/staking">STAKING <br></br> FARMING</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="m-auto">
                                            <Nav.Link to="/staking">Stake</Nav.Link>
                                            <Nav.Link to="/staking">Unstake</Nav.Link>
                                            <Nav.Link to="/staking">Reward</Nav.Link>
                                            
                                        </Nav>
                                        <Nav>
                                           <Nav.Link to="/staking"  className='stake_btn'>Connect Wallet</Nav.Link>
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

export default StakeHeader