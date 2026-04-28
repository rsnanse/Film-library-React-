import styles from './CardList.module.css';
import CardFilm from '../CardFilm/CardFilm';
import { CardListProps } from './CardList.props';
import { Link } from 'react-router-dom';

function CardList({ films }: CardListProps) {
    if (films.length === 0) {
        return <p className={styles.paragraph}>Здесь пока ничего нет...</p>;
    } else {
        return (
            <div className={styles.list}>
                {films.map((el) => (
                    <Link key={el.id} to={`/movie/${el.id}`}>
                        <CardFilm counter={el.rating} poster={el.poster} title={el.title}></CardFilm>
                    </Link>
                ))}
            </div>
        );
    }
}

export default CardList;
