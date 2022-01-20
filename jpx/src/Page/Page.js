import {
    BrowserRouter,
    Routes,
    Route, 
    Link
  } from 'react-router-dom'
  
  import React from 'react';

import ReactDOM from 'react-dom';

import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

function Nav(){
    const style = {
        
        margin: "5px",
        padding: "5px",
        color: "peru"
    }
    return (
    <div className = "navigation">
        <Link style = {style} to="/">Home</Link>
        <Link style = {style} to='/quiz'>Quiz</Link>
        <Link style = {style} to="/about">About</Link>
    </div>
    )
}

export default function Page(){

    return (
        <BrowserRouter>
            <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:topicId" element={<Quiz />} />
                <Route path="/results" element={<About />} />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Nav/>
            </div>
        </BrowserRouter>
    )
}