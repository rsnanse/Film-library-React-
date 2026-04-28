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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/favorites',
                element: <FavoritesPage />
            },
            {
                path: '/movie/:id',
                element: <MoviePage />
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
