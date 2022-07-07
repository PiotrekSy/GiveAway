import React, {useState} from "react";
import AuthSection from "./AuthSection";
import RegisterNavbar from "./RegisterNavbar";
import {Link} from "react-router-dom";
import "firebase/auth"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import db, {auth} from "./firebase"
import {useEffect} from "react";
import {collection, onSnapshot, addDoc} from "@firebase/firestore";


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [user, setUser] = useState({});
    const [passwordConstantError, setPasswordConstantError] = useState("")

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            snapshot.docs.map(doc => doc.data());
        });
    }, [])

    //funkcja umieszczająca usera w database;
    const addNewUser = async () => {
        const userCollection = collection(db, "users");
        const payload = {email: email, password: password, userType: "normal"}
        await addDoc(userCollection, payload)
    }
    //rejestracja nowego konta po warunkiem tych samych haseł
    const register = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            setPasswordError('Hasła nie są identyczne!')
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await addNewUser()
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            setPasswordError("Zarejestrowano, przejdź do logowania :)")
        } catch {
            setPasswordError("Failed to create an account!")
        }
    }

    //VALKIDACJE
    // validacja emaila:
    const [emailError, setEmailError] = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const emailCheck = () => {
        if (!isValidEmail(email)) {
            setEmailError('Podany email jest nieprawidłowy');
        } else {
            setEmailError("");
        }
    }
    //walidacja haseł:

    const passwordConstantCheck = () => {
        if (password.length > 0 && password.length <= 6) {
            setPasswordConstantError('Hasło ma mieć przynajmniej 6 znaków');
        } else {
            setPasswordConstantError("");
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

                    {/*labelki*/}

                    <label className="regLabel" htmlFor="email">Email:</label>
                    <input className="regInput" type="email"
                           id="email"
                           onChange={e => {
                               setEmail(e.target.value)

                           }}>
                    </input>
                    {emailError !== "" && <div>{emailError}</div>}

                    <label className="regLabel" htmlFor="password">Hasło:</label>
                    <input className="regInput" type="password"
                           id="password"
                           onChange={e => {
                               passwordConstantCheck();
                               setPassword(e.target.value)
                           }}>
                    </input>
                    {passwordConstantError !== "" && <div>{passwordConstantError}</div>}
                    <label className="regLabel">Powtórz hasło:</label>
                    <input className="regInput" type="password"
                           id="passwordConfirm"
                           onChange={e => setPasswordConfirm(e.target.value)}>
                    </input>

                    {passwordError !== "" && <p>{passwordError}</p>}

                    {/*buttony*/}
                    <div className="regButtons">
                        <div className="regButton">
                            <button className="regButtonRange"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Loguję się !!!")
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        emailCheck();
                                        passwordConstantCheck();
                                        register();
                                        console.log("Rejestruję się !!!");
                                    }}>
                                <div className="regButtonText">Załóż konto</div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}

export default Register