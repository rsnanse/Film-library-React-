import { useState } from 'react';
import './CardFilm.css';
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
        <div className="card-film" role="button" tabIndex="0" onClick={moveToFilm}>
            <div className="card-film_rating">
                <img src="/raiting-star.svg" alt="Рейтинг" />
                <span className="card-film_rating__count">{counter}</span>
            </div>
            <div className="card-film_description">
                <img className="card-film_poster" src={poster} alt="Постер" />
                <div className="card-film_info">
                    <h2 className="card-film_title">{title}</h2>
                    <button className="card-film_btn" onClick={addInFavorites}>
                        {favoritesIcon ? (
                            <>
                                <img src="/to-favorites.svg" alt="В избранное" />
                                <span className="card-film_favorites">В избранное</span>
                            </>
                        ) : (
                            <>
                                <img src="/in-favorites.svg" alt="В избранное" />
                                <span className="card-film_in__favorites">В избранном</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardFilm;
