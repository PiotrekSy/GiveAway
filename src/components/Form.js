import React, {useState} from "react"


const Form = () => {

    // nawigacja:
    const [siteNum, setSiteNum] = useState(1)
    const buttonBackHandle = (e) => {
        e.preventDefault()
        if (siteNum > 0) {
            setSiteNum(prevState => prevState - 1)
        }
    }
    const buttonForwardHandle = (e) => {
        e.preventDefault()
        if (siteNum <= 4) {
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
            console.log(helpGroups)
        } else {
            setHelpGroups(array => array.filter(element => element !== e.target.value));
            console.log(helpGroups)
        }
    }
    //dokładna nazwa organizacji do pomocy
    const [localizationSpecific, setLocalizationSpecific] = useState();

    //formularz adresowy:
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [courierMsg, setCourierMsg] = useState("")

    // wysłanie formularza:
    const submitHandle = () => {

        buttonForwardHandle()
        console.log("submit passed")
    }


    return (<div id="Form" className="giveAwayForm">
        {(siteNum === 1 || siteNum === 2 || siteNum === 3 || siteNum === 4) && <div className="orangeBelt">
            {siteNum === 1 && <div>
                <div className="importantInForm"><b>Ważne!</b></div>
                <p className="importantText">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                    wiedzieć komu najlepiej je przekazać.</p>
            </div>}
            {siteNum === 2 && <div>
                <div className="importantInForm"><b>Ważne!</b></div>
                <p className="importantText">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
                    jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>}
            {siteNum === 3 && <div>
                <div className="importantInForm"><b>Ważne!</b></div>
                <p className="importantText">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
                    wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>}
            {siteNum === 4 && <div>
                <div className="importantInForm"><b>Ważne!</b></div>
                <p className="importantText">Podaj adres oraz termin odbioru rzeczy</p>
            </div>}
        </div>}
        {(siteNum === 1 || siteNum === 2 || siteNum === 3 || siteNum === 4) && <div>Krok :{siteNum}/4</div>}
        <form className="formWrapper" onSubmit={submitHandle}>
            {siteNum === 1 && <div className="radioMenuWrapper">
                <div className="radioMenu">
                    <label> <input type="radio"
                                   name="typeOFItems"
                                   value="Ubrania, które nadają się do ponownego użycia"
                                   onChange={handleRadioChange}/>
                        ubrania, które nadają się do ponownego użycia</label>
                    <label> <input type="radio"
                                   name="typeOFItems"
                                   value="ubrania, do wyrzucenia"
                                   onChange={handleRadioChange}/> ubrania, do wyrzucenia</label>
                    <label> <input type="radio"
                                   name="typeOFItems"
                                   value="zabawki"
                                   onChange={handleRadioChange}/> zabawki</label>
                    <label> <input type="radio"
                                   name="typeOFItems"
                                   value="książki"
                                   onChange={handleRadioChange}/> książki</label>
                    <label> <input type="radio"
                                   name="typeOFItems"
                                   value="Inne"
                                   onChange={handleRadioChange}/> Inne</label>
                </div>
            </div>}
            {siteNum === 2 && <div className="selectMenuWrapper">
                <div className="">
                    <p>Liczba 60l worków</p>
                    <select onChange={handleSelectChange} value="">
                        <option value="" placeholder={"0"}></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>}
            {siteNum === 3 && <div className="selectMenuLocationWrapper">
                <div className="locationMenu">
                    <p><b>Lokalizacja:</b></p>
                    <select onChange={handleLocationSelectChange} value="">
                        <option value="" placeholder={"--wybierz"}></option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
                <div className="groupMenu">
                    <p><b>Komu chcesz pomóc?</b></p>
                    <label>
                        <input type="checkbox"
                               value={"dzieciom"}
                               defaultChecked={true}
                               onClick={helpGroupHandler}/>
                        dzieciom
                    </label>
                    <label>
                        <input type="checkbox"
                               value={"samotnym matkom"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        samotnym matkom
                    </label>
                    <label>
                        <input type="checkbox"
                               value={"bezdomnym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        bezdomnym
                    </label>
                    <label>
                        <input type="checkbox"
                               value={"niepełnosprawnym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        niepełnosprawnym
                    </label>
                    <label>
                        <input type="checkbox"
                               value={"osobom starszym"}
                               defaultChecked={false}
                               onClick={helpGroupHandler}/>
                        osobom starszym
                    </label>
                </div>
                <div className="organizationInput">
                    <label>
                        <b>Wpisz nazwę konretnej organizacji (opcjonalnie):</b>
                        <input type="text"
                               onChange={e => setLocalizationSpecific(e.target.value)}/>
                    </label>
                </div>
            </div>}
            {siteNum === 4 && <div className="addressMenuLocationWrapper">
                <div className="">
                    <div className="">
                        <div className="leftFormSide">
                            <p><b>Adres odbioru:</b></p>
                            <div className="formInput">
                                <div>Ulica</div>
                                <input type="text"
                                       placeholder={"conajmniej 2 znaki"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setStreet(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Miasto</div>
                                <input type="text"
                                       placeholder={"conajmniej 2 znaki"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setCity(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Kod pocztowy</div>
                                <input type="text"
                                       placeholder={"xx=xxx"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setPostalCode(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Numer telefonu</div>
                                <input type="number"
                                       placeholder={"komórkowy - 9 znaków"}
                                       onChange={e => {
                                           e.preventDefault()
                                           setPhoneNumber(e.target.value)
                                       }}
                                />
                            </div>
                        </div>
                        <div className="rightFormSide">
                            <p><b>Termin odbioru:</b></p>
                            <div className="formInput">
                                <div>Data</div>
                                <input type="date"
                                       onChange={e => {
                                           e.preventDefault()
                                           setDate(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Czas</div>
                                <input type="time"
                                       onChange={e => {
                                           e.preventDefault()
                                           setTime(e.target.value)
                                       }}/>
                            </div>
                            <div className="formInput">
                                <div>Uwagi dla kuriera</div>
                                <textarea onChange={e => {
                                    e.preventDefault()
                                    setCourierMsg(e.target.value)
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {siteNum === 5 && <div className="sumOfAllWrapper">
                <div><b>Podsumowanie Twojej darowizny</b></div>
                <div className="sumIconItems">
                    <div><p>Oddajesz:</p></div>
                    <div className="sumIconItem">
                        <div className="clothesIcon"/>
                        {(bagsNumber !== "" && itemType !== "" && helpGroups.length > 0) &&
                            <div>{bagsNumber} worki, {itemType}, {[...helpGroups]}</div>}
                    </div>
                    <div className="sumIconItem">
                        <div className="roundIcon"/>
                        <div> {localizationSpecific !== "" ?
                            (localization !== "" ? `dla lokalizacji: ${localization}` : null) :
                            `dla organizacji: ${localizationSpecific}`}
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
                        <div className="FormInput">
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
                            <div>Czas</div>
                            <div>{time}</div>
                        </div>
                        <div className="formInput">
                            <div>Uwagi dla kuriera</div>
                            <div>{courierMsg}</div>
                        </div>
                    </div>
                </div>
            </div>}
            {siteNum === 6 && <div className="thankingWrapper">
                <div className="">

                </div>
            </div>}
            <div className="formNav">
                {(siteNum !== 1 && siteNum !== 6) &&
                    <button className="formNavButton" onClick={buttonBackHandle}>Wstecz</button>}
                {(siteNum !== 5 && siteNum !== 6) &&
                    <button className="formNavButton" onClick={buttonForwardHandle}>Dalej</button>}
                {(siteNum === 5 && siteNum !== 6) &&
                    <button type="submit" className="formNavButton">Potwierdzam</button>}
            </div>
        </form>
    </div>)
}

export default Form