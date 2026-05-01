import styles from './CardList.module.css';
import CardFilm from '../CardFilm/CardFilm';
import { CardListProps } from './CardList.props';
import { Link } from 'react-router-dom';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

function CardList({ films }: CardListProps) {
    if (films.length === 0) {
        return <ErrorPage></ErrorPage>;
    } else {
        return (
            <div className={styles.list}>
                {films.map((el) => (
                    <Link key={el.id} to={`/movie/${el.id}`}>
                        <CardFilm counter={Number(el.vote_average.toFixed(1))} poster={el.poster_path} title={el.title}></CardFilm>
                    </Link>
                ))}
            </div>
        );
    }
}

export default CardList;
