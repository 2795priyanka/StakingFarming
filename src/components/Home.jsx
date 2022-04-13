import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <>
        <div className="home_section">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="content">
                            <div className="top_head">
                                <p>Lorem Ipsum dollar sit amet consectetur adipisicing elit</p>
                            </div>
                            <div className="head">
                                <h1>Lorem Ipsum dollar sit <br></br> amet consectetur</h1>
                            </div>
                            <div className="bottom_head">
                                <h6>Lorem Ipsum dollar sit amet consectetur adipisicing elit<br></br>Lorem Ipsum dollar sit amet consectetur adipisicing elit<br></br>Lorem Ipsum dollar sit amet consectetur adipisicing elit.</h6>
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
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Home