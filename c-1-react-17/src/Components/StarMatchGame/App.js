import React from "react";
import MathUtils from "../../js/MathUtils";
import DisplayStar from "./DisplayStar";
import './App.less';

function App() {
   const numberOfStars = 8;

   return (
      <div className="gr-main">
         <div className="title">Start Match Game</div>
         <div className="help">Pick 1 or more numbers that sum to the number of starts</div>
         <div className="container">
            <div className="stars">
               {MathUtils.range(1, numberOfStars).map(starNumber => <DisplayStar key={starNumber} />)}
            </div>
            <div className="numbers"></div>
         </div>
      </div>
   );
}

export default App;
