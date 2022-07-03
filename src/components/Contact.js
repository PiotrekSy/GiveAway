import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSide"/>
            <div className="rightSide">

                <div className="contactTitle">Skontaktuj się z nami</div>
                <div className="contactDecoration"/>
                <form className="form">
                    <div className="upperLabels">
                        <label>Wpisz swoje imię
                            <input type="name" placeholder="Jan"/>
                        </label>
                        <label>Wpisz swój email
                            <input type="email" placeholder="jankowalski@gmail.pl"/>
                        </label>
                    </div>
                    <div className="bottomLabel">
                        <label>Wpisz swoją wiadomość
                            <input type="textarea"
                                   placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex,
                               facere laborum nam necessitatibus quas quod recusandae repudiandae sapiente veritatis.
                               Aliquam consequatur esse facere iste laboriosam praesentium ut vitae. Id!"/>
                        </label>
                    </div>
                    <button type="submit">Wyślij</button>
                </form>

                <p></p>
            </div>
            <div className="footer">
                <div className="footerCopyright">
                    <div>
                        Copyright by Coders Lab
                    </div>
                </div>
                <div className="footerMediaWrapper">
                    <div className="footerMedia">
                        <div>FB ICON</div>
                        <div>INSTAGRAM ICON</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact