import React from 'react'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function LayerCard(props) {
    return (
        <>
           
                    <Col lg={3} md={4} className="py-4 stake_layer">
                        <Link to={props.path}>
                        <div className="layerCard_section">
                            <div className="token_label">Testnet</div>
                            <div className="token_name"><img src={props.img} className="img-fluid" alt='img' style={{ width: "50px", borderRadius:"50%" }}></img>{props.token}</div>
                            <div className="tagline">
                                <div className="validator">Validator</div>
                                <div className="stake"> BsC</div>

                            </div>
                        </div></Link>
                    </Col>
           

        </>
    )
}

export default LayerCard