import React from 'react';
import { BirdButton } from '../Button';
import './index.css';

export function BirdSection({
  image,
  bird,
  count,
  addTotalBirds,
  deductTotalBirds,
  resetBirdCount,
}) {
  const altText = `Nice photo of a ${bird}`;

  return (
    <article className='gallery-item'>
      <img src={image} alt={altText}></img>
      <h2>
        {count} {count === 1 ? bird : bird + 's'}
      </h2>
      <BirdButton className='btn' text='➕' onClick={() => addTotalBirds()} />
      <BirdButton
        className='btn'
        text='➖'
        onClick={() => {
          if (count > 0) deductTotalBirds();
        }}
      />
      <BirdButton className='btn' text='RESET' onClick={resetBirdCount} />
    </article>
  );
}
