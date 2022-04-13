import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import card1 from '../assets/images/card1.svg'
import card2 from '../assets/images/card2.svg'
import card3 from '../assets/images/card3.svg'
import card4 from '../assets/images/card4.svg'

function HowItWorks() {
  return (
    <>
        <div className="howItWorks_section" id='how_it_works'>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={12}>
                        <div className="head">How it works</div>
                        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={8}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number">1</div>
                            <div className="card_container">
                                <div className="title">Lorem epsum dollar</div>
                                <div className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla totam ipsum atque corporis tenetur nobis possimus tempore perferendis fugiat, reprehenderit officia aliquid, consequatur pariatur veritatis, hic omnis aliquam adipisci iusto!</div>
                            </div>
                           </div>
                        </div>
                    </Col>
                    <Col lg={6} md={4}>
                        <div className="howItWorks_img">
                            <img src={card1} alt="card1_img" className='img-fluid' />
                        </div>
                    </Col>
                </Row>
              
                <Row>
                <Col lg={{span:"6" , order:"first"}} md={{span:"4" , order:"first"}} xs={{ order: 'last' }}>
                        <div className="howItWorks_img">
                            <img src={card2} alt="card2_img" className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={{span:"6" , order:"last"}} md={{span:"8" , order:"last"}} xs={{ order: 'first' }}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number">2</div>
                            <div className="card_container">
                                <div className="title">Lorem epsum dollar</div>
                                <div className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla totam ipsum atque corporis tenetur nobis possimus tempore perferendis fugiat, reprehenderit officia aliquid, consequatur pariatur veritatis, hic omnis aliquam adipisci iusto!</div>
                            </div>
                           </div>
                        </div>
                    </Col>
                 </Row>
                <Row>
                    <Col lg={6} md={8}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number">3</div>
                            <div className="card_container">
                                <div className="title">Lorem epsum dollar</div>
                                <div className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla totam ipsum atque corporis tenetur nobis possimus tempore perferendis fugiat, reprehenderit officia aliquid, consequatur pariatur veritatis, hic omnis aliquam adipisci iusto!</div>
                            </div>
                           </div>
                        </div>
                    </Col>
                    <Col lg={6} md={4}>
                        <div className="howItWorks_img">
                            <img src={card3} alt="card3_img" className='img-fluid' />
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={{span:"6" , order:"first"}} md={{span:"4" , order:"first"}} xs={{ order: 'last' }}>
                        <div className="howItWorks_img">
                            <img src={card4} alt="card4_img" className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={{span:"6" , order:"last"}} md={{span:"8" , order:"last"}} xs={{ order: 'first' }}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number">4</div>
                            <div className="card_container">
                                <div className="title">Lorem epsum dollar</div>
                                <div className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla totam ipsum atque corporis tenetur nobis possimus tempore perferendis fugiat, reprehenderit officia aliquid, consequatur pariatur veritatis, hic omnis aliquam adipisci iusto!</div>
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

export default HowItWorks