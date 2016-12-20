import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Nav from './components/Nav';
import Enrollment from './components/Enrollment';
import './style/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

const Root = ()=>{
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/availability" component={Enrollment}/>
        {/* <Miss component = {NotFound} /> */}
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
