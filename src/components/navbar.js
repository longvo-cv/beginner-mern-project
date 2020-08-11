import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
        <Link to='/' className='navbar-brand'>
          FitnessPlanning
        </Link>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                Exercises
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>
                New exercise
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/user' className='nav-link'>
                New user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
