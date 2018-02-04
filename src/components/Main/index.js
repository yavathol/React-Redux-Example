import React, { Component } from 'react';
import { Row } from 'react-materialize';

import Add from '@components/Add';
import Raports from '@components/Raports';
import extendObject from '@lib/extendObject';
import fetch from 'node-fetch';

import './index.css';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            currenciesRaports: [],
            fetchingData: false
        }
    }

    toggleLoadingState() {
        this.setState({
            fetchingData: !this.state.fetchingData
        })
    }

    addNewCurrencyReport(curr) {        
        this.toggleLoadingState();
        fetch(`https://api.fixer.io/latest?base=${curr.firstCurrency}`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    currenciesRaports: this.state.currenciesRaports.concat(
                        extendObject(curr, {
                            "created": Date.now(),
                            "rate": data.rates[curr.secondCurrency]
                        })
                    )
                })
                this.toggleLoadingState();
            });


    }

    render() {
        return (
            <div className="main">
                <Row>
                    <Add addNewCurrencyReport={this.addNewCurrencyReport.bind(this)}/>
                    <Raports
                        fetchingData={this.state.fetchingData}
                        raportsList={this.state.currenciesRaports} />
                </Row>
            </div>
        )
    }
}

export default Main;