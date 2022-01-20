import { useParams } from 'react-router-dom'
import React, {useState} from 'react';
import getQuiz from "../Getter";

import "./quiz.scss";
function Symbol(props){
    return(
        <p className = "symbol centered">{props.symbol}</p>
    )
}
function QuizPanel(props){
    const quiz = getQuiz(props.topicId);
    //<p>{quiz.questions}</p>
    //<p>{quiz.answers}</p>
    return (
        <div>
            
            <div className = "centered">
            <h3>Question #{props.qn}</h3>
            <p className ="questions">What is this symbol?</p>
            <Symbol  symbol = {quiz.questions[props.qn]} key = {quiz.questions[props.qn].id}/>
            </div>
            <div>
            <input type="text" id = 'answer' name="answer"  placeholder="..." autoComplete="off"></input>
            </div>
        </div>

    )
}
export default function Quiz(){
    const { topicId } = useParams();
    const [questionNum, setQuestionNum] = useState(0);
    return (
        <div className = "quiz-container centered">
            <h1>This is the <b>Quiz</b> page, the topic is #{topicId}</h1>
            <QuizPanel topicId = {topicId} qn = {questionNum}/>
            <p>You clicked {questionNum} times</p>
            <button onClick={() => setQuestionNum(questionNum + 1)}>
                Click me
            </button>
        </div>
    )
}