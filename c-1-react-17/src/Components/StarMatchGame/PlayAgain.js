import React from "react";

function PlayAgain(props) {
    return (
        <div className="play-again">
            <div className="message"
                style={{color: props.gameStatus === 'won' ? 'green' : 'red' }}>
                {props.gameStatus === 'won' ? 'Nice!': 'Game Over!'}
            </div>
            <button onClick={props.onClick}>Play again!</button>
        </div>
    );
}

export default PlayAgain;