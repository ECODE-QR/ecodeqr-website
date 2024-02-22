import React from 'react'
import './navbar.css'
import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="navbar orbitron">
        <ul className="navbar-list">
          <li className="navbar-item"><Link href='#'>Home</Link></li>
          <li className="navbar-item"><Link href='/story1'>Story 1</Link></li>
          <li className="navbar-item"><Link href='/story2'>Story 2</Link></li>
          <li className="navbar-item"><Link href='/story3'>Story 3</Link></li>
        </ul>
      </nav>
    );
  }