import React, { Component } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Main from '@components/Main';

import { Provider } from 'react-redux';

import './App.css';

import configureStore from '@store/configureStore';

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
