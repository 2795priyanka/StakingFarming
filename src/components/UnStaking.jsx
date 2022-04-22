import React, { useState } from 'react'
import StakeHeader from '../common/StakeHeader'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Footer from '../common/Footer'
function UnStaking() {
   
    //  =========unStake modal details=========
    const [showUnStake, setShowUnStake] = useState(false);
    const handleCloseUnStake = () => setShowUnStake(false);
    const handleShowUnStake = () => setShowUnStake(true);

    return (
        <>
            <StakeHeader />
            <div className="unStaking_section">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="unStaking_title">Unstake</div>
                            <div className="unStaking_table table-responsive">
                                <table className='table table-hover  table-striped responsive'>

                                    <tbody>
                                        <tr className='head'>
                                            <th><div className="head_title">Stake Type</div></th>
                                            <th><div className="head_title">Token</div></th>
                                            <th><div className="head_title">Start Date</div></th>
                                            <th><div className="head_title">End Date</div></th>
                                            <th><div className="head_title">Action</div></th>
                                        </tr>
                                        <tr>
                                            <td>Lock</td>
                                            <td>50</td>
                                            <td>18/04/2022</td>
                                            <td>30/04/2022</td>
                                            <td><button className='unStake_btn' onClick={handleShowUnStake}>Unstake</button></td>
                                        </tr>
                                        <tr>
                                            <td>UnLock</td>
                                            <td>10</td>
                                            <td>18/04/2022</td>
                                            <td>30/04/2022</td>
                                            <td><button className='unStake_btn' onClick={handleShowUnStake}>Unstake</button></td>
                                        </tr>
                                        <tr>
                                            <td>Lock</td>
                                            <td>30</td>
                                            <td>18/04/2022</td>
                                            <td>30/04/2022</td>
                                            <td><button className='unStake_btn' onClick={handleShowUnStake}>Unstake</button></td>
                                        </tr>
                                        <tr>
                                            <td>UnLock</td>
                                            <td>5</td>
                                            <td>18/04/2022</td>
                                            <td>30/04/2022</td>
                                            <td><button className='unStake_btn' onClick={handleShowUnStake}>Unstake</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />

            {/* =========unStake modal details start========= */}
            <Modal show={showUnStake} onHide={handleCloseUnStake} className="unStake_modal">
                <Modal.Header closeButton >
                    {/* <Modal.Title centered>Unstake</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="unStake_modal_details">
                        <Container>
                            <Row className='justify-content-center'>
                                <Col lg={8}>
                                    <div className="unStaking_title blue">Unstake</div>
                                    <div className="unStake_details">
                                        <div className="unStake">
                                            <div className="title">Stake Type</div>
                                            <div className="text">Lock</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">Token</div>
                                            <div className="text">50</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">Start Date</div>
                                            <div className="text">18/04/2022</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">End Date</div>
                                            <div className="text">20/04/2022</div>
                                        </div>
                                        <div className="d-grid mt-3">
                                            <button className='unStake_connectWallet_btn'>Connect Wallet</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Modal.Body>

            </Modal>
            {/* =========unStake modal details start========= */}
        </>
    )
}

export default UnStaking