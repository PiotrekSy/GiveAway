import {Link} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {UserContext} from "./context/userProvider";
import "firebase/auth";
import {auth} from "./firebase";
import {signOut} from "firebase/auth";
import {HashLink} from 'react-router-hash-link';

const AuthSection = () => {

    const {user, setUser} = useContext(UserContext);
    //funckcja wylogowania:
    const logout = async () => {
        await signOut(auth)
        setUser(null)
    }

    return (
        <div className="authSection">
            <div className="authButtons">
                <div className="authUserWrapper">
                    <p className="loggedUser">{user !== null ? `Cześć, ${user.email}` : null}</p>
                </div>
                <div className="authButtonWrapper">
                    <button className="authButton">
                        {user !== null ?
                            <HashLink to='/GiveAwayForm/#Form'>Oddaj rzeczy</HashLink> :
                            <Link to='/Login'>Zaloguj</Link>}
                    </button>
                </div>
                <div className="authButtonWrapper">
                    <button className="authButton">
                        {user !== null ?
                            <Link to='/Logout' onClick={logout}>Wyloguj</Link> :
                            <Link to='/Register'>Załóż konto</Link>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthSection;