import React from "react";
import AuthSection from "./AuthSection";

import RegisterNavbar from "./RegisterNavbar";

const FormHomeHeader = () => {
    return (
        <div className="formHomeHeader">
            <div className="leftSide"/>
            <div className="rightSide">
                <AuthSection className="authSection"/>
                <RegisterNavbar className="navigation"/>
                <div className="basePageMiddleSection">
                    <div className="baseText">
                        Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM
                    </div>
                    <div className="basePageDecoration"/>
                    <div className="baseText">
                        Wystarczą 4 proste kroki:
                    </div>
                    <div className="squares">
                        <div className="square">
                            <div className="innerSquare">
                                <p className = "squareNumbers">1</p>
                                <p className = "squareText">Wybierz<br/>rzeczy</p>
                            </div>
                        </div>
                        <div className="square">
                            <div className="innerSquare">
                                <p className = "squareNumbers">2</p>
                                <p className = "squareText">Spakuj je<br/>w worki</p>
                            </div>
                        </div>
                        <div className="square">
                            <div className="innerSquare">
                                <p className = "squareNumbers">3</p>
                                <p className = "squareText">Wybierz<br/>fundację</p>
                            </div>
                        </div>
                        <div className="square">
                            <div className="innerSquare">
                                <p className = "squareNumbers">4</p>
                                <p className = "squareText">Zamów<br/>kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormHomeHeader