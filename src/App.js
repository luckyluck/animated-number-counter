import React, { useState } from 'react';

import './App.css';
import AnimatedAmount from './components/AnimatedAmount';

function App() {
  const [start, toggle] = useState(false);
  const examples = [
    '0987654321',
    '15.000,100',
    '50000,13',
    '$800,10',
    '1000€',
    2019,
    2018,
    2016,
    2014,
    1990
  ];

  return (
    <>
      {examples.map((example, index) => (
        <AnimatedAmount number={example} start={start} key={index} />
      ))}
      <div className={'Controls'}>
        <button onClick={() => toggle(false)}>Reset</button>
        <button onClick={() => toggle(true)}>Start</button>
      </div>
    </>
  );
}

export default App;
