import React, { Component } from 'react';

import { Col, Button } from 'react-materialize';
import * as constants from '@constants/Generic';

import './index.css';

class Add extends Component {
    constructor(props) {
        super(props);

        this.firstCurrency = constants.FIRST_CURRENCY;
        this.secondCurrency = constants.SECOND_CURRENCY;
    }

    render () {
        return (
            <Col s={4} className='grid-example prettier'>
                <div className="prettier">
                    <h5>Add new comparison</h5>
                    <hr />
                    <div>
                        <p>First currency: <span className="bold">{this.firstCurrency}</span></p>
                        <p>Second currency: <span className="bold">{this.secondCurrency}</span></p>
                    </div>
                    <Button >Add</Button>
                </div>
            </Col>
        )
    }
}

export default Add;