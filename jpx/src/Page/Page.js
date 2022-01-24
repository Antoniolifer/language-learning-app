import {
    BrowserRouter,
    Routes,
    Route, 
    Link
  } from 'react-router-dom'
  
  import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Results from "./Results/Results";

import About from "./About/About";
import NotFound from "./NotFound/NotFound";

import "./page.scss";

function Nav(props){
    
    return (
    <div className = "header centered">
        <h1>ふも</h1>

        <Link className = "txtbtn"  to="/" onClick = {()=>{props.setUserAnswers([])}}>Home</Link>
        <Link className = "txtbtn" to='/quiz'>Quiz</Link>
        <Link className = "txtbtn" to="/about">About</Link>
    </div>
    )
}

export default function Page(){
    const [userAnswers, setUserAnswers] =useState([]);
    const appendAnswer = (a) => setUserAnswers([...userAnswers, a]);

    let [numQuestions, setNumQuestions] = useState(20);
    const handleSliderChange = (event) =>{
        setNumQuestions(event.target.value);
    }
    return (
        <BrowserRouter>
            <div className="page-container">
            <Nav setUserAnswers = {setUserAnswers}/>

            <Routes>
                <Route path="/" element={<Home 
                handleSliderChange ={handleSliderChange}/>} />

                <Route path="/quiz/:topicId" 
                    element={
                        <Quiz appendAnswer = {appendAnswer}
                        userAnswers = {userAnswers}
                        numQuestions = {numQuestions}/>
                    } 
                />

                <Route path="/results/:topicId" element={
                    <Results 
                        userAnswers = {userAnswers}
                    />} 
                />
                <Route path="/revise/:topicId" element={
                    <Results 
                        userAnswers = {null}
                    />} 
                />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            </div>
        </BrowserRouter>
    )
}