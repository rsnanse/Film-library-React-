import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function useSearchFilm() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery && typeof searchQuery === 'string' && searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };
    return { searchQuery, onChangeSearch, handleSearch };
}
