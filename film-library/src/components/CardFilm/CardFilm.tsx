import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';
import Rating from '../Rating/Rating';
import FavoritesButton from '../../FavoritesButton/FavoritesButton';
function CardFilm({ counter, poster, title }: CardFilmProps) {
    return (
        <div className={styles.card} role="button">
            <Rating isAbsolute>{counter}</Rating>
            <div className={styles.description}>
                {!poster && <div className={styles['no-poster']}>🎬</div>}
                {poster && <img className={styles.poster} src={`https://image.tmdb.org/t/p/w342/${poster}`} alt="Постер" />}
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <FavoritesButton></FavoritesButton>
                </div>
            </div>
        </div>
    );
}

export default CardFilm;
