// BookCard.js

const BookCard = (props) => {
    const { book } = props;
    
    return(
        <div className="display-books" key={book.key}>
            <div className="book-cover">
                <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt=""></img>
            </div>

            <div className="book-content">
                <h1>{book.title}</h1>
                <h2>{book.author_name[0]}</h2>
                <p>Published - {book.publish_year[0]}</p>
            </div>

        </div>
    )
}

export default BookCard;