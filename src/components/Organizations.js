import React, {useEffect, useState} from "react";
import db from "./firebase";
import PaginationDigits from "./PaginationDigits"
import {collection, onSnapshot} from "@firebase/firestore";


const Organizations = () => {
    //przełączanie między typami wspartych jednostek i samo ładowanie ich z servera firebase
    const [type, setType] = useState("fundations")
    const [fundationsList, setFundationsList] = useState([{name: "LOADING.....", id: "loader"}])
    const [organisationsList, setOrganisationsList] = useState([{name: "LOADING.....", id: "loader"}])
    const [localList, setLocalList] = useState([{name: "LOADING.....", id: "loader"}])

    useEffect(() => {
        onSnapshot(collection(db, "fundations"), (snapshot) => {
            setFundationsList(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
        onSnapshot(collection(db, "organizations"), (snapshot) => {
            setOrganisationsList(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
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

    return (<div className="">
        <span>Komu pomagamy?</span>
        <div>Ozdobnik</div>
        <div>
            <button onClick={(e) => {
                e.preventDefault()
                setCurrentPage(1)
                setType("fundations")
            }}>Fundacjom
            </button>
            <button onClick={(e) => {
                e.preventDefault()
                setCurrentPage(1)
                setType("nfo")
            }}>Organizacjom <br/> pozarządowym
            </button>
            <button onClick={(e) => {
                e.preventDefault()
                setCurrentPage(1)
                setType("local")
            }}>Lokalnym <br/> zbiórkom
            </button>
        </div>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda beatae blanditiis
            cupiditate dicta dolor eligendi facere harum id, illo, iste iusto, magnam nisi quod reiciendis
            suscipit tempora unde voluptatum.
        </span>
        <div className="listContainer">
            {type === "fundations" && <div>
                {fundationsList.map(element =>
                    <div key={element.name} className="listElement">
                        <h1>{element.name}</h1>
                        <span>{element.target}</span>
                        <span>{element.requests}</span>
                    </div>
                ).slice(firstElementOfList, lastElementOfList)}
                <PaginationDigits
                    elementsPerPage={elementsPerPage}
                    totalElements={fundationsList.length}
                    paginate={paginate}/>
            </div>}
            {type === "nfo" && <div>
                {organisationsList.map(element =>
                    <div key={element.name} className="listElement">
                        <h1>{element.name}</h1>
                        <span>{element.target}</span>
                        <span>{element.requests}</span>
                    </div>
                ).slice(firstElementOfList, lastElementOfList)}
                <PaginationDigits
                    elementsPerPage={elementsPerPage}
                    totalElements={organisationsList.length}
                    paginate={paginate}/>
            </div>}
            {type === "local" && <div>
                {localList.map(element =>
                    <div key={element.name} className="listElement">
                        <h1>{element.name}</h1>
                        <span>{element.target}</span>
                        <span>{element.requests}</span>
                    </div>
                ).slice(firstElementOfList, lastElementOfList)}
                {localList.length > elementsPerPage &&
                    <PaginationDigits
                        elementsPerPage={elementsPerPage}
                        totalElements={localList.length}
                        paginate={paginate}
                    />}
            </div>}
        </div>
    </div>)
}

export default Organizations

// {foundationsPage === "firstPage" &&
// <div>
//     <div>
//         <h1>Fundacja "lorem Ipsum 1"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 2"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 3"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
// </div>
// }
// {foundationsPage === "secondPage" &&
// <div>
//     <div>
//         <h1>Fundacja "lorem Ipsum 4"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 5"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 6"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
// </div>
// }
// {foundationsPage === "thirdPage" &&
// <div>
//     <div>
//         <h1>Fundacja "lorem Ipsum 7"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 8"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
//     <div className="horizontalLine"/>
//     <div>
//         <h1>Fundacja "lorem Ipsum 9"</h1>
//         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
//         <span>Lorem ipsum dolor.</span>
//     </div>
// </div>
// }
// <div className="pageButtons">
//     <button className="pageButton" onClick={() => setFoundationsPage("firstPage")}>1</button>
//     <button className="pageButton" onClick={() => setFoundationsPage("secondPage")}>2</button>
//     <button className="pageButton" onClick={() => setFoundationsPage("thirdPage")}>3</button>
// </div>