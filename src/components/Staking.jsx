import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import StakeHeader from '../common/StakeHeader'
import Footer from '../common/Footer'
import { BiHelpCircle } from 'react-icons/bi'
function Staking() {
    const [stakeType, setStakeType] = useState("")
    const [amount, setAmount] = useState(" ")

    const onRadioChange = (e)=>{
        setStakeType(e.target.value)
    }

    return (
        <>
            <StakeHeader />
            <div className="staking_cards">
                <div className="staking_section">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={6} md={7}>
                                <div className="staking_title">Stake</div>
                                <div className="staking_subTitle">Stake <span>BSC</span> and receive st<span>BSC</span> while staking.</div>
                                <div className="staking_container">
                                    <div className="staking_selection">

                                        <div className="form-check lock">
                                            <input className="form-check-input"
                                                   type="radio" 
                                                   value="lock"
                                                   name="stakeType"
                                                   onChange={onRadioChange} 
                                            />
                                            <label className="form-check-label">
                                                Lock
                                            </label>
                                        </div>
                                        <div className="form-check lock">
                                            <input className="form-check-input" 
                                                   type="radio" 
                                                   value = "unlock"
                                                   name="stakeType"
                                                   onChange={onRadioChange} 
                                            />
                                            <label className="form-check-label">
                                                Unlock
                                            </label>
                                        </div>

                                    </div>

                                    <div className="amount_div">
                                        <input type="text" className='form-control' placeholder='Enter Amount'  pattern="[0-9]*" onChange={(e)=>setAmount(e.target.value)} />
                                        <div className="max_div">Max</div>
                                    </div>
                                    {stakeType === "unlock" ?   
                                     <div className="month_dropdown mt-4">
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Stake Duration</option>
                                            <option value="">1 Month</option>
                                            <option value="">3 Month</option>
                                            <option value="">12 Month</option>
                                        </Form.Select>
                                    </div>
                                     : " " }

                                 
                                     
                                    


                                    <div className="connect_btn d-grid mb-3 mt-4">
                                        <button className='btn connect_wallet_btn'>Connect Wallet</button>
                                    </div>

                                    <div className="token_details">
                                        <div className="token1">
                                            <div className='left_div'>You will receive</div>
                                            <div className="right_div">0 stBSC</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Exchange rate</div>
                                            <div className="right_div"> 1 BSC = 1 stBSC</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Transaction cost</div>
                                            <div className="right_div">$ 13.30</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Reward fee <BiHelpCircle className='help_icon' /></div>
                                            <div className="right_div">10%</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="statistics_section">
                    <Container>
                        <Row className='justify-content-center mt-4'>
                            <Col lg={6} md={7}>
                                <div className="head">
                                    <div className="statistics_title">Statistics</div>
                                    <div className="view_bscScan"><a href="#">View on BSCscan</a></div>
                                </div>
                                <div className="statistics_container">
                                    <div className="token_details">
                                        <div className="token1">
                                            <div className='left_div'>Annual percentage rate <BiHelpCircle className='help_icon' /></div>
                                            <div className="right_div grin">3.9%</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Total staked with Lido</div>
                                            <div className="right_div">5,653,309.560 BSC</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Stakers</div>
                                            <div className="right_div">60391</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>stBSC market cap</div>
                                            <div className="right_div">$9,921,437,175</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Staking