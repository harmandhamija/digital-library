// BookCard.js

const BookCard = (props) => {
    const { book } = props;

    return(
        <div className="display-books" key={book.key}>
            
            <div className="book-cover">
                <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt={`poster of ${book.title}`}></img>
            </div>

            <div className="book-content">
                <h2>{book.title}</h2>
                <h3>{book.author_name[0]}</h3>
                <p>Published - {book.publish_year[0]}</p>
            </div>

        </div>
    )
}

export default BookCard;