import React from 'react'
import './style.css'
function SearchBar() {
    return (
        <div className="banner_search">
            <input type="text" className="search_bar" placeholder="What are you looking for?"/>
            <button class="upload_button" type="button">Search</button>
        </div>
        
    )
}

export default SearchBar
