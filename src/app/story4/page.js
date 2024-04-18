'use client';

import React from 'react'
import './story4.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const bearImages = [
  './bear1.png',
  './bear2.png',
  './bear3.png',

];


export default function page() {
  return (
    <div><Story images={bearImages} /></div>
  )
}