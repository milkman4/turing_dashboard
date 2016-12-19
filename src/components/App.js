import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import {fakeEnrollData} from '../fakeData/fakeEnrollmentData.js'
import Enrollment from './Enrollment.js'

class App extends Component {
  render() {
    console.log(fakeEnrollData);
    return (
      <div className="App">
        {/* <Nav/> */}
        <Enrollment
          data={fakeEnrollData}
        />
      </div>
    );
  }
}

export default App;
