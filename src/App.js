import React, { useState } from 'react';

import './App.css';
import AnimatedAmount from './components/AnimatedAmount';

function App() {
  const [start, toggle] = useState(false);

  return (
    <>
      <AnimatedAmount number={'0987654321'} start={start}/>
      <AnimatedAmount number={2050} start={start}/>
      <AnimatedAmount number={2020} start={start}/>
      <AnimatedAmount number={2030} start={start}/>
      <AnimatedAmount number={2019} start={start}/>
      <AnimatedAmount number={2018} start={start}/>
      <AnimatedAmount number={2016} start={start}/>
      <AnimatedAmount number={2014} start={start}/>
      <AnimatedAmount number={2011} start={start}/>
      <AnimatedAmount number={2007} start={start}/>
      <AnimatedAmount number={1990} start={start}/>
      <AnimatedAmount number={1234567890} start={start}/>
      <div className={'Controls'}>
        <button onClick={() => toggle(false)}>Reset</button>
        <button onClick={() => toggle(true)}>Start</button>
      </div>
    </>
  );
}

export default App;
