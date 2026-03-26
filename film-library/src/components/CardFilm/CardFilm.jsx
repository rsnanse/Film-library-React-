import { useState } from 'react';
import styles from './CardFilm.module.css';
function CardFilm({ counter, poster, title }) {
    const [favoritesIcon, setFavoritesIcon] = useState(true);

    const addInFavorites = (e) => {
        setFavoritesIcon((prev) => !prev);
        e.stopPropagation();
    };

    const moveToFilm = () => {
        console.log('asd');
    };

    return (
        <div className={styles.card} role="button" tabIndex="0" onClick={moveToFilm}>
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
