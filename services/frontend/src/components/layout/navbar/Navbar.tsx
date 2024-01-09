import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-items">
          <li className="logo"><Link to="/">Embeding Sandbox</Link></li>
          <li><Link to="/EmbedSdk">Embed Sdk</Link></li>
          <li><Link to="/ComposeSdk">Compose Sdk</Link></li>
          {/* <li><Link to="/DataModels">Data Model</Link></li> */}
        </ul>
    </nav>
  )
}

export default Navbar