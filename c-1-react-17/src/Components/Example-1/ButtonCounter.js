import React, { useState } from 'react';

/**
 * Create a button which increments a counter number after clicking.
 * @returns ButtonCounterComponent
 */
function ButtonCounter() {
   const [counter, setCounter] = useState(0);
   return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

export default ButtonCounter;
