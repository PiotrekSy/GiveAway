import React from "react";
import './scss/main.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import TestElement from "./components/TestElement"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="testelement" element={<TestElement/>}/>
            </Routes>
        </Router>
    );
}

export default App;
