import React, { Component } from 'react';
import CohortContainer from './CohortContainer.js'
import {fakeEnrollData} from '../fakeData/fakeEnrollmentData.js'


class Enrollment extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: fakeEnrollData
    };
  }
  componentDidMount(){
    fetch('https://enroll-staging.turing.io/api/v1/cohorts/upcoming')
      .then(response => response.json())
      .then(response =>{
        console.log(response);
        this.setState({
          data: response
          // data: fakeEnrollData
        })
      })
      .catch(error => {
        console.log('shiiit');
      })
  }
  addStudent(){
    let newState = this.state.data.map((cohort)=>{
      return ({
        cohortID: cohort.cohortID,
        startDate: cohort.startDate,
        totalRequired: cohort.total_required,
        totalEnrolled: cohort.total_enrolled + 1
      })
    })

    this.setState({
      data: newState
    })
  }
  render() {
    let pieData = this.state.data.map((cohort)=>{
      return {
        counts:[{
          count: cohort.total_enrolled,
          label: `${cohort.total_enrolled}`
        },
        {
          count: cohort.total_required - cohort.total_enrolled,
          label: `${cohort.total_required - cohort.total_enrolled}`
        }
      ],
      programID: cohort.program_id === 1 ? 'Back End' : 'Front End',
      startDate: cohort.start_date,
      cohort: cohort.section_name
      }
    })
    return (
      <div>
        <div className="enrollment-key">
          <div className="filled">Filled</div>
          <div className="open">Open</div>
        </div>
      <div>
        <div className="enrollment-container">
          <CohortContainer cohort1={pieData[0]} cohort2={pieData[1]}/>
          <CohortContainer cohort1={pieData[2]} cohort2={pieData[3]}/>
          <CohortContainer cohort1={pieData[4]} cohort2={pieData[5]}/>
        </div>
      </div>
      </div>
    );
  }
}

export default Enrollment;
