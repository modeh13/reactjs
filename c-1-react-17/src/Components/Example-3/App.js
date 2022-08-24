import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import Display from "./Display";

/* 
   Reuse Components sending an increment argument, and expecting to receive it when invoking setCounter
*/

function App() {
   const [counter, setCounter] = useState(0);
   const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);

   return (
      <React.Fragment>
         <ButtonCounter onClickHandler={incrementCounter} increment={1} />
         <ButtonCounter onClickHandler={incrementCounter} increment={5} />
         <ButtonCounter onClickHandler={incrementCounter} increment={10} />
         <ButtonCounter onClickHandler={incrementCounter} increment={100} />
         <Display message={counter} />
      </React.Fragment>
   );
}

export default App;