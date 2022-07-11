import React, {useState, useEffect, useContext} from "react";
import AuthSection from "./AuthSection";
import RegisterNavbar from "./RegisterNavbar";
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import "firebase/auth"
import db, {auth} from "./firebase"
import {collection, onSnapshot} from "@firebase/firestore";
import {UserContext} from "./context/userProvider";


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const {setUser} = useContext(UserContext)
    const [emailError, setEmailError] = useState("");


    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            snapshot.docs.map(doc => doc.data());
        });
    }, [])

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

    // //funkcja umieszczająca usera w database;
    //
    // const addNewUser = async () => {
    //     await addDoc(collection(db, "users"), {
    //             email: email,
    //             password: password,
    //             userType: "normal"
    //         }
    //     )
    // }

    //rejestracja nowego konta pod warunkiem tych samych haseł
    const register = async () => {
        // if (!validate()) return
        if (password !== passwordConfirm) {
            return setPasswordError('Hasła nie są identyczne!')
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            // await addNewUser()
            setEmail("")
        } catch {
            setPasswordError("Failed to create an account!")
        }
    }

    return (
        <div className="registrationForm">
            <AuthSection className="authSection"/>
            <RegisterNavbar className="navbar"/>
            <div className="regForm">

                <div className="regTitle">Załóż konto</div>
                <div className="regDecoration"></div>
                <form className="greyArea" onSubmit={register}>
                    <label className="regLabel" htmlFor="email">Email:</label>
                    <input className="regInput" type="email"
                           id="email"
                           onChange={e => {
                               setEmail(e.target.value);
                           }}
                           onBlur={emailCheck}>
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
                    <label className="regLabel" htmlFor="passwordConfirm">Powtórz hasło:</label>
                    <input className="regInput" type="password"
                           id="passwordConfirm"
                           onChange={e => setPasswordConfirm(e.target.value)}>
                    </input>
                    {passwordConfirm.length > 0 ? password !== passwordConfirm &&
                        <div className="errorMessage">Hasła muszą być identyczne!!</div> : null}

                    {/*buttony*/}
                    <div className="regButtons">
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Wracam do logowania!!")
                                    }}>
                                <Link to='/Login'
                                      className="regLoginLink">
                                    <p className="regButtonText">Zaloguj się</p>
                                </Link>
                            </button>
                        </div>
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="submit"
                                    onClick={() => {
                                        console.log("Rejestruję się !!!");
                                    }}>
                                <div className="regButtonText">Załóż konto</div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register