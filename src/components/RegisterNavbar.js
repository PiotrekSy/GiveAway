import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="navigation">
            <div className="navButtons">
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink" to="/">
                            <p>Start</p>
                        </LinkRouter>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink" to="/#whatsUp">
                            <p>O co chodzi?</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink" to="/#about">
                            <p>O nas</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink" to="/#organizations">
                            <p>Fundacje i organizacje</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink" to="/#contact">
                            <p>Kontakt</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar