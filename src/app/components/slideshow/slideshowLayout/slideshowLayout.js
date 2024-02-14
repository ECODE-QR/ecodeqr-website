// app.js
'use Client'; 
import React from 'react';
import Story from '../slideShowFunction/slideShowFunction';

const images = [
    './16.png',
    './17.png',
    './18.png',
  // Add more image URLs
];

const App = () => {
  return (
    <div>
      <Story images={images} />
    </div>
  );
};

export default App;
