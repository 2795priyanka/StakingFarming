import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import StakeHeader from '../common/StakeHeader'
import Footer from '../common/Footer'
import { BiHelpCircle } from 'react-icons/bi'
import { CONTACT_ADDRESS, Abi } from '../contract/staking_Farming _Token2';
import Web3 from "web3";
import axios from 'axios';
import $, { isEmptyObject } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();  // require('dotenv').config();



const web3_Stake = new Web3(window.ethereum);
const stakingABiWthiCONTRACT = new web3_Stake.eth.Contract(Abi, CONTACT_ADDRESS);
console.log("stakingABiWthiCONTRACT", stakingABiWthiCONTRACT)
console.log("API_URL", process.env.REACT_APP_BASE_URL)


function StakingToken2() {
    var [stakeType, setStakeType] = useState("")
    var [token, setToken] = useState(" ")
    var [month, setMonth] = useState(" ")
    var [stateLoader, setLoader] = useState(false)
    var wallet_adderess = sessionStorage.getItem("loginUserAdd")
    let Navigate = useNavigate()
    const [user_token, setUserStakerToken] = useState(0);
    const [tokenPrice, setTokenPrice] = useState("");
    const [total_TokenStaked, setTotal_TokenStaked] = useState(0)
    const [lockApy, setLockApy] = useState("0%")

    // const [stake_inputValue, setStake_inputValue] = useState(0)
    useEffect(() => {
        $("#tokenError").hide()
        $("#typeError").hide()
        $("#monthError").hide()
    }, [])

    $('.validate').focus(function () {
        $("#tokenError").hide()
        $("#typeError").hide()
        $("#monthError").hide()

    })

    const onRadioChange = (e) => {
        setStakeType(e.target.value)
        if (e.target.value === "lock") {
            setLockApy("200%")
        }
        if (e.target.value === "unlock") {
            setLockApy("0%")
        }
    }

    const stakeClick = async () => {
        var create_stake_url = process.env.REACT_APP_BASE_URL + "create_stake";
        console.log("create_stake_url", create_stake_url)

        if (stakeType == " " || isEmptyObject(stakeType)) {
            $("#typeError").show()
            return
        }

        if (token == " " || token == 0) {
            $("#tokenError").show()
            return
        }

        if (month == " " && stakeType == "unlock") {
            $("#monthError").show()
            return
        }

        console.log("tokenPrice", tokenPrice);

        // var tokensPrice = Web3.utils.toWei(tokenPrice.toString(), 'ether')
        // var bntokensPrice = Web3.utils.toBN(tokensPrice)
        // console.log("bntokensPrice",bntokensPrice);

        const tokenEthe = Web3.utils.fromWei(tokenPrice, 'ether');
        console.log("etherValue", tokenEthe);


        var token_price = 0.0001

        var stake_type
        if (stakeType === "lock") {
            stake_type = 1
            month = 0
        }
        if (stakeType === "unlock") {
            stake_type = 0
        }

        // var TokenAmount = token * token_price + 0.05
        var TokenAmount = token * tokenEthe + 0.05

        var tokens = Web3.utils.toWei(TokenAmount.toString(), 'ether')
        var bntokens = Web3.utils.toBN(tokens)

        var stakeInfo = {
            wallet_address: wallet_adderess,
            stake_type: stakeType,
            amount: TokenAmount,
            month: month,
            token: token
        }
        setLoader(true)
        stakingABiWthiCONTRACT.methods.createStake(token, month, stake_type)
            .send(
                {
                    from: wallet_adderess,
                    value: bntokens
                }
            )
            .on('error', function (error) {
                console.log("error", error)
            }).then(async function (info) {
                console.log('success ', info);
                // setLoader(false)
                console.log("stakeInfo", stakeInfo)
                var create_stake = await axios.post(create_stake_url, stakeInfo)
                console.log("create_stake", create_stake)
                setLoader(false)
                if (create_stake.status === 200) {
                    toast.success('🦄 Stak created!', {
                        position: "top-right",
                        theme: "colored",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    window.location.reload();
                }
                // Navigate("/unStake")
            }).catch((err) => {
                console.log('eror ', err);
            })
    }

    useEffect(() => {
        // kycDetail()
        console.log("Reload")
        if (wallet_adderess != null || wallet_adderess != undefined) {
            stakingABiWthiCONTRACT.methods.stakes(wallet_adderess)
                .call({ from: wallet_adderess })
                .then(async function (info) {
                    console.log('success ', info);
                    var user_token = info.token;
                    setUserStakerToken(user_token)
                    console.log('user_token ', user_token);
                }).catch((err) => {
                    console.log('eror ', err);
                })

            stakingABiWthiCONTRACT.methods.totalTokenStaked()
                .call()
                .then(async function (info) {
                    console.log('success_token ', info);
                    var total_token = info;
                    setTotal_TokenStaked(total_token)
                    // setUserStakerToken(user_token)
                    console.log('total_token ', total_token);
                }).catch((err) => {
                    console.log('eror ', err);
                })
        }

    }, [])

    useEffect(() => {
        // kycDetail()
        console.log("Reload")
        stakingABiWthiCONTRACT.methods.tokenPrice()
            .call({ from: wallet_adderess })
            .then(async function (info) {
                var tokenPrice = info;
                console.log('tokenPrice_success ', info);
                setTokenPrice(tokenPrice)
                // console.log('user_token ',user_token);
            }).catch((err) => {
                console.log('eror ', err);
            })

    }, [])




    return (
        <>
            <StakeHeader />
            <div className="staking_cards">
                <div className='stake_loader' style={stateLoader ? { display: "flex", flexDirection: "column" } : { display: "none" }}>
                    <Spinner animation="border" />
                    <p>Please Wait while Transaction is in progress.</p>
                </div>
                <div className="staking_section">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={6} md={7}>
                                <div className="staking_title">Stake (GoBuy)</div>
                                {/* <div className="staking_subTitle">Stake <span>BSC</span> and receive st<span>BSC</span> while staking.</div> */}
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
                                                value="unlock"
                                                name="stakeType"
                                                onChange={onRadioChange}
                                            />
                                            <label className="form-check-label">
                                                Unlock
                                            </label>
                                        </div>
                                    </div>
                                    <p className='error' id='typeError'>Select Stake Type</p>

                                    <div className="amount_div">
                                        <input type="number" min={0} value={token} className='form-control validate' placeholder='Enter Token' pattern="[0-9]*" onChange={(e) => { setToken(e.target.value) }} />
                                        <div className="max_div">Max</div>
                                    </div>
                                    <p className='error' id='tokenError'>Token Field is Required</p>
                                    {stakeType === "unlock" ?
                                        <div className="month_dropdown mt-4">
                                            <Form.Select aria-label="Default select example" onChange={
                                                (e) => {
                                                    setMonth(e.target.value)
                                                    if (e.target.value === "1") {
                                                        setLockApy("400%")
                                                    }
                                                    if (e.target.value === "3") {
                                                        setLockApy("800%")
                                                    }
                                                    if (e.target.value === "12") {
                                                        setLockApy("2000%")
                                                    }
                                                }
                                            } className="validate">
                                                <option value="">Select Stake Duration</option>
                                                <option value="1">1 Month</option>
                                                <option value="3">3 Month</option>
                                                <option value="12">12 Month</option>
                                            </Form.Select>
                                        </div>
                                        : " "}

                                    {stakeType === "unlock" ? <p className='error' id='monthError'>Select Month</p> : " "}

                                    <div className="connect_btn d-grid mb-3 mt-4">
                                        <button className='btn connect_wallet_btn' onClick={stakeClick}>Stake</button>

                                    </div>

                                    <div className="token_details">
                                        <div className="token1">
                                            <div className='left_div'>Your Reward</div>
                                            <div className="right_div">0 BNB</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Transaction cost</div>
                                            <div className="right_div">10%</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Reward fee <BiHelpCircle className='help_icon' /></div>
                                            <div className="right_div">5%</div>
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
                                    <div className="view_bscScan"><a href="https://testnet.bscscan.com/address/0x9add0d1091ea8b986264692442e8527c522e5cdf" target="_blank">View on BSCscan</a></div>
                                </div>
                                <div className="statistics_container">
                                    <div className="token_details">
                                        <div className="token1">
                                            <div className='left_div'>APY<BiHelpCircle className='help_icon' /></div>
                                            <div className="right_div grin">{lockApy}</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Total staked with Token 2</div>
                                            <div className="right_div">{total_TokenStaked}</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Stakers</div>
                                            <div className="right_div user_staker">{user_token}</div>
                                        </div>
                                        <div className="token1">
                                            <div className='left_div'>Market cap</div>
                                            <div className="right_div">0</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </>
    )
}

export default StakingToken2