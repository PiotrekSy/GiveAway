import React, {useState} from "react";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "./firebase";

const Contact = () => {

    //wyłączenie wyświetlania domyślnego błędu walidacji WYŁĄCZENIE POPUPS:

    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
        };
    })(), true);

    //walidacja imienia:

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const handleNameChange = () => {
        if (name.includes(" ")) {
            setNameError("Podane imię jest nieprawidłowe!")
        } else {
            setNameError("")
        }
    }

    //walidacja emaila:

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleEmailChange = () => {
        if (!isValidEmail(email)) {
            setEmailError('Podany email jest nieprawidłowy');
        } else {
            setEmailError("");
        }
    }

    //walidacja wiadomości:

    const [message, setMessage] = useState("")
    const [messageError, setMessageError] = useState("");

    const handleMessageValidation = () => {
        if (message.length < 120) {
            setMessageError('Wiadomość musi mieć conajmniej 120 znaków');
        } else {
            setMessageError("");
        }
    }

    //potwierdzenie wysłania wiadomości i samo wysłanie na serwer firebase:

    const [messageSent, setMessageSent] = useState(false);
    const [succesMessage1] = useState("Wiadomość została wysłana.");
    const [succesMessage2] = useState("Wkrótce się skontaktujemy.");

    const collectionRef = collection(db, "contacts")
    const submitHandle = async (e) => {
        e.preventDefault()
        handleNameChange();
        handleEmailChange();
        handleMessageValidation();
        if (nameError === "" && emailError === "" && messageError === "") {
            await addDoc(collectionRef,
                {
                    name,
                    email,
                    message
                }).then(() => {
                console.log("wysłano wiadomość na server")
                setMessageSent(true);
            }).catch(() => {
                console.log("coś poszło nie tak")
            })
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return (<div className="contact" id="contact">
        <div className="leftSide"/>
        <div className="rightSide">
            <div className="contactTitle">Skontaktuj się z nami</div>
            <div className="contactDecoration"/>
            {messageSent &&
                <div className="succesMessageWrapper">
                    <div className="succesMessage"><b>{succesMessage1}</b></div>
                    <div className="succesMessage"><b>{succesMessage2}</b></div>
                </div>}

            {/*prawilny form do wysyłki:*/}
            <form onSubmit={submitHandle} className="form">
                <div className="upperLabels">
                    <div className="upperInputWrapper">
                        <div className="upperLabel"><b>Wpisz swoje imię</b></div>
                        <input className="upperInput"
                               style={{borderColor: (nameError.length < 2 && nameError !== " " ? "black" : "red")}}
                               value={name}
                               onChange={(e) => {
                                   e.preventDefault()
                                   setName(e.target.value)
                                   handleNameChange()
                               }}
                               type="name"
                               placeholder="Jan"/>
                        <div className="errorMessage"><b>{nameError}</b></div>
                    </div>
                    <div className="upperInputWrapper">
                        <div className="upperLabel"><b>Wpisz swój email</b></div>
                        <input className="upperInput"
                               style={{borderColor: (emailError.length < 2 && emailError !== " " ? "black" : "red")}}
                               value={email}
                               onChange={(e) => {
                                   e.preventDefault()
                                   setEmail(e.target.value)
                                   handleEmailChange()
                               }}
                               type="email"
                               placeholder="jankowalski@gmail.pl"/>
                        {emailError && <div className="errorMessage"><b>{emailError}</b></div>}
                    </div>
                </div>
                <div className="bottomLabel">
                    <div><b>Wpisz swoją wiadomość</b></div>
                    <textarea className="bottomInput"
                              style={{borderColor: (messageError.length < 2 && messageError !== " " ? "black" : "red")}}
                              value={message}
                              onChange={(e) => {
                                  e.preventDefault()
                                  setMessage(e.target.value)
                                  handleMessageValidation()
                              }}
                              minLength="120"
                              placeholder="Lorem ipsum dolor sit amet, facere laborum nam necessitatibus quas quod recusandae repudiandae sapiente veritatis. Aliquam consequatur esse facere iste laboriosam praesentium ut vitae. Id! Dolores ex,facere laborum nam necessitatibus quas quod recusandae repudiandae sapiente veritatis. "/>
                    <div className="errorMessage"><b>{messageError}</b></div>
                </div>
                <div className="formButtonWrapper">
                    <div className="formButton">
                        <button className="formButtonRange" type="submit">
                            <p className="formButtonText">Wyślij</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>

        {/*footer i obrazki etc:*/}
        <div className="footer">
            <div className="footerCopyright">
                <div>
                    Copyright by Coders Lab
                </div>
            </div>
            <div className="footerMediaWrapper">
                <div className="footerMedia">
                    <div className="facebookIcon"/>
                    <div className="instagramIcon"/>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact