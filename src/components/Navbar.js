import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Navlinks from '../navlinks';

class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    console.log('toggle ran')
                            // toggles the isOpen value to the opposite of what it is in the state - true becomes false, false becomes true
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
            {Navlinks.map((data, index) => {
                // console.log(data);
             return (
                    <li key={index}>
                         <Link to={data.path}>{data.text}</Link>
                     </li>
                  )
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;