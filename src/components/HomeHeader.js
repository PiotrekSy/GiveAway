import React from "react";
import Navbar from "./Navbar";
import RegistrationSection from "./RegistrationSection";
import {Link} from "react-router-dom";

const HomeHeader = () => {
    return (
        <div className="homeHeader">
            <div className="leftSide">
                <div className="landingPageImage"/>
            </div>
            <div className="rightSide">
                <RegistrationSection/>
                <Navbar/>
            </div>
            <div>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</div>
            <div className="ozdobnikBasePage"/>
            <div className="mainButtons">
                <Link to='/Login' className="mainPageButton">ODDAJ <br/> RZECZY</Link>
                <Link to='/Login' className="mainButton">ZORGANIZUJ <br/> ZBIÓRKĘ</Link>
            </div>
        </div>
    )
}

export default HomeHeader