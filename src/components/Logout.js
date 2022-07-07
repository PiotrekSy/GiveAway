import React from "react";
import AuthSection from "./AuthSection";
import Navbar from "./Navbar";
import {Link as LinkRouter} from "react-router-dom"

const Login = () => {
    return (
        <div className="registrationForm">
            <AuthSection className="authSection"/>
            <Navbar className="navbar"/>
            <div className="regForm">
                <div className="regTitle">Wylogowanie nastąpiło</div>
                <div className="regTitle">Pomyślnie</div>
                <div className="regDecoration"
                     style={{margin: "70px"}}></div>
                <div className="regButtons"
                     style={{justifyContent: "center"}}>
                    <div className="regButton">
                        <button className="regButtonRange"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log("Rejestruję się !!!")
                                }}>
                            <LinkRouter className="navButtonLink"
                                        to="/">
                                <p className="regButtonText">Strona Główna</p>
                            </LinkRouter>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login