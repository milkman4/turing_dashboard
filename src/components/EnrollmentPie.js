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
            data={this.props.data}
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
            // events={[
            //   {
            //     target: "data",
            //     eventHandlers: {
            //       onMouseOver: () => {
            //         return [{
            //           mutation: (props) => {
            //             console.log(props);
            //
            //             return {
            //               style: Object.assign({}, props.style, {fill: "tomato", lastFill: props.style.fill})
            //             }
            //           }
            //         }];
            //       },
            //       onMouseOut: () => {
            //         return [{
            //           mutation: (props) =>{
            //             return {
            //               style: Object.assign({}, props.style, {fill: props.style.lastFill})
            //             }
            //           }
            //         }]
            //       }
            //     }
            //   }
            // ]}
            labelComponent = {<PieLabel/>}
          />
        </div>
    );
  }
}

export default EnrollmentPie;
