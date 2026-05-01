import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
function Rating({ children, isAbsolute }: RatingProps) {
    return (
        <div className={`${styles.rating} ${isAbsolute ? styles['isAbsolute'] : ''}`}>
            <img src="/raiting-star.svg" alt="Рейтинг" />
            <span className={styles.count}>{children}</span>
        </div>
    );
}

export default Rating;
