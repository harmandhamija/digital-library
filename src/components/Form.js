// Form.js
import { useState } from 'react';

const Form = (props) => {

    const [ input, setInput ] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getUserInput(input);
        setInput('');
        props.setIsLoading(true);
    }

    const handleClickAlpha = (event) => {
        props.setSortYear(false)
        props.setSortAlpha(true)
    }

    const handleClickYear = (event) => {
        props.setSortAlpha(false)
        props.setSortYear(true)
    }

    return (
        <section className="form-section">
            <h1>Welcome to the digital book library!</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Enter book title" className="sr-only">search for a book</label>
                    <input type="text" name="Enter book title" id="Enter book title" value ={input} placeholder="search for a book" onChange={handleInput} required></input>
                    <button type="submit">Search</button>
                </form>
                
                <div className="sort-buttons">
                    <button onClick={handleClickYear}>sort by year</button>
                    <button onClick={handleClickAlpha}>sort alphabetically</button>
                </div>
            </div>
        </section>
    )
}

export default Form;