import React, { Component } from 'react';
import { Col } from 'react-materialize';

import Raport from '@components/Raport';

class Raports extends Component {
    renderListOfReports() {
        return (            
            <div className="prettier">
                <h5>List of reports</h5>
                <hr />
                
                {!this.props.raportsList.length ? 
                    <p>Nothing to display yet.</p>
                    :
                    this.props.raportsList.map((eachRaport, index) => {
                        return <Raport key={index} report={eachRaport} />
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <Col s={8} className='grid-example'>
                {this.renderListOfReports()}
            </Col>
        )
    }
}

export default Raports;