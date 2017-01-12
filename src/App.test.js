import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Landing from './components/Landing';
import Nav from './components/Nav';
import {MemoryRouter} from 'react-router'
import TestUtils from 'react-addons-test-utils'
import {mount, render, shallow} from 'enzyme';
import Enrollment from './components/Enrollment';
import {fakeEnrollData} from './fakeData/fakeEnrollmentData.js'

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('Landing renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
});

it('renders the nav', function() {
  const navigator = mount(<MemoryRouter><Nav /></MemoryRouter>)
  let finder = navigator.find('.Navigation')
  expect(finder.length).toEqual(1)
})

describe('enrollment page tests', ()=>{
  it('Enrollment renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Enrollment testing={true}/>, div);
  });

  const enrollment = mount(<Enrollment testing={true}/>)

  it('renders one enrollment container', ()=>{
    let container = enrollment.find('.enrollment-container')
    expect(container).toHaveLength(1)
  })

  it('renders three cohort containers', () => {
    let container = enrollment.find('.enrollment-cohort-container')
    expect(container).toHaveLength(3)
  });

  it('renders 6 pie chart containers', () => {
    let container = enrollment.find('.pie-chart')
    expect(container).toHaveLength(6)

  });

  it('renders 12 pie chart labels', () => {
    let container = enrollment.find('.pie-label')
    expect(container).toHaveLength(12)
  });

})
