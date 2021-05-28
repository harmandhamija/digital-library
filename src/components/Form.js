// Form.js
import { useState } from 'react';

const Form = (props) => {

    const { getUserInput, setIsLoading, setSortBooks } = props;

    const [ input, setInput ] = useState('');
    const [ selectOption, setSelectOption] = useState('');


    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserInput(input);
        setInput('');
        setIsLoading(true);
        setSelectOption('');
    }

    const handleChange = (event) => {
        setSelectOption(event.target.value);
        setSortBooks(event.target.value);
    }

    return (
        <section className="form-section" data-testid="form">
            <h1>Welcome to the digital book library!</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="EnterBookTitle" className="sr-only">search for a book</label>
                    <input type="text" name="EnterBookTitle" id="EnterBookTitle" value ={input} placeholder="search for a book" onChange={handleInput} required></input>
                    <button type="submit">Search</button>
                </form>
                
                <form className="form-select">
                    <label htmlFor="sortData" className="sr-only">Sort Data</label>
                    <select name="sortData" id="sortData" value={selectOption} onChange={handleChange}>
                        <option value="disabled">sort by</option>
                        <option value="none">none</option>
                        <option value="sortByYear">year</option>
                        <option value="sortByTitle">title</option>
                    </select>
                </form>
            </div>
        </section>
    )
}

export default Form;