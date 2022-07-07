import React from "react";
import './scss/main.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Logout" element={<Logout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
