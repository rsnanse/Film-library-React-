import { MouseEvent, useState } from 'react';
import styles from './FavoritesButton.module.css';
function FavoritesButton() {
    const [favoritesIcon, setFavoritesIcon] = useState<boolean>(true);

    const addInFavorites = (e: MouseEvent) => {
        e.preventDefault();
        setFavoritesIcon((prev) => !prev);
        e.stopPropagation();
    };
    return (
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
    );
}

export default FavoritesButton;
