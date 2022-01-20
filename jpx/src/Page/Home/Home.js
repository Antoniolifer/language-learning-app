import "./home.scss";

import {Link} from 'react-router-dom'

function Choice(props){
    
    //<button>The element is: {props.choice}</button>
    return (
        
        <Link className = "btn centered" to={'/quiz/'+props.choice}>Topic #{props.choice}</Link>

    )
}

function ChoicePanel(props){
    
    return(
        <div id = "choices">{props.choices.map(choice => <Choice choice = {choice}/>)}</div>
    )
}
export default function Home(){
    let choices = ["katakana", "katakana_muddied", "hiragana", "hiragana_muddied"];
    return (
        <div className = "home-container">
            <h1>This is the <b>Home</b> page</h1>
            <ChoicePanel choices ={choices}/>
        </div>
    )
}
