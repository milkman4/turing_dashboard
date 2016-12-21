import React from 'react'
import {Link} from 'react-router'

const Nav = () => {
  return (
    <div className="Navigation">
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/enrollment">Enrollments</Link></li>
      </ul>
    </div>
  )
}

export default Nav;
