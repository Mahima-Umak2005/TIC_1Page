import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/The Idea Company.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`topnav sot-header ${isMenuOpen ? 'responsive' : ''}`} id="myTopnav">
      <a href="/" className="active">
        <img src={logo} alt="School of Entrepreneurs" className="sot-logo" />
      </a>
      <a href="#thinkers-club">Thinkers Club</a>
      <a href="#investors-table-details">Investors Table</a>
      <a href="#community-details">Thinkers Community</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
      <a href="#login" className="sot-btn" style={{ float: 'right', margin: '10px' }}>
        LOG IN
      </a>
    </div>
  );
};

export default Header;