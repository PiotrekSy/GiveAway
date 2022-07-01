import {Link} from "react-router-dom";
import React from "react";

const RegistrationSection = () => {
    return (
        <div className="registrationSection">
            <div className="loggedUser">
                Placeholder na nazwę użytkownika przed loginem i rejestracją
                {/*TODO wyświetlanie nazwy użytkownika*/}
                {/*<p>{userName}</p>*/}
            </div>
            <button className="loginButton">
                <Link to='/Login'>Log in</Link>
            </button>
            <button className="registerButton">
                <Link to='/Register'>Register</Link>
            </button>
        </div>
    )
}

export default RegistrationSection;