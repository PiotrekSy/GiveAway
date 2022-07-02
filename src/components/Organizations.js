import React, {useState, useEffect} from "react";

const Organizations = () => {

    //włączanie odpowiedniej sekcji
    const [type, setType] = useState("foundations")
    //paginacja dla sekcji organizations:
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
    //pobieranie elementów z servera firebase
    useEffect(() => {

    });

    return (<div className="">
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
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda beatae blanditiis
            cupiditate dicta dolor eligendi facere harum id, illo, iste iusto, magnam nisi quod reiciendis
            suscipit tempora unde voluptatum.
        </span>
        <div className="listContainer">
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