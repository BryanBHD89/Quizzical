import React from "react"

function Start(props){

    return (
        <div id="startContainer" className="startContainer">
            <h1 className="title">Quizzical</h1>
            <button className="start" id="start" onClick={props.startGame}>play</button>
        </div>
    )
}

export default Start