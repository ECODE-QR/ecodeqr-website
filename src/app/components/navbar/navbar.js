'use client';

import React, { useState } from 'react';
import './navbar.css';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div>{isOpen ? 'X' : '☰'}</div>
        </div>
        <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
          {isOpen && (
            <li className="close-btn" onClick={() => setIsOpen(false)}>
              X
            </li>
          )}
          <li className="navbar-item"><Link href='https://ecodeofficial.com/'>Home</Link></li>
          <li className="navbar-item"><Link href='/story1'>Story 1</Link></li>
          <li className="navbar-item"><Link href='/story2'>Story 2</Link></li>
          <li className="navbar-item"><Link href='/story3'>Story 3</Link></li>
          <li className="navbar-item"><Link href='/story4'>Story 4</Link></li>
          <li className="navbar-item"><Link href='/story5'>Story 5</Link></li>
        </ul>
      </div>
    </nav>
  );
}
