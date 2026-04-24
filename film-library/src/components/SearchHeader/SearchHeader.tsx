import Headling from '../Headling/Headling';
import Paragraph from '../Paragraph/Paragraph';
import styles from './SearchHeader.module.css';
import { SearchHeaderProps } from './SearchHeader.props';

function SearchHeader({ title, innerText }: SearchHeaderProps) {
    return (
        <>
            <div className={styles.wrapper}>
                <Headling>{title}</Headling>
                {innerText && <Paragraph>{innerText}</Paragraph>}
            </div>
        </>
    );
}

export default SearchHeader;
