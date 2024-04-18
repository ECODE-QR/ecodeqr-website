'use client';

import React from 'react'
import './story1.css'
import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';


const images = [
  './16.png',
  './17.png',
  './18.png'
  
// Add more image URLs
];


export default function page() {
  return (
    <div><Story images={images} /></div>
  )
}
