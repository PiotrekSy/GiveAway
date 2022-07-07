import React from "react";
import AuthSection from "./AuthSection";
import RegisterNavbar from "./RegisterNavbar";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="registrationForm">
            <AuthSection className="authSection"/>
            <RegisterNavbar className="navbar"/>
            <div className="regForm">
                <div className="regTitle">Zaloguj się</div>
                <div className="regDecoration"></div>
                <form className="greyArea"
                      style={{height: "20vh"}}>
                    <div className="regLabel">Email:</div>
                    <input className="regInput" type="email"></input>
                    {/*<div className="errorMessage"><b>{nameError}</b></div>*/}
                    <div className="regLabel">Hasło:</div>
                    <input className="regInput" type="password"></input>
                    {/*<div className="errorMessage"><b>{nameError}</b></div>*/}
                    <div className="regButtons">
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Rejestruję się !!!")
                                    }}>
                                <Link to='/Register'
                                      className="regLoginLink">
                                    <p className="regButtonText">Załóż konto</p>
                                </Link>
                            </button>
                        </div>
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Loguję się !!!")
                                    }}>
                                <Link to='/Login'
                                      classname="regLoginLink">
                                    <p className="regButtonText">Zaloguj się</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login