'use client';

import React from 'react'
import './story5.css'
// import App from '../components/slideshow/slideshowLayout/slideshowLayout'
import Story from '../components/slideshow/slideShowFunction/slideShowFunction';

const headImages = [
  './head1.png',
  './head2.png',
  './head3.png',

];


export default function page() {
  return (
    <div><Story images={headImages} /></div>
  )
}