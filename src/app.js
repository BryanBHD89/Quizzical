import React from "react"
import Quizz from "./components/quizz.js"
import {nanoid} from "nanoid"
import Start from "./components/start.js"
import Check from "./components/check.js"
import he from "he"


function App(){
    const [info,setInfo] = React.useState([])
    const [score,setScore] = React.useState(0)
    const [selectCorrect,setSelectCorrect] = React.useState(false)
    const [active,setActive] = React.useState(false)
    const [gameStart,setGameStart] = React.useState(false)
    const [randomArray, setRandomArray] = React.useState([])
    // const [random,setRandom] = React.useState(Math.floor(Math.random() * 4))

 
    function newInfo(){
        document.getElementById("startContainer").style.display = "none"
        setActive(false)
        setScore(oldScore => 0)
        document.getElementById("start").style.display = "none"
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => {
           
            setInfo(data.results.map(result => (
            {question: result.question,
            correct: {value: result.correct_answer,
            id: nanoid(),
            isSelected: false,
            isCorrect: true},
            incorrect: result.incorrect_answers.map(result => ({value: result, id: nanoid(), isSelected:false} )),
            correct_choice: true,
            inCorrect_choice: false,
            isSelected: false,
            isSelectedIncorrect1: false,
            isSelectedIncorrect2: false,
            isSelectedIncorrect3: false,
            id: nanoid(),
            allAnswers: allAnswers,
            random: Math.ceil(Math.random() *4),
            random2: Math.ceil(Math.random() *4),
            random3: Math.ceil(Math.random() *4),
            random4: Math.ceil(Math.random() *4)
             }
             )))       
             }
             )
    }  
    
    let allAnswers = []
    
    info.map(result => {
        allAnswers.push({correct: result.correct})
        allAnswers.push({incorrect: result.incorrect})
        allAnswers.sort(() => Math.random() - 0.5)
    })
   
 

    
      
     function handleClickCorrect(id){
          setInfo(oldInfo => oldInfo.map(result => {
            return result.correct.value === id ? 
                {...result,  isSelected: true, isSelectedIncorrect1: false,isSelectedIncorrect2:false,isSelectedIncorrect3:false, }  :
                result
        }))
     }
              
    function handleClickIncorrect1(id){
            setInfo(oldInfo => oldInfo.map(result => {
            return result.incorrect[0].value === id ? 
                {...result, isSelectedIncorrect1: true, isSelected: false,isSelectedIncorrect2:false, isSelectedIncorrect3:false} :
                result
        }))
    }
    
    function handleClickIncorrect2(id){
            setInfo(oldInfo => oldInfo.map(result => {
            return result.incorrect[1].value === id ? 
                {...result, isSelectedIncorrect2: true,isSelected: false,isSelectedIncorrect1: false,isSelectedIncorrect3:false} :
                result
        }))
    }
    
    function handleClickIncorrect3(id){
            setInfo(oldInfo => oldInfo.map(result => {
            return result.incorrect[2].value === id ? 
                {...result, isSelectedIncorrect3: true,isSelected: false,isSelectedIncorrect1: false,isSelectedIncorrect2:false} :
                result
        }))
    }
    
    
    function checkAnswers(){
       setActive(!active)
       info.map((result) => {
           if (result.isSelected){
               return setScore(oldScore => oldScore + 1)   
       }
       })    
    }
    
    
    
    
  
   

    const render =  info.map(result => (
                <Quizz question={result.question}  
                correct={result.correct.value}
                handleClick={() => handleClickCorrect(result.correct.value)}
                incorrect_answers1={result.incorrect[0].value}
                handleClick2={() => handleClickIncorrect1(result.incorrect[0].value)}
                handClickIncorrect1={handleClickIncorrect1}
                incorrect_answers2={result.incorrect[1].value}
                handleClick3={() => handleClickIncorrect2(result.incorrect[1].value)}
                handClickIncorrect2={handleClickIncorrect2}
                incorrect_answers3={result.incorrect[2].value}
                handleClick4={() => handleClickIncorrect3(result.incorrect[2].value)}
                isSelected1 = {result.isSelected}
                isSelected2 = {result.isSelectedIncorrect1}
                isSelected3 ={result.isSelectedIncorrect2}
                isSelected4 ={result.isSelectedIncorrect3}
                correct_choice={result.correct_choice}
                random={result.random}
                random2={result.random2}
                random3={result.random3}
                random4={result.random4}
                correctSelect={result.correct.isCorrect}
            
               
             
                    />)
    )
    
  
     
    
    const start = <Start 
                    startGame={newInfo}
                    />
                    
     
                    
    const check = info.map(result => (
        
             <Check question={result.question}  
              correct={result.correct.value}
              handleClick={() => handleClickCorrect(result.correct.value)}
              incorrect_answers1={result.incorrect[0].value}
              handleClick2={() => handleClickIncorrect1(result.incorrect[0].value)}
              handClickIncorrect1={handleClickIncorrect1}
              incorrect_answers2={result.incorrect[1].value}
              handleClick3={() => handleClickIncorrect2(result.incorrect[1].value)}
              handClickIncorrect2={handleClickIncorrect2}
              incorrect_answers3={result.incorrect[2].value}
              handleClick4={() => handleClickIncorrect3(result.incorrect[2].value)}
              isSelected1 = {result.isSelected}
              isSelected2 = {result.isSelectedIncorrect1}
              isSelected3 ={result.isSelectedIncorrect2}
              isSelected4 ={result.isSelectedIncorrect3}
              random={result.random}
              random2={result.random2}
              random3={result.random3}
              random4={result.random4}
              correctSelect={result.correct.isCorrect}
                />)
  )
 

    
     return(
    <div>
        {(gameStart === false && start)}
        {(active === false && render)}
        {(active === true && check)}
              
        <div className="buttons">
            {(gameStart === false && active === false && <button id="check" onClick={checkAnswers}>Check Answers</button>)}
            {active === true && <div className= "scoreContainer"><h3 className="score">You score {score}/5 correct answers</h3><button className="playAgain" onClick={newInfo}>play again</button></div>}
       </div>
    </div>
    
    )
}

export default App