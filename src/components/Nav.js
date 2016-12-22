import React from 'react'
import {Link} from 'react-router'
import turinglogo from '../imgs/turing-logowheel.png'

const Nav = () => {
  return (
    <div className="Navigation">
      <Link className="turing-logo-link" to="/"><img className="turing-logo" src={turinglogo}/></Link>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/enrollment">Enrollments</Link></li>
      </ul>
    </div>
  )
}

export default Nav;
