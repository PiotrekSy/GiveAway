import React, {useState, useEffect, useContext} from "react";
import AuthSection from "./AuthSection";
import RegisterNavbar from "./RegisterNavbar";
import {Link,} from "react-router-dom";
import {Navigate} from "react-router";
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import "firebase/auth";
import db, {auth} from "./firebase";
import {collection, onSnapshot} from "@firebase/firestore";
import {UserContext} from "./context/userProvider";

const Login = () => {
    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            snapshot.docs.map(doc => doc.data());
        });
    }, [])


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("");
    const {user, setUser} = useContext(UserContext);
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const emailCheck = () => {
        if (!isValidEmail(email)) {
            setEmailError('Podany email jest nieprawidłowy');
        } else {
            setEmailError("");
        }
    }
    const passwordLengthCheck = () => {
        if (password.length <= 4) {
            setPasswordError('Hasło ma mieć przynajmniej 6 znaków');
        } else {
            setPasswordError("");
        }
    }

    //funckcja logowania:
    const login = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch {
            console.log("Failed to log in!")
        }
    }

    //przekierowanie jeżeli użytkownik jest zalogowany:
    if (user !== null) {
        return <Navigate to="/"/>
    }

    return (
        <div className="registrationForm">
            <AuthSection className="authSection"/>
            <RegisterNavbar className="navbar"/>
            <div className="regForm">
                <div className="regTitle">Zaloguj się</div>
                <div className="regDecoration"></div>
                <form className="greyArea"
                      style={{height: "20vh"}}
                      onSubmit={login}>
                    <label className="regLabel" htmlFor="email">Email:</label>
                    <input className="regInput" type="email"
                           id="email"
                           onChange={e => {
                               setEmail(e.target.value);
                               emailCheck();
                           }}>
                    </input>
                    {emailError !== "" && <div className="errorMessage">{emailError}</div>}

                    <label className="regLabel" htmlFor="password">Hasło:</label>
                    <input className="regInput" type="password"
                           id="password"
                           onChange={e => {
                               setPassword(e.target.value)
                               passwordLengthCheck();
                           }}>
                    </input>
                    {passwordError !== "" && <div className="errorMessage">{passwordError}</div>}
                    <div className="regButtons">
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Wracam do rejestracji!!")
                                    }}>
                                <Link to='/Register'
                                      className="regLoginLink">
                                    <p className="regButtonText">Załóż konto</p>
                                </Link>
                            </button>
                        </div>
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="submit">
                                <div className="regButtonText">Zaloguj</div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login