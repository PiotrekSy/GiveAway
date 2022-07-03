import {Link} from "react-router-dom";
import React from "react";

const AuthSection = () => {
    return (
        <div className="authSection">

            <div className="authButtons">
                <div className="authUserWrapper">
                    <p className="loggedUser">
                        Cześć, placeholder...
                        {/*TODO wyświetlanie nazwy użytkownika*/}
                        {/*<p>{userName}</p>*/}
                    </p>
                </div>
                <div className="authButtonWrapper">
                    <button className="authButton">
                        <Link to='/Login'>Zaloguj</Link>
                    </button>
                </div>
                <div className="authButtonWrapper">
                    <button className="authButton">
                        <Link to='/Register'>Zarejestruj</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthSection;