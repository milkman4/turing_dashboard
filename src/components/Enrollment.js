import React, { Component } from 'react';
import EnrollmentPie from './EnrollmentPie.js'
import {fakeEnrollData} from '../fakeData/fakeEnrollmentData.js'


class Enrollment extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: fakeEnrollData
    };
  }
  componentDidMount(){
    fetch('http://enroll-staging.turing.io/api/v1/cohorts/upcoming')
      .then(response => response.json())
      .then(response =>{
        console.log(response);
        this.setState({
          data: response
        })
      })
      .catch(error => {
        console.log('shiiit');
      })
  }
  addStudent(){
    // let newState = [{
    //   cohortID: this.state.data[0].cohortID,
    //   startDate: this.state.data[0].startDate,
    //   totalRequired: this.state.data[0].frontend.totalRequired,
    //   totalEnrolled: this.state.data[0].frontend.totalEnrolled + 1,
    //   }
    // ]
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
      programID: cohort.program_id === 1 ? 'Back-end' : 'Front-End',
      startDate: cohort.start_date,
      cohort: cohort.section_name
      }
    })
    return (
      <div className="enrollment-container">
        {/* <button onClick={()=>this.addStudent()}>Add Student</button> */}
        <EnrollmentPie data={pieData[0]}/>
        <EnrollmentPie data={pieData[1]}/>
        <EnrollmentPie data={pieData[2]}/>
        <EnrollmentPie data={pieData[3]}/>
        <EnrollmentPie data={pieData[4]}/>
        <EnrollmentPie data={pieData[5]}/>
      </div>
    );
  }
}

export default Enrollment;
