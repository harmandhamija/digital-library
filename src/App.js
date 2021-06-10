import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Forms from './components/Forms';
import DisplayBooks from './components/DisplayBooks';
import Footer from './components/Footer';
import Filter from './components/Filter';

const App = () => {

  // if react state changes in the parent component(App.js), every sinhle sub component would re-render by default. Thats why, when we console.log(books) in forms.js, it renders thrice because bookTitle, books & isLoading state changes in the app component.

  const [bookTitle, setBookTitle] = useState('The Great Gatsby');
  // this state contains user input from the search form.

  const [books, setBooks] = useState([]);
  // this array contains response from the api

  const [userSortChoice, setUserSortChoice] = useState('');
  // this array will be set with user sort choice

  const [isLoading, setIsLoading] = useState(true);
  // this contains loading state

  const [filterByYear, setFilterByYear] = useState([]);
  // array for published years of books to place for form's select options to choose from!

  const [userFilterChoice, setUserFilterChoice] = useState();
  // this array will be set with user filter choice!

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
        // filtering api response to get objects with properties of author_name, publish_year & isbn
      })
      const filteredBooksArray = [...filteredResponse.slice(0, 20)];
      // limit the results to 20.
      setBooks(filteredBooksArray);
      setIsLoading(false);
      // setting loading state to false once we get results back from the api to display on page.

      const bookPublishedYear = filteredBooksArray.map((filteredBook) => {
        return { year: filteredBook.publish_year[0], key: filteredBook.key };
      })
      // mapping over filtered array to get just book's published year & key for filtering results
      // returned an object with year & key which is passed to Form.js component for filterByYear form's select options(dynamic value).
      // key will be needed when mapping over the object for options

      const set = new Set();
      // set is new object type to create unique values from an array.
      const uniqueYearArray = bookPublishedYear.filter((year) => {
        const duplicate = set.has(year.year);
        set.add(year.year)
        return !duplicate;
      })
      setFilterByYear(uniqueYearArray);
      // uniqueYearArray includes user year choice w/o repeated values
      // this part is done to remove repeated(duplicate) year value from bookPublishedYear.
    }).catch((error) => {
      alert("No data received.Please try again later!");
      setIsLoading(false);
      // setting loading state to false again if we dont receive results from api & to alert the user with error message.
    })
  }, [bookTitle]);

  const copyBooks = [...books];
  
  const filteredBooksByYearArray = copyBooks.filter((book) => {
    return book.publish_year[0] == userFilterChoice;
  })
  // filtered array which includes books with user filter choice of year.

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
