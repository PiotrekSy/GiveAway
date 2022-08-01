import React, { useState, useEffect } from "react";

const ButtonToTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }

    return (<div>
        {backToTopButton &&
            <button className="buttonToTop"
                onClick={scrollUp}><div className="expandLessIcon"/>
            </button>}
    </div>)
}

export default ButtonToTop