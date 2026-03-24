import { useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Button from './components/Button/Button';
import InputComponent from './components/InputComponent/InputComponent';
import SearchHeader from './components/SearchHeader/SearchHeader';
import NavigationPanel from './layouts/NavigationPanel/NavigationPanel';
import SearchIconSvg from '/search-icon.svg';
import CardList from './components/CardList/CardList';

const INITIAL_DATA = [
    { rating: 1, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { rating: 2, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { rating: 3, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { rating: 4, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { rating: 5, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' }
];

function App() {
    const [data, setData] = useState('');
    const inputChange = (e) => {
        setData(e.target.value);
    };

    const buttonClick = () => {
        console.log('Поиск:', data);
    };

    return (
        <div className="app">
            <Background></Background>
            <NavigationPanel></NavigationPanel>
            <SearchHeader></SearchHeader>
            <div className="search-wrapper">
                <InputComponent icon={SearchIconSvg} value={data} placeholder={'Введите название'} onChange={inputChange}></InputComponent>
                <Button onClick={buttonClick} text={'Искать'}></Button>
            </div>
            <CardList films={INITIAL_DATA}></CardList>
        </div>
    );
}

export default App;
