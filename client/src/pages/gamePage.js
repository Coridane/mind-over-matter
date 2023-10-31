import React from "react";
import Game from '../components/game/Game';
const sass = require('sass');

function gamePage () {
    return (
    <div>
        <div className= "navbar">
            <h1 img="client/public/images/logo.png">
            </h1>
        </div>
        <div className= "game-container">
            <p> Memory games are a great way to engage the brain in creative and interactive ways!
            </p>
            <div><Game/>
            </div>
            

            
        </div>
    </div>
    )
}

export default gamePage;