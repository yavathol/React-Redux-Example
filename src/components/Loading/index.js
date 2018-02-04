import React from 'react';

import { Row, Col, Preloader } from 'react-materialize';

import './index.css';

const Loading = () => {
    return (
        <Row>
            <Col s={4}>
                <Preloader size='big'/>
            </Col>
        </Row>
    )
}

export default Loading;

