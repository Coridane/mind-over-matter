import React from "react";
import Game from '../components/game/Game';
const sass = require('sass');

function gamePage () {
    return (    
    <div>        
        <div className= "navbar">
            <a href="/home"><button id="returnBtn">Return to Home</button></a>
            <div id="introText">
                Memory games are a great way to engage the brain in creative and interactive ways!
            </div>
        </div>
        <div className= "game-container">            
            <div><Game/>
            </div>
            

            
        </div>
    
    </div>
    )
}

export default gamePage;