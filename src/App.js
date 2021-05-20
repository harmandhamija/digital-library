import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import DisplayBooks from './components/DisplayBooks';
import SortByYear from './components/SortByYear';
import SortByTitle from './components/SortByTitle';
import Footer from './components/Footer'; 

function App() {

  const [bookTitle, setBookTitle] = useState('The Great Gatsby');
  const [books, setBooks] = useState([]);

  const [sortAlpha, setSortAlpha] = useState(false);
  const [sortYear, setSortYear] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'GET',
      url: "https://openlibrary.org/search.json?",
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
      setIsLoading(false);
    }).catch(error => {
      alert("No data received.Please try again later!");
      setIsLoading(false);
    })
  }, [bookTitle]);

  const getUserInput = (userInput, sortByAlpha, sortByYear) => {
    setBookTitle(userInput);
    setSortYear(sortByYear);
    setSortAlpha(sortByAlpha);
  }
  // callback function to receive userInput & sortBy information from form.js

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <Form getUserInput={getUserInput} setSortAlpha={setSortAlpha} setSortYear={setSortYear} setIsLoading={setIsLoading} />
        </div>
      </header>

      <div className="wrapper">
        <main>
        {
            isLoading
            ? <div className='loadingBar'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            : books.length === 0
            ? <div className="error-message">
                <p>No results found..Please try again or check back later!</p>
              </div>
            :sortAlpha
            ?<SortByTitle books={books} bookTitle={bookTitle}/>
            :sortYear
            ?<SortByYear books={books} bookTitle={bookTitle} />
            :<DisplayBooks books={books} sortAlpha={sortAlpha} sortYear={sortYear} bookTitle={bookTitle} />
          }
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
