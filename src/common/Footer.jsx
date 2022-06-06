import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer_section">
        <Container>
          <Row className="px-50">
            <Col lg={4} md={4}>
              <div className="stake_network">
                <div className="head">Stake Network</div>
                <div className="mt-3">
                  <p>
                    <Link to="/stakeToken1" className="stakeLink">
                      Stake (GoStake)
                    </Link>
                  </p>
                  <p>
                    <Link to="/stakeToken2" className="stakeLink">
                      Stake (GoBuy)
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={3}>
              <div className="company">
                <div className="head">Company</div>
                <div className="mt-3">
                  <p>
                    <a href="#about-us" className="companyLink">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="#how_it_works" className="companyLink">
                      How it works
                    </a>
                  </p>
                  <p>
                    <a href="#contact-us" className="companyLink">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="#faq" className="companyLink">
                      Faq
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="follow_us">
                <div className="head">Follow Us</div>
                <div className="socialLinks">
                  <div className="links">
                    <a href="#">
                      <FaFacebookF className="icon" />
                    </a>
                  </div>
                  <div className="links">
                    <a href="#">
                      <AiFillInstagram className="icon" />
                    </a>
                  </div>
                  <div className="links">
                    <a href="#">
                      <BsTwitter className="icon" />
                    </a>
                  </div>
                  <div className="links">
                    <a href="#">
                      <BsYoutube className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <hr></hr>
        </Container>
        <div className="bottom_footer">
          <Container>
            <Row className="px-50">
              <Col lg={7} md={7}>
                <div className="footer_logo">
                  Staking <br></br>Farming
                </div>
              </Col>
              <Col lg={5} md={5}>
                <div className="bottom_footer_right">
                  <p>
                    <a href="#">Privacy Policy</a>
                  </p>
                  <p>
                    <a href="#">Terms</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Footer;
