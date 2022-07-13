import React, {useContext} from "react";
import Navbar from "./Navbar";
import AuthSection from "./AuthSection";
import {Link} from "react-router-dom";
import {UserContext} from "./context/userProvider";
import {HashLink} from 'react-router-hash-link';


const HomeHeader = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="homeHeader">
            <div className="leftSide"/>
            <div className="rightSide">
                <AuthSection className="authSection"/>
                <Navbar className="navigation"/>
                <div className="basePageMiddleSection">
                    <div className="baseText">
                        Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
                    </div>
                    <div className="basePageDecoration"/>
                    <div className="baseButtons">
                        <div className="mainPageButton">
                            <HashLink className="mainPageButtonRange" to={user === null ? '/Login' : '/GiveAwayForm/#Form'}>
                                <p className="mainButtonText">ODDAJ RZECZY</p>
                            </HashLink>
                        </div>
                        <div className="mainPageButton">
                            <Link className="mainPageButtonRange" to='/Login'>
                                <p className="mainButtonText">ZORGANIZUJ ZBIÓRKĘ</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader