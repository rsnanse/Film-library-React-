import './App.css';
import Background from './components/Background/Background';
import SearchHeader from './components/SearchHeader/SearchHeader';
import NavigationPanel from './layouts/NavigationPanel/NavigationPanel';
import SearchIconSvg from '/search-icon.svg';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';
import { useSearchFilm } from './hooks/Search.hook';
import { useAuth } from './hooks/Auth.hook';

const INITIAL_DATA = [
    { id: 1, rating: 1, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 2, rating: 2, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 3, rating: 3, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 4, rating: 4, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 5, rating: 5, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' }
];

function App() {
    const { searchQuery, onChangeSearch, handleSearch } = useSearchFilm('');
    const { userName, activeUser, onChangeProfile, handleProfile, handleLogOut } = useAuth('');
    return (
        <div className="app">
            <Background></Background>
            <NavigationPanel activeUser={activeUser} logOut={handleLogOut}></NavigationPanel>
            <SearchHeader title={'Поиск'} innerText={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}></SearchHeader>
            <Form onSubmit={handleSearch} value={searchQuery} icon={SearchIconSvg} text={'Искать'} placeholder={'Введите название'} onChange={onChangeSearch} direction={'search-wrapper'}></Form>
            <CardList films={INITIAL_DATA}></CardList>
            <SearchHeader title={'Вход'}></SearchHeader>
            <Form onSubmit={handleProfile} value={userName} text={'Войти в профиль'} placeholder={'Ваше имя'} onChange={onChangeProfile}></Form>
        </div>
    );
}

export default App;
