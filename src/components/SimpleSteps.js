import React from "react";
import {Link} from "react-router-dom";

const SimpleSteps = () => {
    return (
        <div className="">
            <span>Wystarczą 4 proste kroki</span>
            <div>Ozdobnik</div>
            <div>Wystarczą 4 proste kroki</div>
            <div className="simpleStepsItems">
                <div className="simpleStepItem">
                    <div>icon</div>
                    <div>command</div>
                    <div>brak line__________</div>
                    <div>description</div>
                </div>
                <div className="simpleStepItem">
                    <div>icon</div>
                    <div>command</div>
                    <div>brak line__________</div>
                    <div>description</div>
                </div>
                <div className="simpleStepItem">
                    <div>icon</div>
                    <div>command</div>
                    <div>brak line__________</div>
                    <div>description</div>
                </div>
                <div className="simpleStepItem">
                    <div>icon</div>
                    <div>command</div>
                    <div>brak line__________</div>
                    <div>description</div>
                </div>
            </div>
            <div className="mainButtons">
                <Link to='/Login' className="mainPageButton">ODDAJ <br/>RZECZY</Link>
            </div>
        </div>
    )
}

export default SimpleSteps