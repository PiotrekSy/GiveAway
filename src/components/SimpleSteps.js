import React from "react";
import {Link} from "react-router-dom";

const SimpleSteps = () => {
    return (
        <div className="simpleSteps">
            <h1 className="simpleTitle">Wystarczą 4 proste kroki</h1>
            <div className="simpleDecoration"/>
            <div className="simpleStepsItems">
                <div className="simpleStepItem">
                    <div className="simpleIcon">icon</div>
                    <div className="simpleCommand">command</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">description</div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon">icon</div>
                    <div className="simpleCommand">command</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">description</div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon">icon</div>
                    <div className="simpleCommand">command</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">description</div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon">icon</div>
                    <div className="simpleCommand">command</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">description</div>
                </div>
            </div>
            <div className="simpleButtons">
                <div className="simpleButton">
                    <Link className="simplePageButtonRange" to='/Login'>
                        <p className="simpleButtonText">ODDAJ RZECZY</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SimpleSteps