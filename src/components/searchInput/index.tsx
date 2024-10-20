import React, { useState } from 'react';
import { SearchIcon } from '../../assets/icons/searchIcon';
import './searchInput.css';

interface ISearchInput {
    className: string;
}

const SearchInput = ({
    className,
}: ISearchInput) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className={className}>
            <button onClick={handleSearch} className="search-button">
                <SearchIcon />
            </button>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
            />
        </div>
  );
};

export default SearchInput;
