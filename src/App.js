import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import DisplayBooks from './components/DisplayBooks';
import Footer from './components/Footer';

function App() {

  const [bookTitle, setBookTitle] = useState('The Great Gatsby');
  const [books, setBooks] = useState([]);
  const [sortBooks, setSortBooks] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'GET',
      url: "https://openlibrary.org/search.json?",
      dataResponse: "JSON",
      params: {
        q: bookTitle
      }
    }).then((response) => {
      response = response.data.docs
      let filteredResponse = response.filter((book)=> {
        return book.author_name && book.publish_year && book.isbn;
        // filtering objects with properties of author_name, publish_year & isbn
      })
      setBooks(filteredResponse.slice(0, 20));
      // limit the results to 20.
      setIsLoading(false);
    }).catch((error) => {
      alert("No data received.Please try again later!");
      setIsLoading(false);
    })
  }, [bookTitle]);

  const getUserInput = (userInput, userOption) => {
    setBookTitle(userInput);
    setSortBooks(userOption);
  }
  // callback function to receive userInput & sortBy information from Form.js

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <Form getUserInput={getUserInput} setSortBooks={setSortBooks} setIsLoading={setIsLoading} />
        </div>
      </header>

      <div className="wrapper">
        <main>
          <DisplayBooks books={books} bookTitle={bookTitle} isLoading={isLoading} sortBooks={sortBooks} />
        </main>
      </div>

      <footer>
        <div className="wrapper">
          <Footer />
        </div>
      </footer>

    </div>
  );
}

export default App;
