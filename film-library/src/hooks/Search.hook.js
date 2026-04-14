import { useState } from 'react';
export function useSearchFilm() {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSearch = (event) => {
        event?.preventDefault();
        if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
            console.log('Поиск фильма с названием:', searchQuery);
            setSearchQuery('');
        }
    };

    return { searchQuery, onChangeSearch, handleSearch };
}
