import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutUs() {
    return (
        <div className='aboutUs_section'>

            <div className=" about_banner" id='about-us'>
                <Container className='py-4'>
                    <Row className='justify-content-center'>
                        <Col lg={12} >
                            <div className="about_content py-5">
                                <div className="about_title">What is GoStake ?</div>
                            </div>
                        </Col>

                        <Col lg={10}>
                            <div className="about_text_container">
                                <div>GoStake is an innovative web 3.0 digital platform with an elaborate ecosystem of digital products. Expanding to verified digital assets for staking services.</div>
                                <p>Go Stake intends to be a leader  in  staking platform with it's unique protocol to reduce supply from circulation and give massive price appreciations and a stable yield</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
          
        </div>
    )
}

export default AboutUs