import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Nav from './components/Nav';
import Enrollment from './components/Enrollment';
import './style/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

const Root = ()=>{
  console.log("WOO HOO =) heroku woo!!");
  return (
    <BrowserRouter>
      <div>
        <h1>WOOOOOOO!!!!!!!!!! im on the internet</h1>
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
