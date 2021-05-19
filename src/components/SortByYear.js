// SortByYear.js

import BookCard from "./BookCard";

const SortByYear = (props) => {

    const { books } = props;

    const sortByYear = books.sort((a, b) => {
        if (a.publish_year[0] < b.publish_year[0])
            return 1;
        else return -1;
    });

    return (
        sortByYear.map((book) => {
            return (
                <BookCard book={book} key={book.key}/>
            )
        })
    )
}

export default SortByYear;