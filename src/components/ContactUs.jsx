import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import contact from '../assets/images/contact.png'
function ContactUs() {
  return (
    <>
        <div className="contactUs_section" id='contact-us'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="title">Contact Us</div>
                    </Col>
                </Row>
               <div className="contact_container">
               <Row className='justify-content-center'>
                    <Col lg={6} md={6}>
                       <div className="contact_img">
                           <img src={contact} alt="contactImg" className='img-fluid' />
                       </div>
                    </Col>
                    <Col lg={6} md={6}>
                       <div className="contact_form">
                          <div className="name_field mb-3">
                              <label htmlFor="">Name</label>
                              <input type="text" className='form-control' placeholder='Enter Your Name' />
                          </div>

                          <div className="email_field mb-3">
                              <label htmlFor="">Email</label>
                              <input type="email" className='form-control' placeholder='Enter Your Email' />
                          </div>

                          <div className="message_field mb-3">
                              <label htmlFor="">Message</label>
                              <textarea rows={6} className='form-control' placeholder='Enter Your Message'></textarea>
                          </div>

                          <div className="send_btn d-grid mb-3">
                              <button className='btn send'>SEND</button>
                          </div>
                       </div>
                    </Col>
                </Row>
               </div>
            </Container>
        </div>
    </>
  )
}

export default ContactUs