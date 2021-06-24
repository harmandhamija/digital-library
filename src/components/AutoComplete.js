// // AutoComplete.js

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const AutoComplete = (props) => {

// const { input, setInput } = props;

// const [ titleSuggestions, setTitleSuggestions] = useState([]);

// const suggestions = [];

// const handleClick = (event) => {
// setInput(event.target.textContent);
// // setTitleSuggestions([]);
// // to clear out the suggestions after user has select one of them.
// }

// useEffect(() => {
// if(input.length > 3){
// axios({
// method: 'GET',
// url: "https://openlibrary.org/search.json?",
// dataResponse: "JSON",
// params: {
// q: input
// }
// }).then((response) => {
// response = response.data.docs
// const books = response.slice(0, 5)

// books.forEach((book) => {
// if(book.title.substr(0,input.length).toUpperCase() === input.toUpperCase()){
// suggestions.push({ title: book.title, key: book.key });
// }
// })

// const set = new Set();
// // set is new object type to create unique values from an array.
// const uniqueTitleArray = suggestions.filter((title) => {
// const duplicate = set.has(title.title);
// set.add(title.title)
// return !duplicate;
// })
// setTitleSuggestions(uniqueTitleArray);
// })
// }else{
// return setTitleSuggestions([]);
// }
// },[input])

// console.log(titleSuggestions);

// return(
// <div className="auto-complete">
//   {
//   titleSuggestions.map((bookTitle) => {
//   return(
//   <p key={bookTitle.key} onClick={handleClick}>{bookTitle.title}</p>
//   )
//   })
//   }
//   </div>
// )
// }

// export default AutoComplete;