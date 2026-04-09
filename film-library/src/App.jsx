import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import SearchHeader from './components/SearchHeader/SearchHeader';
import NavigationPanel from './layouts/NavigationPanel/NavigationPanel';
import SearchIconSvg from '/search-icon.svg';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

const INITIAL_DATA = [
    { id: 1, rating: 1, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 2, rating: 2, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 3, rating: 3, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 4, rating: 4, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' },
    { id: 5, rating: 5, poster: '/black-widow.jpg', title: 'Black Widow', favorites: 'В избранное' }
];

function App() {
    const [filmData, setFilmData] = useState('');
    const [userName, setUserName] = useState('');
    const [activeUser, setActiveUser] = useState(() => {
        const res = localStorage.getItem('activeUser');
        return res ? JSON.parse(res) : [];
    });

    const [profiles, setProfiles] = useState(() => {
        const res = localStorage.getItem('profiles');
        return res ? JSON.parse(res) : [];
    });

    useEffect(() => {
        localStorage.setItem('profiles', JSON.stringify(profiles));
        if (activeUser) {
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
        } else {
            localStorage.removeItem('activeUser');
        }
    }, [profiles, activeUser]);

    const onChangeSearch = (e) => {
        setFilmData(e.target.value);
    };
    const handleSearch = (event) => {
        event?.preventDefault();
        if (filmData && typeof filmData === 'string' && filmData.trim()) {
            console.log('Поиск фильма с названием:', filmData);
            setFilmData('');
        }
    };

    const onChangeProfile = (e) => {
        setUserName(e.target.value);
    };
    const handleProfile = (event) => {
        event?.preventDefault();
        if (userName && typeof userName === 'string' && userName.trim()) {
            console.log('Вход на сайт с профилем:', userName);
            const isExist = profiles.some((profile) => {
                return profile.name.toLowerCase() === userName.trim().toLowerCase();
            });
            if (isExist) {
                setProfiles((prev) => [
                    ...prev.map((el) => {
                        if (el.name.toLowerCase() === userName.trim().toLowerCase()) {
                            return { ...el, isLogined: true };
                        }
                        return {
                            ...el,
                            isLogined: false
                        };
                    })
                ]);
                alert(`С возращением ${userName}`);
                setActiveUser(userName.trim());
                setUserName('');

                return;
            }
            setProfiles((prev) => [
                ...prev.map((el) => {
                    return {
                        ...el,
                        isLogined: false
                    };
                }),
                { id: Date.now(), name: userName.trim(), isLogined: true }
            ]);
            setActiveUser(userName.trim());
            setUserName('');
        }
    };

    const handleLogOut = () => {
        setActiveUser([]);
        setProfiles((prev) => [
            ...prev.map((el) => {
                return {
                    ...el,
                    isLogined: false
                };
            })
        ]);
    };

    return (
        <div className="app">
            <Background></Background>
            <NavigationPanel activeUser={activeUser} logOut={handleLogOut}></NavigationPanel>
            <SearchHeader title={'Поиск'} innerText={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}></SearchHeader>
            <Form onSubmit={handleSearch} value={filmData} icon={SearchIconSvg} text={'Искать'} placeholder={'Введите название'} onChange={onChangeSearch} direction={'search-wrapper'}></Form>
            <CardList films={INITIAL_DATA}></CardList>
            <SearchHeader title={'Вход'}></SearchHeader>
            <Form onSubmit={handleProfile} value={userName} text={'Войти в профиль'} placeholder={'Ваше имя'} onChange={onChangeProfile}></Form>
        </div>
    );
}

export default App;
