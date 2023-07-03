import { useState, useEffect } from 'react';

const SearchPanel = ({ setSearchTerm, value }) => {
    const [tempSearch, setTempSearch] = useState('');

    useEffect(() => setTempSearch(value), [value]);

    return (
        <div>
            <input
                placeholder='search'
                value={tempSearch}
                onChange={(e) => {
                    setTempSearch(e.currentTarget.value);
                }}
            />{' '}
            <button onClick={() => setSearchTerm(tempSearch)}>Find</button>
            <button onClick={() => setSearchTerm('boosterAlex')}>Reset</button>
        </div>
    );
};

export default SearchPanel;
