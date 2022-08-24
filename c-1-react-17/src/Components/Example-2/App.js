import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import Display from "./Display";

/*
   Include multiple Components, and pass down values from parent to children.
*/

function App() {
   const [counter, setCounter] = useState(0);
   const incrementCounter = () => setCounter(counter + 1);

   return (
      <React.Fragment>
         <ButtonCounter onClickHandler={incrementCounter} />
         <Display message={counter} />
      </React.Fragment>
   );
}

export default App;