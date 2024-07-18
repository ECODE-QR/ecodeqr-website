import React from 'react'
import './smiley.css'
import Image from 'next/image';

export default function About() {
    return (
     <div className="AboutSection" > 
     <div className="AboutContent">
     
     <div className="img-text">
     <Image src='/smiley.png' className="smile-image" alt="smile" width={500} height={300} />
        <h1 className="head"><span>[</span> BRING YOUR CLOTHES TO LIFE <span>]</span></h1>
        </div>
        <div className="boxes">
        <div className="box1">Fashion but spread a message</div>
        <div className="box2">More Features Coming Soon!</div>
     </div>
     </div>
     </div>
    );
  }