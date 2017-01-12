import React, { Component } from 'react';
import turinglogo from '../imgs/turing-logo.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import '../style/index.css';

class Landing extends Component {

  render() {
    return (
      <div className="Landing">
        <ReactCSSTransitionGroup
        transitionName="landing-animation"
        transitionEnterTimeout={3000}
        transitionLeaveTimeout={3000}
        transitionAppear={true}
        transitionAppearTimeout={2200}>
          <h2>Welcome to Dashboard.</h2>
          <img className="landing-logo" src={turinglogo}/>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default Landing;
