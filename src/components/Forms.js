// Forms.js
import { useState } from 'react';

const Forms = (props) => {

    const { setBookTitle, setUserSortChoice, setUserFilterChoice, setIsLoading, filterByYear } = props;
    
    const [ input, setInput ] = useState('');
    const [ sortOption, setSortOption] = useState('placeholder');
    const [ filterOption, setFilterOption ] = useState('placeholder');

    // filterByYear state includes the array which was passed from app.js after mapping over the filtered response array to return an array with objects of book published years and its uniqye key.
    // we are sorting published year from latest to earliest.
    const sortFilterArray = filterByYear.sort((a,b) => {
        if (a.year < b.year)
            return 1;
        else
            return -1;
    })

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBookTitle(input);
        setInput('');
        setIsLoading(true);
        setSortOption('placeholder');
        setFilterOption('placeholder');
        setUserSortChoice('');
        setUserFilterChoice();
    }

    const handleChange = (event) => {
        setSortOption(event.target.value);
        setUserSortChoice(event.target.value);
    }

    const handleFilterChange= (event) => {
        setFilterOption(event.target.value);
        setUserFilterChoice(event.target.value);
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
            </div>
                
            <div className="form-container2">
                <form className="form-select">
                    <label htmlFor="sortData" className="sr-only">Sort by</label>
                    <select name="sortData" id="sortData" value={sortOption} onChange={handleChange}>
                        <option value="placeholder" disabled>Sort by</option>
                        <option value="none">default</option>
                        <option value="sortByYear">year</option>
                        <option value="sortByTitle">title</option>
                    </select>
                </form>

                <form className="form-select">
                    <label htmlFor="filterData" className="sr-only">Filter by year</label>
                    <select name="filterData" id="filterData" value={filterOption} onChange={handleFilterChange}>
                        <option value="placeholder" disabled>Filter by year</option>
                        <option value="none">default</option>
                        {/* mapping the array for available book published years */}
                        {sortFilterArray.map((object) => {
                            const { year, key} = object;
                            // destructuing values from object
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

export default Forms;