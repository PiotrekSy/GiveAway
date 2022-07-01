import {Link} from "react-router-dom";
import React from "@types/react";
import Login from "./Login";
import Registration from "./Registration";

const RegistrationSection = () => {
    return (
        <div className="registrationSection">
            <div className="loggedUser">
                {/*TODO wyświetlanie nazwy użytkownika*/}
                {/*<p>{userName}</p>*/}
            </div>
            <div className="loginButton">
                <Link to='/Registration'>
                    <div className='iconBack'/>
                </Link>
            </div>
            <div className="registerButton">
                <Link to='/Registration'>
                    <div className='iconBack'/>
                </Link>
            </div>
        </div>
    )
}

export default RegistrationSection;