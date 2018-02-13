import React from 'react';
import { Col } from 'react-materialize';

import Raport from '@components/Raport';

const Raports = props => {
    return (
        <Col s={8} className='grid-example'>
            <div className="prettier">
                <h5>List of reports</h5>
                <hr />
                
                {/* { 
                    props.raportsList.map((eachRaport, index) => {
                        return <Raport key={index} raport={eachRaport} />
                    })
                } */}
            </div>
        </Col>
    )
}

export default Raports;