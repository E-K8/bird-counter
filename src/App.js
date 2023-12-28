import { useState } from 'react';

import './App.css';
import magpiePic from './Public/bird_magpie.png';
import cootPic from './Public/bird_coot.png';
import swanPic from './Public/bird_swan.png';
import { BirdSection } from './Components/BirdSection';

function App() {
  const initialCounts = { Magpie: 0, Coot: 0, Swan: 0 };
  const [birdCounts, setBirdCounts] = useState(initialCounts);

  function addToTotal(bird) {
    setBirdCounts({ ...birdCounts, [bird]: birdCounts[bird] + 1 });
  }

  function deductFromTotal(bird) {
    if (birdCounts[bird] > 0) {
      setBirdCounts({ ...birdCounts, [bird]: birdCounts[bird] - 1 });
    }
  }

  function resetCounts() {
    setBirdCounts(initialCounts);
  }

  return (
    <div className='App'>
      <h1 className='header-title'>🦆🦅 Bird counter 🕊️🦉</h1>
      <h2 className='total-counter'>
        Total Birds: {Object.values(birdCounts).reduce((a, b) => a + b, 0)}
      </h2>
      <button onClick={resetCounts}>RESET ALL</button>
      <div className='gallery'>
        <BirdSection
          image={magpiePic}
          bird='Magpie'
          count={birdCounts.Magpie}
          addTotalBirds={() => addToTotal('Magpie')}
          deductTotalBirds={() => deductFromTotal('Magpie')}
        />
        <BirdSection
          image={cootPic}
          bird='Coot'
          count={birdCounts.Coot}
          addTotalBirds={() => addToTotal('Coot')}
          deductTotalBirds={() => deductFromTotal('Coot')}
        />
        <BirdSection
          image={swanPic}
          bird='Swan'
          count={birdCounts.Swan}
          addTotalBirds={() => addToTotal('Swan')}
          deductTotalBirds={() => deductFromTotal('Swan')}
        />
      </div>
    </div>
  );
}

export default App;
