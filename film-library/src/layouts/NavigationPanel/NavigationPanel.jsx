import styles from './NavigationPanel.module.css';
function NavigationPanel({ activeUser, logOut }) {
    const userLogout = (event) => {
        event.preventDefault();
        logOut();
    };
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="Логотип" />
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#" className={`${styles.link} ${styles.active}`}>
                            Поиск фильмов
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            Мои фильмы
                        </a>
                        <div className={styles.counter}>2</div>
                    </li>
                    {activeUser.length !== 0 ? (
                        <>
                            <li className={styles.item}>
                                <a href="#" className={styles.link}>
                                    {activeUser}
                                </a>
                                <img src="/userLogined.svg" alt="Иконка пользователя" />
                            </li>
                            <li className={styles.item}>
                                <a href="#" className={styles.link} onClick={userLogout}>
                                    Выйти
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.item}>
                                <a href="#" className={styles.link}>
                                    Войти
                                </a>
                                <img src="/login-icon.svg" alt="Иконка войти" />
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default NavigationPanel;
