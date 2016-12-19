import React, { Component } from 'react';

class PieLabel extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: props.data
    };
  }

  render(){
    let displayText = Math.ceil(+this.props.text)
    console.log("omg rerender!!!");

    return (
      <text x={this.props.x} y={this.props.y}>
        <tspan className="pie-label">
          {displayText}
        </tspan>
      </text>
    )
  }
}

{/* <text dx="0" dy="-1.7400000000000002" x="70.53423027509677" y="-97.0820393249937" text-anchor="middle" style="fill: rgb(37, 37, 37); font-size: 12px; font-family: &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, Ser­avek, &quot;Trebuchet MS&quot;, sans-serif; stroke: transparent; padding: 20px; letter-spacing: normal;"><tspan x="null" dx="0">5</tspan></text> */}

export default PieLabel;
