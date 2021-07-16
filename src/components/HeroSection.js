import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Background from '../assests/images/img-1.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={Background } />
      <h1>SUSHI REN</h1>
      <p>Fine Japanese Cuisine Dining </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          See the Menu
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
