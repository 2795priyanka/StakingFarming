import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LayerCard from './subcomonents/LayerCard'
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
                        
                            <LayerCard token="Token 1 (Go Chart)" path="/stakeToken1"/>
                            <LayerCard token="Token 2 (Cryptogram)" path="/stakeToken2"/>
                 

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StakeNow