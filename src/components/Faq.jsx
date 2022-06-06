import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
function Faq() {
    return (
        <>
            <div className="faq_section" id='faq'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10} md={12}>
                            <div className="faq_title">FAQs</div>

                            <div className="faq_content mt-3">
                                <Accordion className='mb-4'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What are Digital Assets?</Accordion.Header>
                                        <Accordion.Body>
                                            Digital assets are electronic files or data on the blockchain that are owned and can be transferred to individuals, also used as currency to make transactions or a way of storing intangible assets i.e. digital art work, documents or video.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion className='mb-4'>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is Staking?</Accordion.Header>
                                        <Accordion.Body>
                                            In simple terms it is earning rewards for holding a specific token that has a “staking” facility. You earn a percentage rate reward over time.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion className='mb-4'>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How Does Staking work?</Accordion.Header>
                                        <Accordion.Body>
                                            The blockchain puts your digital assets to work. The staking is an incentive to earn for cryptocurrency holders who are willing to hold the digital asset for a set period. Cryptocurrency staking use a mechanism called Proof of Stake, which is a way to ensure that all transactions are verified and secured without a payment or bank processor involved. Your digital asset if you choose to stake becomes part of this process.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Faq