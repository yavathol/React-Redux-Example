import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Add from '@containers/Add';
import Reports from '@containers/Reports';

import './index.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <Add />
                    <Reports />
                </Row>
            </div>
        )
    }
}
  
export default Main;