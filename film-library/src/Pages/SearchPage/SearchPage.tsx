import Form from '../../components/Form/Form';
import CardList from '../../components/CardList/CardList';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { DataPopular } from '../../interfaces';
import { useSearchFilm } from '../../hooks/Search.hook';
import SearchIconSvg from '/search-icon.svg';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import styles from '../MainPage/MainPage.module.css';

function SearchPage() {
    const { searchQuery, onChangeSearch, handleSearch } = useSearchFilm();
    const data = useLoaderData() as DataPopular;
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return (
        <>
            <SearchHeader title={'Поиск'} innerText={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}></SearchHeader>
            <Form onSubmit={handleSearch} value={searchQuery} icon={SearchIconSvg} text={'Искать'} placeholder={'Введите название'} onChange={onChangeSearch} direction={'search-wrapper'}></Form>
            <div className={styles.popular}>{`Поиск: ${query}`}</div>
            <CardList films={data.results}></CardList>
        </>
    );
}

export default SearchPage;
