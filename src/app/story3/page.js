'use client';

import React from 'react'
import './story3.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const worldImages = [
  './planet1.png',
  './planet2.png',
  './planet3.png',

];


export default function page() {
  return (
    <div className="fullscreen-container"><Story images={worldImages} /></div>
  )
}