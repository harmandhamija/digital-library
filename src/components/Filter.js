// // Filter.js

import BookCard from "./BookCard";

const Filter = (props) => {

    const {filteredBooksByYearArray, bookTitle, userFilterChoice} = props;
    
    return(

        <section>

            <div className="display-message">
                <p>Currently displaying results for '<strong>{bookTitle}</strong>' published in '<strong>{userFilterChoice}</strong>'</p>
            </div>

            <div className="display-books-container">
                {
                    filteredBooksByYearArray.map((book) => {
                        return (
                            <BookCard book={book} key={book.key} />
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Filter;