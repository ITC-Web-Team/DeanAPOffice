import React, { useState, useEffect } from "react";
import magnifyingglass from '../imgs/magnifying-glass.png';

export default function SearchBar({ onSearch }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search);
    };

    useEffect(() => {
        onSearch(search);
    }, [search, onSearch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === '') {
            onSearch('');
        }
    };

    return (
        <div className="searchbar-container">
            <form onSubmit={handleSearch} className="searchbar-form">
                <input
                    type="text"
                    placeholder="Search"
                    className="searchbar"
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit" className="search-button">
                    <img src={magnifyingglass} alt="search-icon" className="search-icon" />
                </button>
            </form>
        </div>
    );
}