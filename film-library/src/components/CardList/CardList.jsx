import './CardList.css';
import CardFilm from '../CardFilm/CardFilm';

function CardList({ films }) {
    if (films.length === 0) {
        return <p className="card-list_paragraph">Здесь пока ничего нет...</p>;
    } else {
        return (
            <div className="card-list">
                {films.map((el) => (
                    <CardFilm key={el.id} counter={el.rating} poster={el.poster} title={el.title}></CardFilm>
                ))}
            </div>
        );
    }
}

export default CardList;
