import React from "react";

const Pagination = ({elementsPerPage, totalElements, paginate}) => {

    // tablica do której chcę wrzucać ilość stron
    const paginationDigits = [];

    // ustawianie ilości cyfr (zaokrąglenie ilości stron po podzieleniu całości elementów przez zadaną ilość elementów na stronie)
    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        paginationDigits.push(i)
    }

    //Sam render elementu. Wywołanie jest w wyższej sekcji uwarunkowane ilością elementów. Jeżeli do wyświetlenia jest ich mniej niż
    //elementów wyświetlanych w jednym bloku to element się nie wyrenderuje.

    return (
        <div className="paginationContainer">
            <div className="pagination">
                {paginationDigits.map(number =>
                    <div key={number} className="paginationDigitArea">
                        <div className="paginationDigit"
                             onClick={() => paginate(number)}>{number}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pagination