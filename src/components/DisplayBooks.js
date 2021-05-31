// DisplayBooks.js

import BookCard from "./BookCard";
import SortByTitle from './SortByTitle';
import SortByYear from './SortByYear';

const DisplayBooks = (props) => {

    const { books, bookTitle, userSortChoice} = props;
    // destructuring from 

    return(
        <section>
            {
            books.length === 0
            ?<div className="error-message">
                <p>No books found for '<strong>{bookTitle}</strong>'..Please try again or check back later!</p>
            </div>

            :userSortChoice === 'sortByTitle'
            ?<SortByTitle books={books} bookTitle={bookTitle} />
            :userSortChoice === 'sortByYear'
            ?<SortByYear books={books} bookTitle={bookTitle} />
            :
            <>
                <div className="display-message">
                    <p>Currently displaying results for '<strong>{bookTitle}</strong>'</p>
                </div>
                <div className="display-books-container">
                    {
                        books.map((book) => {
                            return (
                                <BookCard book={book} key={book.key} />
                            )
                        })
                    }
                </div>
            </>
            }
            
        </section>
    )
}

export default DisplayBooks;