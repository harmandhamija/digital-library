import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Forms from './components/Forms';
import DisplayBooks from './components/DisplayBooks';
import Footer from './components/Footer';
import Filter from './components/Filter';

function App() {

  const [bookTitle, setBookTitle] = useState('The Great Gatsby');
  const [books, setBooks] = useState([]);
  const [userSortChoice, setUserSortChoice] = useState('');
  // this array will be set with user sort choice

  const [isLoading, setIsLoading] = useState(true);

  const [filterByYear, setFilterByYear] = useState([]);
  // array for published years of books to place for form's select options to choose from!

  const [userFilterChoice, setUserFilterChoice] = useState();
  // this array will be set with user filter choice!

  // const [filtererdResults, setfilteredResults] = useState([]);
  // // set this array with filtered results based on user filter selection!

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
      const filteredResponse = response.filter((book)=> {
        return book.author_name && book.publish_year && book.isbn;
        // filtering objects with properties of author_name, publish_year & isbn
      })
      const filteredBooksArray = [...filteredResponse.slice(0, 20)];
      // limit the results to 20.
      setBooks(filteredBooksArray);
      setIsLoading(false);

      // mapping over filtered array to get book published years & key for filtering results
      // map always return a new array with the properties returned from it, new array is bookPublishedYear
      const bookPublishedYear = filteredBooksArray.map((filteredBook)=> {
        return {year: filteredBook.publish_year[0], key: filteredBook.key};
        // returned an object with year & key which is passed to Form.js component for filterByYear form options.
        // this could have been done by pushing an object in the new array as well, but this is the option which I felt more comfortbale with.
        // key will be needed when mapping over the object for options
      })
      const set = new Set();
      // set is new object type to create unique values from an array.
      const uniqueYearArray = bookPublishedYear.filter((year) => {
        const duplicate = set.has(year.year);
        set.add(year.year)
        return !duplicate;
      })
      setFilterByYear(uniqueYearArray);
    }).catch((error) => {
      alert("No data received.Please try again later!");
      setIsLoading(false);
    })
  }, [bookTitle]);

  const copyArray = [...books];

  const filteredBooksByYearArray = copyArray.filter((book) => {
    return book.publish_year[0] == userFilterChoice;
  })
  // filtered array with user filter choice of year.
  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <Forms setBookTitle={setBookTitle} setUserSortChoice={setUserSortChoice} setUserFilterChoice={setUserFilterChoice} setIsLoading={setIsLoading} filterByYear={filterByYear} />
        </div>
      </header>

      <div className="wrapper">
        <main>
          {isLoading
            ? <div className='loadingBar'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          :filteredBooksByYearArray.length
            ?<Filter filteredBooksByYearArray={filteredBooksByYearArray} bookTitle={bookTitle} userFilterChoice={userFilterChoice}/>
            :<DisplayBooks books={books} bookTitle={bookTitle} userSortChoice={userSortChoice}/>
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
