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
  //componentDidMount(){
    //hit API
    //save data from enroll
  //}
  addStudent(){
    console.log(this.state.data);
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
        totalRequired: cohort.totalRequired,
        totalEnrolled: cohort.totalEnrolled + 1
      })
    })

    this.setState({
      data: newState
    })
  }
  render() {
    let pieData = this.state.data.map((cohort)=>{
      return [{
          count: cohort.totalEnrolled,
          label: `${cohort.totalEnrolled}`
        },
        {
          count: cohort.totalRequired - cohort.totalEnrolled,
          label: `${cohort.totalRequired - cohort.totalEnrolled}`
        }
      ]
    })
    return (
      <div className="enrollment-container">
        <button onClick={()=>this.addStudent()}>Add Student</button>
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
