import React, {useEffect, useState} from "react"
import {addDoc, collection} from "@firebase/firestore";
import {db} from "./firebase";

const Form = () => {
    // nawigacja:

    const [siteNum, setSiteNum] = useState(1)

    const buttonBackHandle = () => {
        setSiteNum(prevState => prevState > 0 ? prevState - 1 : 0)
    }
    const buttonForwardHandle = () => {
        if (siteNum <= 6) {
            setSiteNum(prevState => prevState + 1)
        }
    }

    //  zmiana typu Itemów (RADIO menu):
    const [itemType, setItemType] = useState("")
    const handleRadioChange = (event) => {
        setItemType(event.target.value)
    }

    //  zmiana ilosći worków do oddania (SELECT menu):
    const [bagsNumber, setBagsNumber] = useState("")
    const handleSelectChange = (event) => {
        setBagsNumber(event.target.value)
    }

    //  zmiana miasta (SELECT menu):
    const [localization, setLocalization] = useState("")
    const handleLocationSelectChange = (event) => {
        setLocalization(event.target.value)
    }

    //  grupy do pomocy:
    const [helpGroups, setHelpGroups] = useState(["dzieciom"])
    const helpGroupHandler = (e) => {
        if (!helpGroups.includes(e.target.value)) {
            setHelpGroups(helpGroups => [...helpGroups, e.target.value])
        } else {
            setHelpGroups(array => array.filter(element => element !== e.target.value));
        }
    }

    //dokładna nazwa organizacji do pomocy
    const [localizationSpecific, setLocalizationSpecific] = useState();

    // wysłanie formularza i zbieranie danych do kupy:
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [courierMsg, setCourierMsg] = useState("")

    const [err, setErr] = useState([])
    const [messageValidated, setMessageValidated] = useState(false)

    //walidacja postal kodu
    const isValidPostalCode = (postCode) => {
        return /^\d\d-\d\d\d$/.test(postCode)
    }

    //bieżąca validacja formularzy
    const validate = () => {
        setErr([])
        if (itemType === "") {
            setErr(prevState => [...prevState, "Wybierz co chcesz przekazać na pierwszej stronie formularza"])
        }
        if (bagsNumber === "") {
            setErr(prevState => [...prevState, "Wybierz ilość worków do odebrania przez kuriera na drugiej stronie formularza"])
        }
        if (localization === "" && localizationSpecific === "") {
            setErr(prevState => [...prevState, "Wybierz organizację lub miasto w którym chcesz udzielić pomocy"])
        }
        if (helpGroups.length === 0) {
            setErr(prevState => [...prevState, "Wybierz przynajmniej jedną grupę której chcesz pomóc"])
        }
        if (street.length < 2) {
            setErr(prevState => [...prevState, "Nazwa ulicy musi mieć przynajmniej 2 znaki"])
        }
        if (city.length < 2) {
            setErr(prevState => [...prevState, "Nazwa miasta musi mieć przynajmniej 2 znaki"])
        }
        if (!isValidPostalCode(postalCode)) {
            setErr(prevState => [...prevState, "Kod pocztowy musi mieć format XX-XXX"])
        }
        if (phoneNumber.length !== 9) {
            setErr(prevState => [...prevState, "Długość numeru telefonu musi być równa 9 znakom"])
        }
        if (date === "") {
            setErr(prevState => [...prevState, "Ustaw datę odbioru"])
        }
        if (time === "") {
            setErr(prevState => [...prevState, "Ustaw godzinę odbioru"])
        }
    }

    useEffect(() => {
        if (err !== [] && helpGroups !== [] && bagsNumber !== "" && itemType !== "" && street !== "" && city !== "" && postalCode !== "" && phoneNumber !== "" && date !== "" && time !== "") setMessageValidated(true)
    }, [helpGroups, bagsNumber, itemType, err, street, city, postalCode, phoneNumber, date, time])

    const collectionRef = collection(db, "giveAwayRequests")

    const submitHandle = async (e) => {
        e.preventDefault()
        setSiteNum(6);
        if (messageValidated) {
            await addDoc(collectionRef, {
                itemType, bagsNumber, localization, helpGroups, street, city, postalCode, phoneNumber, date, time,
            }).then(() => {
                console.log("FORMULARZ ZOSTAŁ WYSŁANY!")

            }).catch(() => {
                console.log("coś poszło nie tak")
            })
            setItemType("")
            setBagsNumber("")
            setLocalization("")
            setHelpGroups(["dzieciom"])
            setStreet("")
            setCity("")
            setPostalCode("")
            setPhoneNumber("")
            setDate("")
            setTime("")
            setCourierMsg("")
        }
    }

    return (<div id="Form" className="giveAwayForm">
        {(siteNum === 1 || siteNum === 2 || siteNum === 3 || siteNum === 4) && <div className="orangeBelt">
            {siteNum === 1 && <div>
                <div className="orangeBeltTitle"><b>Ważne!</b></div>
                <p className="orangeBeltText">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                    wiedzieć komu najlepiej je przekazać.</p>
            </div>}
            {siteNum === 2 && <div>
                <div className="orangeBeltTitle"><b>Ważne!</b></div>
                <p className="orangeBeltText">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
                    jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>}
            {siteNum === 3 && <div>
                <div className="orangeBeltTitle"><b>Ważne!</b></div>
                <p className="orangeBeltText">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
                    wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>}
            {siteNum === 4 && <div>
                <div className="orangeBeltTitle"><b>Ważne!</b></div>
                <p className="orangeBeltText">Podaj adres oraz termin odbioru rzeczy</p>
            </div>}
        </div>}
        {(siteNum === 1 || siteNum === 2 || siteNum === 3 || siteNum === 4) &&
            <div className="formPageCount">Krok :{siteNum}/4</div>}
        <div className="errorMessages">{[...err].join(" , ")}</div>
        <form className="formWrapper" onSubmit={submitHandle}>
            {siteNum === 1 && <div className="radioMenuWrapper">
                <div className="radioMenuTitle"><b>Zaznacz co chcesz oddać:</b></div>
                <div className="radioMenu">
                    <div className="radioMenuItem">
                        <input className="radioMenuText"
                               type="radio"
                               name="typeOFItems"
                               value="Ubrania, które nadają się do ponownego użycia"
                               onChange={handleRadioChange}/>
                        <div>ubrania, które nadają się do ponownego użycia</div>
                    </div>
                    <div className="radioMenuItem">
                        <input className="radioMenuText"
                               type="radio"
                               name="typeOFItems"
                               value="ubrania, do wyrzucenia"
                               onChange={handleRadioChange}/>
                        <div>ubrania, do wyrzucenia</div>
                    </div>
                    <div className="radioMenuItem">
                        <input className="radioMenuText"
                               type="radio"
                               name="typeOFItems"
                               value="zabawki"
                               onChange={handleRadioChange}/>
                        <div>zabawki</div>
                    </div>
                    <div className="radioMenuItem">
                        <input className="radioMenuText"
                               type="radio"
                               name="typeOFItems"
                               value="książki"
                               onChange={handleRadioChange}/>
                        <div>książki</div>
                    </div>
                    <div className="radioMenuItem">
                        <input className="radioMenuText"
                               type="radio"
                               name="typeOFItems"
                               value="Inne"
                               onChange={handleRadioChange}/>
                        <div>Inne</div>
                    </div>
                </div>
            </div>}
            {siteNum === 2 && <div className="selectMenuWrapper">
                <div className="">
                    <div className="radioMenuTitle"><b>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</b></div>
                    <div className="selectMenu">
                        <p>Liczba 60l worków:</p>
                        <select className="selectMenuWindow" onChange={handleSelectChange} defaultValue="">
                            <option value="" hidden>{bagsNumber === "" ? "--wybierz--" : bagsNumber}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>}
            {siteNum === 3 && <div className="selectMenuLocationWrapper">
                <div className="locationMenu">
                    <div className="locationMenuTitle"><b>Lokalizacja:</b></div>
                    <select className="locationSelectMenuWindow" onChange={handleLocationSelectChange} defaultValue="">
                        <option value="" hidden>--wybierz--</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
                <div className="groupMenuTitle"><b>Komu chcesz pomóc?</b></div>
                <div className="groupMenu">
                    <div className="groupMenuItem">
                        <input type="checkbox"
                               value={"dzieciom"}
                               defaultChecked={true}
                               onClick={helpGroupHandler}/>
                        <div className="groupInputText">dzieciom</div>
                    </div>
                    <div className="groupMenuItem">
                        <input type="checkbox"
                               value={"samotnym matkom"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        <div className="groupInputText">samotnym matkom</div>
                    </div>
                    <div className="groupMenuItem">
                        <input type="checkbox"
                               value={"bezdomnym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        <div className="groupInputText">bezdomnym</div>
                    </div>
                    <div className="groupMenuItem">
                        <input type="checkbox"
                               value={"niepełnosprawnym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        <div className="groupInputText">niepełnosprawnym</div>
                    </div>
                    <div className="groupMenuItem">
                        <input type="checkbox"
                               value={"osobom starszym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        <div className="groupInputText">osobom starszym</div>
                    </div>
                </div>
                <div className="organizationInput">
                    <div className="organizationInputWrapper">
                        <div className="organizationInputText">
                            <b>Wpisz nazwę konretnej organizacji (opcjonalnie):</b>
                        </div>
                        <input className="organizationInput"
                               type="text"
                               onChange={e => setLocalizationSpecific(e.target.value)}/>
                    </div>
                </div>
            </div>}
            {siteNum === 4 && <div className="addressMenuLocationWrapper">
                <div className="wholeform">
                    <div className="addressForm">
                        <div className="leftFormSide">
                            <div className="locationMenuHeader"><b>Adres odbioru:</b></div>
                            <div className="formInput">
                                <div>Ulica</div>
                                <input className="locationMenuInput" type="text"
                                       placeholder={"conajmniej 2 znaki"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setStreet(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Miasto</div>
                                <input className="locationMenuInput" type="text"
                                       placeholder={"conajmniej 2 znaki"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setCity(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Kod <br/>pocztowy</div>
                                <input className="locationMenuInput" type="text"
                                       placeholder={"xx=xxx"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setPostalCode(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Numer telefonu</div>
                                <input className="locationMenuInput" type="number"
                                       placeholder={"komórkowy - 9 znaków"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setPhoneNumber(e.target.value)
                                       }}
                                />
                            </div>
                        </div>
                        <div className="rightFormSide">
                            <div className="locationMenuHeader"><b>Termin odbioru:</b></div>
                            <div className="formInput">
                                <div>Data</div>
                                <input className="locationMenuInput" type="date"
                                       onChange={e => {
                                           e.preventDefault()
                                           setDate(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Czas</div>
                                <input className="locationMenuInput" type="time"
                                       onChange={e => {
                                           e.preventDefault()
                                           setTime(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Uwagi dla kuriera</div>
                                <div>
                                    <textarea className="locationMenuTextarea"
                                              onChange={e => {
                                                  e.preventDefault()
                                                  setCourierMsg(e.target.value)
                                              }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {siteNum === 5 && <div className="sumOfAllWrapper">
                <div className="sumUpTitle"><b>Podsumowanie Twojej darowizny</b></div>
                <div className="sumIconItems">
                    <div><p>Oddajesz:</p></div>
                    <div className="sumIconItem">
                        <div className="clothesIcon"/>
                        {(bagsNumber !== "" && itemType !== "" && helpGroups.length > 0) &&
                            <div
                                className="sumIconText">{bagsNumber} {bagsNumber === "1" ? 'worek' : (bagsNumber >= "5" ? 'worków' : "worki")},
                                {itemType}, {[...helpGroups.join(", ")]}</div>}
                    </div>
                    <div className="sumIconItem">
                        <div className="roundIcon"/>
                        <div
                            className="sumIconText"> {localizationSpecific !== "" ? `dla lokalizacji: ${localization}` :
                            (localization !== "" ? `dla organizacji: ${localizationSpecific}` : null)}
                        </div>
                    </div>
                </div>
                <div className="sumFormInfo">
                    <div className="sumLeftFormSide">
                        <p><b>Adres odbioru:</b></p>
                        <div className="formInput">
                            <div>Ulica</div>
                            <div>{street}</div>
                        </div>
                        <div className="formInput">
                            <div>Miasto</div>
                            <div>{city}</div>
                        </div>
                        <div className="formInput">
                            <div>Kod pocztowy</div>
                            <div>{postalCode}</div>
                        </div>
                        <div className="formInput">
                            <div>Numer telefonu</div>
                            <div>{phoneNumber}</div>
                        </div>
                    </div>
                    <div className="sumRightFormSide">
                        <p><b>Termin odbioru:</b></p>
                        <div className="formInput">
                            <div>Data</div>
                            <div>{date}</div>
                        </div>
                        <div className="formInput">
                            <div>Godzina</div>
                            <div>{time}</div>
                        </div>
                        <div className="formInputLast">
                            <div>Uwagi dla kuriera<br/></div>
                            <div>{courierMsg}</div>
                        </div>
                    </div>
                </div>
            </div>}
            {siteNum === 6 && <div className="thanksWrapper">
                <div className="sumUpThanksText">Dziękujemy za przesłanie formularza<br/>
                    Na maila prześlemy wszelkie<br/>
                    informacje o odbiorze.
                </div>
                <div className="decoration"></div>
            </div>}
            <div className="formNav">
                {(siteNum !== 1 && siteNum !== 6) &&
                    <button type="button" className="formNavButton" onClick={buttonBackHandle}>Wstecz</button>}
                {(siteNum === 4) && <button type="button" className="formNavButton" onClick={() => {
                    validate()
                    if (messageValidated) {
                        setSiteNum(5)
                    }
                }}>Dalej</button>}
                {(siteNum !== 4 && siteNum !== 5 && siteNum !== 6) &&
                    <button type="button" className="formNavButton"
                            onClick={buttonForwardHandle}>Dalej</button>}
                {siteNum === 5 && <button type="submit" className="formNavButton">Potwierdzam</button>}
            </div>
        </form>
    </div>)
}

export default Form