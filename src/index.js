import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Nav from './components/Nav';
import Enrollment from './components/Enrollment';
import './style/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

const Root = ()=>{
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <main>
          <Match exactly pattern="/" component={App} />
          <Match exactly pattern="/enrollment" component={Enrollment}/>
          {/* <Miss component = {NotFound} /> */}
        </main>
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
