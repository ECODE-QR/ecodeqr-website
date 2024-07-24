import React from 'react';
import './navbar.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar nav-container">
      <input type="checkbox" className="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
      <ul className="menu-items">
        <li className="navbar-item"><Link href='https://ecodeofficial.com/'>Home</Link></li>
        <li className="navbar-item"><Link href='/story1'>Story 1</Link></li>
        <li className="navbar-item"><Link href='/story2'>Story 2</Link></li>
        <li className="navbar-item"><Link href='/story3'>Story 3</Link></li>
        <li className="navbar-item"><Link href='/story4'>Story 4</Link></li>
        <li className="navbar-item"><Link href='/story5'>Story 5</Link></li>
      </ul>
    </nav>
  );
}
