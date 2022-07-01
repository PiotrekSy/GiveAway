import React, {useState} from "react";

const Organizations = () => {

    const [type, setType] = useState("foundations")

    return (
        <div className="">
            <span>Komu pomagamy?</span>
            <div>Ozdobnik</div>
            <div>
                <button onClick={() => {
                    setType("foundations")
                }}>Fundacjom
                </button>
                <button onClick={() => {
                    setType("nfo")
                }}>Organizacjom <br/> pozarządowym
                </button>
                <button onClick={() => {
                    setType("local")
                }}>Lokalnym <br/> zbiórkom
                </button>
            </div>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda beatae blanditiis
                cupiditate dicta dolor eligendi facere harum id, illo, iste iusto, magnam nisi quod reiciendis
                suscipit tempora unde voluptatum.
            </span>
            <div className="listContainer">
                {/* TODO Jak pokazać paginację kolejnych elementów za licznik i skąd się bierze na dole?*/}
                {type === "foundations" && <div>
                    PLACEHOLDER POD WPISY 1
                </div>}
                {type === "nfo" && <div>
                    PLACEHOLDER POD WPISY 2
                </div>}
                {type === "local" && <div>
                    PLACEHOLDER POD WPISY 3
                </div>}
            </div>
        </div>
    )
}

export default Organizations