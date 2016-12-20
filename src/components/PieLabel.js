import React, { Component } from 'react';

class PieLabel extends Component {
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

export default PieLabel;
