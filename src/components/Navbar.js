import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/readme">Readme</Link></li>

        </ul>
      </nav>
    )
  }
}

export default Navbar;