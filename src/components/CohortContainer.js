import React, { Component } from 'react';
import EnrollmentPie from './EnrollmentPie.js'
import {fakeEnrollData} from '../fakeData/fakeEnrollmentData.js'

class CohortContainer extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: fakeEnrollData
    };
  }

  render(){
    return (
      <div className="enrollment-cohort-container">
        <h4 className="cohort-container-header">
          {this.props.cohort1.cohort}
        </h4>
          <EnrollmentPie data={this.props.cohort1}/>
          <EnrollmentPie data={this.props.cohort2}/>
        <p className="pie-date">Start Date: {this.props.cohort1.startDate}</p>
      </div>
    )
  }
}

export default CohortContainer;
