import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img2 from '../assests/images/img-2.jpg'
import img3 from '../assests/images/img-3.jpg'
import img4 from '../assests/images/img-4.jpg'
import img5 from '../assests/images/img-5.jpg'
import img6 from '../assests/images/img-6.jpg'
import img7 from '../assests/images/img-7.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these stunning pictures Hubble has captured!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={img3}
              text='Tempura'
              label="copyrights @Clover"
            />
            <CardItem
              src={img5}
              text='Salmon Teriyaki'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img7}
              text='Amazing view of inside'
            />
            <CardItem
              src={img6}
              text='Special Roll'
            />
            <CardItem
              src={img2}
              text='Lobster Tartare'
              label="copyrights @Clover"

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Takoyaki'
              label="copyrights @Clover"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;