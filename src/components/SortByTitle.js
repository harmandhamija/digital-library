// SortByTitle.js

import BookCard from "./BookCard";

const SortByTitle = (props) => {
    const {books} = props;

    const sortByTitle = books.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        else return 1;
    });

    return (
        sortByTitle.map((book) => {
            return (
                <BookCard book={book} key={book.key}/>
            )
        })
    )
}

export default SortByTitle;