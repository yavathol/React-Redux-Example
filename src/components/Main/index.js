import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Add from '@components/Add';
import Raports from '@components/Raports';

import './index.css';

class Main extends Component {
    render() {
        return (
            <Row>
                <Add />
                <Raports raportsList={[]} />
            </Row>
        )
    }
}

export default Main;