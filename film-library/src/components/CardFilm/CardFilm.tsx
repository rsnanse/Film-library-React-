import { KeyboardEvent, MouseEvent, useState } from 'react';
import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';
function CardFilm({ counter, poster, title }: CardFilmProps) {
    const [favoritesIcon, setFavoritesIcon] = useState<boolean>(true);

    const addInFavorites = (e: MouseEvent) => {
        e.preventDefault();
        setFavoritesIcon((prev) => !prev);
        e.stopPropagation();
    };

    const moveToFilm = () => {
        console.log('asd');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.key === ' ') {
            moveToFilm();
        }
    };

    return (
        <div className={styles.card} role="button" onClick={moveToFilm} onKeyDown={handleKeyDown}>
            <div className={styles.rating}>
                <img src="/raiting-star.svg" alt="Рейтинг" />
                <span className={styles.count}>{counter}</span>
            </div>
            <div className={styles.description}>
                <img className={styles.poster} src={poster} alt="Постер" />
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.button} onClick={addInFavorites}>
                        {favoritesIcon ? (
                            <>
                                <img src="/to-favorites.svg" alt="В избранное" />
                                <span className={styles.tofavorites}>В избранное</span>
                            </>
                        ) : (
                            <>
                                <img src="/in-favorites.svg" alt="В избранное" />
                                <span className={styles.infavorites}>В избранном</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardFilm;
