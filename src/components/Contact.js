import React, {useState} from "react";

const Contact = () => {

    const [error, setError] = useState([])


    const submit = (e) => {
        e.preventDefault()
        console.log("działa")

    }

    return (
        <div className="contact">

            <div className="leftSide"/>

            <div className="rightSide">
                <div className="contactTitle">Skontaktuj się z nami</div>
                <div className="contactDecoration"/>

                {/*prawilny form do wysyłki:*/}
                <form onSubmit={submit} className="form">
                    <div className="upperLabels">
                        <div className="upperInputWrapper">
                            <div className="upperLabel">Wpisz swoje imię</div>
                            <input className="upperInput" type="name" placeholder="Jan"/>
                        </div>
                        <div className="upperInputWrapper">
                            <div className="upperLabel">Wpisz swój email</div>
                            <input className="upperInput" type="email" placeholder="jankowalski@gmail.pl"/>
                        </div>
                    </div>
                    <div className="bottomLabel">
                        <div>Wpisz swoją wiadomość</div>
                        <textarea className="bottomInput"
                                  placeholder="Lorem ipsum dolor sit amet, facere laborum nam necessitatibus quas quod recusandae repudiandae sapiente veritatis. Aliquam consequatur esse facere iste laboriosam praesentium ut vitae. Id! Dolores ex,facere laborum nam necessitatibus quas quod recusandae repudiandae sapiente veritatis. Aliquam consequatur esse facere iste laboriosam praesentium ut vitae. Id!"/>
                    </div>
                    <div className="formButtonWrapper">
                        <div className="formButton">
                            <button className="formButtonRange" type="submit">
                                <p className="formButtonText">Wyślij</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/*footer i obrazki etc:*/}
            <div className="footer">
                <div className="footerCopyright">
                    <div>
                        Copyright by Coders Lab
                    </div>
                </div>
                <div className="footerMediaWrapper">
                    <div className="footerMedia">
                        <div className="facebookIcon"/>
                        <div className="instagramIcon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact