import React from "react"

function Check(props){
    
        
    
    return(
    <div className="questionContainer">
        <h2 className="question">{props.question}</h2>
        <div id="container2" className="answerContainer">
            <h2  id="correct" style={{order: props.random, backgroundColor: props.isSelected1  ? "#94D7A2" : props.correctSelect ? "#94D7A2" : "" }}  onClick={ props.handleClick}>{props.correct}</h2>
            <h2   id="incorrect1"  style={{order: props.random2, background: props.isSelected2 ? "#F8BCBC" : ""}} onClick={props.handleClick2}>{props.incorrect_answers1}</h2>
               <h2  id="incorrect2" style={{order: props.random3,background: props.isSelected3 ? "#F8BCBC" : ""}} onClick={props.handleClick3}>{props.incorrect_answers2}</h2>
           <h2   id="incorrect3"  style={{order: props.random4, background: props.isSelected4 ? "#F8BCBC" : ""}} onClick={props.handleClick4}>{props.incorrect_answers3}</h2>
        </div>
    </div>
    
    )
}

export default Check