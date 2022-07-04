import React from "react";
import {Link} from 'react-scroll'


const Navbar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <div className="navButtonWrapper">
                    <button className="navButton">
                        <Link className="navButtonLink"
                              to="home"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <p>Start</p>
                        </Link>
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
                            <p>Fundacja i organizacje</p>
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