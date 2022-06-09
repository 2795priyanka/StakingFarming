import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Navbar, Nav, Modal, Dropdown, NavItem, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Web3 from "web3";
import gochart from '../assets/images/gochart.png'
import crypto from '../assets/images/crypto.png'
import gochart_white from '../assets/images/gochart_white.png'
import crypto_white from '../assets/images/crypto_white.png'
const web3_Stake = new Web3(window.ethereum);
function StakeHeader() {
    // ========modal show=======
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [checkAddress, setcheckAddress] = useState("");
    const [walletAddress, setWalletAddress] = useState(null);
    const [lastFourDigitAddValue, setLastFourDigitAddValue] = useState(null);

    const networkChanged = (chainId) => {
        console.log("chainId", chainId);

        if (chainId == "0x61") {
            window.ethereum.enable().then((address) => {
                var loginUserAdd = address[0];
                sessionStorage.setItem("loginUserAdd", loginUserAdd);
            });

            window.location.reload();
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x61",
                    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
                    chainName: "BNB Testnet",
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://testnet.bscscan.com"]
                }]
            });

            window.ethereum.on("chainChanged", networkChanged);
        } else {
            // alert("Please install metamask")
            // console.log("not")
            setShow(true)
        }
    }, []);

    const [userAddress, setUserAddress] = useState();
    const [userAddFourDigit, setUserAddFourDigit] = useState();
    // function openMetamask() {
    //     if (window.ethereum) {
    //         window.ethereum.enable().then((address) => {
    //             var loginUserAdd = address[0];

    //             if (loginUserAdd) {
    //                 console.log("present");
    //             }
    //             setUserAddress(loginUserAdd)
    //             console.log("userAddress", userAddress);
    //             sessionStorage.setItem("loginUserAdd", loginUserAdd);
    //             let checkAddress = sessionStorage.getItem('loginUserAdd')
    //             setUserAddFourDigit(checkAddress.slice(38, checkAddress.length))
    //         });
    //     }
    // }

    useEffect(() => {
        // =============================== SHOW ADDRESS BY COOKIE ==============================================
        let checkAddress = sessionStorage.getItem('loginUserAdd')
        setcheckAddress(checkAddress)
        console.log("sessionStorage", checkAddress)
        if (checkAddress === null || checkAddress === undefined) {
            document.getElementById('connected').innerText = 'Connect Wallet'
        } else {
            setUserAddFourDigit(checkAddress.slice(38, checkAddress.length))
            document.getElementById('connected').innerText = 'Connected'
        }

    }, [userAddress]);

    if (!window.ethereum) {
        // alert("Please install MetaMask")
    } else {
        window.ethereum.on("accountsChanged", (e) => {
            console.log("meta");
            if (e.length < 1) {
                document.getElementById('connected').innerText = 'Connect Wallet'
                sessionStorage.removeItem('loginUserAdd')
                setcheckAddress(" ")
                setUserAddFourDigit(" ")
            }
        });
    }


    // ========================= metamask mobile ===========================

    // const [userMetaAddress, setUserMetaAddress] = useState("");

    // useEffect(() => {
    //     //   checkIfWalletIsConnected(setUserMetaAddress);
    // }, []);

    function openMetamask() {
        checkIfWalletIsConnected();
        // alert("clicked")
        // alert("userMetaAddress outside", userMetaAddress);
        // if (userMetaAddress.length > 0) {
        //     alert("userMetaAddress inside", userMetaAddress);
        // }
    }

    async function checkIfWalletIsConnected() {
        // if (window.ethereum) {
        //   const accounts = await window.ethereum.request({
        //     method: "eth_accounts",
        //   });

        //   if (accounts.length > 0) {
        //     const account = accounts[0];
        //     onConnected(account);
        //     return;
        //   }

        //   if (isMobileDevice()) {
        //     await connect(onConnected);
        //   }
        // }
        // else{
        //     alert("install metamask")
        //     const dappUrl = "https://bharattoken.org/staking_farming/stakeToken1"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
        //     const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        //     window.location.href = metamaskAppDeepLink;
        // }
        // ================================== custom code ===================================
        // console.log("entered");
        // alert("entered")
        if (!window.ethereum) {
            // console.log("No Metamask available");
            // alert("No Metamask available")
            // check mobile device 
            if (isMobileDevice()) {
                // alert("mobile available1")
                const dappUrl = "https://bharattoken.org/staking_farming/stakeToken1"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
                const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
                window.location.href = metamaskAppDeepLink;
                // await connect(onConnected);
            }
        } else {
            // console.log("Metamask available");
            // alert("Metamask available")
            if (window.ethereum) {
                window.ethereum.enable().then((address) => {
                    var loginUserAdd = address[0];

                    if (loginUserAdd) {
                        console.log("present");
                    }
                    setUserAddress(loginUserAdd)
                    console.log("userAddress", userAddress);
                    sessionStorage.setItem("loginUserAdd", loginUserAdd);
                    let checkAddress = sessionStorage.getItem('loginUserAdd')
                    setUserAddFourDigit(checkAddress.slice(38, checkAddress.length))
                });
            }
        }
    }

    function isMobileDevice() {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    }

    // async function connect(onConnected) {
    //     if (!window.ethereum) {
    //         alert("Get MetaMask!");
    //         return;
    //     }

    //     const accounts = await window.ethereum.request({
    //         method: "eth_requestAccounts",
    //     });

    //     alert("accounts", accounts)

    //     onConnected(accounts[0]);
    // }

    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col lg={12} md={12} className="px-0">
                            <Navbar collapseOnSelect expand="lg"  >
                                <Container>
                                    <Navbar.Brand><Link to="/" className='stakeLogo'>
                                    <img src={crypto_white} alt="logo" className='img-fluid' style={{ width: "60px" }} />
                                        <img src={gochart_white} alt="logo" className='img-fluid' style={{ width: "60px", marginLeft: "-10px" }} />
                                        </Link></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="m-auto">
                                            {/* <Nav.Link ><Link to="/">Stake</Link></Nav.Link> */}
                                            <Dropdown as={NavItem}>
                                                <Dropdown.Toggle as={NavLink}>Stake</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link className='dropdown-item' to="/stakeToken1">  <img src={gochart} alt="logo" className='img-fluid' style={{ width: "50px", borderRadius:"50%" }} />&nbsp;&nbsp;GoStake </Link>
                                                    <Link className='dropdown-item' to="/stakeToken2"><img src={crypto} alt="logo" className='img-fluid' style={{ width: "50px", borderRadius:"50%" }} />&nbsp;&nbsp;GoBuy </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Nav.Link ><Link to="/unStake">Unstake</Link></Nav.Link>
                                            <Nav.Link to="/staking">Reward</Nav.Link>

                                        </Nav>
                                        <Nav className='align-items-center'>
                                            <span className="walletAddress_txt" style={{ color: 'white' }}>{checkAddress}</span> <span style={{ color: 'white' }}>{userAddFourDigit}</span>
                                            <Nav.Link to="/staking" onClick={openMetamask} className='stake_btn' id="connected" style={{ cursor: 'pointer' }}>Connect Wallet</Nav.Link>
                                            {/* <button id="connected" style={{ cursor: 'pointer' }} onClick={openMetaMask} className="cont_wlt">Connect Wallet</button> */}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>How to Install and Use Metamask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 1:</b> Go to Chrome Web Store Extensions Section.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 2:</b> Search MetaMask.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 3:</b> Check the number of downloads to make sure that the legitimate MetaMask is being installed, as hackers might try to make clones of it.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 4:</b> Click the Add to Chrome button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 5:</b> Once installation is complete this page will be displayed. Click on the Get Started button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 6:</b> This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 7:</b> Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 8:</b> Create a password for your wallet. This password is to be entered every time the browser is launched and wants to use MetaMask. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. In that case, go through the Import Wallet button. This is because MetaMask stores the keys in the browser. Agree to Terms of Use.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 9:</b> Click on the dark area which says Click here to reveal secret words to get your secret phrase. </p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 10:</b> This is the most important step. Back up your secret phrase properly. Do not store your secret phrase on your computer. Please read everything on this screen until you understand it completely before proceeding. The secret phrase is the only way to access your wallet if you forget your password. Once done click the Next button. </p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 11:</b> Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on the screen. If done correctly the Confirm button should turn blue.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 12:</b> Click the Confirm button. Please follow the tips mentioned.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 13:</b> One can see the balance and copy the address of the account by clicking on the Account 1 area.</p>
                    <p class="mx-4" style={{ color: "black" }}> <b>Step 14:</b> One can access MetaMask in the browser by clicking the Foxface icon on the top right. If the Foxface icon is not visible, then click on the puzzle piece icon right next to it.</p>
                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default StakeHeader