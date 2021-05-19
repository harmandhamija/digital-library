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
    }

    return (
        <section className="form-section">
            <h1>Welcome to the book factory.</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Enter book title" className="sr-only">search for a book</label>
                    <input type="text" name="Enter book title" id="Enter book title" value ={input} placeholder="search for a book" onChange={handleInput} required></input>

                    <button type="submit">Search</button>
                </form>

            </div>
        </section>
    )
}

export default Form;