import styles from './ErrorPage.module.css';

function ErrorPage() {
    return (
        <div className={styles['error_wrapper']}>
            <div className={styles['code']}>404</div>
            <div className={styles['description']}>Такой страницы у нас нет. Зато есть другие =)</div>
        </div>
    );
}

export default ErrorPage;
