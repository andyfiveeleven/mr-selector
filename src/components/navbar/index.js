import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

class Navbar extends React.Component {
  render(){
    return(
      <header className='navbar'>

        <div className='logo'>
          <h1> Mr Selector</h1>
        </div>

        <div className='nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Navbar;
