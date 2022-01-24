import "./home.scss";

import {Link} from 'react-router-dom'
import {useState} from 'react';
import MySlider from "./MySlider"; 

function Choice(props){
    
    //<button>The element is: {props.choice}</button>
    //
    
    return (
        <div className= "btn centered">
            <h2><i>{props.choice}</i></h2>
            <p>Number of Questions:</p>
            <MySlider handleSliderChange = {props.handleSliderChange} max = {props.max}/>
            <Link  className = "choiceBtn" to={'/revise/'+props.choice} >Revise</Link>
            <Link  className = "choiceBtn" to={'/quiz/'+props.choice}>Exercise</Link>

        </div>

    )
}

function ChoicePanel(props){
    
    return(
        <div id = "choices">{props.choices.map(choice => <Choice choice = {choice.name} handleSliderChange = {props.handleSliderChange} max = {choice.size}/>)}</div>
    )
}
export default function Home(props){
    let choices = [
        {name:"katakana", size: 46},
        {name:"katakana_muddied", size: 25},
        {name:"hiragana", size: 46},
        {name:"hiragana_muddied", size: 25}];
    
    return (
        <div className = "home-container">
            <p><i>This is the <b>Home</b> page</i></p>
            <ChoicePanel choices ={choices} handleSliderChange = {props.handleSliderChange} max = {props.max}/>
        </div>
    )
}
