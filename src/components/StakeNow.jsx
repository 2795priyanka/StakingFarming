import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LayerCard from './subcomonents/LayerCard'
import gochart from '../assets/images/gochart.png'
import crypto from '../assets/images/crypto.png'
import {Link} from 'react-router-dom'
function StakeNow() {
    return (
        <>
            <div className="stakeNow_section" id='stake-now'>
                <div className="overlay"></div>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <div className="stakeNow_head">
                                <p>The Following Digital Assets are Active</p>
                            </div>
                            <div className="stakeNow_title">
                                <h4>Layer 1</h4>
                            </div>
                        </Col>
                        
                            <LayerCard token="Token 1 (Go Chart)" path="/stakeToken1" img = {gochart}/>
                            <LayerCard token="Token 2 (Cryptogram)" path="/stakeToken2" img = {crypto}/>
                            
                    {/* <Col lg={3} md={4} className="py-4 stake_layer">
                        <Link to="stakeToken1">
                        <div className="layerCard_section">
                            <div className="token_label">Testnet</div>
                            <div className="token_name"><img src={gochart} className="img-fluid" alt='img' style={{ width: "55px", borderRadius:"50%" }}></img>Token 1 (Go Chart)</div>
                            <div className="tagline">
                                <div className="validator">Validator</div>
                                <div className="stake"> BsC</div>

                            </div>
                        </div></Link>
                    </Col>
                    
                    <Col lg={3} md={4} className="py-4 stake_layer">
                        <Link to="/stakeToken2">
                        <div className="layerCard_section">
                            <div className="token_label">Testnet</div>
                            <div className="token_name"><img src={crypto} className="img-fluid" alt='img' style={{ width: "55px",borderRadius:"50%"}}></img>Token 2 (Cryptogram)</div>
                            <div className="tagline">
                                <div className="validator">Validator</div>
                                <div className="stake"> BsC</div>

                            </div>
                        </div></Link>
                    </Col> */}
                 

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StakeNow