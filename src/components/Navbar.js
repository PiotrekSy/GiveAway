import React from "react";
import {Link} from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <LinkRouter className="navButtonLink"
                                    to="/">
                            <p>Start</p>
                        </LinkRouter>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink"
                              to="whatsUp"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>O co chodzi?</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink"
                              to="about"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>O nas</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink"
                              to="organizations"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>Fundacje i organizacje</p>
                        </Link>
                    </button>
                </div>
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink"
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>Kontakt</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>)
}

export default Navbar