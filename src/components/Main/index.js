import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Add from '@containers/Add';
import Raports from '@components/Raports';

import './index.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <Add />
                    <Raports raportsList={[]} />
                </Row>
            </div>
        )
    }
}
  
export default Main;