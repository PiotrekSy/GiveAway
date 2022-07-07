import {Link} from "react-router-dom";
import React from "react";

const AuthSection = () => {
    return (
        <div className="authSection">
            <div className="authButtons">
                <div className="authUserWrapper">
                    <p className="loggedUser">
                        {/*TODO ?? wyświetlanie nazwy użytkownika*/}
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
                        <Link to='/Register'>Załóż konto</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthSection;