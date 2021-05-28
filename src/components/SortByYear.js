// SortByYear.js

import BookCard from "./BookCard";

const SortByYear = (props) => {

    const { books, bookTitle } = props;

    const sortByYearArray = [...books];

    // function to sort data by published year
    const sortByYear = sortByYearArray.sort((a, b) => {
        if (a.publish_year[0] < b.publish_year[0])
            return 1;
        else 
            return -1;
    });

    return (
        <section>

            <div className="display-message">
                <p>Currently displaying results for '<strong>{bookTitle}</strong>' (sorted by recently published)</p>
            </div>

            <div className="display-books-container">
                {
                    sortByYear.map((book) => {
                        return (
                            <BookCard book={book} key={book.key}/>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default SortByYear;