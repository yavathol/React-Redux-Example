import React, { Component } from 'react';
import { Row } from 'react-materialize';

/**/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Add from '@components/Add';
import Raports from '@components/Raports';
import { ActionCreators } from '@actions';

import './index.css';

class Main extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

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

const mapStateToProps = state => {
    return {
      reports: state.reports
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);