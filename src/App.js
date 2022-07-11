import React, {useState} from "react";
import './scss/main.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveAwayForm from "./components/GiveAwayForm";
import {UserContext} from "./components/context/userProvider";


function App() {

    const [user, setUser] = useState(null)

    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Login" element={<Login title="Login"/>}/>
                    <Route path="/Register" element={<Register title="Register"/>}/>
                    <Route path="/GiveAwayForm" element={<GiveAwayForm/>}/>
                    <Route path="/Logout" element={<Logout/>}/>
                </Routes>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
