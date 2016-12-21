import React, { Component } from 'react';
import {VictoryPie} from 'victory';
import PieLabel from './PieLabel.js'

class EnrollmentPie extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: props.data
    };
  }
  render() {
    return (
        <div className="pie-chart">
          <VictoryPie
            data={this.props.data.counts}
            height={400}
            x="label"
            y="count"
            padding={50}
            innerRadius={60}
            style={{
              data: {
                fill: (d) => {
                  return d.x == 1 ? "#05BACB" : "lightgrey"
                  }
              },
              labels: {
                fontSize: 12
              },
              }
            }
            animate={
              {
                duration: 500,
                easing: "poly",
              }
            }
            labelComponent = {<PieLabel/>}
          />
          <div>
            <p>{this.props.data.cohort}</p>
            <p>{this.props.data.programID}</p>
            <p>Start Date: {this.props.data.startDate}</p>
          </div>
        </div>
    );
  }
}

export default EnrollmentPie;
