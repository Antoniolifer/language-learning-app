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

import "./page.scss";

function Nav(){
    
    return (
    <div className = "header centered">
        <h1>ふも</h1>

        <Link className = "txtbtn"  to="/">Home</Link>
        <Link className = "txtbtn" to='/quiz'>Quiz</Link>
        <Link className = "txtbtn" to="/about">About</Link>
    </div>
    )
}

export default function Page(){

    return (
        <BrowserRouter>
            <div className="page-container">
            <Nav/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:topicId" element={<Quiz />} />
                <Route path="/results" element={<About />} />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}