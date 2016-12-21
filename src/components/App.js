import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/index.css';
import {fakeEnrollData} from '../fakeData/fakeEnrollmentData.js'
import Enrollment from './Enrollment.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2>Welcome to The Turing Dashboard</h2>
      </div>
    );
  }
}

export default App;
