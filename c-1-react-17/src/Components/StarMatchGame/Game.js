import React, { useEffect, useState } from "react";
import MathUtils from "../../js/MathUtils";
import StarsDisplay from "./StarsDisplay";
import PlayNumber from "./PlayNumber";
import PlayAgain from "./PlayAgain";
import './App.less';

const numberStates = {
   available: 'available',
   used: 'used',
   wrong: 'wrong',
   candidate: 'candidate'
};

/**
 * Custom Hook
 * @returns
 */
const useGameState = () => {
   const [stars, setStars] = useState(MathUtils.random(1, 9));
   const [availableNums, setAvailableNums] = useState(MathUtils.range(1, 9));
   const [candidateNums, setCandidateNums] = useState([]);
   const [secondsLeft, setSecondsLeft] = useState(10);

   useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
         const timerId = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
         }, 1000);
         
         return () => clearTimeout(timerId);
      }      
   });

   const setGameState = (newCandidatesNums) => {
      if (MathUtils.sum(newCandidatesNums) !== stars) {
         setCandidateNums(newCandidatesNums);
      }
      else {
         const newAvailableNums = availableNums.filter(n => !newCandidatesNums.includes(n));

         setStars(MathUtils.randomSumIn(newAvailableNums, 9));
         setAvailableNums(newAvailableNums);
         setCandidateNums([]);
      }
   };

   return { stars, availableNums, candidateNums, secondsLeft, setGameState};
};

function Game(props) {   
   const {
      stars,
      availableNums,
      candidateNums,
      secondsLeft,
      setGameState
   } = useGameState();
   
   const candidatesAreWrong = MathUtils.sum(candidateNums) > stars;
   const gameStatus = availableNums.length === 0 
      ? 'won'
      : secondsLeft === 0 ? 'lost' : 'active';

   const getNumberStatus = (number) => {      
      if (!availableNums.includes(number)) {
         return numberStates.used;
      }
      if(candidateNums.includes(number)) {
         return candidatesAreWrong ? numberStates.wrong : numberStates.candidate;
      }

      return numberStates.available;
   };

   const onNumberClick = (number, currentStatus) => {      
      if (gameStatus !== 'active' || currentStatus === numberStates.used) {
         return;
      }      
      const newCandidatesNums = currentStatus === numberStates.available 
         ? candidateNums.concat(number)
         : candidateNums.filter(cn => cn !== number);
      
      setGameState(newCandidatesNums);
   };

   // resetGame function before introducing unmoun and mount concepts (Using key attribute)
   // const resetGame = () => {
   //    setStars(MathUtils.random(1, 9));
   //    setAvailableNums(MathUtils.range(1, 9));
   //    setCandidateNums([]);
   //    setSecondsLeft(10);
   // };

   return (
      <div className="gr-main">
         <div className="title">Start Match Game</div>
         <div className="help">Pick 1 or more numbers that sum to the number of starts</div>
         <div className="container">
            <div className="stars">
               {gameStatus !== 'active' ? 
                  (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />) : 
                  (<StarsDisplay numberOfStars={stars} />) }
            </div>
            <div className="numbers">
               {
                  MathUtils
                     .range(1, 9)
                     .map(number => 
                        <PlayNumber key={number} 
                           number={number}                           
                           status={getNumberStatus(number)}
                           onClick={onNumberClick} /> )
               }
            </div>
         </div>
         <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
   );
}

export default Game;
