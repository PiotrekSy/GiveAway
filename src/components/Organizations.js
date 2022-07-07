import React, {useEffect, useState} from "react";
import db from "./firebase";
import PaginationDigits from "./PaginationDigits";
import {collection, onSnapshot} from "@firebase/firestore";

const Organizations = () => {
    //przełączanie między typami wspartych jednostek i samo ładowanie ich z servera firebase
    const [type, setType] = useState("nfo")
    const [fundationsList, setFundationsList] = useState([{name: "LOADING.....", id: "loader"}])
    const [organisationsList, setOrganisationsList] = useState([{name: "LOADING.....", id: "loader"}])
    const [localList, setLocalList] = useState([{name: "LOADING.....", id: "loader"}])

//zaciąganie wszystkich danych elementów z firebase
    useEffect(() => {
        onSnapshot(collection(db, "fundations"), (snapshot) => {
            setFundationsList(snapshot.docs.map(doc => doc.data()))
        })
        onSnapshot(collection(db, "organizations"), (snapshot) => {
            setOrganisationsList(snapshot.docs.map(doc => doc.data()))
        })
        onSnapshot(collection(db, "local"), (snapshot) => {
            setLocalList(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    //paginacja dla sekcji organizations:
    const [currentPage, setCurrentPage] = useState(1)
    const [elementsPerPage] = useState(3)
    const lastElementOfList = currentPage * elementsPerPage
    const firstElementOfList = lastElementOfList - elementsPerPage

    // zmiana stron:
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <div className="organizations" id="organizations">
            <span className="organizationsTitle">Komu pomagamy?</span>
            <div className="organizationsDecoration"/>
            <div className="organizationsButtons">
                <div className="organizationButton"
                     style={{border: (type === "fundations" ? "1px solid black" : "none")}}
                     onClick={(e) => {
                         e.preventDefault()
                         setCurrentPage(1)
                         setType("fundations")
                     }}>
                    <div className="organizationButtonRange">
                        <p className="organizationButtonText">Fundacjom</p>
                    </div>
                </div>
                <div className="organizationButton"
                     style={{border: (type === "nfo" ? "1px solid black" : "none")}}
                     onClick={(e) => {
                         e.preventDefault()
                         setCurrentPage(1)
                         setType("nfo")
                     }}>
                    <div className="organizationButtonRange">
                        <p className="organizationButtonText">Organizacjom <br/> pozarządowym</p>
                    </div>
                </div>
                <div className="organizationButton"
                     style={{border: (type === "local" ? "1px solid black" : "none")}}
                     onClick={(e) => {
                         e.preventDefault()
                         setCurrentPage(1)
                         setType("local")
                     }}>
                    <div className="organizationButtonRange">
                        <p className="organizationButtonText">Lokalnym <br/> zbiórkom</p>
                    </div>
                </div>
            </div>
            <span className="organizationsDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda beatae blanditiis
            cupiditate dicta dolor eligendi facere harum id, illo, iste iusto, magnam nisi quod reiciendis
            suscipit tempora unde voluptatum.
            </span>

            <div className="organizationsContainer">
                {type === "fundations" && <div className="organizationsItems">
                    {fundationsList.map(element => <div key={element.name} className="listElement">
                        <div className="organizationMainData">
                            <span className="organizationName">{element.name}</span>
                            <span className="organizationTarget">Cel misji: {element.target}</span>
                        </div>
                        <span className="organizationRequest">{element.requests}</span>
                    </div>).slice(firstElementOfList, lastElementOfList)}
                    {fundationsList.length > elementsPerPage &&
                        <PaginationDigits className="pagination"
                                          elementsPerPage={elementsPerPage}
                                          totalElements={fundationsList.length}
                                          paginate={paginate}
                        />}
                </div>}
                {type === "nfo" && <div className="organizationsItems">
                    {organisationsList.map(element => <div key={element.name} className="listElement">
                        <div className="organizationMainData">
                            <span className="organizationName">{element.name}</span>
                            <span className="organizationTarget">{element.target}</span>
                        </div>
                        <span className="organizationRequest">{element.requests}</span>
                    </div>).slice(firstElementOfList, lastElementOfList)}
                    {organisationsList.length > elementsPerPage &&
                        <PaginationDigits className="pagination"
                                          elementsPerPage={elementsPerPage}
                                          totalElements={organisationsList.length}
                                          paginate={paginate}
                        />}
                </div>}
                {type === "local" && <div className="organizationsItems">
                    {localList.map(element => <div key={element.name} className="listElement">
                        <div className="organizationMainData">
                            <span className="organizationName">{element.name}</span>
                            <span className="organizationTarget">{element.target}</span>
                        </div>
                        <span className="organizationRequest">{element.requests}</span>
                    </div>).slice(firstElementOfList, lastElementOfList)}
                    {localList.length > elementsPerPage &&
                        <PaginationDigits className="pagination"
                                          elementsPerPage={elementsPerPage}
                                          totalElements={localList.length}
                                          paginate={paginate}
                        />}
                </div>}
            </div>
        </div>)
}

export default Organizations