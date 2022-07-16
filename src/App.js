import React, {useEffect, useState} from "react";
import './scss/main.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveAwayForm from "./components/GiveAwayForm";
import {UserContext} from "./components/context/userProvider";
import {getAuth, onAuthStateChanged} from "firebase/auth";


function App() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
               setUser(null)
            }
        });

        return unsubscribe
    }, [])

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
