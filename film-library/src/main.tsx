import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Layout from './Layout/Layout';
import LoginPage from './Pages/LoginPage/LoginPage';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';
import MoviePage from './Pages/MoviePage/MoviePage';
import { UserContextProvider } from './Context/UserContext';
import axios from 'axios';
import { POPULAR_REQ } from './helpers/popular-film-req';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import { SEARCH_REQ } from './helpers/search-req';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
                errorElement: <ErrorPage></ErrorPage>,
                loader: async () => {
                    const { data } = await axios.get(POPULAR_REQ);
                    if (!data) {
                        throw new Error('asdasd');
                    }
                    return data;
                }
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/search',
                element: <SearchPage />,
                loader: async ({ request }) => {
                    const url = new URL(request.url);
                    const query = url.searchParams.get('query');
                    if (!query) {
                        return { results: [] };
                    }
                    const { data } = await axios.get(`${SEARCH_REQ}${query}`);
                    return data;
                }
            },
            {
                path: '/favorites',
                element: <FavoritesPage />
            },
            {
                path: '/movie/:id',
                element: <MoviePage />,
                errorElement: <ErrorPage></ErrorPage>,
                loader: async ({ params }) => {
                    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=22a712b61eee70fa4db16696df987a88&language=ru-RU`);
                    return data;
                }
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserContextProvider>
            <RouterProvider router={router}></RouterProvider>
        </UserContextProvider>
    </StrictMode>
);
