import React, {useState} from "react";
import AuthSection from "./AuthSection";
import RegisterNavbar from "./RegisterNavbar";
import {Link} from "react-router-dom";
import "firebase/auth"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import db, {auth} from "./firebase"
import {useEffect} from "react";
import {collection, onSnapshot, addDoc} from "@firebase/firestore";


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [registered, setRegistered] = useState("");
    const [isUsingForm, setIsUsingForm] = useState(false);

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            snapshot.docs.map(doc => doc.data());
        });
    }, [])

    //funkcja umieszczająca usera w database;
    const addNewUser = async () => {
        const userCollection = collection(db, "users");
        const regData = {email: email, password: password, userType: "normal"}
        await addDoc(userCollection, regData)
    }

    const register = async (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            return setError('Passwords do not match!')
        }
        try {
            setError("")
            await createUserWithEmailAndPassword(auth, email, password)
            await addNewUser()
            onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
            setError("Zarejestrowano!")

        } catch {
            setError("Failed to create an account!")
        }
    }


    return (<div className="registrationForm">
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
                       onChange={e => setEmail(e.target.value)}>
                </input>
                {/*<div className="errorMessage"><b>{emailError}</b></div>*/}

                <label className="regLabel" htmlFor="password">Hasło:</label>
                <input className="regInput" type="password"
                       id="password"
                       onChange={e => setPassword(e.target.value)}>

                </input>
                {/*<div className="errorMessage"><b>{passwordError}</b></div>*/}

                <label className="regLabel">Powtórz hasło:</label>
                <input className="regInput" type="password"
                       id="passwordConfirm"
                       onChange={e => setPasswordConfirm(e.target.value)}
                ></input>
                {/*<div className="errorMessage"><b>{passwordConfirmError}</b></div>*/}

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
                                    e.preventDefault()
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


// <form onSubmit={register} className="registrationForm">
//         <>
//             <div>
//                 <h1 className="pageTitle">Register Now! </h1>
//             </div>
//             <div className="registrationInputWrapper">
//                 <label className="description" htmlFor="email"></label>
//                 <input className="inputVisuals" type="email"
//                        id="email"
//                        onChange={e => setEmail(e.target.value)}/>
//             </div>

//             <div className="registrationInputWrapper">
//                 <label className="description" htmlFor="password"></label>
//                 <input className="inputVisuals" type="password"
//                        id="password"
//                        onChange={e => setPassword(e.target.value)}/>
//             </div>

//             <div className="registrationInputWrapper">
//                 <label className="description" htmlFor="passwordConfirm"></label>
//                 <input className="inputVisuals" type="password"
//                        id="passwordConfirm"
//                        onChange={e => setPasswordConfirm(e.target.value)}/>
//             </div>

//        </>}
// </form>


export default Register