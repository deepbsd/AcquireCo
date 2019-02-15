import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/main';
import './App.css';

import Header from './components/header';



class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="Header">
               <Header  />
            </div>
            <Main />
          </div>
        </Router>
    );
  }
}

export default App;
