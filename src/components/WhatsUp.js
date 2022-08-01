import React from "react";

const WhatsUp = () => {
    return (
        <div className="whatsUp" id="whatsUp">
            <div className="whatsUpItem">
                <div className="whatsUpCounter">76</div>
                <div className="whatsUpTitle">ODDANYCH WORKÓW</div>
                <div className="whatsUpDescription">Łączna liczba oddanych do tej pory worków z rzeczami przekazanymi
                    przez Darczyńców. Dziękujemy i mamy nadzieję na więcej tak wspaniałych gestów z Twojej strony.
                </div>
            </div>
            <div className="whatsUpItem">
                <div className="whatsUpCounter">15</div>
                <div className="whatsUpTitle">WSPARTYCH ORGANIZACJI</div>
                <div className="whatsUpDescription">Łączna liczba wspartych organizacji i fundacji. Współpracujemy z
                    wieloma organizacjami pożytku publicznego i fundacjami pozarządowymi by czynić dobro!
                </div>
            </div>
            <div className="whatsUpItem">
                <div className="whatsUpCounter">3</div>
                <div className="whatsUpTitle">ZORGANIZOWANYCH ZBIÓREK</div>
                <div className="whatsUpDescription">
                    Łączna liczba zorganizowanych przez Was zbiórek, z których oddane rzeczy za naszym pośrednictwem
                    trafiły do odpowiednich odbiorców.
                </div>
            </div>
        </div>
    )
}

export default WhatsUp