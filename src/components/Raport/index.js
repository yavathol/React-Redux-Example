import React from 'react';

const Raport = props => {
    return (
        <div className="single-raport">
            <h6>
                Raport for convertion from 
                    <span className="bold"> {props.report.firstCurrency} </span>
                    to 
                    <span className="bold"> {props.report.secondCurrency} </span>
            </h6>
            <h5>Rate: <span className="bold">{props.report.rate}</span></h5>
            <p>Created at: {new Date(props.raport.created).toString()}</p>
        </div>
    )
}

export default Raport;