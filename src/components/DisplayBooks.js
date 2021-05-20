// DisplayBooks.js

import BookCard from "./BookCard";

const DisplayBooks = (props) => {

    const { books, bookTitle } = props;
    // destructuring from props

    return(
        <section>
            <div className="display-message">
                <p>Currently displaying results for '<strong>{bookTitle}</strong>'</p>
            </div>
            <div className="display-books-container">
                { 
                    books.map((book)=> {
                        return(
                            <BookCard book={book} key={book.key}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default DisplayBooks;