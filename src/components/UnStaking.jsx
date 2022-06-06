import React, { useEffect, useState } from 'react'
import StakeHeader from '../common/StakeHeader'
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap'
import Footer from '../common/Footer';
import axios from 'axios';
import { CONTACT_ADDRESS, Abi } from '../contract/staking_Farming _Token1';
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const web3_Stake = new Web3(window.ethereum);
const stakingABiWthiCONTRACT = new web3_Stake.eth.Contract(Abi, CONTACT_ADDRESS);

function UnStaking() {

    //  =========unStake modal details=========
    const [showUnStake, setShowUnStake] = useState(false);
    const handleCloseUnStake = () => setShowUnStake(false);
    const [stakelist, setstakelist] = useState([]);
    const [unStake, setUnstak] = useState([])
    var [stateLoader, setLoader] = useState(false);

    const wallet_adderess = sessionStorage.getItem("loginUserAdd")

    // ==========================  Function for  handleShowUnStake ============
    const handleShowUnStake = async (id) => {
        try {
            console.log("id", id)
            var data = await axios.get(` http://148.72.244.170:4000/stake_by_id?id=${id}`)
            // console.log("datasssssss",data.data.data)
            setUnstak(data.data.data)
            setShowUnStake(true);

        } catch (err) {
            console.log(err)
        }
    }
    //  ======= function for stake list =======
    const stack = async () => {
        try {
            console.log("wallet_adderess", wallet_adderess)
            var data = await axios.post(`http://148.72.244.170:4000/total_stake?wallet_address=${wallet_adderess}`)
            console.log("data", data.data.data)
            console.log("status", data.data.data)
            setstakelist(data.data.data)

        } catch (err) {
            console.log(err)
        }
    }

    // ============================ Unstack ======================
    const unstake = async (id, token) => {
        console.log("id", id)
        console.log("token", token)
        var tokens = Web3.utils.toWei(token.toString(), 'ether')
        var bntokens = Web3.utils.toBN(tokens)
        console.log("bntokens", bntokens)

        var data = await axios.get(` http://148.72.244.170:4000/stake_by_id?id=${id}`)
        // console.log("dataaaa", data)

        var current_date = new Date()
        var end_date = new Date(data.data.data.end_date)
        console.log("current_date", current_date)
        console.log("end_date", end_date)

        if (current_date >= end_date) {
            console.log("ready to unstack")
            setLoader(true)
            stakingABiWthiCONTRACT.methods.removeStake(token)
                .send(
                    {
                        from: wallet_adderess,
                    }
                )
                .on('error', function (error) {
                    console.log("error", error)
                    setLoader(false)
                }).then(async function (info) {
                    console.log('success ', info);
                    var remove_stake = await axios.post(`http://148.72.244.170:4000/remove_stake?id=${id}`)
                    console.log("remove_stake", remove_stake.status)
                    setLoader(false)
                    if (remove_stake.status === 200) {
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
                }).catch((err) => {
                    console.log('eror ', err);
                    setLoader(false)
                })
        } else {
            setLoader(false)
            toast.error('Wait for staking period to over!', {
                position: "top-right",
                theme: "colored",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


        // stakingABiWthiCONTRACT.methods.removeStake(token)
        //     .send(
        //         {
        //             from: wallet_adderess,
        //         }
        //     )
        //     .on('error', function (error) {
        //         console.log("error", error)
        //     }).then(async function (info) {
        //         console.log('success ', info);
        //         var remove_stake = await axios.post(`http://localhost:4000/remove_stake?id=${id}`)
        //         console.log("remove_stake",remove_stake.status)
        //         if(remove_stake.status === 200){
        //             window.location.reload();
        //         }
        //     }).catch((err)=>{
        //         console.log('eror ', err);
        //     })
    }




    useEffect(() => {
        stack()
    }, [])

    return (
        <>
            <StakeHeader />
            <div className="unStaking_section">
                <div className='stake_loader' style={stateLoader ? { display: "flex" } : { display: "none" }}>
                    <Spinner animation="border" />
                </div>
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

                                        {stakelist.map((e) => {
                                            // console.log("e",e);
                                            var sd = e.start_date
                                            var start_date = new Date(sd).toDateString();
                                            var end_date = new Date(e.end_date).toDateString();
                                            return (
                                                <tr>
                                                    <td>{e.stake_type}</td>
                                                    <td>{e.token}</td>
                                                    <td>{start_date}</td>
                                                    <td>{end_date}</td>
                                                    <td>{e.status === 1
                                                        ?
                                                        <button className='unStake_btn' onClick={() => handleShowUnStake(e._id)}>Already Unstake</button>
                                                        :
                                                        <button className='unStake_btn' onClick={() => handleShowUnStake(e._id)}>Unstake</button>
                                                    }
                                                    </td>

                                                </tr>
                                            )
                                        })}


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
                                            <div className="title">Stack Type</div>
                                            <div className="text">{unStake.stake_type}</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">Token</div>
                                            <div className="text">{unStake.token}</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">Start Date</div>
                                            <div className="text">{new Date(unStake.start_date).toDateString()}</div>
                                        </div>
                                        <div className="unStake">
                                            <div className="title">End Date</div>
                                            <div className="text">{new Date(unStake.end_date).toDateString()}</div>
                                        </div>
                                        <div className="d-grid mt-3">
                                            {unStake.status === 0 ?
                                                <button className='unStake_connectWallet_btn' onClick={() => unstake(unStake._id, unStake.token)}>Unstake</button>
                                                :
                                                <div></div>
                                            }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Modal.Body>

            </Modal>
            {/* =========unStake modal details start========= */}

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
        </>
    )
}

export default UnStaking