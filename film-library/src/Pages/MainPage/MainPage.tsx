import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { FilmItem } from '../../interfaces';
import { useSearchFilm } from '../../hooks/Search.hook';
import SearchIconSvg from '/search-icon.svg';

const INITIAL_DATA: FilmItem[] = [
    { id: 1, rating: 112, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 2, rating: 1849, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 3, rating: 4928, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 4, rating: 472, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 5, rating: 857, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 6, rating: 234, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' }
];

function MainPage() {
    const { searchQuery, onChangeSearch, handleSearch } = useSearchFilm();
    return (
        <>
            <SearchHeader title={'Поиск'} innerText={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}></SearchHeader>
            <Form onSubmit={handleSearch} value={searchQuery} icon={SearchIconSvg} text={'Искать'} placeholder={'Введите название'} onChange={onChangeSearch} direction={'search-wrapper'}></Form>
            <CardList films={INITIAL_DATA}></CardList>
        </>
    );
}

export default MainPage;
