// DisplayBooks.js

import BookCard from "./BookCard";

const DisplayBooks = (props) => {
    const { books } = props;
    
    return(
        books.map((book)=> {
            return(
                <BookCard book={book} key={book.key}/>
            )
        })
    )
}

export default DisplayBooks;