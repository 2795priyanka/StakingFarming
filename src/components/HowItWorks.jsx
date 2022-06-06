import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import card1 from '../assets/images/card1.svg'
import card2 from '../assets/images/card2.svg'
import card3 from '../assets/images/card3.svg'
import card4 from '../assets/images/card4.svg'
import card5 from '../assets/images/card5.webp'
import reward from '../assets/images/reward1.png'
function HowItWorks() {
  return (
    <>
        <div className="howItWorks_section" id='how_it_works'>
            <Container className='py-3'>
                <Row className="justify-content-center">
                    <Col lg={8} md={12}>
                        <div className="head">How it Works - Why GoStake?</div>
                        <div className="text">GoStake is a open staking platform for verified projects </div>
                        <div className="paragraph">
                            <p>GoStake is not minting any tokens additional to pay out dividends to avoid token inflation.</p>
                            <p>GoStake protocol Is Designed to reduce all tokens from circulation and giving massive price appreciations and With GoStake you are even able to list your project on Major CEX that do not accept burn in the contract.</p>
                        </div>
                        <div className="sub_head">It is Easy to Stake</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={8}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number"> 1</div>
                            <div className="card_container">
                                <div className="title">Click on the token you hold</div>
                                <div className="para">From the choice of tokens at the top, click on the token you hold in your wallet.</div>
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
                           <div className="number"> 2</div>
                            <div className="card_container">
                                <div className="title">Connect your wallet</div>
                                <div className="para">Once you have clicked on the token, t the top right there is button that says "connect wallet" click it to connect
                                with meta mask or trust wallet.</div>
                            </div>
                           </div>
                        </div>
                    </Col>
                 </Row>
                <Row>
                    <Col lg={6} md={8}>
                        <div className="howItWorks_card">
                           <div className="cards">
                           <div className="number"> 3</div>
                            <div className="card_container">
                                <div className="title">Click stake tokens</div>
                                <div className="para">When the wallet is connected choose the amount of tokens you want to lock and then click "stake"</div>
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
                           <div className="number"> 4</div>
                            <div className="card_container">
                                <div className="title">Approve in wallet</div>
                                <div className="para">Final step is to approve the contract in your wallet, you are now done. Enjoy your rewards!</div>
                            </div>
                           </div>
                        </div>
                    </Col>
                 
                </Row>
              
            </Container>
        </div>

        <div className="reward_section">
            <Container>
                <Row>
                    <Col lg={6}  style={{"display":"flex","flexDirection":"column","justifyContent":"center"}}>
                        <div className="head">Enjoy The Rewards!</div>
                    </Col>
                    <Col lg={6}>
                         <img src="https://cdni.iconscout.com/illustration/premium/thumb/shopping-reward-5266746-4397165.png" alt="" className='img-fluid ' />
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default HowItWorks