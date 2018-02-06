import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Main from '@containers/Main';

import { configureStore } from '@lib/configureStore';

import './index.css';

class App extends Component {
	render() {
    	return (
      		<Provider store={configureStore({})}>
        		<div className="App">
					<Header />
					<Main />
					<Footer />
        		</div>
      		</Provider>
    	);
  	}
}

export default App;
