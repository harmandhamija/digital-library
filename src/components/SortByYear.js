// SortByYear.js

import BookCard from "./BookCard";

const SortByYear = (props) => {

    const { books, bookTitle } = props;

    const sortByYear = books.sort((a, b) => {
        if (a.publish_year[0] < b.publish_year[0])
            return 1;
        else 
            return -1;
    });

    return (
        <section>

            <div className="display-message">
                <p>Currently displaying results for '<strong>{bookTitle}</strong>'</p>
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