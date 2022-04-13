import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutUs() {
    return (
        <div className='aboutUs_section'>

            <div className=" about_banner" id='about-us'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12} >
                            <div className="about_content py-5">
                                <div className="about_title">Who we are</div>
                            </div>
                        </Col>

                        <Col lg={10}>
                            <div className="about_text_container">
                                <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iure quod adipisci voluptates velit nostrum blanditiis in, quasi necessitatibus dolore nesciunt. Magni laborum </h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum, incidunt corrupti possimus quibusdam atque odit facere suscipit veniam culpa magni cum illo dicta similique voluptatibus doloremque sapiente asperiores? Sunt?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
          
        </div>
    )
}

export default AboutUs