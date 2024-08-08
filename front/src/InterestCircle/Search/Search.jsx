
import React from'react'
import './Search.css'


const Search = ({onsearch}) => {  
    const [query, setQuery] = React.useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        //TODO: search logic
    };

    return (
        <div className = "searchBar">   
            <input 
                type='text'
                placeholder = "Search...."
                value = {query}
                onChange={handleInputChange}
            />
            <button onClick = {handleSearch} > 
                搜索
            </button>
        </div>
    );
}; 

export default Search;