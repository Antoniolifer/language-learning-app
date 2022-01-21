export default function Results(props){

    return (
        <div className = "results-container">
            <h1>This is the <b>Results</b> page</h1>
            <p>{props.userAnswers}</p>
        </div>
        
    )
}