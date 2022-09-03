import React, { useState } from "react";
import Game from "./Game";

/**
 * Using key attribute will ensure every time that value changes. React will unmount and mount a new Component.
 * @returns 
 */
function App() {
    const [gameId, setGameId] = useState(1);
    const startNewGame = () => setGameId(gameId + 1);

    return <Game key={gameId} startNewGame={startNewGame} />
}

export default App;