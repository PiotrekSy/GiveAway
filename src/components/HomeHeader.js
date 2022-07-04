import React from "react";
import Navbar from "./Navbar";
import AuthSection from "./AuthSection";
import {Link} from "react-router-dom";

const HomeHeader = () => {
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
                            <Link className="mainPageButtonRange" to='/Login'>
                                <p className="mainButtonText">ODDAJ RZECZY</p>
                            </Link>
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