import React from "react";
import Game from '../components/game'

function gamePage () {
    return (
    <div>
        <div className= "navbar">
            <h1 img="client/public/images/cardback.png">
            </h1>
        </div>
        <div className= "game-container">
            <p> Game component goes here
            <Game/>
            </p>
        </div>
    </div>
    )
}

export default gamePage;