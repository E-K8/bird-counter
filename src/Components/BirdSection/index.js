import React, { useState } from 'react';

import { BirdButton } from '../Button';

import './index.css';

export function BirdSection({ image, bird, addTotalBirds, deductTotalBirds }) {
  const [count, setCount] = useState(0);
  const altText = `Nice photo of a ${bird}`;

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    return count === 0 ? null : setCount(count - 1);
  }

  return (
    <article className='gallery-item'>
      <img src={image} alt={altText}></img>
      <h2>
        {' '}
        {count < 0 ? 0 : count} {count === 1 ? bird : bird + 's'}{' '}
      </h2>
      <BirdButton
        className='btn'
        text='➕'
        onClick={(e) => {
          plus();
          addTotalBirds();
        }}
      />
      <BirdButton
        className='btn'
        text='➖'
        onClick={() => {
          minus();
          if (count > 0) deductTotalBirds();
        }}
      />
      <BirdButton className='btn' text='RESET' onClick={() => setCount(0)} />
    </article>
  );
}
