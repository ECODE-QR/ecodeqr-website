'use client';

import React from 'react'
import './story2.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const renaissanceImages = [
  './35.png',
  './36.png',
  './37.png',

];


export default function page() {
  return (
    <div><Story images={renaissanceImages} /></div>
  )
}
