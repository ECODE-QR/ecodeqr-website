'use client';

import React from 'react'
import './story3.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const worldImages = [
  './21.png',
  './22.png',
  './23.png',

];


export default function page() {
  return (
    <div><Story images={worldImages} /></div>
  )
}
