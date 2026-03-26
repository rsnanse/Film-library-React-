import Headling from '../Headling/Headling';
import Paragraph from '../Paragraph/Paragraph';
import styles from './SearchHeader.module.css';

function SearchHeader() {
    return (
        <>
            <div className={styles.wrapper}>
                <Headling></Headling>
                <Paragraph></Paragraph>
            </div>
        </>
    );
}

export default SearchHeader;
