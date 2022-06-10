import React from "react"
import he from "he"


function Quizz(props){

//   const [random,setRandom] = React.useState(Math.floor(Math.random() * 4))
//   const [random2,setRandom2] = React.useState(Math.floor(Math.random() * 4))
//   const [random3,setRandom3] = React.useState(Math.floor(Math.random() * 4))
//   const [random4,setRandom4] = React.useState(Math.floor(Math.random() * 4))
  

//  React.useEffect(() => {
//      document.getElementById("correct").style.order = random
    
//   },[5]);
  
  
  
    
   
    return(
    <div className="questionContainer">
        <h2 className="question">{he.decode(props.question)}</h2>
        <div id="container" className="answerContainer">
            <h2   id="correct" style={{order: props.random, backgroundColor: props.isSelected1  ? "#D6DBF5" : "" }}  onClick={ props.handleClick}>{he.decode(props.correct)}</h2>
            <h2   id="incorrect1"  style={{order: props.random2, background: props.isSelected2 ? "#D6DBF5" : ""}} onClick={props.handleClick2}>{he.decode(props.incorrect_answers1)}</h2>
               <h2  id="incorrect2" style={{order: props.random3,background: props.isSelected3 ? "#D6DBF5" : ""}} onClick={props.handleClick3}>{he.decode(props.incorrect_answers2)}</h2>
           <h2  id="incorrect3"   style={{order: props.random4, background: props.isSelected4 ? "#D6DBF5" : ""}} onClick={props.handleClick4}>{he.decode(props.incorrect_answers3)}</h2>
        </div>
    </div>
    )
}

export default Quizz