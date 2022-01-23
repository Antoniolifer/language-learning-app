import { useParams } from 'react-router-dom';
import getQuiz from "../Getter";

import "./results.scss";
function Box(props){
    let boxClass = props.correct ? "correct" : "incorrect";
    let userAnsClass = props.correct ? "" : "wrong";
    return(
        <div className = {"box centered " + boxClass}>
            <p className = {"symbol centered "}>{props.symbol}</p>
            {props.correct ? <p className = "ans centered "><br></br></p> : <p className = {"ans centered " + userAnsClass}>{props.userAnswer}</p>}
            <p className = {"ans centered "}>{props.answer}</p>
        </div>
    )
    
}
export default function Results(props){
    const { topicId } = useParams();
    const quiz = getQuiz(topicId);
    console.log(props.myCoolProp);
    let count = 0;
    let score = 0;
    const results = props.userAnswers.map((element) =>{
        let correct = element === quiz.answers[count] ? true : false
        if(correct){
            score++;
        }
        let box = 
            <Box correct = {correct} 
                answer = {quiz.answers[count]}
                userAnswer = {element}
                symbol = {quiz.questions[count]}></Box>
                ;
        count++;
        return box;

    })
    return (
        <div >
            <h1>This is the <b>Results</b> page</h1>
            <h2 className = "centered">Your score is: {score}/{props.userAnswers.length}</h2>
            <div className = "results-container centered">{results}</div>
        </div>
        
    )
}