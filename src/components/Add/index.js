import React, { Component } from 'react';

import { Col, Button } from 'react-materialize';

import './index.css';

class Add extends Component {
    render () {
        return (
            <Col s={4} className='grid-example prettier'>
                <div className="prettier">
                    <h5>Add new comparison</h5>
                    <hr />
                    <div>
                        <p>First currency: <span className="bold">USD</span></p>
                        <p>Second currency: <span className="bold">CHD</span></p>
                    </div>
                    <Button>Add</Button>
                </div>
            </Col>
        )
    }
}

export default Add;