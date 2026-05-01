import { useLoaderData } from 'react-router-dom';
import { FilmItem } from '../../interfaces';
import styles from './MoviePage.module.css';
import Rating from '../../components/Rating/Rating';
import FavoritesButton from '../../FavoritesButton/FavoritesButton';

function MoviePage() {
    const data = useLoaderData() as FilmItem;
    const genres = data.genres?.map((el) => el.name.charAt(0).toUpperCase() + el.name.slice(1)).join(', ');
    const production_countries = data.production_countries?.map((el) => el.name).join(', ');

    return (
        <div className={styles['wrapper']}>
            <div className={styles['heading']}>
                <p className={styles['heading_title']}>Поиск фильмов</p>
                <p className={styles['heading_subtitle']}>{data.title}</p>
            </div>
            <div className={styles['info_wrapper']}>
                <div>
                    <img className={styles['poster']} src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`} alt="Постер" />
                </div>
                <div className={styles['movie_info']}>
                    <div className={styles['description']}>{data.overview}</div>
                    <div className={styles['actions']}>
                        <Rating>{Number(data.vote_average.toFixed(1))}</Rating>
                        <FavoritesButton></FavoritesButton>
                    </div>
                    <div className={styles['details']}>
                        <div className={styles['details_title']}>Страна</div>
                        <div className={styles['details_info']}>{production_countries}</div>
                    </div>{' '}
                    <div className={styles['details']}>
                        <div className={styles['details_title']}>Дата выхода</div>
                        <div className={styles['details_info']}>{data.release_date}</div>
                    </div>{' '}
                    <div className={styles['details']}>
                        <div className={styles['details_title']}>Длительность</div>
                        <div className={styles['details_info']}>{data.runtime} мин</div>
                    </div>{' '}
                    <div className={styles['details']}>
                        <div className={styles['details_title']}>Жанр</div>
                        <div className={styles['details_info']}>{genres}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
