import { useState } from 'react';

import './App.css';
import magpiePic from './Public/bird_magpie.png';
import cootPic from './Public/bird_coot.png';
import swanPic from './Public/bird_swan.png';
import { BirdSection } from './Components/BirdSection';

function App() {
  const [totalBirds, setTotalBirds] = useState(0);

  function addToTotal() {
    setTotalBirds(totalBirds + 1);
  }

  function deductTotal() {
    return totalBirds === 0 ? null : setTotalBirds(totalBirds - 1);
  }

  //TODO add function to reset all counters

  return (
    <div className='App'>
      <h1 className='header-title'>🦆🦢 Bird counter 🕊️🐧</h1>
      <h2 className='total-counter'>Total Birds: {totalBirds}</h2>
      <button onClick={() => setTotalBirds(0)}>RESET</button>
      <div className='gallery'>
        <BirdSection
          image={magpiePic}
          bird='Magpie'
          addTotalBirds={addToTotal}
          deductTotalBirds={deductTotal}
        />
        <BirdSection
          image={cootPic}
          bird='Coot'
          addTotalBirds={addToTotal}
          deductTotalBirds={deductTotal}
        />
        <BirdSection
          image={swanPic}
          bird='Swan'
          addTotalBirds={addToTotal}
          deductTotalBirds={deductTotal}
        />
      </div>
    </div>
  );
}

export default App;
