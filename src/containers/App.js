import React, { Component } from 'react';
/**/
import { Provider } from 'react-redux';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Main from '@components/Main';

/**/
import { configureStore } from '@lib/configureStore';

import './App.css';

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
