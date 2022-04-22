import React from 'react'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function LayerCard(props) {
    return (
        <>
           
                    <Col lg={3} md={4} className="py-4 stake_layer">
                        <Link to="/stake">
                        <div className="layerCard_section">
                            <div className="token_label">Testnet</div>
                            <div className="token_name">{props.token}</div>
                            <div className="tagline">
                                <div className="validator">Validator</div>
                                <div className="stake">stake BsC</div>

                            </div>
                        </div></Link>
                    </Col>
           

        </>
    )
}

export default LayerCard