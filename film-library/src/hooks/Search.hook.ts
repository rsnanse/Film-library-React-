import { ChangeEvent, SyntheticEvent, useState } from 'react';
export function useSearchFilm() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const handleSearch = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
            console.log('Поиск фильма с названием:', searchQuery);
            setSearchQuery('');
        }
    };

    return { searchQuery, onChangeSearch, handleSearch };
}
