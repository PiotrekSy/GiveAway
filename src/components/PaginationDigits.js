import React from "react";

const Pagination = ({elementsPerPage, totalElements, paginate}) => {
    // tablica do której chcę wrzucać ilość stron
    const paginationDigits = [];
    // ustawianie ilości cyfr (zaokrąglenie ilości stron po podzieleniu całości elementów przez zadaną ilość elementów na stronie)
    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        paginationDigits.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {paginationDigits.map(number => <li key={number}>
                    <div onClick={() => paginate(number)}>{number}</div>
                </li>)}
            </ul>
        </div>)
}

export default Pagination