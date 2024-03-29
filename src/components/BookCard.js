// BookCard.js

const BookCard = (props) => {
    const { book } = props;
    
    return(
        <div className="display-books" key={book.key}>
            
            <div className="book-cover">
                <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt={`poster of ${book.title}`}></img>
            </div>

            <div className="book-content">
                <h2>{book.title}</h2>
                <h3>By - {book.author_name[0]}</h3>
                <p>Published - {book.publish_year[0]}</p>
            </div>

            {/* <div className="book-save">
                <button onClick={handleClick}>Save</button>
            </div> */}

        </div>
    )
}

export default BookCard;