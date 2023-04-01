import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { users } from '../../data';
import { useDebounce } from '../../hooks';
import AccountItem from '../accountItem/AccountItem';

import './Search.scss';
const Search = () => {
    const { toggleSidebar, openSearch } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    console.log(toggleSidebar, openSearch);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = () => {
            setLoading(true);
            setTimeout(() => {
                const result = users.filter((item) => item.user_name.includes(debouncedValue));
                setSearchResult(result);
                setLoading(false);
            }, 500);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div className={toggleSidebar && openSearch ? 'search openSearch' : 'search'}>
            <div className="searchContainer">
                <h1 className="searchTitle">Search</h1>
                <div className="searchInput">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className="clearIcon" onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className="loadingIcon" icon={faSpinner} />}
                </div>
                <hr className="line" />
                <div className="searchResult">
                    {searchResult.map((user) => (
                        <AccountItem item={user} />
                    ))}

                    <div className="notResult">
                        {loading && <FontAwesomeIcon className="loading" icon={faSpinner} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
