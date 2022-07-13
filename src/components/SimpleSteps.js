import React, {useContext} from "react";
import {UserContext} from "./context/userProvider";
import {HashLink} from 'react-router-hash-link';


const SimpleSteps = () => {

    const {user} = useContext(UserContext);

    return (<div className="simpleSteps">
            <h1 className="simpleTitle">Wystarczą 4 proste kroki</h1>
            <div className="simpleDecoration"/>
            <div className="simpleStepsItems">
                <div className="simpleStepItem">
                    <div className="simpleIcon1"/>
                    <div className="simpleCommand">Wybierz rzeczy</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">
                        ubrania, zabawki, sprzęt i inne
                    </div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon2"/>
                    <div className="simpleCommand">Spakuj je</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">
                        skorzystaj z worków na śmierci
                    </div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon3"/>
                    <div className="simpleCommand">Zdecyduj komu chcesz pomóc</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">
                        Wybierz zaufane miejsce
                    </div>
                </div>
                <div className="simpleStepItem">
                    <div className="simpleIcon4"/>
                    <div className="simpleCommand">Zamów kuriera</div>
                    <div className="simpleLine"/>
                    <div className="simpleDescription">
                        kurier przyjedzie w dogodnym terminie
                    </div>
                </div>
            </div>
            <div className="simpleButtons">
                <div className="simpleButton">
                    <HashLink className="mainPageButtonRange" to={user === null ? '/Login' : '/GiveAwayForm/#Form'}>
                        <p className="simpleButtonText">ODDAJ RZECZY</p>
                    </HashLink>
                </div>
            </div>
        </div>)
}

export default SimpleSteps