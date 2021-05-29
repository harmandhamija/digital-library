// Form.js
import { useState } from 'react';

const Form = (props) => {

    const { getUserInput, setIsLoading, setSortBooks, filterByYear } = props;

    const [ input, setInput ] = useState('');
    const [ sortOption, setSortOption] = useState('');
    const [ filterOption, setFilterOption ] = useState('');

    // filterByYear state includes the array which was passed from app.js after mapping over the filtered response array to return an array with objects of book published years and its uniqye key.
    // we are sorting publishe year from earliest to latest.
    const sortFilterArray = filterByYear.sort((a,b) => {
        if (b.year < a.year)
            return 1;
        else
            return -1;
    })

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserInput(input);
        setInput('');
        setIsLoading(true);
        setSortOption('');
        setFilterOption('');
    }

    const handleChange = (event) => {
        setSortOption(event.target.value);
        setSortBooks(event.target.value);
    }

    const handleFilterChange= (event) => {
        console.log(event.target.value);
        setFilterOption(event.target.value);
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
                    <label htmlFor="sortData">Sort by</label>
                    <select name="sortData" id="sortData" value={sortOption} onChange={handleChange}>
                        <option value="none">none</option>
                        <option value="sortByYear">year</option>
                        <option value="sortByTitle">title</option>
                    </select>
                </form>

                <form className="form-select">
                    <label htmlFor="filterData">Filter by year</label>
                    <select name="filterData" id="filterData" value={filterOption} onChange={handleFilterChange}>
                        <option value="none">none</option>
                        {/* mapping the array for available book published years */}
                        {sortFilterArray.map((object) => {
                            const { year, key} = object;
                            // destructuing values from filteredObj
                            return(
                                <option value={year} key={key}>{year}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
        </section>
    )
}

export default Form;