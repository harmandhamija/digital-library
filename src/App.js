// import './App.css';
import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import DisplayBooks from './components/DisplayBooks';
import SortByYear from './components/SortByYear';
import SortByTitle from './components/SortByTitle';
// import SortByYear from './components/SortByYear';
// import SortByTitle from './components/SortByTitle';

function App() {

  const [bookTitle, setBookTitle] = useState('The Great Gatsby');
  const [books, setBooks] = useState([]);

  const [sortAlpha, setSortAlpha] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: "http://openlibrary.org/search.json?",
      dataResponse: "JSON",
      params: {
        q: bookTitle
      }
    }).then(response => {
      response = response.data.docs
      let filteredResponse = response.filter((book)=> {
        return book.author_name && book.publish_year && book.isbn;
        // filtering objects with properties of author_name, publish_year & isbn
      })
      setBooks(filteredResponse.slice(0, 20));
      // limit the results to 20.
      console.log(books);
    }).catch(error => {
      alert("No data received.Please try again later!");
    })
  }, [bookTitle]);

  const getUserInput = (userInput, sortByAlpha, sortByYear) => {
    setBookTitle(userInput);
    setSortYear(sortByYear);
    setSortAlpha(sortByAlpha);
  }

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>the book factory</h1>
          <Form getUserInput={getUserInput} setSortAlpha={setSortAlpha} setSortYear={setSortYear} />
        </div>
      </header>

      <div className="wrapper">

      <main>
        <DisplayBooks books={books} sortAlpha={sortAlpha} sortYear={sortYear} />
      </main>

      </div>

    </div>
  );
}

export default App;
