'use client';

import React from 'react'
import './story2.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const renaissanceImages = [
  './david1.png',
  './david2.png',
  './david3.png',

];


export default function page() {
  return (
    <div className="fullscreen-container"><Story images={renaissanceImages} /></div>
  )
}