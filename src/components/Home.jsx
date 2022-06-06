import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import heroImg from '../assets/images/hero-bg.png'
function Home() {
  return (
    <>
        <div className="home_section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="content">
                            <div className="top_head">
                                <p>Web 3.0 Staking Protocol for Numerous Digital Assets</p>
                            </div>
                            <div className="head">
                                <h1>EARN PASSIVE INCOME<br></br> WITH DIGITAL ASSETS</h1>
                            </div>
                            <div className="bottom_head">
                                <h6>High End Secure Blockchain Ecosystem to <br></br>Stake verified digital Assets - Earn While You Sleep!</h6>
                            </div>
                            <div className="total_token_div">
                               <div className="staked_div">
                                    <p>Total Staked</p>
                                    <h2>$ 1,000,000,000</h2>
                                </div> 
                               <div className="staked_div">
                                    <p>Total Rewards</p>
                                    <h2>$ 1,000,000,000</h2>
                               </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='hero_img'>
                        <img src={heroImg} className='img-fluid '/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Home