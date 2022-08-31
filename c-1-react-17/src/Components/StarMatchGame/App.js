import React, { useState } from "react";
import MathUtils from "../../js/MathUtils";
import StarsDisplay from "./StarsDisplay";
import './App.less';
import PlayNumber from "./PlayNumber";

const numberStates = {
   available: 'available',
   used: 'used',
   wrong: 'wrong',
   candidate: 'candidate'
};

function App() {   
   const [stars, setStars] = useState(MathUtils.random(1, 9));
   const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
   const [candidateNums, setCandidateNums] = useState([2, 3]);
   const candidatesAreWrong = MathUtils.sum(candidateNums) > stars;
   
   const getNumberStatus = (number) => {
      if (!availableNums.includes(number)) {
         return numberStates.used;
      }
      if(candidateNums.includes(number)) {
         return candidatesAreWrong ? numberStates.wrong : numberStates.candidate;
      }

      return numberStates.available;
   };

   return (
      <div className="gr-main">
         <div className="title">Start Match Game</div>
         <div className="help">Pick 1 or more numbers that sum to the number of starts</div>
         <div className="container">
            <div className="stars">
               <StarsDisplay numberOfStars={stars} />
            </div>
            <div className="numbers">
               {
                  MathUtils
                     .range(1, 9)
                     .map(number => 
                        <PlayNumber key={number} 
                           number={number}
                           status={getNumberStatus(number)} /> )
               }
            </div>
         </div>
      </div>
   );
}

export default App;
