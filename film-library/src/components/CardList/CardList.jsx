import styles from './CardList.module.css';
import CardFilm from '../CardFilm/CardFilm';

function CardList({ films }) {
    if (films.length === 0) {
        return <p className={styles.paragraph}>Здесь пока ничего нет...</p>;
    } else {
        return (
            <div className={styles.list}>
                {films.map((el) => (
                    <CardFilm key={el.id} counter={el.rating} poster={el.poster} title={el.title}></CardFilm>
                ))}
            </div>
        );
    }
}

export default CardList;
